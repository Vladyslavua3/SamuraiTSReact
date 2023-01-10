import {usersContainerType} from "./UsersContainer";
import axios from "axios";
import {useEffect} from "react";



export const Users = (props: usersContainerType) => {
    // if(props.users.length === 0) {
    //     props.setUsers([
    //         {
    //             id: 1,
    //             fullName: 'Gera',
    //             status: 'Boss',
    //             followed: true,
    //             photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg',
    //             location: {
    //                 city: 'Kharkov',
    //                 country: 'Ukraine'
    //             },
    //         },
    //         {
    //             id: 2,
    //             fullName: 'John',
    //             status: 'Lox',
    //             followed: true,
    //             photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg',
    //             location: {
    //                 city: 'Kiev',
    //                 country: 'Ukraine'
    //             },
    //         },
    //         {
    //             id: 3,
    //             fullName: 'Bob',
    //             status: 'worker',
    //             followed: false,
    //             photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg',
    //             location: {
    //                 city: 'Kharkov',
    //                 country: 'Ukraine'
    //             },
    //         },
    //         {
    //             id: 4,
    //             fullName: 'Gon',
    //             status: 'Cleaner',
    //             followed: false,
    //             photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg',
    //             location: {
    //                 city: 'Kharkov',
    //                 country: 'Ukraine'
    //             },
    //         },
    //         {
    //             id: 5,
    //             fullName: 'Don',
    //             status: 'Helper',
    //             followed: true,
    //             photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg',
    //             location: {
    //                 city: 'Kharkov',
    //                 country: 'Ukraine'
    //             },
    //         },
    //         {
    //             id: 6,
    //             fullName: 'Kon',
    //             status: 'LOL',
    //             followed: true,
    //             photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg',
    //             location: {
    //                 city: 'Kharkov',
    //                 country: 'Ukraine'
    //             },
    //         },
    //         {
    //             id: 7,
    //             fullName: 'Kean',
    //             status: 'Manager',
    //             followed: true,
    //             photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg',
    //             location: {
    //                 city: 'Kharkov',
    //                 country: 'Ukraine'
    //             },
    //         },
    //         {
    //             id: 8,
    //             fullName: 'Tor',
    //             status: 'Boss2',
    //             followed: false,
    //             photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg',
    //             location: {
    //                 city: 'Kharkov',
    //                 country: 'Ukraine'
    //             },
    //         },
    //     ])
    // }

        let getUsers = () => {
            if (props.users.users.length === 0){
                axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                    props.setUsers(response.data.items)})}
        }

        // if (props.users.users.length === 0){
        // axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
        //         props.setUsers(response.data.items)})}

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
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