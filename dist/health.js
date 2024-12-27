"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRouter = void 0;
const express_1 = __importDefault(require("express"));
const healthRouter = express_1.default.Router();
exports.healthRouter = healthRouter;
healthRouter.use(express_1.default.json());
healthRouter.get("/health", (req, res) => {
    res.status(200).send('Server is up and running');
});
