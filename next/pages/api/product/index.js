import { Product } from "@/model/ProductModel"
import connectionDb from "@/utils/db";

export default async (req, res) => {
  const {method}=req
  switch (method) {
    case "GET":
      try {
        //   await connectionDb()
        const products = await Product.find();
        return res.status(200).json({ success: true, products });
      } catch (error) {
        return res.status(500).json(error.msg);
      }
      
  case "POST":
     try {
       const { title,images,desc } = req.body;
       // await connectionDb();
       const product = await Product.create(req.body);
      //  await product.save()
       return res.status(201).json({ success: true, product });
     } catch (error) {
       console.log("error", error);
       return res.status(500).json(error);
      }
  
  } 
  
  
}
