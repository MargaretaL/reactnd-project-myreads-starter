/**
 * Created by lilit on 2018-05-01.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';


class searchbooks extends Component {



    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input value={this.props.query} onChange={event => this.props.search(event.target.value)} type="search"
                               placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
       <Book books={this.props.result} change={this.props.change}/>
                    </ol>
                </div>
            </div>
        )
    }
}


export default searchbooks;
