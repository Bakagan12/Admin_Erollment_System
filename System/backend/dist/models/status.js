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
exports.Status = void 0;
const db_1 = __importDefault(require("../config/db"));
class Status {
    constructor(id, status_name) {
        this.id = id;
        this.status_name = status_name;
    }
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield (0, db_1.default)('status').select('*');
            return results.map(row => new Status(row.id, row.status_name));
        });
    }
}
exports.Status = Status;
