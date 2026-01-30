import express from "express";
import requirementsController from "../controller/requirements.controller.js";

const router = express.Router();

router.post("/requirements",requirementsController.createRequirement);


export {router};