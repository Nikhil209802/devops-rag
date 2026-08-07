import fs from "fs";
import path from "path";

export function getAllIncidents() {
    const filePath = path.join(process.cwd(), "data", "incidents.json");

    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data).incidents;
}

export function getIncidentById(id){
const incidents = getAllIncidents();

    return incidents.find(incident => incident.incident_id === id);
}

export function createIncident(incidentData) {
    const incidents = getAllIncidents();

    const newIncident = {
        incident_id: `INC-${String(incidents.length + 1).padStart(3, "0")}`,
        title: incidentData.title,
        service: incidentData.service,
        category: incidentData.category,
        severity: incidentData.severity,
        environment: incidentData.environment,
        timestamp: incidentData.timestamp || new Date().toISOString(),
        description: incidentData.description,
        symptoms: incidentData.symptoms || [],
        logs: incidentData.logs || [],
        affected_components: incidentData.affected_components || [],
        root_cause: incidentData.root_cause,
        resolution: incidentData.resolution || [],
        preventive_actions: incidentData.preventive_actions || [],
        impact: incidentData.impact,
        status: incidentData.status || "Open",
        resolution_time: incidentData.resolution_time || null,
        keywords: incidentData.keywords || []
    };

    incidents.push(newIncident);

    const filePath = path.join(process.cwd(), "data", "incidents.json");

    fs.writeFileSync(
        filePath,
        JSON.stringify({ incidents }, null, 2)
    );

    return newIncident;
}

export function updateIncident(id, incidentData) {
    const incidents = getAllIncidents();

    const incident = incidents.find(
        incident => incident.incident_id === id
    );

    if (!incident) {
        return null;
    }

    // Update fields here
if (incidentData.title) {
    incident.title = incidentData.title;
}

if (incidentData.service) {
    incident.service = incidentData.service;
}

if (incidentData.category) {
    incident.category = incidentData.category;
}

if (incidentData.severity) {
    incident.severity = incidentData.severity;
}

if (incidentData.environment) {
    incident.environment = incidentData.environment;
}

if (incidentData.description) {
    incident.description = incidentData.description;
}

if (incidentData.status) {
    incident.status = incidentData.status;
}

    // Write back to file
    const filePath = path.join(process.cwd(), "data", "incidents.json");

    fs.writeFileSync(
    filePath,
    JSON.stringify({ incidents }, null, 2)
);

    return incident;
}

export function deleteIncident(id){
    const incidents = getAllIncidents();

    const incidentIndex = incidents.findIndex( incident => incident.incident_id===id);

    if(incidentIndex === -1){
        return null;
    }
    const deletedIncident = incidents[incidentIndex];
    incidents.splice(incidentIndex,1);

    const filePath = path.join(process.cwd(), "data", "incidents.json");

fs.writeFileSync(
    filePath,
    JSON.stringify({ incidents }, null, 2)
);

return deletedIncident;
}