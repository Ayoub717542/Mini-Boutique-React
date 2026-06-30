import { useState } from "react";
function Header({ cart }){
const [showCart,setShowCart]=useState(false)


    let totalProducts=0;
    for(let i = 0 ; i<cart.length; i++){
        totalProducts= totalProducts+cart[i].quantity;
    }


    const [dark,setDark]=useState(localStorage.getItem("theme")==="dark");
if(dark){
    document.body.classList.add("dark-mode")
}
    return(
         <header >
          <div className="header-top">
            <h1>My Boutique</h1>
            <button className="nav-toggle" onClick={() => setOpen(!open)}  aria-label="Ouvrir le menu" aria-expanded="false">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        <nav className={open ? "active":""}>
        <ul>
            <li><input type="text" id="search_input" placeholder="Search products..." /></li>
            <div className="CartPannel" onClick={function(){setShowCart(!showCart)}}>
                {
                    showCart &&(
                <div className="cart-box"
                 onClick={(e) => e.stopPropagation()}> 
                    <h3>My Cart</h3>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Amount: {item.totalAmount} MAD</p>
                        </div>
                    ))}
                </div>
            )}  
            <i className="fa-solid fa-cart-shopping"></i> {totalProducts}
            </div>
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