import { Product } from "@/model/ProductModel";
import connectionDb from "@/utils/db";

export default async(req, res)=> {
  if (req.method === "GET") {
      try {
    //   await connectionDb()
          const products=await Product.find();
           return res.status(200).json({ success: true, products });
    } catch (error) {
      return res.status(500).json(error.msg);
    }
  }
}
