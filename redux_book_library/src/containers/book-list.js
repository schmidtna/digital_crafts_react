import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
renderList() {
    return this.props.books.map((book) => {
        return (
            <li
              key={book.title}
              onClick={() => this.props.selectBook(book)}
              className="list-group-item">
              {book.title}
            </li>
        );
    });
}

    render() {
        return (
          <ul className="list-group col-sm-4"  >
              {this.renderList()}
          </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned shows up as props inside BookList, will be available as this.props
    //whenever state changes this component triggers to re-render
    return {
        books: state.books
    };
}

//anything returned from this function ends up as props on BookList container
function mapDispatchToProps (dispatch) {
    //whenever select book is called, result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//promote BookList from component to container, it needs to know about
//new dispatch method, selectBook. Make it available as a prop.

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//imports react-redux, connect takes a function and component and produces a container