import React from 'react';
import Loader from './Loader';
import './SeasonDisplay.scss'

const seasonConfig = {
    summer: {
        text: 'Season: Summer',
        iconName: 'sun',
        background: 'summer'
    },
    winter: {
        text: 'Season: Winter',
        iconName: 'snowflake',
        background: 'winter'
    }
}

const getSeason = (lat, month) =>{
    if(month > 2 && month <9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());

    const {text, iconName, background} = seasonConfig[season];


    if(props.lat){
        return(
            <div className={`season-display season-display--${background}`}>
                <i className={`season-display__icon season-display__icon--left massive ${iconName} icon`}></i>
                <h1>{text}</h1>
                <i className={`season-display__icon season-display__icon--right massive ${iconName} icon`}></i> 
            </div>  
        );
    }else if(props.error){
        return (
            <div className='season-display'>
                <h1>{props.error}</h1>
            </div>
        );
    }else{
        return(
            <Loader
            message='Please accept location request'
            />
        );
    }
}

export default SeasonDisplay;