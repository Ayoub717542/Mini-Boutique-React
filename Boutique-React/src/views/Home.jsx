import { Link } from "react-router-dom";
import Header from '../Components/header';
import ProductList from '../Components/ProductList';
import Footer from '../Components/Footer';
function Home(
    { 
    cart,
    deleteProduct,
    searchInput,
    setSearchInput,
    filterProducts,
    handleDeleteProduct,
    handleAddToCart,
}){
    return(
        <>
    <div className="home-section">
    <Link to="/addProduct">
    <button>Add New Item</button>
    </Link>
    
    </div>
      <div>
        
        <ProductList
          products={filterProducts}
          onDeleteProduct={handleDeleteProduct}
          onAddToCart={handleAddToCart}
        />
      </div>

  
        </>

    )
}
export default Home;