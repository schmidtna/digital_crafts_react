import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        console.log(event.target.value);

    }
}

//refactorable : return <input onChange ={event => console.log(event.target.value)} />;
//then can remove the entire event handler function


export default SearchBar;