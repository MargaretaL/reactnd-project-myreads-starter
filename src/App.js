import React, {Component}from 'react';
import {Route, Link} from 'react-router-dom';

import './App.css'

import SearchBooks from './Searchbooks';
import Bookshelf from './Bookshelf';


import * as BooksAPI from './BooksAPI';

class BooksApp extends Component {
    state = {
        books: [],
        searchResults: [],
        query: '',
        error: false
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState({
            books
        }))
    }

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
                book.shelf = shelf;

                let book2 = this.state.books.find(b => b.id === book.id);
                if(book2){
                    book2.shelf = shelf;
                }else{
                    this.state.books.push(book);
                }

                this.setState({
                    books: [
                        ...this.state.books
                    ]
                });
            },
        )
    };

    searchBooks = (query) => {
        this.setState({query: query});
        if (query) {
            BooksAPI.search(query, 20)
                .then((searchResults) => {
                    if (query === this.state.query) {
                        searchResults.forEach(searchResult => {
                            let book = this.state.books.find(b => b.id === searchResult.id);
                            if (book) {
                                searchResult.shelf = book.shelf;
                            } else searchResult.shelf = 'none';
                        });
                        this.setState({searchResults: [...searchResults]})
                    }
                })
                .catch(error => query === this.state.query && this.setState({error: error, searchResults: [...[]]}))
        } else {
            this.setState({searchResults: [...[]]})
        }
    };


    render() {


        return (
            <div className="app">
                <div className="open-search">
                    <Link to="/search">Search for books</Link>
                </div>
                <Route exact path="/search" render={() => (
                    <SearchBooks search={this.searchBooks} result={this.state.searchResults } books={this.state.books}
                                 change={this.changeShelf} query={this.state.query}/>)}/>
                <Route exact path="/" render={() => (
                    <Bookshelf books={this.state.books} change={this.changeShelf} result={this.state.searchResults}/>)}
                />
            </div>
        )

    }
}

export default BooksApp;
