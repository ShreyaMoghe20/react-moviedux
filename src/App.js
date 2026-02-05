import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header.";
import MoviesGrid from "./components/movies-grid/movies-grid";
import WatchList from "./components/watch-list/watch-list";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watch-list">WatchList</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<MoviesGrid />}>
              Home
            </Route>
            <Route path="/watch-list" element={<WatchList />}>
              WatchList
            </Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
