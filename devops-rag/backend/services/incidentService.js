import Incident from "../models/Incident.js";

export async function getAllIncidents() {
    return await Incident.find();
}

export async function getIncidentById(id) {
    return await Incident.findOne({
        incident_id: id
    });
}

export async function createIncident(incidentData) {

    const incidents = await Incident.find({
        incident_id: /^INC-\d+$/
    });

    let nextNumber = 1;

    if (incidents.length > 0) {
        const numbers = incidents.map(incident =>
            parseInt(incident.incident_id.split("-")[1])
        );

        nextNumber = Math.max(...numbers) + 1;
    }

    const newIncident = {
        incident_id: `INC-${String(nextNumber).padStart(3, "0")}`,

        title: incidentData.title,
        service: incidentData.service,
        category: incidentData.category,
        severity: incidentData.severity,
        environment: incidentData.environment,
        timestamp: incidentData.timestamp || new Date(),
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

    return await Incident.create(newIncident);
}

export async function deleteIncident(id) {

    const deletedIncident =
        await Incident.findOneAndDelete({
            incident_id: id
        });

    return deletedIncident;
}