import React from "react";

type HeaderPropsType = {
    title: string;
}


export const Header = (props:HeaderPropsType) => {
    return (
        <div className="App">
            <h1>{props.title}</h1>
            <a href='#'>Home</a>
            <a href='#'>News Feed</a>
            <a href='#'>Messages</a>
        </div>
    )
}