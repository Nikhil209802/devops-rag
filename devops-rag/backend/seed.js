import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import Incident from "./models/Incident.js";

await mongoose.connect("mongodb://localhost:27017/devops-rag");

const filePath = path.join(
    process.cwd(),
    "data",
    "incidents.json"
);

const data = JSON.parse(
    fs.readFileSync(filePath, "utf-8")
);

await Incident.insertMany(data.incidents);

console.log("Incidents inserted successfully");

await mongoose.disconnect();
