import { Product } from "@/model/ProductModel";






export default async (req, res)=> {
  const { method } = req;
    const { ClientID } = req.query;
   
  switch (method) {
    case "PUT":
      try {
        const { title } = req.body;
        if (!title) return "inavalid data";
        await Product.updateOne({ _id: ClientID }, { title });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "DELETE":
      try {
        await Product.deleteOne({ _id: ClientID });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
