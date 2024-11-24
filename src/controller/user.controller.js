import User from "../models/user.model.js"
import APIError from "../utils/Error.js"
import Response from "../utils/Response.js"
import Borrowed from "../models/borrowed.model.js"
import Book from "../models/book.model.js"


const getAllUsers = async (req, res) => {
    const allUsers = await User.findAll({
        attributes: ['id', 'name']
    })

    if (allUsers.length === 0) return new Response(allUsers, "no users added yet").ok(res)
    else return new Response(allUsers, "all users listed").ok(res)

}

const createUser = async (req, res) => {

    const userExists = await User.findOne({
        where: {
            name: req.body.name,
        }
    })
    if (userExists) throw new APIError('user already registered', 409)

    const savedUser = await User.create({ name: req.body.name })

    if (savedUser) return new Response(null, 'registration successful').created(res)
    else throw new APIError("User creation failed", 500)

}

const getUserById = async (req, res) => {

    const user = await User.findByPk(req.params.id, {
        attributes: ['id', 'name'],
        include: [
            {
                model: Borrowed,
                where: { user_id: req.params.id },
                include: [{
                    model: Book,  // Kitap bilgilerini dahil et
                    attributes: ['id', 'name']
                }],
                required: false,
            }
        ],
    });

    console.log("test", user.Borroweds.length === 0)

    if (!user) throw new APIError("user not found", 404)

    const response = {
        id : user.id,
        name: user.name,
        books : {
            past : [],
            present : []
        }
    }
    if(user.Borroweds.length === 0) return new Response(response, "").ok(res)


    const pastBooks = user.Borrowed.filter((borrowed) => borrowed.returned_at !== null)
    const presentBooks = user.Borrowed.filter((borrowed) => borrowed.returned_at === null)

    response.books.past =  pastBooks.map((borrowed) => ({
        name: borrowed.Book.name,
        userScore: borrowed.user_score,
    }))

    response.books.present = presentBooks.map((borrowed) => ({
        id: borrowed.Book.id,
        name: borrowed.Book.name,
    }))

    return new Response(response, "ok").ok(res)


}




export { getAllUsers, getUserById, createUser }





/*
const result = {
    id: user.id,
    name: user.name,
    books: {
        past: pastBooks.map((borrowed) => ({
            name: borrowed.Book.name,
            userScore: borrowed.user_score,
        })),
        present: presentBooks.map((borrowed) => ({
            id: borrowed.Book.id,
            name: borrowed.Book.name,
        })),
    },
}

*/

