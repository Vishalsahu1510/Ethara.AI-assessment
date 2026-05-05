import { useMemo, useState } from 'react'
import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'
import { Input } from '../ui/input'
import { Select } from '../ui/select'

const statusOptions = [
  { value: 'todo', label: 'To do' },
  { value: 'in-progress', label: 'In progress' },
  { value: 'done', label: 'Done' },
]

const priorityOptions = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
]

export function TaskModal({ open, onClose, onCreate, projects }) {
  const [values, setValues] = useState({ title: '', description: '', projectId: '', assignedTo: '', dueDate: '', status: 'todo', priority: 'medium' })
  const hasProjects = projects.length > 0

  const availableMembers = useMemo(() => {
    const project = projects.find((project) => project._id === values.projectId)
    return project?.members || []
  }, [projects, values.projectId])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!hasProjects) return
    onCreate(values)
    setValues({ title: '', description: '', projectId: '', assignedTo: '', dueDate: '', status: 'todo', priority: 'medium' })
    onClose()
  }

  return (
    <Dialog
      open={open}
      title="Create new task"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!hasProjects}>Create task</Button>
        </div>
      }
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input 
          label="Task title" 
          value={values.title} 
          onChange={(e) => setValues({ ...values, title: e.target.value })} 
          placeholder="Enter task title"
          required 
        />
        <Input 
          label="Description" 
          value={values.description} 
          onChange={(e) => setValues({ ...values, description: e.target.value })} 
          placeholder="Add task description"
        />

        <Select
          label="Project"
          value={values.projectId}
          onChange={(e) => setValues({ ...values, projectId: e.target.value, assignedTo: '' })}
          options={projects.map((project) => ({ value: project._id, label: project.name }))}
          placeholder={hasProjects ? 'Select a project' : 'No projects available'}
          disabled={!hasProjects}
          required
        />
        {!hasProjects && (
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Create a project first, then come back here to add tasks.
          </p>
        )}

        <Select
          label="Assign to"
          value={values.assignedTo}
          onChange={(e) => setValues({ ...values, assignedTo: e.target.value })}
          options={availableMembers.map((member) => ({ value: member._id, label: `${member.name} (${member.email})` }))}
          placeholder={values.projectId ? 'Select a member' : 'Select a project first'}
          required
          disabled={!availableMembers.length}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Input 
            label="Due date" 
            type="date" 
            value={values.dueDate} 
            onChange={(e) => setValues({ ...values, dueDate: e.target.value })} 
            required 
          />
          <Select
            label="Status"
            value={values.status}
            onChange={(e) => setValues({ ...values, status: e.target.value })}
            options={statusOptions}
          />
        </div>

        <Select
          label="Priority"
          value={values.priority}
          onChange={(e) => setValues({ ...values, priority: e.target.value })}
          options={priorityOptions}
        />
      </form>
    </Dialog>
  )
}
