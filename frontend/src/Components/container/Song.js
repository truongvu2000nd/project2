import React from 'react'
import './container.css'

const Song = () => {
    return (
        <div className="song">
            <div>
                <img className="song_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwp4xa4lMHPSd8U-nn3dHRmEvHPA13RWBHUw&usqp=CAU" alt="cover_img"></img>
            </div>
            <div className="song_info">
                <h3 className="song_name" >love me like you do</h3>
                <h4 className="song_description" >Chord dan Lirik Lagu Love Me Like You Do You're The Light You're The Night</h4>

            </div>
            {/* <div>
                <img className="song_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwp4xa4lMHPSd8U-nn3dHRmEvHPA13RWBHUw&usqp=CAU" alt="cover_img"></img>
            </div>
            <div className="song_info">
                <h3 className="song_name" >love me like you do</h3>
                <h4 className="song_description" >Chord dan Lirik Lagu Love Me Like You Do You're The Light You're The Night</h4>

            </div> */}
        </div>
    )
}

export default Song
