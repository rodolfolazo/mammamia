import cors from "cors";
import "dotenv/config";
import express from "express";

import authRoute from "./routes/auth.route.js";
import checkoutRoute from "./routes/checkout.route.js";
import pizzaRoute from "./routes/pizza.route.js";

const app = express();

const allowedOrigins = [
  "https://app-mammamia.levantecode.com",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins
}));



app.use("/api/auth", authRoute);
app.use("/api/pizzas", pizzaRoute);
app.use("/api/checkouts", checkoutRoute);
app.use((_, res) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`API listening on port ${PORT}`);
});
