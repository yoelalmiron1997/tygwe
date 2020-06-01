import React from "react";

const Barra = () => {
  return (
    <header className="app-header">
      <img src={process.env.PUBLIC_URL + "/imagen.jpg"} alt="logo" />
      <p className="nombre-usuario">
        <span>TP Nro 1-Rella,Pablo</span>
      </p>
    </header>
  );
};

export default Barra;
