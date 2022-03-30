import './App.css';
import { Route,Routes, Link } from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/> }/>
      </Routes>
    </div>
  );
}

export default App;
