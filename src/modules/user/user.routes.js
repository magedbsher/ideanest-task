import express from "express";
import { signIn, signUp } from "./controller/user.controller.js";




const userRoutes = express.Router()


userRoutes.post("/signUp",signUp)
userRoutes.post("/signIn",signIn)




export default userRoutes