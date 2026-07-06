import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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

    )
}
export default Home;