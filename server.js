import express from 'express'
import 'dotenv/config'
const app = express()


//! Body Parser
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//! POSTGRESQL CONNECTION
import {connectDB} from './src/config/db.connection.js'
connectDB()

//! ROUTES
import indexRouter from './src/routes/index.routes.js'
app.use(`/${process.env.API_NAME}/${process.env.API_VERSION}`, indexRouter)



const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
