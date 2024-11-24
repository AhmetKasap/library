import User from "../models/user.model.js"
import APIError from "../utils/Error.js"
import Response from "../utils/Response.js"


const getAllUsers = async(req,res) => {
    const allUsers = await User.findAll({
        attributes: ['id', 'name'] 
    })

    if(allUsers.length === 0) return new Response(allUsers, "no users added yet").ok(res)
    else return new Response(allUsers, "all users listed").ok(res)

}

const createUser = async(req,res, next) => {

    const userExists = await User.findOne({
        where: {
          name: req.body.name, 
        }
    })
    if(userExists) throw new APIError('user already registered', 409)

    const savedUser = await User.create({ name : req.body.name })

    if(savedUser) return new Response(null, 'registration successful').created(res)
    else throw new APIError("User creation failed", 500)
  
}

const getUserById = async(req,res) => {

}




export {getAllUsers, getUserById, createUser}