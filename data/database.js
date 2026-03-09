import { readFileSync } from "fs";
import path from "path";

const dbPath = path.resolve("data", "db.json");

// Funktion zum Laden der DB
export const loadDatabase = () => {
  const data = readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
};
