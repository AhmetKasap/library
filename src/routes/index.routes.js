import express from "express"
const indexRouter = express.Router()


import userRouter from "./user.routes.js"
indexRouter.use('/users', userRouter)


export default indexRouter