
import './App.css';
import { Header, Footer, Main } from "./components/index"
import { makeServer } from "./server";

// Call make Server
makeServer();


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

