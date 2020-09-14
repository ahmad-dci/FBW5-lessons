import {combineReducers} from 'redux'

const songReducer = () => {
    return [
        {title: '1973', duration: '5:20'},
        {title: 'Girl Like You', duration: '3:45'},
        {title: 'Hello', duration: '6:45'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        // if action contains payload that means we are changing the main state
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})