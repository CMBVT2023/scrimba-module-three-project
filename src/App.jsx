import React from "react"
import { TitleCard } from "./components/TitleCard.jsx"
import { Meme } from "./components/Meme.jsx"
import './style.css'

/**
 * Challenge: Build the Header component
 */
export function App() {
    return (
        <>
            <TitleCard />
            <Meme />
        </>
    )
}