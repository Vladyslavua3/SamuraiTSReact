import {ActionsType, postDataType, profilePageType} from "../Store";


export const addPostActionCreator = ():ActionsType => ({type: 'ADD-POST'})

export const updateNewPostTextActionCreator = (newText:string):ActionsType => {
    return{
        type:'UPDATE-NEW-POST-TEXT',
        newText:newText
    }as const
}


const initialState:profilePageType = {
    newPostText: 'LOL',
    postData: [
        {
            id: 1,
            post: 'Holla',
            likeCount: 5,
            photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg'
        },
        {
            id: 2,
            post: 'Shalom',
            likeCount: 10,
            photo: 'https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/cola-0247.jpg'
        }
    ]
}

export const profileReducer = (state:profilePageType = initialState,action:ActionsType):profilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: postDataType = {
                id: state.postData.length + 1,
                post: state.newPostText,
                likeCount: 0,
                photo: ''
            };
            state.postData.push(newPost);
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state;
        default:return state
    }

}
