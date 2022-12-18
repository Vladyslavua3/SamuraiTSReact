export let store:StoreType = {
    _state: {
        profilePage: {
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
        },
        messages: {
            message: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'How are you'
                },
                {
                    id: 3,
                    message: 'Holla'
                },
                {
                    id: 4,
                    message: 'Whatsuuuuup?'
                }
            ],
            dialogs: [
                {
                    id: '1',
                    name: 'Nastya'
                },
                {
                    id: '2',
                    name: 'Vladlen'
                },
                {
                    id: '3',
                    name: 'Anastas'
                },
                {
                    id: '4',
                    name: 'Vladik'
                },

            ]
        }
    },
    rerenderEntireTree() {
        console.log('change')
    },
    addPost() {
        const newPost: postDataType = {
            id: this._state.profilePage.postData.length + 1,
            post: this._state.profilePage.newPostText,
            likeCount: 0,
            photo: ''
        }
        this._state.profilePage.postData.push(newPost);
        this.rerenderEntireTree();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree();
    },
    subscribe(callback: () => void) {
        this.rerenderEntireTree = callback
    },
    getState(){
        return this._state
    }
}

export type dialogsType = {
    id: string
    name: string
}

export type postDataType = {
    id: number
    post: string
    likeCount: number
    photo: string
}

export type messageType = {
    message: string
    id: number
}

export type profilePageType = {
    newPostText:string
    postData: Array<postDataType>
}

export type messagesType = {
    message: Array<messageType>
    dialogs:Array<dialogsType>
}

export type stateType = {
    profilePage: profilePageType
    messages: messagesType
}

export type StoreType = {
    _state:stateType
    rerenderEntireTree:() => void
    addPost:() => void
    updateNewPostText:(newText: string) => void
    subscribe:(callback: () => void) => void
    getState:() => stateType
}