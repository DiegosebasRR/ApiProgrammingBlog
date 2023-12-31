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
exports.loginUser = exports.registerNewUser = void 0;
const auth_1 = __importDefault(require("../models/auth"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const registerNewUser = ({ firstname, lastname, email, password, image, }) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield auth_1.default.findOne({ email });
    if (userExists)
        return "User_exists";
    const passHash = yield (0, bcrypt_handle_1.encrypted)(password);
    const registerNewUser = yield auth_1.default.create({
        firstname,
        lastname,
        email,
        password: passHash,
        image,
    });
    return registerNewUser;
});
exports.registerNewUser = registerNewUser;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield auth_1.default.findOne({ email });
    if (!userExists)
        return "User_not_exist ";
    const passwordHash = userExists.password;
    const isCorrect = yield (0, bcrypt_handle_1.verified)(password, passwordHash);
    if (!isCorrect)
        return "Password_incorrect";
    const token = (0, jwt_handle_1.generateToken)(userExists.email);
    const data = {
        token,
        user: userExists,
    };
    return data;
});
exports.loginUser = loginUser;
