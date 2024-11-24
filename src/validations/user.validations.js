
import APIError from "../utils/Error.js"

import joi from 'joi';

const registerValidation = async(req,res,next) => {
    try {
        const schema = joi.object({
            name: joi
                .string()
                .min(3)
                .max(50)
                .required() 
                .trim() 
                .regex(/^[a-zA-ZğüşöçıİĞÜŞÖÇ]+$/) 
                .messages({
                    "string.base": "Name must be a text string.", 
                    "string.empty": "Name cannot be empty.", 
                    "string.min": "Name must be at least 3 characters long.", 
                    "string.max": "Name can be at most 50 characters long.", 
                    "string.pattern.base": "Name must contain only letters (spaces and other characters are not allowed).",
                    "any.required": "Name is a required field.", 
                }),
        });
        
    
        const test = await schema.validateAsync(req.body)
        //console.log("test",test)
        next()
        
    } catch (error) {          
        //console.log("error",error.details[0].message)
        throw new APIError(error.details[0].message,400)        
    }
    
}


export {registerValidation}
