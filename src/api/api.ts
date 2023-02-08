import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0e258736-567c-4fae-b416-ca0ec8321d91'
    }
})


export const getUsers = (currentPage:number,pageSize:number) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
}


export const follow = (id:number) => {
    return instance.delete(`follow/${id}`, )
        .then(response => response.data)
}

export const unfollow = (id:number) => {
    return instance.post(`follow/${id}`, {},)
        .then(response => response.data)
}

