import * as incidentService from "../services/incidentService.js";

export async function getAllIncidents(req, res) {
    const incidents = await incidentService.getAllIncidents();
    res.json(incidents);
}
export async function getIncidentById(req, res) {
    const id = req.params.id;

    const incident = await incidentService.getIncidentById(id);

    if (!incident) {
        return res.status(404).json({
            message: "Incident not found"
        });
    }

    res.json(incident);
}
export async function createIncident(req, res) {
    const incidentData = req.body;

    const newIncident =
        await incidentService.createIncident(incidentData);

    res.status(201).json(newIncident);
}
export async function updateIncident(req, res) {

    const id = req.params.id;
    const incidentData = req.body;

    const updatedIncident =
        await incidentService.updateIncident(id, incidentData);

    if (!updatedIncident) {
        return res.status(404).json({
            message: "Incident not found"
        });
    }

    res.json(updatedIncident);
}

export async function deleteIncident(req, res) {

    const id = req.params.id;

    const deletedIncident =
        await incidentService.deleteIncident(id);

    if (!deletedIncident) {
        return res.status(404).json({
            message: "Incident not found"
        });
    }

    res.json({
        message: "Incident deleted successfully",
        incident: deletedIncident
    });
}