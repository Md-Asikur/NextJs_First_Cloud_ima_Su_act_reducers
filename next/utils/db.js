import mongoose from "mongoose";

// mongoose.set("strictQuery", false);
const connectionDb =async () => {
   try {
     const { connection } = await mongoose.connect(process.env.MONGODB_URL);
     console.log(`Mongodb connection ${connection.host}`);
   } catch (error) {
    console.log(`Mongodb connection ${error.msg}`);
   }

};
export default connectionDb;
