import express from "express";
import dotenv from "dotenv";

// Feature-Routen importieren
import productsRoutes from "./features/products/products.routes.js";
import servicesRoutes from "./features/services/services.routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Feature-Routen
app.use("/products", productsRoutes);
app.use("/services", servicesRoutes);

// Fallback-Route für nicht gefundene Endpunkte
app.use((req, res) => {
  res.status(404).json({ message: "Route nicht gefunden" });
});

// Server starten
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
