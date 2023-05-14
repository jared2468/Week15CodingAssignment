import React from "react";
import { PlayList } from './Playlist'
import { playlistsApi } from '../rest/PlaylistsApi';

export class PlaylistsList extends React.Component {
    state = {
        playlists: []
    };

    componentDidMount() {
        this.fetchPlaylists();
    }

    fetchPlaylists = async () => {
        const playlists = await playlistsApi.get();
        this.setState({ playlists });
    };

    updatePlaylist = async (updatedPlaylist) => {
        await playlistsApi.put(updatedPlaylist);
        this.fetchPlaylists();
    };

    render() {
        return (
            <div className="Playlist-list">
                {this.state.playlists.map((playlist) => (
                    <PlayList
                        playlist={playlist}
                        key={playlist._id}
                        updatePlaylist= {this.updatePlaylist}
                        />
                ))}
            </div>
        )
    }
}