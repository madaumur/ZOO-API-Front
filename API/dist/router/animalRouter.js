"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animalRouter = express_1.default.Router();
animalRouter.get('/', (req, res) => {
    res.status(200).send('<h4 style="font-family: Lato,sans-serif; color:purple">Animals API</h4>');
});
animalRouter.post('/new', (req, res) => {
    let data = req.body;
    res.status(201).json({
        msg: 'New animal received',
        data: data,
    });
});
animalRouter.get('/test', (req, res) => {
    res.status(200).send('<h4 style="font-family: Lato,sans-serif; color:red">Production test</h4>');
});
exports.default = animalRouter;