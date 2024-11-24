import Book from "../models/book.model.js"
import APIError from "../utils/Error.js"
import Response from "../utils/Response.js"
import Borrowed from "../models/borrowed.model.js"
import { Op } from "sequelize"


const getAllBooks = async (req, res) => {
    const allBooks = await Book.findAll({
        attributes: ['id', 'name']
    })

    if (allBooks) return new Response(allBooks, "all books listed").ok(res)

}


const createBook = async (req, res) => {

    const bookExists = await Book.findOne({
        where: {
            name: req.body.name,
        }
    })
    if (bookExists) throw new APIError('book already added', 409)

    const savedBook = await Book.create({ name: req.body.name })
    if (savedBook) return new Response(null, 'book successfully added').created(res)
    else throw new APIError('an error occurred', 500)
}

const getBookById = async (req, res) => {

    const book = await Book.findByPk(req.params.id, {
        attributes: ['id', 'name'],
        include: {
            model: Borrowed,
            attributes: ['user_score'],
            required: false, 
        },
    })

    if(!book) throw new APIError('book not found', 404)


    // ortalama puan hesaplama
    const avgScore = await Borrowed.aggregate('user_score', 'avg', {
        where: { book_id: req.params.id, user_score: { [Op.ne]: null } },
    })

    const result = {
        id: book.id,
        name: book.name,
        score: avgScore || -1, // Eğer ortalama puan hesaplanamazsa -1 döner
    }

    return new Response(result,'').ok(res)

}


export { getAllBooks, getBookById, createBook }