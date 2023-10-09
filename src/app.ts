import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";

import { router } from "./routes/index";
const PORT = process.env.PORT || 3005;
db().then(() => console.log("Conexion exitosa"));
const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
