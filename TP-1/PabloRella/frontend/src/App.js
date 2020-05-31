import React, { Fragment } from "react";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Barra from "./components/layout/Barra";
import ListadoTareas from "./components/tareas/ListadoTareas";
import ProyectoState from "./context/proyectos/proyectoState";

function App() {
  return (
    <ProyectoState>
      <Fragment>
        <Barra />
        <div class="contenedor-app">
          <Sidebar />
          <div class="seccion-principal">
            <main className="contenedor-tareas">
              <ListadoTareas />
            </main>
          </div>
        </div>
        <Footer />
      </Fragment>
    </ProyectoState>
  );
}

export default App;
