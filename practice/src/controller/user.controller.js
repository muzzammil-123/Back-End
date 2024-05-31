
const userRegister = async ( req, res,next) =>{
    try {
        res.status(200).json({
            message : 'success'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: `Server Error`
        })
    }
}

export default userRegister