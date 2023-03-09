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
    return instance.delete(`/follow/${id}`)
        .then(response => {
            return  response.data
        })

}

export const followUser = (id:number) => {
    return instance.post(`/follow/${id}`, {}, )
        .then(response => {
           return  response.data
        })
}


export const profileUsers = (userId:string) => {
    return  instance.get(`/profile/${userId}`)
        .then(response=> response.data)
}


export const headerApi = () => {
    return instance.get(`/auth/me`).then(res => res.data)
}


export const profileApi = {
  getProfile(userId:string){
    return instance.get(`profile/${userId}`)
      .then((res)=>res.data)
  },
  getStatus(userId:string){
    return instance.get(`profile/status/${userId}`)
      .then((res)=>res.data)
  },
  updateStatus(status:string){
    return instance.put(`profile/status`,{status})
  }
}