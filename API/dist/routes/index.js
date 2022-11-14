"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animal_routes_1 = __importDefault(require("./animal.routes"));
const specie_routes_1 = __importDefault(require("./specie.routes"));
const router = express_1.default.Router();
router.get('/healthcheck', (rep, res) => res.sendStatus(200));
router.use(animal_routes_1.default);
router.use(specie_routes_1.default);
exports.default = router;
