import {usersContainerType} from "./UsersContainer";
import axios from "axios";
import React, {MouseEventHandler} from "react";
import s from'./UsersC.module.css'



class UsersC extends React.Component<usersContainerType>{

   componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response=>{
            this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber:number)=> {
       this.props.setCurrentPage(+pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response=>{
                this.props.setUsers(response.data.items)
            })
    }



    render() {

       let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

        let pages = [];

       for(let i = 1; i <= pagesCount;i++){
           pages.push(i);
       }



        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                    return (
                        <span onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage === p ? s.selected:''}>{p}</span>
                        )
                        })
                    }
                </div>
                {
                    this.props.users.users.map(u => <div key={u.id}>
                  <span>
                      <div>
                          <img src={u.photos.small != null ? u.photos.small:'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg'} style={{width:'100px'}}/>
                      </div>
                  </span>
                        <span>
                      <div>
                          {
                              u.followed
                                  ? <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>
                                  : <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                          }
                      </div>
                  </span>
                        <span>
                          <div>{u.name}</div>
                          <div>{u.status}</div>
                      </span>
                        <span>
                             <div>{'u.location.city'}</div>
                          <div>{'u.location.country'}</div>
                      </span>
                    </div>)
                }
            </div>
        )
    }
}


export default UsersC