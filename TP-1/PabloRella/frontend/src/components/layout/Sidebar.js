import React from "react";
import Listado from "../proyectos/Listado";

const Sidebar = () => {
  return (
    <aside>
      <h1 class="">
        TYG <span>web 2020</span>
      </h1>
      <div class="proyectos">
        <h2>Link a apis</h2>
        <Listado />
      </div>
    </aside>
  );
};

export default Sidebar;
