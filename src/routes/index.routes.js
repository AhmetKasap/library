import express from "express"
const indexRouter = express.Router()


import userRouter from "./user.routes.js"
import bookRoutes from "./book.routes.js"
import borrowedRouter from "./borrow.routes.js"

indexRouter.use('/users', userRouter)
indexRouter.use('/books', bookRoutes)
indexRouter.use('/', borrowedRouter)





export default indexRouter