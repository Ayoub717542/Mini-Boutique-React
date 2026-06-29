import { useState } from "react";
function Header(){
        const [dark,setDark]=useState(localStorage.getItem("theme")==="dark");
if(dark){
    document.body.classList.add("dark-mode")
}
    return(
         <header>
          <div className="header-top">
            <h1>My Boutique</h1>
            <button className="nav-toggle" onClick={() => setOpen(!open)}  aria-label="Ouvrir le menu" aria-expanded="false">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
    <nav className={open ? "active":""}>
        <ul>
            <li><input type="text" id="search_input" placeholder="Search products..." /></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#" className="theme-toggle" 
                onClick={(e) =>{ 
                e.preventDefault()
                setDark(!dark);
                document.body.classList.toggle("dark-mode",!dark);
                localStorage.setItem("theme",!dark ? "dark" :"light");}}>
                <i className={`fa-solid  ${dark ? "fa-sun" : "fa-moon"}`} ></i></a></li> 
        </ul>
    </nav>
    </header>
    )
}
export default Header