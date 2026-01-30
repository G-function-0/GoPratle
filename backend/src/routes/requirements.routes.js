import express from "express";
import requirementsController from "../controller/requirements.controller.js";

const router = express.Router();

router.post("/requirements",requirementsController.createRequirement);
router.get("/requirements",requirementsController.getAllRequirements);


export {router};