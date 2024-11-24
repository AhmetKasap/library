import express from "express"
const borrowedRouter = express.Router()

import { giveBack, borrowing } from "../controller/borrowed.controller.js"
import { scoreValidation } from "../validations/borrewed.validation.js"

borrowedRouter.post('/users/:userId/borrow/:bookId', borrowing)
borrowedRouter.post('/users/:userId/return/:bookId', scoreValidation, giveBack)




export default borrowedRouter