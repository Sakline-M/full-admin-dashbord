import express from "express";
const router = express.Router();
import { getSales } from "../controller/sales.js"

router.get("/sales", getSales)

export default router;
