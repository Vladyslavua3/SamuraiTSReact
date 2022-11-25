


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
    postData: Array<postDataType>
}

export type messagesType = {
    message: Array<messageType>
}

export type dialogsPageType = {
    dialogsArr: Array<dialogsType>
}

export type stateType = {
    profilePage: profilePageType
    messages: messagesType
    dialogsPage: dialogsPageType
}
export let state: stateType = {
    profilePage: {
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
        ]
    },
    dialogsPage: {
        dialogsArr: [
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
}