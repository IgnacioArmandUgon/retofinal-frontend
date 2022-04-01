import Navbar from "./components/Navbar";
import FormFactura from "./components/FormFactura";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Historial from "./components/Historial";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<FormFactura/>}/>
        <Route path="/inventario" element={<Historial/>}/>
      </Routes>
    </Router>
  );
}

export default App;
