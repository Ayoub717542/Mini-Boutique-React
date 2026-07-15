import { useParams } from "react-router-dom";
function ProductDetails({products}){
const {id} = useParams();
const product = products.find(p => p.id === Number(id));
    if (!product) return <p>Product not found</p>;
    return(
        <div className="product_details">
      <h1>product content</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.price}Mad</p>
      <p>{product.type}</p>

        </div>

    )
}
export default ProductDetails;