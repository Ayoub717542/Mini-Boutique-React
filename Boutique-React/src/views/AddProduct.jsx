import { useNavigate } from "react-router-dom";
import productSchema from "../validation/productSchema";
import {Formik , Field, ErrorMessage, Form } from "formik";

const initialValues={
  name:"",
  price:"",
  type:"",
  image:""
}

function AddProduct({addNewProduct}){

const navigate= useNavigate();

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

    <Formik  
  initialValues={initialValues}
  validationSchema={productSchema}
  onSubmit={onSubmit}
     >
<Form className="add-product-container">
  <h2>Add New Product</h2>

  <div className="form-group">
    <label>Product Name</label>
    <Field
      type="text"
      name="name"
      placeholder="Enter product name"
    />
    <ErrorMessage
  name="name"
  component="p"
  className="error"
/>
  </div>

  <div className="form-group">
    <label>Price</label>
    <Field
      type="number"
      name="price"
      placeholder="Enter price"
    />
    <ErrorMessage
  name="price"
  component="p"
  className="error"
/>
  </div>

  <div className="form-group">
    <label>Category</label>
    <Field
      type="text"
      name="type"
      placeholder="Enter category"
    />
    <ErrorMessage
  name="type"
  component="p"
  className="error"
/>
  </div>

  <div className="form-group">
    <label>Image URL</label>
    <Field
    name="image"
      type="text"
      placeholder="https://example.com/image.jpg"
    />
    <ErrorMessage
  name="image"
  component="p"
  className="error"
/>
  </div>

  <button type="submit" className="add-btn" >
    Add Product
  </button>
</Form>
    </Formik>
   )
}
export default AddProduct;