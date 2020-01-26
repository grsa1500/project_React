import React, { Component } from 'react'
import axios from 'axios';
import BookList from './BookList';

export class BookUpdate extends Component {

  


  state = {
        titleUp: '',
        authorUp: '',
        yearUp: '',
        pagesUp:'',
        ISBNUp: '',
        imageUp: '',
        langUp: '',
        readUp: '',
        dateReadUp: '2010-02-03',
        
        checked: false
    
    }  
    
  
    

    mySubmitHandler = (event) => {
         event.preventDefault();

      
 this.props.updateBookDone(this.props.updatingBook.author, this.props.updatingBook.title,this.props.updatingBook.year,this.props.updatingBook.pages,this.props.updatingBook.ISBN, this.props.updatingBook.image,this.props.updatingBook.read,this.props.updatingBook.dateRead,this.props.updatingBook.lang, this.props.updatingBook._id)
        

        this.setState({
        
            titleUp: '',
            authorUp: '',
            yearUp: '',
            pagesUp: '',
            ISBNUp: '',
            imageUp: '',
            langUp: '',
            readUp: '',
            dateReadUp: '2010-01-02',
            
            checked: false
           
        });
    
    }

    myChangeHandler = (event) => {
     

        this.props.updatingForm('read', !this.props.updatingBook.read)
    }

    


    render() {

  



        const content = this.state.checked || this.props.updatingBook.read
            ? <label >
                Läst:<br></br>
                <input
                    type="date"
                    value={this.props.updatingBook.dateRead.substring(0, 10)}

                    name="dateRead"
                    onChange={(event) => this.props.updatingForm(event.target.name, event.target.value)} 

                />
            </label>
            : null;

        return (
            <div className="updateModal">
                <h2><i className="fa fa-pen"></i> Uppdatera bok</h2> <a onClick={() => this.props.closeForm()} className="right closeButton"><i className="fas fa-times"></i></a>
                <br></br>
                <form onSubmit={this.mySubmitHandler}>
                    <label>
                        Titel:<br></br>
                        <input

                   
                            type="text"
                            required
                            name="title"
                            onChange={(event) => this.props.updatingForm(event.target.name, event.target.value)} 
                            value={this.props.updatingBook.title}
                        />
                    </label>
                    <label>
                        Författare:<br></br>
                        <input name="author"
                           value={this.props.updatingBook.author} onChange={(event) => this.props.updatingForm(event.target.name, event.target.value)} type="text" id="code" required />
                    </label>

                    <label>
                        Utgivningsår: <br></br>
                        <input name="year"
                        value={this.props.updatingBook.year}
                            onChange={(event) => this.props.updatingForm(event.target.name, event.target.value)} type="text" id="syllabus" required />
                    </label>
                    <label>
                        Sidor:<br></br>
                        <input
                        value={this.props.updatingBook.pages}
                            name="pages"
                            onChange={(event) => this.props.updatingForm(event.target.name, event.target.value)}
                            type="text"
                            required
                        />
                    </label>
                    <label>
                        ISBN:<br></br>
                        <input
                         value={this.props.updatingBook.ISBN}
                            name="ISBN"
                            onChange={(event) => this.props.updatingForm(event.target.name, event.target.value)}
                            type="text"
                            required
                        />
                    </label>
                    <label>
                        Språk:<br></br>
                        <input
                         value={this.props.updatingBook.lang}
                            name="lang"
                            onChange={(event) => this.props.updatingForm(event.target.name, event.target.value)}
                            type="text"
                            required
                        />
                    </label>
                    <label>
                        Bild:<br></br>
                        <input
                         value={this.props.updatingBook.image}
                            name="image"
                            onChange={(event) => this.props.updatingForm(event.target.name, event.target.value)}
                            type="text"
                            required
                        />
                    </label>

                    <label className="readCheck">
                        Läst:<br></br>
                        <input
                     
                            name="read"
                            type="checkbox"
                            checked={this.props.updatingBook.read}
                            onChange={this.myChangeHandler}

                        />
                        <span className="checkmark"></span>
                    </label>

                    {content}


                    <label>
                        <input type="submit" value="Uppdatera" className="btn btn-blue" /></label>
                </form>
            </div>

        )
    }
}

export default BookUpdate
