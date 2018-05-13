/**
 * Created by lilit on 2018-05-02.
 */

import React from 'react';
import Book from './Book';

const bookshelf = (props) => {
    return (
        <div className="app">
            <div className="search-books-results">
                <ol className="books-grid">
                </ol>
            </div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>

                        <div className="bookshelf-books">

                            <ol className="books-grid">
                                <li>
                                    <Book books={props.books.filter(book => book.shelf === 'currentlyReading')}
                                          results={props.result.filter(result => result.shelf === 'currentlyReading')}
                                          change={props.change}/>

                                </li>
                            </ol>

                        </div>
                    </div>
                    <div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <li>
                                        <Book books={props.books.filter(book => book.shelf === 'wantToRead')}
                                              results={props.result.filter(result => result.shelf === 'wantToRead')}
                                              change={props.change}/>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    <li>
                                        <Book books={props.books.filter(book => book.shelf === 'read')}
                                              results={props.result.filter(result => result.shelf === 'read')}
                                              change={props.change}/>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default bookshelf;
