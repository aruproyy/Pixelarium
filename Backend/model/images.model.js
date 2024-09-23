import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    name: String,
    title: String,
    price: String,
    image: String,
    priceCategory: String
})

const Img = mongoose.model("Pixel", imageSchema);

export default Img;