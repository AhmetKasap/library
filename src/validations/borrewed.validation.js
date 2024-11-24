import APIError from "../utils/Error.js";
import joi from 'joi';

const scoreValidation = async (req, res, next) => {
    try {
        const schema = joi.object({
            score: joi
                .number() // Sadece sayılar
                .integer() // Tam sayı
                .min(1) // Minimum değer: 1
                .max(10) // Maksimum değer: 10
                .required() // Zorunlu alan
                .messages({
                    "number.base": "Score must be a number.",
                    "number.integer": "Score must be an integer.",
                    "number.min": "Score must be at least 1.",
                    "number.max": "Score cannot exceed 10.",
                    "any.required": "Score is a required field.",
                }),
        })

        await schema.validateAsync(req.body)

        next()
    } catch (error) {
        throw new APIError(error.details[0].message, 400) 
    }
}

export { scoreValidation }
