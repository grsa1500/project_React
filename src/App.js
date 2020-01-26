
  
import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from './components/Books';
import Header from './components/Header';
import Nav from './components/Nav';
import Backdrop from './components/admin/Backdrop'
import Pagination from './components/Pagination';

import axios from 'axios';


// Admin
import BookList from './components/admin/BookList';
import './App.css';
import BookForm from './components/admin/BookForm';
import BookUpdate from './components/admin/BookUpdate';




export class App extends Component {

  state = {
      books: [],
      filteredbooks: [],

      title: '',
      author: '',
      year: '',
      pages: '',
      ISBN: '',
      image: '',
      lang: '',
      read: '',
      dateRead: '2010-01-02',
      
      checked: false,
      search: '',
      updateForm: false,
     
      currentPage: 1,
      loading: false,
      booksPerPage: 12,

    updatingBook: '',
  
  };
    





 componentDidMount() {



 this.setState({loading: true});


  //Hämtar alla böcker
  axios.get('https://fast-hamlet-89655.herokuapp.com/books')
    .then(response => {
      this.setState({ books: response.data });
      this.setState({loading: false});
   
    })
    .catch(function (error) {
      console.log(error);
    })
}


// Lägger till ny bok
 addBook=(author, title, year, pages, ISBN, image, read, dateRead, lang) =>{
  axios.post('https://fast-hamlet-89655.herokuapp.com/book', {
     title, 
     author, 
     year,
     pages,
     ISBN,
     image, 
     read,
     dateRead,
     lang

      })


      .then(res => {
  // Läser ut alla böcker igen
        axios.get('https://fast-hamlet-89655.herokuapp.com/books')
          .then(response => {
            this.setState({ books: response.data });

            this.setState({
              title: '',
              author: '',
              year: '',
              pages: '',
              ISBN: '',
              image: '',
              lang: '',
              read: '',
              dateRead: '2010-01-02',
              
              checked: false
          });
          })
          .catch(function (error) {
            console.log(error);
          });
      
      });
}


// Öppnar uppdateringsrutan och läser in den valda boken
updateBook = (id) => {
  const bookUp = this.state.books.find(book => book._id == id );
  

  this.setState({updatingBook: bookUp});
  this.setState({updateForm: true});

}


// Sparar vad som skrivs i uppdateringsfältet
updatingForm = (inputName, inputValue) => {
  this.setState(prevState => ({
    updatingBook: {
      ...prevState.updatingBook,
      [inputName]: inputValue

    }
  }))
}


// Uppdaterar vald bok
updateBookDone = (author, title, year, pages, ISBN, image, read, dateRead, lang, id) => {
  axios.patch(`https://fast-hamlet-89655.herokuapp.com/book/${id}`, {
     title, 
     author, 
     year,
     pages,
     ISBN,
     image, 
     read,
     dateRead,
     lang

      })
      
      .then(res => {
   // Läser ut alla böcker igen
        axios.get('https://fast-hamlet-89655.herokuapp.com/books')
          .then(response => {
            this.setState({ books: response.data });

          })
          .catch(function (error) {
            console.log(error.response);
          });

          // Stänger uppdateringsrutan
          this.setState({updateForm: false});
  
      });
}


// Ställer in sidnumret man befinner sig på
paginate = (pageNumber) => this.setState({currentPage: pageNumber});


// Ta bort bok
deleteBook = (id) => {
  if (window.confirm('Vill du ta bort boken?')) {
   
    axios.delete(`https://fast-hamlet-89655.herokuapp.com/book/${id}`)
      .then(res => {

        // Läser ut alla böcker igen
        axios.get('https://fast-hamlet-89655.herokuapp.com/books')
          .then(response => {
            this.setState({ books: response.data });
          })
          .catch(function (error) {
            console.log(error);
          });
      });
  }
}

    
// Sorterar böckerna
change = (event) => {

var sort = event.target.value;


    axios.get(`https://fast-hamlet-89655.herokuapp.com/books/sort/${sort}`)
          .then(response => {
            this.setState({ books: response.data });
         
          })
          .catch(function (error) {
            console.log(error);
          });

 
}


// Läser av vad som skrivs i sökfältet
filterSearch = (event) => {
  var filter = event.target.value;
  this.setState({ search: filter });


}

//Stänger uppdateringsformuläret
closeForm = () => {

  this.setState({ updateForm: false });
}

        render() {
   
          const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
          const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
          const currentBooks = this.state.books.slice(indexOfFirstBook, indexOfLastBook);

         

    return (

      <Router>

        <Route path="/admin" render={props => (
          <div>
           
    <div className="container">
    <input className="search" type="text" onChange={this.filterSearch}/><Pagination booksPerPage={this.state.booksPerPage} books={this.state.books} paginate={this.paginate}/>
    <table>
    <thead>
        <tr>
            <th>Titel</th>
            <th>Författare</th>
            <th>År</th>
            <th>Sidor</th>
    
            <th>Bild</th>
            <th>Läst</th>
        
            <th>Ändra / Ta bort</th>
        
        </tr>
    
    </thead>
 <tbody>
        <BookList books={currentBooks} allbooks={this.state.books} search={this.state.search} loading={this.state.loading}  deleteBook={this.deleteBook} updateBook={this.updateBook} />
        

</tbody>
</table> <br></br>
{this.state.updateForm && <Backdrop/>}
{this.state.updateForm && <BookUpdate  updateBookDone={this.updateBookDone} updatingForm={this.updatingForm} updatingBook={this.state.updatingBook} closeForm={this.closeForm} />}

<BookForm addBook={this.addBook}/>
  </div>     </div>
        )}
        />

        <Route exact path="/" render={props => (
           <React.Fragment>

          <div>   <Nav />
            <Header />
            <div className="container">
         <span className="orangeText true"><b>= Läst</b>  </span> 
     <input className="search" type="text" onChange={this.filterSearch}/>
      <div className="right">
         
          <b>Sortera: </b>  <select onChange={this.change}>
          <option value="0">Senast tillagda:</option>
          <option value="1">Titel (A-Ö)</option>
          <option value="2">Författare (A-Ö)</option>
          <option value="3">Olästa - Lästa</option>
          <option value="4">Sidor (högst först)</option>
          <option value="5">Sidor (lägst först)</option>
          <option value="6">År (högst först)</option>
          <option value="7">År (lägst först)</option>


        </select></div>



   <div className="grid">
          <Books  books={currentBooks} allbooks={this.state.books} search={this.state.search} loading={this.state.loading} />
        

 
            </div>
          
           
        <Pagination booksPerPage={this.state.booksPerPage} books={this.state.books} paginate={this.paginate}/>
             </div>
            </div>
          
          
          </React.Fragment>
        )} />


      </Router>
    );
  }  
}


export default App;
