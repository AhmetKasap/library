import express from "express"

const userRouter = express.Router()

import {getAllUsers, getUserById, createUser} from "../controller/user.controller.js"
import { registerValidation } from "../validations/user.validations.js"

userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.post('/', registerValidation, createUser)



export default userRouter