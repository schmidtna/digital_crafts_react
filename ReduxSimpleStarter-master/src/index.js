import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';

const config = require('../config');


// // create a new component, this component produces html

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({key: config.yt.api_key, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            // this.setState ({ videos: videos }); es6 condensed above
        });
    }
    render () {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}
// // take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));