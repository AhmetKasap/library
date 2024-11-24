import User from "../models/user.model.js"


const getAllUsers = async(req,res) => {

}

const getUserById = async(req,res) => {

}

const createUser = async(req,res) => {
    const name = req.body.name

    const createdUser = await User.create({name})
    console.log(createdUser)

}




export {getAllUsers, getUserById, createUser}