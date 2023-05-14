import React from "react";
import { NewSongForm } from './NewSongForm';

export const PlayList = (props) => {
    const { playlist, updatePlaylist } = props;

    const deleteSong = (songId) => {
        const updatedPlaylist = {
            ...playlist,
            songs: playlist.songs.filter((x) => x._id !== songId)
        };
        updatePlaylist(updatedPlaylist);
    }

    const addNewSong = (song) => updatePlaylist({ ...playlist, songs: [ ...playlist.songs, song]});

    const songs = () => (
        <ul>
           {playlist.songs?.map((song, index) => (
            <li key={index}>
                <label> {`${song.name} Artist: ${song.artist}`} </label>
                <button onClick={(e) => deleteSong(song._id)}>Delete</button>
            </li>
           ))} 
        </ul>
    );

    return (
        <div>
            <h1>{playlist.name}</h1>
            {
                songs({ songs, playlistId: playlist._id, deleteSong})
            }
            <NewSongForm addNewSong={addNewSong} />
        </div>
    );

};