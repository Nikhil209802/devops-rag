import fs from "fs";
import path from "path";

export function getAllIncidents() {
    const filePath = path.join(process.cwd(), "data", "incidents.json");

    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data);
}