import express from "express"
import { getAllProductCategory } from "../controllers/productControlerController.js";

//create router
const router = express.Router();

//routes
router.get("/category",getAllProductCategory);

// export 
export default router;