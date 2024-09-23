import Img from "../model/images.model.js";

export const getImg = async (req, res) => {
    try {
        const image = await Img.find()
        res.status(200).json(image)
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error)
    }
};
