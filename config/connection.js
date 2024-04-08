var mongoose=require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/k")
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports=connectDB