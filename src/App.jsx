import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TituloPrincipal from "./components/TituloPrincipal";
import Footer from "./components/Footer";
import TituloClima from "./components/TituloClima";
import "./App.css";
import FormularioClima from "./components/FormularioClima";

function App() {
  return (
    <>
      <Container className="my-2 mainPage">
        <TituloPrincipal></TituloPrincipal>
        <TituloClima></TituloClima>
        <FormularioClima></FormularioClima>
      </Container>
      <Footer />
    </>
  )
}

export default App
