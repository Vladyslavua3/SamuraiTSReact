import {ActionsType, postDataType, profilePageType} from "../Store";


export const addPostActionCreator = (): ActionsType => ({type: 'ADD-POST'})

export const updateNewPostTextActionCreator = (newText: string): ActionsType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}


const initialState: profilePageType = {
    newPostText: '',
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

export const profileReducer = (state: profilePageType = initialState, action: ActionsType): any => {
    switch (action.type) {
        case "ADD-POST": {
            let newPostText = state.newPostText

            let stateCopy = {
                ...state,
                postData:[...state.postData,{
                    id: state.postData.length + 1,
                    post: newPostText,
                    likeCount: 0,
                    photo: 'https://static01.nyt.com/images/2022/09/16/arts/16CAMERON1/16CAMERON1-mediumSquareAt3X.jpg'
                }]
            }

            return stateCopy;
        }
        case "UPDATE-NEW-POST-TEXT":
            let stateCopy = {
                ...state,
                newPostText:action.newText
            }
            return stateCopy;
        default:
            return state
    }

}
