import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss"

class Nav extends React.Component {

    render() {
        return (
            <nav>
                <div className="logo"><Link to="/">Bioinformatics</Link></div>
                <div className="links">
                <Link to="/about/">About</Link>
                </div>
            </nav>
        )
    }
}

export default Nav;