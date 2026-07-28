import * as incidentService from "../services/incidentService.js";

export function getAllIncidents(req, res) {
    const incidents = incidentService.getAllIncidents();
    res.json(incidents);
}