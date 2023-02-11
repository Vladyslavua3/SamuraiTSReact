import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '100d0932-3043-4bc6-924b-e072bdf31f60'
    }
})


export const getUsers = (currentPage:number,pageSize:number) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
}


export const unfollowUser = (id:number) => {
    // return instance.delete(`/follow/${userId}`, )
    //     .then(response => response.data)
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            'API-KEY': '100d0932-3043-4bc6-924b-e072bdf31f60'
        }
    })
        .then(response => {
            console.log(response.data)
            return  response.data
        })

}

export const followUser = (id:number) => {
    // return instance.post(`/follow/${id}`, {},)
    //     .then(response => response.data)
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': '100d0932-3043-4bc6-924b-e072bdf31f60'
        }
    })
        .then(response => {
            console.log(response.data)
           return  response.data
        })
}

