import React from 'react'
import trollFace from './images/troll-face.png'

export function TitleCard() {
    return (
        <div className="titleCardDiv" >
            <img src={trollFace} />
            <h1>Meme Generator</h1>
        </div>
    )
}