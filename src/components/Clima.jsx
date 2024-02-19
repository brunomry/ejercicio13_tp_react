import React from "react";

const Clima = () => {
  return (
    <section className="sectionClimate mx-auto my-5 rounded-2">
      <p className="pt-3 mb-3 ps-3 fw-bold fs-4">El Tiempo Ahora</p>
      <div className="row py-3 border-top border-2 px-3">
        <h2 className="text-center my-3 fw-bold">22°c</h2>
        <div className="text-center mb-4">
        <p className="mb-0">Ubicación:</p>
        <p>País:</p>
        </div>       
        <div className="col-md-6">
          <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
            <span>Velocidad del viento</span>
            <span>14 Km/h</span>
          </article>
          <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
            <span>Humedad</span>
            <span>14 Km/h</span>
          </article>
          <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
            <span>Precipitaciones</span>
            <span>14 Km/h</span>
          </article>
        </div>
        <div className="col-md-6">
          <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
            <span>Presión</span>
            <span>14 Km/h</span>
          </article>
          <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
            <span>Nubosidad</span>
            <span>14 Km/h</span>
          </article>
          <article className="d-flex justify-content-between border-bottom border-2 pb-2 mb-2">
            <span>Visibilidad</span>
            <span>14 Km/h</span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Clima;
