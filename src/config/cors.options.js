const corsWhiteList = ["http://localhost:3000", "http://localhost:3001"] 

const corsOptions = (req,callback) => {
    let corsOptions 
    if(corsWhiteList.indexOf(req.header('Origin')) !== -1){
        corsOptions = {origin : true}
    }
    else {
        corsOptions = {origin : false}
    }
    callback(null, corsOptions)
}

export default corsOptions