import * as Yup from 'yup';
function productSchema(){
    
const validationSchema = Yup.object().shape({
name : Yup.string("name is invalid").required("name is required"),
price : Yup.number().typeError("price must be a number").min(1,"price must be at least 1"),
category : Yup.string().typeError("category must be A string"),
image : Yup.string().required("Image is required").url("Please enter a valid image URL")

})
    
}
export default productSchema