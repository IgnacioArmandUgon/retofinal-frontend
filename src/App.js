import Navbar from "./components/Navbar";
import CrearFactura from "./components/CrearFactura";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Historial from "./components/Historial";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CrearFactura/>}/>
        <Route path="/inventario" element={<Historial/>}/>
      </Routes>
    </Router>
  );
}

export default App;
