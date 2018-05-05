/**
 * Created by lilit on 2018-05-02.
 */
import React from 'react';


const book = (props) => {

    return (
        <div>
            {props.books.map(book => {
                return (
                    <div className="book" key={book.id}>
                        <div className="book-top">
                            <div className="book-cover" style={{
                                width: 128,
                                height: 193,
                            }}>
                                <img src={book.imageLinks.smallThumbnail} alt=""/>
                            </div>
                            <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={ (event)=> {props.changedShelf(book, event.target.value)}}>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently
                                        Reading
                                    </option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                        <div>{book.shelf}</div>
                    </div>
                )
            })}
        </div>
    )
};

export default book;
