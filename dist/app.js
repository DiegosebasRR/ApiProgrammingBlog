"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongo_1 = __importDefault(require("./config/mongo"));
const index_1 = require("./routes/index");
const PORT = process.env.PORT || 3005;
(0, mongo_1.default)().then(() => console.log("Conexion exitosa"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    return res.send("Express Typescript on Vercel");
});
app.use(index_1.router);
app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
});
