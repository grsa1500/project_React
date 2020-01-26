import React, { Component } from 'react';
import BookItem from './BookItem';
import PropTypes from 'prop-types';




class Books extends Component {
     



  render() {

    if(this.props.loading) {
      return <h3>Loading</h3>
    }



 
    let filteredBooks = this.props.allbooks.filter(
      (filterbook) => { 
       
        return filterbook.author.toLowerCase().indexOf(this.props.search.toLowerCase())  >= 0 
        || filterbook.title.toLowerCase().indexOf(this.props.search.toLowerCase())  >= 0 
         || filterbook.ISBN.toString().toLowerCase().indexOf(this.props.search.toLowerCase())  >= 0  ;
      }
    );
    

    if(filteredBooks < this.props.allbooks) {
      
      
      return (
      
      

     filteredBooks.map((book) => (
      <BookItem key={book._id} book={book} />
     
    ))
 
    )
    }

    else {
      return (
      
      

        this.props.books.map((book) => (
         <BookItem key={book._id} book={book} />
        
       ))
    
       )
    }

    
  }
}
Books.propTypes = {
  books: PropTypes.array.isRequired
}

export default Books;
