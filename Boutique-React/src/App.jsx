import Header from "./Components/Header.jsx";
import products from "./data/products.json";
import ProductList from "./Components/ProductList.jsx";
import Footer from "./Components/Footer.jsx";
import { use, useState } from "react";
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



  return (
    <>
      <Header
        cart={cart}
        deleteProduct={deleteProduct}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <div>
        <ProductList
          products={filterProducts}
          onDeleteProduct={handleDeleteProduct}
          onAddToCart={handleAddToCart}
        />
      </div>

      <Footer />
    </>
  );
}
export default App;
