import express from "express"
const borrowedRouter = express.Router()

import { giveBack, borrowing } from "../controller/borrowed.controller.js"

borrowedRouter.post('/users/:userId/borrow/:borrowId', borrowing)
borrowedRouter.post('/users/:userId/return/:borrowId', giveBack)




export default borrowedRouter