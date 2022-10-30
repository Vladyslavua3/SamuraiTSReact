import React from "react";

type HeaderPropsType = {
    title: string;
}


export const Header = (props:HeaderPropsType) => {
    return (
        <div className="App">
            <h1>{props.title}</h1>
        </div>
    )
}