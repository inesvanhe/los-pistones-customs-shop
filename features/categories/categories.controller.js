import { loadDatabase } from "../../data/database.js";

// Alle Kategorien
export const getAllCategories = (req, res) => {
  const db = loadDatabase();
  res.json(db.categories);
};

// Kategorie nach ID
export const getCategoryById = (req, res) => {
  const db = loadDatabase();
  const category = db.categories.find((c) => c.id === parseInt(req.params.id));
  if (!category)
    return res.status(404).json({ message: "Kategorie nicht gefunden" });
  res.json(category);
};
