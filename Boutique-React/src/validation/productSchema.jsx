import * as Yup from "yup";

const productSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required"),

  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .min(1, "Price must be at least 1"),

  type: Yup.string()
    .required("Category is required"),

  image: Yup.string()
    .required("Image is required")
    .url("Please enter a valid image URL"),
});

export default productSchema;