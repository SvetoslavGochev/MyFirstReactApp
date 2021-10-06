import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import Lorem from "./components/Lorem";

function App() {
  return (
    <div>
      <Header>Hey this is app component</Header>

      <main>
        <Lorem></Lorem>
        {/* <Lorem>First2</Lorem>
        <Lorem>First3</Lorem> */}
        
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
