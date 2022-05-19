import React from "react";
import memesData from "../memesData"
export default function Meme() {
    
    let url
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
    
    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form__input"
                />
                <input 
                    type="text"
                    placeho lder="Bottom text"
                    className="form__input"
                />
                <button 
                    className="form__btn"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
  );
}
 