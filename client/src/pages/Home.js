import React from 'react'
import TodoIMG from '../assets/IMG/to-do-list.png'

export default function Home(){
    return (
        <div className="container-home">
            <img className="img-home" src={TodoIMG} />
        </div>
    )
}