import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import Lorem from "./components/Lorem";
import Heading from "./components/Heading";
import BookList from "./components/BookList";

let booksData = [
  {title: 'Hary Poter1', description : 'Wizard Book1'},
  {title: 'Hary Poter2', description :'Wizard Book2'},
  {title: 'Hary Poter3', description : 'Wizard Book3'},
]



function App() {
  
  return (
    <div className="site-wrapper">

      <Heading />


      <BookList  books={booksData} />

    </div>

    // <div className="site-wrapper">
    //   <Header>Hey this is app component</Header>

    //   <main>
    //     <Lorem></Lorem>
    //     <Lorem></Lorem>
    //     <Lorem></Lorem>
    //     {/* <Lorem>First2</Lorem>
    //     <Lorem>First3</Lorem> */}

    //   </main>

    //   <Footer></Footer>
    // </div>
  );
}

export default App;
