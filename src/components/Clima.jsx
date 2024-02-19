const Clima = ({ clima }) => {
  if (!clima) {
    return (
      <section className="sectionWeather mx-auto my-5 rounded-2">
        <p className="pt-3 mb-3 ps-3 fw-bold fs-4">El Tiempo Ahora</p>
        <p className="text-center py-5">
          Aquí se detalla la información del clima de la ciudad ingresada.
        </p>
      </section>
    );
  }

  const { main, wind, clouds, sys, name, dt } = clima;

  const fecha = new Date(dt * 1000);
  const minutosFormateados = String(fecha.getMinutes()).padStart(2, '0');
  const horaFormateada = String(fecha.getHours()).padStart(2, '0');
  const hora = `${horaFormateada}:${minutosFormateados}`;

  return (
    <section className="sectionWeather mx-auto my-5 rounded-2">
      <p className="pt-3 mb-3 d-flex justify-content-between px-3 align-items-center">
        <span className="fw-bold fs-5">El Tiempo Ahora</span>
        <span>{hora}</span>
      </p>
      {clima && (
        <div className="row py-3 border-top border-2 px-3">
          <div className="d-flex gap-md-3 align-items-center justify-content-center">
            <img
              src={`https://openweathermap.org/img/w/${clima.weather[0].icon}.png`}
              alt="imagen representativa del clima"
              className="imgWeather"
            />
            <h2 className="text-center my-3 fw-bold">
              {(main.temp - 273.15).toFixed(0)}°
              <span className="fw-normal"> c</span>
            </h2>
          </div>
          <div className="text-center mb-4">
            <p className="mb-0 fw-bold">{name}</p>
            <p>{sys.country}</p>
          </div>
          <div className="col-md-6">
            <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
              <span>Velocidad del viento</span>
              <span>{(wind.speed * 3.6).toFixed(0)} Km/h</span>
            </article>
            <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
              <span>Humedad</span>
              <span>{main.humidity}%</span>
            </article>
            <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
              <span>Presión</span>
              <span>{main.pressure} hPa</span>
            </article>
          </div>
          <div className="col-md-6">
            <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
              <span>Nubosidad</span>
              <span>{clouds.all}%</span>
            </article>
            <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
              <span>Visibilidad</span>
              <span>{clima.visibility / 1000} Km</span>
            </article>
          </div>
        </div>
      )}
    </section>
  );
};

export default Clima;
