import React, { useEffect, useState } from 'react'
// import memeData from '../memeData.js'

export function Meme() {
    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    const [allMemes, setAllMemes] = useState({});
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => {
            if (!response.ok) throw new Error('Fetch call failed.');
            return response.json();
        })
        .then(({data}) => setAllMemes(data.memes))
        .catch((error) => console.error(error))
    }, [])

    function getMemeImage() {
        let {url: randomImageUrl} = allMemes[Math.floor(Math.random() * allMemes.length)]
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: randomImageUrl
            }
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevData => ({
            ...prevData,
            [name]: value
        }))
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
                            onChange={handleChange}
                            name="topText"
                            />
                </div>
                <div>
                    {/* Either label method works */}
                    <label htmlFor='bottom-text'>Bottom Text</label>
                        <input
                            onChange={handleChange}
                            id='bottom-text'
                            type="text"
                            placeholder='And take my money'
                            className='form--input'
                            name="bottomText"
                        />
                </div>
                <button
                    className='form--button'
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className='meme'>
                <img src={meme.randomImage} className='meme--image'/>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}