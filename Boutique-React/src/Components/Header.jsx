import { useState } from "react";
function Header({ cart, deleteProduct, searchInput, setSearchInput }) {
  const [showCart, setShowCart] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  if (dark) {
    document.body.classList.add("dark-mode");
  }

  let totalProducts = 0;
  for (let i = 0; i < cart.length; i++) {
    totalProducts += cart[i].quantity;
  }

  return (
    <header>
      <div className="header-top">
        <h1 className="logo">
          <Link to="/">
            <i className="fa-solid fa-shop"></i> My Boutique
          </Link>
        </h1>

        <input
          type="text"
          id="search_input"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
          aria-expanded="false"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <nav className={open ? "active" : ""}>
        <ul>
          <div
            className="CartPannel"
            onClick={() => setShowCart(!showCart)}
          >
            <i className="fa-solid fa-cart-shopping cart-icon">
            {totalProducts > 0 && (
            <span className="cart-number">{totalProducts}</span>
            )}
            </i>

            {showCart && (
              <div
                className="cart-box"
                onClick={(e) => e.stopPropagation()}
              >
                {cart.length === 0 ? (
                  <div className="empty-cart-container">
                    <img
                      className="emptycart"
                      src="./empty-cart.png"
                      alt="Empty cart"
                    />
                    <h5>No products yet</h5>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />

                      <div className="cart-info">
                        <p>{item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Amount: {item.totalAmount} MAD</p>
                      </div>

                      <div className="close_col">
                        <i
                          className="fa fa-times-circle x-close"
                          onClick={() => deleteProduct(item.id)}
                        ></i>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          <button
            className="theme-toggle"
            onClick={() => {
              setDark(!dark);
              document.body.classList.toggle("dark-mode", !dark);
              localStorage.setItem("theme", !dark ? "dark" : "light");
            }}
          >
            <i className={`fa-solid ${dark ? "fa-sun" : "fa-moon"}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;