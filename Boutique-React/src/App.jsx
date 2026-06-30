import Header from "./Components/Header.jsx"
import products from "./data/products.json"
import ProductList from "./Components/ProductList.jsx"
import Footer from "./Components/Footer.jsx"
import { useState } from "react"
function App() {
  const [Products , setProducts]= useState(products)
  const [cart, setCart] = useState([]);

  function handleDeleteProduct(productId) {
    let updateProducts =[]
    for(let i = 0; i<Products.length; i++){
      if(Products[i].id !== productId){
        updatePr-oducts.push(Products[i]);
      }
    }
  setProducts(updateProducts);
}

function handleAddToCart(product) {
    let newCart = cart.slice();
    let exist =newCart.find(function(item){
      return item.id ===product.id;
    });
    if(exist){
      exist.quantity = exist.quantity+1;
      exist.totalAmount = exist.quantity*exist.price;
    }else{
    let newProduct ={
      id: product.id,
      name: product.name,
      type: product.type,
      price: product.price,
      quantity :1,
      totalAmount:product.price
 };
  newCart.push(newProduct);
    }
setCart(newCart);
}
  return (
    <>
     <Header cart={cart} />

       <div>
        <h1>My Shop</h1>
        <ProductList products={Products} onDeleteProduct={handleDeleteProduct}  onAddToCart={handleAddToCart}/>
      </div>

    <Footer />
    </>
     
  )

}
export default App
