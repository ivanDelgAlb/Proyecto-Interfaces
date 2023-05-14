import React from "react";

export default function NavbarError() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="signUpNav">
                <div className="container px-4">
                    <a className="navbar-brand" href="/">Piezzo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Volver a la página principal</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}