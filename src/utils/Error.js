export default class APIError extends Error {
    constructor(message,statusCode) {
        super(message)
        this.statusCode = statusCode
        this.message = message
    }
}

