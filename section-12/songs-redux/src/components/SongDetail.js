import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({ selectedSong}) => {

    if(selectedSong.title){
        return ( 
            <div>
            <h3>SongDetail</h3>
                <ul>
                    <li>Title: {selectedSong.title}</li>
                    <li>Duration: {selectedSong.duration}</li>
                </ul>
            </div>
        )
    }
    return <div><h3>Select song...</h3></div>
}


const mapStateToProps = ({selectedSong}) => {
    return { selectedSong: selectedSong}
}

export default connect(mapStateToProps)(SongDetail);