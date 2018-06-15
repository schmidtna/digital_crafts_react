import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// const config = require('../config.js');
// const youTubeApiKey = config.API_KEY;


// // create a new component, this component produces html

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// // take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));