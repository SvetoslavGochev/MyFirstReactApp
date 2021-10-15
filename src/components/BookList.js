import { Component } from "react";
import bookServices from '../services/bookServices'
import Book from "./Book";

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
    //  kogato dannite idvat ot van6en sarvar
  }

  bookClicked(title) {
    console.log("The book " + title + "has been added to library");
  }

  componentDidMount() {
    bookServices.getAll()
    .then((books) => {
      //knigite koito polu4avame  vtori promis
      this.setState(() => ({ books })) //vra6ta obekt ot knigi
    });
  }

  render() {

if(this.state.books.length == undefined ) {
  return <span>Loading books...</span>
}

    return (
      <div className="Book-List">
        <h4>Book Colection</h4>
        {/* this.state.books.map((x) =>  */}
        {this.props.books.map((x) =>  (
          <Book
            key={x.id}
            title={x.title}
            description={x.description}
            //clickHandler={this.bookClicked.bind(this, x.title)}
            clickHandler={() => this.bookClicked(x.title)}
            author={x.author}
            //!!!arow funkc darji konteksta na parenta ...nqma sobstven kontext!!!
          />
        ))}

        {/* // <Book title={this.props.books[0].title} description="Wizard Book"/>
        // <Book title="Harry Poter2" description="Wizard Book2"/>
        // <Book title="Harry Poter3" description="Wizard Book3"/> */}
      </div>
    );
  }
}

export default BookList;
