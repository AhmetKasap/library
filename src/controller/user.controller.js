import User from "../models/user.model.js"
import Response from "../utils/Response.js"


const getAllUsers = async(req,res) => {

}

const getUserById = async(req,res) => {

}

const createUser = async(req,res) => {
    const name = req.body.name

    const createdUser = await User.create({name})
    if(createUser) return new Response(null, "kayıt başarılı").created(res)
}




export {getAllUsers, getUserById, createUser}