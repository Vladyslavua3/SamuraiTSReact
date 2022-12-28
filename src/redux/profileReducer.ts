import {ActionsType, postDataType, profilePageType} from "../Store";


export const addPostActionCreator = ():ActionsType => ({type: 'ADD-POST'})

export const updateNewPostTextActionCreator = (newText:string):ActionsType => {
    return{
        type:'UPDATE-NEW-POST-TEXT',
        newText:newText
    }as const
}


export const profileReducer = (state:profilePageType,action:ActionsType) => {
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
