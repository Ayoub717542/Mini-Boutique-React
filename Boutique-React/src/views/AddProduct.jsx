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
    <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name..." {...register("name")} />
        <input placeholder="Price..." {...register("price")} />
        <input placeholder="Type..." {...register("type")} />
        <input placeholder="Image URL..." {...register("image")} />
        <button type="submit">Add Product</button>
    </form>
   )
}
export default AddProduct;