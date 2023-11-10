import React from "react"

import "../styles/components/Header.css"

function Header({ children, color }) {
    return(
        <div className="Header" style={{backgroundColor: color}}>
            <b>{children}</b>
        </div>
    )
}

export default Header