import express from "express"
const bookRoutes = express.Router()

import { createBook, getAllBooks, getBookById } from "../controller/book.controller.js"

bookRoutes.get('/', getAllBooks)
bookRoutes.get('/:id', getBookById)
bookRoutes.post('/', createBook)



export default bookRoutes