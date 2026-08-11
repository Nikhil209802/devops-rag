import express from "express";
import incidentRoutes from "./routes/Incident.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/incidents/", incidentRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});