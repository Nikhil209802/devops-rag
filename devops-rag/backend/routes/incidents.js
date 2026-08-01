import express from "express";
import * as incidentController from "../controllers/incidentController.js";

const router = express.Router();

router.get("/", incidentController.getAllIncidents);

router.get("/:id", incidentController.getIncidentById);
export default router;