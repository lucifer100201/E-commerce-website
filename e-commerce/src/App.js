
import './App.css';
import Navbar from './components/Navbar/Nav.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route></Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
