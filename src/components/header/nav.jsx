import react from "react";
import { createContext, useState, useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

export default function Nav() {
    const [bars, setBars] = useState(true);

    function handleClick() {
        setBars(!bars)
    }

    return (<>

        <nav className="nav">
            {bars ? <FontAwesomeIcon icon={faBars} onClick={handleClick}></FontAwesomeIcon> : <><FontAwesomeIcon icon={faTimes} onClick={handleClick}></FontAwesomeIcon><div className="container-nav">
                <a>inicio</a><a>inicio</a><a>inicio</a><a>inicio</a></div></>}

        </nav>

    </>
    )
}