import APIError from "../utils/Error.js"

const errorHandler = (err,req,res,next) => {
    //console.log(err) // all error content

    if(err instanceof APIError) {
        return res.status(err.statusCode || 400).json({      
            success : false, 
            message : err.message                            
        }) 
    }

    else {
        next()
        return res.status(500).json({                      
            success : false, 
            message : err.message                           
        })  
    }

  
}

export default errorHandler