import Header from "./Components/Header.jsx"
import products from "./data/products.json"
import ProductList from "./Components/ProductList.jsx"
import Footer from "./Components/Footer.jsx"
import { useState } from "react"
function App() {
  const [Products , setProducts]= useState(products)
  const [cart, setCart] = useState([]);

  function handleDeleteProduct(productId) {
  const updateProducts = Products.filter(
    (product) => product.id !== productId
  );
  setProducts(updateProducts);
}

function handleAddToCart(product) {
  const exist = cart.find(
    (item) => item.id === product.id
  );

  if (exist) {
    exist.quantity += 1;

    setCart([...cart]);
  } else {
    setCart([
      ...cart,
      { ...product, quantity: 1 }
    ]);
  }
}
  return (
    <>
     <Header />

       <div>
        <h1>My Shop</h1>
        <ProductList products={Products} onDeleteProduct={handleDeleteProduct}  onAddToCart={handleAddToCart}
 />
      </div>

    <Footer />
    </>
     
  )

}
export default App
