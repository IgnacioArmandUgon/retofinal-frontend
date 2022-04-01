import Navbar from "./components/Navbar";
import FormFactura from "./components/FormFactura";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Historial from "./components/Historial";
import FormVolante from "./components/FormVolantes";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<FormFactura/>}/>
        <Route path="/inventario" element={<Historial/>}/>
        <Route path="/formVolantes" element={<FormVolante/>}/>
      </Routes>
    </Router>
  );
}

export default App;
