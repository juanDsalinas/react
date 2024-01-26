import './App.css'
// import BooksData from './Data.json';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import Results from './components/results.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      {/* <h2>Hello World!</h2> */}
      {/* <SearchBar place="Seach..."/> */}
      <Router>
        {/* <Header/> */}
        <SearchBar/>
        <Routes>
          <Route path="/home" element={<Results/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;