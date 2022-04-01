//React Router
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Historial from "./components/Historial";
import Formularios from "./components/Formularios";
import FormFactura from "./components/FormFactura";
import FormVolante from "./components/FormVolante";
import ListFacturas from "./components/ListFacturas";
import ListVolantes from "./components/ListVolantes";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/formularios" element={<Formularios/>}/>
        <Route path="/historial" element={<Historial/>}/>
        <Route path="/formVolantes" element={<FormVolante/>}/>
        <Route path="/historial/facturas" element={<ListFacturas/>}/>
        <Route path="/historial/volantes" element={<ListVolantes/>}/>
        <Route path="/form/factura" element={<FormFactura/>}/>
        <Route path="/form/volante" element={<FormVolante/>}/>
      </Routes>
    </Router>
  );
}

export default App;
