/**
 * Created by lilit on 2018-05-01.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'


class searchbooks extends Component {

    state = {
        searchresult: []
    };

    componentDidMount() {
        BooksAPI.search().then((foundbook) => this.setState({
            foundbook
        }));
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
                {this.state.searchresult.map(book => {
                    return (
                        <div>{book.title}</div>
                    )
                })
                }
            </div>
        )
    }
}


export default searchbooks;
