import express from 'express'
import 'dotenv/config'


const app = express()



//! POSTGRESQL CONNECTION
import {connectDB} from './src/config/db.connection.js'
connectDB()




const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
