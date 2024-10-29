import React from 'react'
import trollFace from './images/troll-face.png'

export function TitleCard() {
    return (
        <header className="titleCardHeader" >
            <img className="header--image" src={trollFace} />
            <h1 className="header--h1">Meme Generator</h1>
            <h4 className="header--h4">React Course - Project 3</h4>
        </header>
    )
}