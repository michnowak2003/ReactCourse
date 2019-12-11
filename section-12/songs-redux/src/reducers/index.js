import {combineReducers} from 'redux';

const songsReducer = () => {
    return[
        {title: 'No Scrubs', duration: '3:00'},
        {title: 'Makarena', duration: '2:30'},
        {title: 'All Star', duration: '4:00'},
        {title: 'Flower', duration: '2:00'}
    ];
};

const selectedSongReducer = (selectedSong = {}, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})