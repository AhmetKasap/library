import express from "express"
const bookRoutes = express.Router()

import { createBook, getAllBooks, getBookById } from "../controller/book.controller.js"
import { bookValidation } from "../validations/book.validation.js"

bookRoutes.get('/', getAllBooks)
bookRoutes.get('/:id', getBookById)
bookRoutes.post('/', bookValidation, createBook)



export default bookRoutes