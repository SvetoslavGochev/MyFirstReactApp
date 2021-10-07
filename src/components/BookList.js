import { Component } from "react";

import Book from "./Book";

class BookList extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="Book-List">
        <h4>Book Colection</h4>

        {this.props.books.map((x) => {
          return <Book title={x.title} description={x.description} />;
        })};
        
        {/* // <Book title={this.props.books[0].title} description="Wizard Book"/>
        // <Book title="Harry Poter2" description="Wizard Book2"/>
        // <Book title="Harry Poter3" description="Wizard Book3"/> */}
      </div>
    );
  }
}

export default BookList;
