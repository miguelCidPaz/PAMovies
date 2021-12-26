import react from "react";
import Nav from "./nav"


export default function Header() {
    return <>
        <div className="prueba"></div>
        <header className="header">
            <div className="container container-header">
                <a className="logo">logo</a>
                <Nav></Nav>

            </div>
        </header>
    </>
}