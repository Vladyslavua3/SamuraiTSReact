import {usersContainerType} from "./UsersContainer";
import s from "./UsersC.module.css";
import React from "react";
import {InitialType} from "../../redux/usersReducer";

type  UsersTypeProps = {
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    setUsers:(users:InitialType[]) => void
    setCurrentPage:(currentPage:number) => void
    setTotalCount:(total:number)=>void
    onPageChanged : (pageNumber:number)=>void
    users:InitialType
    pageSize:number
    totalCount:number
    currentPage:number
}

export const Users = (props: UsersTypeProps) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

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
                            <span onClick={()=>{props.onPageChanged(p)}} className={props.currentPage === p ? s.selected:''}>{p}</span>
                        )
                    })
                }
            </div>
            {
                props.users.users.map(u => <div key={u.id}>
                  <span>
                      <div>
                          <img src={u.photos.small != null ? u.photos.small:'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg'} style={{width:'100px'}}/>
                      </div>
                  </span>
                    <span>
                      <div>
                          {
                              u.followed
                                  ? <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                                  : <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
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