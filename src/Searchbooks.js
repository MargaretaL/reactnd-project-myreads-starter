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



    searchBooks = (query) => {
        BooksAPI.search(query).then(result => {
            this.setState({
                searchresult:result
        });
            })
    };


    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input value={this.state.query} onChange={this.searchBooks} type="text" placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchresult}
                    </ol>
                </div>
            </div>
        )
    }
}


export default searchbooks;
