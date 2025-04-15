import mongoose from "mongoose";
import "dotenv/config";

mongoose.set("returnOriginal", false);

mongoose.connect(process.env.MONGODB_URI).catch((err) => {
  console.log(`Error connection to Mongo Db: ${err.message}`);
});

mongoose.connection.on("disconected", () => {
  console.log("disconected from MongoDb");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDb connection error: ${err}`);
});

export default mongoose.connection;
