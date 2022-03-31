import './App.css';
import { Route,Routes, Link } from 'react-router-dom'
import Home from './components/Home';
import NewEmployee from './components/NewEmployee';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/edit' element={<NewEmployee/> }/>
        <Route path='/add' element={<NewEmployee name="test2" email="test2@email.com" address="testaddress" /> }/>
      </Routes>
    </div>
  );
}

export default App;
