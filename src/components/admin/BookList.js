import React, { Component } from 'react';
import BookItemAdmin from './BookItem';


export class BookList extends Component {
    render() {
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
            <BookItemAdmin key={book._id} book={book}  deleteBook={this.props.deleteBook} updateBook={this.props.updateBook}/>
           
          ))
       
          )
          }
      
          else {
            return (
            
            
      
              this.props.books.map((book) => (
               <BookItemAdmin key={book._id} book={book} deleteBook={this.props.deleteBook} updateBook={this.props.updateBook} />
              
             ))
          
             )
          }
      
         
          
          // return 1;
          
        }
      }

export default BookList

