import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';



export default class SearchBar extends Component {
constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    //without this bind, this , is returning an undefined mystery object when passing callback with a reference to 'this'
    //need to do a bind to lock in the reference to 'this'
}

onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value})

}

onFormSubmit(event) {
    event.preventDefault();
//we want to prevent the basic html handling of form submission and handle it with our specified code
//because by default it submits a post an refreshes the page
}

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} 
                    />

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}