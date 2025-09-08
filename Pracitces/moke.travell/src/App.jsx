import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import Body from "./component/body";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./component/home";
import Special from "./component/special";
function App() {
  return (
    <>
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:place/:id" element={<Special />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// https://traveller.talrop.works/api/v1/places/
// https://traveller.talrop.works/api/v1/places/view/31/

{
  /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
}
