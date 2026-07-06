import { useForm } from "react-hook-form";

function AddProduct({addNewProduct}){
const {register ,handleSubmit}=useForm();
   function onSubmit(data){
      console.log("Form submitted:", data);     
    const newProduct ={
        id : Date.now(),
        name : data.name,
        price : Number(data.price),
        type: data.type,
        image: data.image
    };
    addNewProduct(newProduct);
   }

   return(
<form className="add-product-container" onSubmit={handleSubmit(onSubmit)}>
  <h2>Add New Product</h2>

  <div className="form-group">
    <label>Product Name</label>
    <input
      type="text"
      placeholder="Enter product name"
      {...register("name")}
    />
  </div>

  <div className="form-group">
    <label>Price</label>
    <input
      type="number"
      placeholder="Enter price"
      {...register("price")}
    />
  </div>

  <div className="form-group">
    <label>Category</label>
    <input
      type="text"
      placeholder="Enter category"
      {...register("type")}
    />
  </div>

  <div className="form-group">
    <label>Image URL</label>
    <input
      type="text"
      placeholder="https://example.com/image.jpg"
      {...register("image")}
    />
  </div>

  <button type="submit" className="add-btn">
    Add Product
  </button>
</form>
   )
}
export default AddProduct;