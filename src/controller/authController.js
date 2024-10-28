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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = exports.login = exports.signin = void 0;
const authService_1 = require("../services/authService");
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userAdded = yield (0, authService_1.createUser)(req.body);
        res.status(201).json(userAdded);
    }
    catch (error) {
        res.status(500).json({ error: "Error creating user", details: error });
    }
});
exports.signin = signin;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const loginStatus = yield (0, authService_1.loginUser)(email, password);
        console.log("loginStatus", loginStatus);
        res.status(200).json(loginStatus);
    }
    catch (error) {
        res.status(500).json({ error: "Authentification failed", details: error });
    }
});
exports.login = login;
const getToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        (0, authService_1.verifyToken)(token);
    }
    catch (error) {
        res.status(500).json({ error: "verfiction failed", details: error });
    }
});
exports.getToken = getToken;
