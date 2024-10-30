import React from 'react'
import memeData from '../memeData.js'

export function Meme() {
    function getMemeImage() {
        let memeArray = memeData.data.memes;
        let {url: randomImageUrl} = memeArray[Math.floor(Math.random() * memeArray.length)]
        console.log(randomImageUrl)
    }

    return (
        <main>
            <div className='form'>
                <div>
                    <label htmlFor='top-text'>Top Text</label>
                        <input 
                            id='top-text'
                            type="text" 
                            placeholder='Shut up'
                            className='form--input'
                        />
                </div>
                <div>
                    {/* Either label method works */}
                    <label htmlFor='bottom-text'>Bottom Text</label>
                        <input
                            id='bottom-text'
                            type="text"
                            placeholder='And take my money'
                            className='form--input'
                        />
                </div>
                <button
                    className='form--button'
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

        </main>
    )
}