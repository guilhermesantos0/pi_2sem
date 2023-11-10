import React from "react"

import "../styles/components/Header.css"

function Header({ children, color }) {
    return(
        <div className="Header" style={{backgroundColor: color}}>
            {children}
        </div>
    )
}

export default Header