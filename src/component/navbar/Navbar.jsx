import React from "react";
import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mb-5 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inico</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Acerca de nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Catalogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <CardWidget/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            


        </div>
    )
}

export default NavBar