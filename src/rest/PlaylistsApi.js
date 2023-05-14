const PLAYLISTS_ENDPOINT = 'https://64436e3f466f7c2b4b53846d.mockapi.io/playlists';
// const SONGS_ENDPOINT = 'https://64436e3f466f7c2b4b53846d.mockapi.io/playlists/songs';

class PlaylistApi {
    get = async () => {
        try {
        const resp = await fetch(PLAYLISTS_ENDPOINT);
        const data = await resp.json();
        return data;
        } catch(e) {
            console.log('Oops, looks like fetch playlists had an issue', e);
        }
    }
    
    put = async (playlist) => {
        try {
            const resp = await fetch (`${PLAYLISTS_ENDPOINT}/${playlist._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(playlist)
            });
            return await resp.json()
        } catch(e) {
            console.log('Oops, looks like updating playlists had an issue', e);
        }
        
    }
}

export const playlistsApi = new PlaylistApi();