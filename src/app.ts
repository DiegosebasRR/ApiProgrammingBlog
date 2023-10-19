import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";
import { Request, Response } from "express";
import { router } from "./routes/index";
import fileUpload from "express-fileupload";
const PORT = process.env.PORT || 3005;
db().then(() => console.log("Conexion exitosa"));
const app = express();
app.use(cors());
app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);
app.get("/", (_req: Request, res: Response) => {
  return res.send("Express Typescript on Render");
});
app.use(router);
app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
