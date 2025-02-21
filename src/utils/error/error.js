export const asyncHandler = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(error => {
            res.status(500).json({ message: "Server error", error, msg: error.message, stack: error.stack })
        })
    }
}

export const globalErrorHandling = (error, req, res, next) => {
    if (process.env.MOOD == "DEV") {
        return res.status(error.cause || 400).json({ message: "G Error", error, msg: error.message, stack: error.stack })
    }
    return res.status(error.cause || 400).json({error, msg: error.message })
}