import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './Header';
import Login from './Login';
import Register from './Register';
import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>E-Comm Website</h1>
      <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/add" element={<AddProduct />} />
  <Route path="/update" element={<UpdateProduct />} />
  <Route path="/register" element={<Register />} />
  </Routes>

   
 
      <button>Noraml  button</button>
      <Button>Noraml  button</Button>
      </BrowserRouter>
 
     
</div>
  );
}

export default App;


