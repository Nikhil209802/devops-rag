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
export function createIncident(req,res){
    const incidentdata = req.body;
    const newIncident = incidentService.createIncident(incidentdata);
    res.status(201).json(newIncident);

}
export function updateIncident(req, res) {
    const id = req.params.id;
    const incidentdata = req.body;
    const updatedIncident = incidentService.updateIncident(id, incidentdata);
    if(!updatedIncident){
        return res.status(404).json({message: "Incident not found"});
    }
    res.json(updatedIncident);
}

export function deleteIncident(req,res){
    const id = req.params.id;
    const deletedIncident = incidentService.deleteIncident(id);
    if(!deletedIncident){
        return res.status(404).json({message: "Incident not found"});
    }
    res.json({message: "Incident deleted successfully",
            incident: deletedIncident
    });
}