import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import imageRoute from "./route/image.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDb

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDb")
} catch (error) {
    console.log("Error: ", error)
}

// Defining Route
app.use("/image", imageRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})