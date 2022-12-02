import Products from "../../models/Products";
import connectDB from "../../middleware/mongoose";

//http://localhost:3000/api/getProducts

const handler = async (req, res) => {
  const data = await Products.find();
  res.status(200).json(data);
}

export default connectDB(handler);