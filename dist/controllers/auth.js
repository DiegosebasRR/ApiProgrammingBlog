"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registerController = void 0;
const auth_1 = require("../services/auth");
const auth_2 = __importDefault(require("../models/auth"));
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, email, password } = req.body;
    const newData = new auth_2.default({
        firstname,
        lastname,
        email,
        password,
    });
    const responseUser = yield (0, auth_1.registerNewUser)(newData);
    res.send(responseUser);
});
exports.registerController = registerController;
const loginController = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = body;
    const responseUser = yield (0, auth_1.loginUser)({ email, password });
    if (responseUser === "Password_incorrect") {
        res.status(403).send(responseUser);
    }
    else {
        res.send(responseUser);
    }
});
exports.loginController = loginController;
