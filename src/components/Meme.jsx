import React from 'react'

export function Meme() {
    return (
        <div className='meme--div'>
            <div className="meme--input">
                <label>Top Text</label>
                <input type='text' placeholder='Shut up' />
            </div>
            
            <div className="meme--input">
                <label>Bottom Text</label>
                <input type='text' placeholder='And take my money' />
            </div>
            
            <button className="meme--button">Get a new meme image</button>
        </div>
    )
}