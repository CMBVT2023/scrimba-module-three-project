import React, { useEffect, useState } from 'react'
// import memeData from '../memeData.js'

export function Meme() {
    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    // Method chaining implementation
    /* useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => {
            if (!response.ok) throw new Error('Fetch call failed.');
            return response.json();
        })
        .then(({data}) => setAllMemes(data.memes))
        .catch((error) => console.error(error))
    }, []) */

    // Async and Await method
    useEffect(() => {
        async function fetchMeme() {
            try {
                let response = await fetch("https://api.imgflip.com/get_memes");
                if (!response.ok) throw new Error('Fetch call failed.');
                let { data } = await response.json()
                setAllMemes(data.memes)
            } catch (error) {
                console.error(error)
            }
        }

        fetchMeme()
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