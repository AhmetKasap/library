import Book from "../models/book.model.js"
import APIError from "../utils/Error.js"
import Response from "../utils/Response.js"


const getAllBooks = async(req,res) => {
    const allBooks = await Book.findAll({
        attributes: ['id', 'name'] 
    })

    if(allBooks) return new Response(allBooks, "all books listed").ok(res)

}


const createBook = async(req,res) => {
    
    const bookExists = await Book.findOne({
        where: {
          name: req.body.name, 
        }
    })
    if(bookExists) throw new APIError('book already added', 409)
    
    const savedBook = await Book.create({name : req.body.name})
    if(savedBook) return new Response(null, 'book successfully added').created(res)
    else throw new APIError('an error occurred', 500)
}

const getBookById = async(req,res) => {

}


export {getAllBooks, getBookById, createBook}