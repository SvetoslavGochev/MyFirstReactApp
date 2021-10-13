import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import Lorem from "./components/Lorem";
import Heading from "./components/Heading";
import BookList from "./components/BookList";
import Childrens from "./components/Cildrens";
import Counter from "./components/Counter";

let booksData = [
  {id: 1,title: "Hary Poter1", description: "Wizard Book1" },
  {id: 2, title: "Hary Poter2", description: "Wizard Book2" },
  {id: 3, title: "Hary Poter3", description: "Wizard Book3" },
  {id: 4,title: null, description: "Missing book" },
];

function App() {
  return (
    <div className="site-wrapper">
      <Heading></Heading>

      <Childrens>
        <h1>Title1</h1>
        <h2>Title2</h2>
      </Childrens>

      <Counter />
      <BookList books={booksData} />

        <Footer /> 

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
