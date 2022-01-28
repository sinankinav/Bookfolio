import React, { Component } from 'react';
import './BookList.css'
import Book from './Book';
export class BookList extends Component {
  render() {
  const bookList = this.props.books.map((book,i)=> {
      return <Book book={book}
                    key={i}
 /> }) 

    return <div>
    <section className="page-section bg-light" id="portfolio">
    <div className="container">
        <div className="text-center">
            <h2 className="section-heading text-uppercase">BookFolio</h2>
            <h3 className="section-subheading text-muted">Favorite Booklist</h3>
        </div>
        <div className="row">
          
            {bookList}   
               
          
        </div>
    </div>
    </section></div>;
  }
}

export default BookList;

