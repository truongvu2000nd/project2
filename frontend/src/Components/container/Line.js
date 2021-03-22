import React from 'react'
import Song from './Song'

//take input as info of a list of songs as parameter
const Line = () => {
    return (
        <div className="line">
            <div className="line_text">
                <h2>Nhac dong que</h2>
            </div>

            <div className="line_descriptions">
                <h3>nhac dong que hay vcl</h3>
            </div>

            <div className="line_songs">
                <Song />
                
            </div>

        </div>
    )
}

export default Line
