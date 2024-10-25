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
exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.getUserById = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
const saltRounds = 10;
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const hashedPassword = yield bcrypt_1.default.hash(data.password, saltRounds);
    return yield prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword,
            role: (_a = data.role) !== null && _a !== void 0 ? _a : client_1.Role.CUSTOMER,
            adress: data.adress,
        }
    });
});
exports.createUser = createUser;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.findUnique({
        where: { id },
        include: {
            orders: true,
            reviews: true,
            carts: true
        }
    });
});
exports.getUserById = getUserById;
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    let updatedData = Object.assign({}, data);
    if (data.password) {
        const hashedPassword = yield bcrypt_1.default.hash(data.password, saltRounds);
        updatedData.password = hashedPassword;
    }
    return yield prisma.user.update({
        where: { id },
        data: updatedData
    });
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.user.delete({
        where: { id },
    });
});
exports.deleteUser = deleteUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.findMany({
        include: {
            orders: true,
            reviews: true,
            carts: true
        }
    });
});
exports.getAllUsers = getAllUsers;
