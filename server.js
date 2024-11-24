import 'express-async-errors';
import express from 'express'
import 'dotenv/config'
const app = express()

//! Body Parser
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//! Cors Options
import corsOptions from './src/config/cors.options.js';
import cors from 'cors'
app.use(cors(corsOptions))

//! POSTGRESQL CONNECTION
import {connectDB} from './src/config/db.connection.js'
connectDB()

//! ROUTES
import indexRouter from './src/routes/index.routes.js'
app.use(`/${process.env.API_NAME}/${process.env.API_VERSION}`, indexRouter)

app.use((req,res, next) => {
  res.send('not found url')
  next()
})

import errorHandler from './src/middlewares/error.handler.js'
app.use(errorHandler)


const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
