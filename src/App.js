import React, {Component}from 'react';
import {Route, Link} from 'react-router-dom';

import './App.css'

import SearchBooks from './Searchbooks';
import Bookshelf from './Bookshelf';


import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState({
            books
        }));
    }

    changeShelf = (book, shelf) =>{
            BooksAPI.update(book, shelf).then(res => {
                book.shelf = shelf;
                this.setState(currentState =>({
                    books: [
                        currentState.books.filter(bk => bk.id !== book.id)
                    ]
                }))
            },

        console.log(this.state.book))
    };


    render() {


        return (
            <div className="app">
                <div className="open-search">
                    <Link to="/search">Search for books</Link>
                </div>
                <Route exact path="/search" component={SearchBooks}/>
                <Route exact path="/" render={() => (<Bookshelf books={this.state.books} change={this.changeShelf}/>)}
                />
            </div>
        )

    }
}

export default BooksApp;
