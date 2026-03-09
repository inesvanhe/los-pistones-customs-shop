import { loadDatabase } from "../../data/database.js";

// Alle Services
export const getAllServices = (req, res) => {
  const db = loadDatabase();
  res.json(db.services);
};

// Service nach ID
export const getServiceById = (req, res) => {
  const db = loadDatabase();
  const service = db.services.find((s) => s.id === parseInt(req.params.id));
  if (!service)
    return res.status(404).json({ message: "Service nicht gefunden" });
  res.json(service);
};
