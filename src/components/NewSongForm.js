import React, { useState } from "react";

export const NewSongForm = (props) => {
    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && artist) {
            props.AddNewSong({name, artist});
            setName('');
            setArtist('');
        }
    }
    return (
        <div>
            <h4>Add a Song to Playlist</h4>
            <form onSubmit={onSubmit}>
                <input  
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                <input
                    type='text'
                    placeholder='artist'
                    onChange={(e) => setArtist(e.target.value)}
                    value={artist}
                />
                <button type='submit'>Add Song</button>
            </form>
        </div>
    )
};