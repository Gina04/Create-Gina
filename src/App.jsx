import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componentes/Footer/Footer";
import HeaderBottom from "./componentes/HeaderBottom/HeaderBottom";
import InicioSesion from "./componentes/InicioSesion/InicioSesion";
import Main from "./componentes/Main/Main";
import TopBar from "./componentes/TopBar/TopBar";
import RegistroUsuario from "./componentes/InicioSesion/RegistroUsuario";
import Banner from "./componentes/Banner/Banner";
import DetalleMueble from "./componentes/Muebles/DetalleMueble";
import ListaMuebleAlgolia from "./componentes/Muebles/ListaMuebleAlgolia";
import HeaderMain from "./componentes/HeaderMain/HeaderMain";
import { SnipcartProvider } from "use-snipcart";

function App() {
  return (
    <SnipcartProvider>
      <Router>
        <TopBar />
        <HeaderMain />
        <HeaderBottom />
        <Routes>
          <Route path="/IniciarSesion" element={<InicioSesion />} />
          <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
          <Route
            path="/furniture/living-room/sofa-and-sectional-collections"
            element={<ListaMuebleAlgolia />}
          />
          <Route path="/FurnitureDetail/:id" element={<DetalleMueble />} />
          <Route path="/" element={<Main />} />

          <Route path="/detail/:id" element={<ListaMuebleAlgolia />} />
        </Routes>

        <Footer />
      </Router>
    </SnipcartProvider>
  );
}

export default App;
