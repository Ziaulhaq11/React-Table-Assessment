import './App.css';
import { Route,Routes, Link } from 'react-router-dom'
import Home from './components/Home';
import NewEmployee from './components/NewEmployee';


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
