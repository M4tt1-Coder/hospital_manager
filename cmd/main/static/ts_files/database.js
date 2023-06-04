"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const mysql_1 = __importDefault(require("mysql"));
var pool = mysql_1.default.createPool({
    host: '127.0.0.1:3306',
    user: 'root',
    password: 'MySqLt3sT25#',
    database: 'hospital',
});
exports.pool = pool;
