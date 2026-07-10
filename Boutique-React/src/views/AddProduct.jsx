import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import productSchema from "../validation/productSchema";


function AddProduct({addNewProduct}){


  const navigate= useNavigate();
const {register ,handleSubmit}=useForm();
   function onSubmit(data){
    const newProduct ={
        id : Date.now(),
        name : data.name,
        price : Number(data.price),
        type: data.type,
        image: data.image
    };
    addNewProduct(newProduct);
    navigate("/");
   }

   return(
<form className="add-product-container" onSubmit={handleSubmit(onSubmit)}>
  <h2>Add New Product</h2>

  <div className="form-group">
    <label>Product Name</label>
    <input
      type="text"
      name="name"
      placeholder="Enter product name"
      {...register("name")}
    />
  </div>

  <div className="form-group">
    <label>Price</label>
    <input
      type="number"
      name="price"
      placeholder="Enter price"
      {...register("price")}
    />
  </div>

  <div className="form-group">
    <label>Category</label>
    <input
      type="text"
      name="category"
      placeholder="Enter category"
      {...register("type")}
    />
  </div>

  <div className="form-group">
    <label>Image URL</label>
    <input
    name="image"
      type="text"
      placeholder="https://example.com/image.jpg"
      {...register("image")}
    />
  </div>

  <button type="submit" className="add-btn" >
    Add Product
  </button>
</form>
   )
}
export default AddProduct;