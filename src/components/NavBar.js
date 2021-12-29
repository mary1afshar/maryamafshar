import React from "react";
import '../css/NavBar.scss'
import "../css/Main.scss"

const NavBar = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="navbar-wrapper">
                    <div 
                    role="button"
                    /*onClick={() => scrollTo('')}*/
                    className="name"
                    tabIndex={0}
                    >
                        Maryam Afshar.
                    </div>
                    <div className="links-wrapper">
                        <button /*onClick={() => scrollTo('')}*/>About</button>
                        <button /*onClick={() => scrollTo('')}*/>Projects</button>
                        <button /*onClick={() => scrollTo('')}*/>Work</button>
                        <button /*</div>onClick={() => scrollTo('')}*/>Contact</button>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
export default NavBar;