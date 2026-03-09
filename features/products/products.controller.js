import { loadDatabase } from "../../data/database.js";

// Alle Produkte
export const getAllProducts = (req, res) => {
  const db = loadDatabase();
  res.json(db.products);
};

// Produkt nach ID
export const getProductById = (req, res) => {
  const db = loadDatabase();
  const product = db.products.find((p) => p.id === parseInt(req.params.id));
  if (!product)
    return res.status(404).json({ message: "Produkt nicht gefunden" });
  res.json(product);
};
