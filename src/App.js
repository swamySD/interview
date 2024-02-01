import Home from '../src/components/Home/Home'
import Products from '../src/components/Products/Products'

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProduct from '../src/components/Products/SingleProduct';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<SingleProduct/>} />
      {/* <Route path="/products" element={<Products/>}/> */}
     
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
