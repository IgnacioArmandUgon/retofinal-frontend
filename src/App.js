import Navbar from "./components/Navbar";
import FormFactura from "./components/FormFactura";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Historial from "./components/Historial";
import FormVolante from "./components/FormVolantes";
import ListFacturas from "./components/ListFacturas";
import ListVolantes from "./components/ListVolantes";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<FormFactura/>}/>
        <Route path="/historial" element={<Historial/>}/>
        <Route path="/formVolantes" element={<FormVolante/>}/>
        <Route path="/historial/facturas" element={<ListFacturas/>}/>
        <Route path="/historial/volantes" element={<ListVolantes/>}/>
        <Route path="/form/factura" element={<ListFacturas/>}/>
        <Route path="/form/volante" element={<ListVolantes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
