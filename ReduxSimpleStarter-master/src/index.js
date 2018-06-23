import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const config = require('../config');


// // create a new component, this component produces html

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

         this.videoSearch('surfboards');
    }
        
    videoSearch(term) {
        YTSearch({key: config.yt.api_key, term: term}, (videos) => {
            this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
            });
        });
            
    }

    render () {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}
// // take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));