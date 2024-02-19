import { Form, Row, Col, Button } from "react-bootstrap";
import Clima from "./Clima";
import { useState } from "react";
import Swal from 'sweetalert2';

const FormularioClima = () => {
  const [ubicacion, setUbicacion] = useState("");
  const [pais, setPais] = useState("");
  const [clima, setClima] = useState(null);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion},${pais}&APPID=bbdf7d22201d867358428f85b0e7c39d&lang=es`
      );
      const datos = await respuesta.json();

      if (respuesta.ok) {
        setClima(datos);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se encontró información de la ciudad ingresada",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Se produjo un error",
      });
    }
  };

  const handleQuestionWeather = () => {
    if (ubicacion === "" || pais === "") {
      Swal.fire({
        icon: "warning",
        title: "Asegúrese de ingresar ambos datos",
        text: "No se ingresó la ubicación o el país",
      });
      return;
    }
    consultarAPI();
  };

  return (
    <>
      <section className="sectionForm mx-auto px-2 rounded-3 bg-white ">
        <Form className="form pt-3 pt-md-4">
          <Form.Group
            as={Row}
            className="mb-2 mb-md-3 d-flex justify-content-md-center"
          >
            <Form.Label column sm="4">
              Ingresar Ubicación:
            </Form.Label>
            <Col md="5">
              <Form.Control
                type="text"
                placeholder="Ej: Cafayate"
                minLength={5}
                maxLength={25}
                required
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-2 mb-md-3 d-flex justify-content-md-center"
          >
            <Form.Label column sm="4">
              Seleccionar País:
            </Form.Label>
            <Col md="5">
              <Form.Select
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                required
              >
                <option value="">seleccione</option>
                <option value="af">Afganistán</option>
                <option value="al">Albania</option>
                <option value="dz">Argelia</option>
                <option value="ai">Anguila</option>
                <option value="ag">Antigua y Barbuda</option>
                <option value="ar">Argentina</option>
                <option value="aw">Aruba</option>
                <option value="at">Austria</option>
                <option value="bb">Barbados</option>
                <option value="be">Bélgica</option>
                <option value="ba">Bosnia y Herzegovina</option>
                <option value="bw">Botsuana</option>
                <option value="br">Brasil</option>
                <option value="ca">Canadá</option>
                <option value="co">Colombia</option>
                <option value="hr">Croacia</option>
                <option value="cy">Chipre</option>
                <option value="cz">República Checa</option>
                <option value="dk">Dinamarca</option>
                <option value="ee">Estonia</option>
                <option value="fi">Finlandia</option>
                <option value="fr">Francia</option>
                <option value="de">Alemania</option>
                <option value="gr">Grecia</option>
                <option value="gy">Guayana</option>
                <option value="hu">Hungría</option>
                <option value="is">Islandia</option>
                <option value="in">India</option>
                <option value="id">Indonesia</option>
                <option value="ie">Irlanda</option>
                <option value="il">Israel</option>
                <option value="it">Italia</option>
                <option value="jm">Jamaica</option>
                <option value="ke">Kenia</option>
                <option value="kw">Kuwait</option>
                <option value="lv">Letonia</option>
                <option value="lt">Lituania</option>
                <option value="lu">Luxemburgo</option>
                <option value="mg">Madagascar</option>
                <option value="mw">Malaui</option>
                <option value="mt">Malta</option>
                <option value="mh">Islas Marshall</option>
                <option value="mx">México</option>
                <option value="fm">Micronesia</option>
                <option value="md">Moldavia</option>
                <option value="mn">Mongolia</option>
                <option value="me">Montenegro</option>
                <option value="nl">Países Bajos</option>
                <option value="nz">Nueva Zelanda</option>
                <option value="no">Noruega</option>
                <option value="om">Omán</option>
                <option value="pw">Palaos</option>
                <option value="pg">Papúa Nueva Guinea</option>
                <option value="py">Paraguay</option>
                <option value="pl">Polonia</option>
                <option value="pt">Portugal</option>
                <option value="ro">Rumania</option>
                <option value="ru">Rusia</option>
                <option value="lc">Santa Lucía</option>
                <option value="vc">San Vicente y las Granadinas</option>
                <option value="ws">Samoa</option>
                <option value="sn">Senegal</option>
                <option value="rs">Serbia</option>
                <option value="sk">Eslovaquia</option>
                <option value="si">Eslovenia</option>
                <option value="sb">Islas Salomón</option>
                <option value="za">Sudáfrica</option>
                <option value="es">España</option>
                <option value="sr">Surinam</option>
                <option value="se">Suecia</option>
                <option value="ch">Suiza</option>
                <option value="tz">Tanzania</option>
                <option value="th">Tailandia</option>
                <option value="to">Tonga</option>
                <option value="tt">Trinidad y Tobago</option>
                <option value="gb">Reino Unido</option>
                <option value="us">Estados Unidos de América</option>
                <option value="vu">Vanuatu</option>
                <option value="zw">Zimbabue</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <div className="text-center pt-3 pt-lg-3">
            <Button variant="primary" className="px-5" onClick={handleQuestionWeather}>
              Consultar Clima
            </Button>
          </div>
        </Form>
      </section>
      <Clima clima={clima}></Clima>
    </>
  );
};

export default FormularioClima;
