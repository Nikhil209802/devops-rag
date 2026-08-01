import * as incidentService from "../services/incidentService.js";

export function getAllIncidents(req, res) {
    const incidents = incidentService.getAllIncidents();
    res.json(incidents);
}
export function getIncidentById(req,res){
    const id = req.params.id;

    const incident = incidentService.getIncidentById(id);

    if(!incident){
        return res.status(404).json({message: "Incident not found"});
    }
    res.json(incident);
}