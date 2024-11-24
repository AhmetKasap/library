import express from "express"
const borrowedRouter = express.Router()

import { giveBack, borrowing } from "../controller/borrowed.controller.js"

borrowedRouter.post('/users/:userId/borrow/:bookId', borrowing)
borrowedRouter.post('/users/:userId/return/:bookId', giveBack)




export default borrowedRouter