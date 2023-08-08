import React from "react";
import "../estilos/nav.css";

function nav(){
    return(
        <div className="nav-bar">
            <h4 className="titulo">JuanD</h4>
            <div className="navegation">
                <ul>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">sing In</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </div>
    );
}
export default nav;