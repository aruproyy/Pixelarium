import express from "express";
import { getImg } from "../controller/image.controller.js";

const router = express.Router();
router.get("/", getImg);

export default router;
