import "./style.module.css"
import React from "react"

const Main = () =>{

    const handleLogout = () =>{
        localStorage.removeItem("token");
        window.location.reload();
    }
    return(
        
        <div className="main_container">
            <nav className="navbar">
                <h1>Fakebook</h1>
                <button className="white_btn" onClick={handleLogout}>Log out</button>
            </nav>
        </div>
    )
}
export default Main;