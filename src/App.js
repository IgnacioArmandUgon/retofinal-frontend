//React Router
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import {useState} from 'react'

import Navbar from "./components/Navbar";
import Historial from "./components/Historial";
import Formularios from "./components/Formularios";
import FormFactura from "./components/FormFactura";
import FormVolante from "./components/FormVolante";
import ListFacturas from "./components/ListFacturas";
import ListVolantes from "./components/ListVolantes";
import Home from "./screens/Home";
import Login from "./screens/Login";
//redux
import store from "./store"
import { Provider } from "react-redux";

import firebaseApp from "./firebase/credenciales";
import { getAuth, onAuthStateChanged} from "firebase/auth"
const auth = getAuth(firebaseApp);

function App() {
console.log("Entré al app")
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    console.log("Entré al onAuthStateChanged")
    if(usuarioFirebase){
      setUser(usuarioFirebase)
    }else {
      setUser(null)
    }
  })

  

  return (
    <Provider store={store}>
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
        <Route path="/" element={user? <Home/>: <Login/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
