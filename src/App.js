import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/Create';
import Read from "./components/Read";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
  
    
      <Route exact path="/" element={<Create />}></Route>
      <Route exact path="/read" element={<Read />}></Route>
  
    
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
