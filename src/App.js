import React, {Component}from 'react';
import {Route, Link} from 'react-router-dom';

import './App.css'

import SearchBooks from './Searchbooks';
import Bookshelf from './Bookshelf';


import * as BooksAPI from './BooksAPI';

class BooksApp extends Component {
    state = {
        books: [],
        query: '',
        searchResults: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState({
            books
        }));
    }

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
                book.shelf = shelf;
                this.setState({
                    books: [
                        ...this.state.books
                    ]
                });
            },
        )
    };


    handleQueryChange = (query) => {
        this.searchBooks(query)

    };

    searchBooks = (query) => {
        if (query) {
            BooksAPI.search(query, 20).then((searchResults) => {
                this.setState({searchResults})
            })

        }else {
            this.setState({searchResults: [...[]]})
        }
    };





    render() {


        return (
            <div className="app">
                <div className="open-search">
                    <Link to="/search">Search for books</Link>
                </div>
                <Route exact path="/search" render={() => (<SearchBooks search={this.handleQueryChange} result={this.state.searchResults} change={this.changeShelf}/>)}/>
                <Route exact path="/" render={() => (<Bookshelf books={this.state.books} change={this.changeShelf} result={this.state.searchResults}/>)}
                />
            </div>
        )

    }
}

export default BooksApp;
