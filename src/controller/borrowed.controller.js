
import Borrowed from "../models/borrowed.model.js";
import Response from '../utils/Response.js'
import User from "../models/user.model.js";
import Book from "../models/book.model.js";
import APIError from "../utils/Error.js";

const borrowing = async (req, res) => {
    const userExists = await User.findByPk(req.params.userId)
    const bookExists = await Book.findByPk(req.params.bookId)

    if (!userExists) throw new APIError('user not found', 404)
    if (!bookExists) throw new APIError('book not found', 404)

    const isBorrowed = await Borrowed.findOne({
        where: {
            book_id: req.params.bookId,
            returned_at: null, // Geri teslim edilmemiş kitapları kontrol et
        },
    })

    if (isBorrowed) throw new APIError('This book is already borrowed by another user', 400)


    const borrowed = await Borrowed.create({
        user_id: req.params.userId,
        book_id: req.params.bookId,
        borrowed_at: new Date(),
    })

    if (borrowed) return new Response(borrowed, 'book successfully borrowed').ok(res)


}

const giveBack = async (req, res) => {

    const userExists = await User.findByPk(req.params.userId)
    const bookExists = await Book.findByPk(req.params.bookId)

    if (!userExists) throw new APIError('user not found', 404)
    if (!bookExists) throw new APIError('book not found', 404)

    const { score } = req.body

    const borrowed = await Borrowed.findOne({
        where: {
            user_id: req.params.userId,
            book_id: req.params.bookId,
            returned_at: null,
        },
    })

    if(!borrowed) throw new APIError('borrew not found', 404)

    borrowed.returned_at = new Date()
    borrowed.user_score = score

    await borrowed.save()
    return new Response(borrowed, '').ok(res)


}


export { borrowing, giveBack }