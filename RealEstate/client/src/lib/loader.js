import apiRequest from "./apiRequest"

const singlePageLoader = async (req, params) =>{
    const res = await apiRequest.get(`/post/${params.id}`)
    console.log(res)
    return res.data
}

export {
    singlePageLoader
}