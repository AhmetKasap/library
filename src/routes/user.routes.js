import express from "express"

const userRouter = express.Router()

import {getAllUsers, getUserById, createUser} from "../controller/user.controller.js"

userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.post('/', createUser)



export default userRouter