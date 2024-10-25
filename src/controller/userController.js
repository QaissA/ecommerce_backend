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
exports.removeUser = exports.ModifyUser = exports.getUsers = exports.getUser = exports.registerUser = void 0;
const userService_1 = require("../services/userService");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userAdded = yield (0, userService_1.createUser)(req.body);
        res.status(201).json(userAdded);
    }
    catch (error) {
        res.status(500).json({ error: "Error creating user", details: error });
    }
});
exports.registerUser = registerUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, userService_1.getUserById)(parseInt(req.params.id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Error getting user", details: error });
    }
});
exports.getUser = getUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Error getting all users", details: error });
    }
});
exports.getUsers = getUsers;
const ModifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userUpdated = yield (0, userService_1.updateUser)(parseInt(req.params.id), req.body);
        res.status(200).json(userUpdated);
    }
    catch (error) {
        res.status(500).json({ error: "Error updating user", details: error });
    }
});
exports.ModifyUser = ModifyUser;
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removedUser = yield (0, userService_1.deleteUser)(parseInt(req.params.id));
        res.status(200).json(removedUser);
    }
    catch (error) {
        res.status(500).json({ error: "Error removed user", details: error });
    }
});
exports.removeUser = removeUser;
