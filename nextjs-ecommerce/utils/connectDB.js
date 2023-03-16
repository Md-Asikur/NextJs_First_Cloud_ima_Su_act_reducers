import mongoose from 'mongoose'

const connectDB = () => {
    if(mongoose.connections[0].readyState){
        console.log('Already connected.')
        return;
    }
    mongoose.connect(
      "mongodb+srv://Asikur:12345@cluster0.txiokqr.mongodb.net/nextJs_DevAtV",
      {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) throw err;
        console.log("Connected to mongodb.");
      }
    );
}


export default connectDB