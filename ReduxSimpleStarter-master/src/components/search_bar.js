import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    render() {
        return (
            <div> 
               <input onChange={event => this.setState({ term: event.target.value})} />
            </div>
        );
    }
}


//refactorable : return <input onChange ={event => this.setState({ term: event.target.value})} />;
//then can remove the entire event handler function


export default SearchBar;