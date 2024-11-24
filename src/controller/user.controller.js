import User from "../models/user.model.js"
import APIError from "../utils/Error.js"
import Response from "../utils/Response.js"


const getAllUsers = async(req,res) => {

}

const getUserById = async(req,res) => {

}

const createUser = async(req,res, next) => {
    const name = req.body.name
    const createdUser = await User.create({ name });

    if (createdUser) {
        return new Response(null, "Kayıt başarılı").created(res);
      } else {
        throw new APIError("User creation failed", 500)
      }

   
}




export {getAllUsers, getUserById, createUser}