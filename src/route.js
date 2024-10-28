"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("./controller/userController");
const authController_1 = require("./controller/authController");
const router = express_1.default.Router();
console.log("Route loaded");
router.post("/users", userController_1.registerUser);
router.get("/users", userController_1.getUsers);
router.get("/users/:id", userController_1.getUser);
router.put("/users/:id", userController_1.ModifyUser);
router.delete("/users/:id", userController_1.removeUser);
//routes from auth
router.post("/signin", authController_1.signin);
router.post("/login", authController_1.login);
exports.default = router;
