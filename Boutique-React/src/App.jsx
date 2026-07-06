import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header.jsx";
import products from "./data/products.json";
import Home from "./views/Home.jsx"
import AddProduct from "./views/AddProduct";
import ProductList from "./Components/ProductList.jsx";
import Footer from "./Components/Footer.jsx";
import { useState } from "react";
function App() {
  const [Products, setProducts] = useState(products);
  const [cart, setCart] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function handleDeleteProduct(productId) {
    setProducts((products) =>
      products.filter((product) => product.id !== productId),
    );
  }

  function handleAddToCart(product) {
    let newCart = cart.slice();
    let exist = newCart.find(function (item) {
      return item.id === product.id;
    });
    if (exist) {
      exist.quantity = exist.quantity + 1;
      exist.totalAmount = exist.quantity * exist.price;
    } else {
      let newProduct = {
        id: product.id,
        name: product.name,
        type: product.type,
        price: product.price,
        quantity: 1,
        totalAmount: product.price,
      };
      newCart.push(newProduct);
    }
    setCart(newCart);
  }

  function deleteProduct(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  const filterProducts = Products.filter((product) =>
    product.name.toLocaleLowerCase().includes(searchInput.toLowerCase()),
  );

  function addNewProduct(newProduct){
    setProducts((prevProducts)=>[...prevProducts,newProduct])
  }
  return (
       <BrowserRouter>
       <Routes>
        <Route path="/" element=
        {
        <Home
            cart={cart}
            deleteProduct={deleteProduct}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            filterProducts={filterProducts}
            handleDeleteProduct={handleDeleteProduct}
            handleAddToCart={handleAddToCart}>
           
        </Home>} >
        </Route>
        <Route path="/AddProduct" element=
        {
          <AddProduct addNewProduct={addNewProduct}/>
        }>

        </Route>
       </Routes>
       </BrowserRouter>
  );
}
export default App;
