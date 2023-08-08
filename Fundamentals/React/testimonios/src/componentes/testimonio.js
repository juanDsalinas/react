import React from "react";

// segunda forma de exportar
export function Testimonio (){
  return (
    <div className="contenedor-testimonios">
       {/* con el require le indicamos que necesitamos la imagen */}
      <img className="imagen-testimonio" src={require("../img/person-man.jpg")} alt="Image of person"/>
      <div className="contenedor-texto">
        <p className="nombre-testimonio">Rodrigo</p>
        <p className="cargo-testimonio">Full Stack Developer</p>
        <p className="texto-testimonio">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur in consectetur ut commodi magni"</p>
      </div>
    </div>
  );
  
}

// para importar un componente debemos previamente exportado - primera forma de exportar
// export default Testimonio;