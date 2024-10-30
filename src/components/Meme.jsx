import React from 'react'

export function Meme() {
    return (
        <main>
            <form className='form'>
                <div>
                    <label>
                        Top Text
                        <input 
                            type="text" 
                            placeholder='Shut up'
                            className='form--input'
                        />
                    </label>
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
                >
                    Get a new meme image 🖼
                </button>
            </form>

        </main>
    )
}