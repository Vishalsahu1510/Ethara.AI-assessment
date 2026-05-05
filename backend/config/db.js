import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return mongoose.connection
    }

    const uri = process.env.MONGO_URI
    if (!uri) throw new Error('MONGO_URI is not defined')
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected')
    return connection
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    throw error
  }
}

export default connectDB
