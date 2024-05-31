let userRegister = async (req, res, next) =>{
    try {
        res.status(200).json({
            messgae : 'success'
        })
    } catch(error) {
        console.error(error)
        res.status(500).jspn({
            meesage : `An Error occured while registering user`
        })
    }
}

export default userRegister