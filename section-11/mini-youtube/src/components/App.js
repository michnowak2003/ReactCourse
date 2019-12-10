import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import './app.scss';


class App extends React.Component{

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount(){
        this.onSearchSubmit('Rick Astley - never gona')
    }

    onSearchSubmit = async (term) =>{
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) =>{
        this.setState({
            selectedVideo: video
        })
    }

    render(){
        return(
            <div className='ui container'>
                <h2>Mini YouTube Player</h2>
                <SearchBar
                    onSubmit={this.onSearchSubmit}
                />
                <div className='section'>
                    <div className='section__player'>
                        <VideoDetail
                            video={this.state.selectedVideo}
                        />
                    </div>
                    <div className='section__others'>
                        <VideoList
                            videos={this.state.videos}
                            onVideoSelect={this.onVideoSelect}
                        />
                    </div>
                </div>
                <div>{this.state.videos.length > 0 ? `We have ${this.state.videos.length} videos`: false} </div>
            </div>
        );
    }
}

export default App;