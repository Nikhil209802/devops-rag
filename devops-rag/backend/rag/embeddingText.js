export function createEmbeddingText(incident) {
    return `
Incident: ${incident.title}

Service: ${incident.service}

Category: ${incident.category}

Severity: ${incident.severity}

Environment: ${incident.environment}

Description: ${incident.description}

Symptoms:
${incident.symptoms.join("\n")}

Logs:
${incident.logs.join("\n")}

Affected Components:
${incident.affected_components.join("\n")}

Root Cause:
${incident.root_cause}

Resolution:
${incident.resolution.join("\n")}

Preventive Actions:
${incident.preventive_actions.join("\n")}

Impact:
${incident.impact}

Status: ${incident.status}

Resolution Time:
${incident.resolution_time}

Keywords:
${incident.keywords.join(", ")}
`;
}
