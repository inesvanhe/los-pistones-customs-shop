import express from "express";
import { getAllServices, getServiceById } from "./services.controller.js";

const router = express.Router();

router.get("/", getAllServices);
router.get("/:id", getServiceById);

export default router;
