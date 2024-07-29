"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStudentOnsite = exports.getStudent = exports.getOnsiteStudent = exports.getAllStudent = void 0;
const data_1 = __importDefault(require("./data"));
const getAllStudent = () => {
    return data_1.default;
};
exports.getAllStudent = getAllStudent;
const getOnsiteStudent = () => {
    return data_1.default.filter((student) => student.isOnsiteAllowed);
};
exports.getOnsiteStudent = getOnsiteStudent;
const getStudent = (rollNo) => {
    return data_1.default.find((student) => student.rollNo === rollNo);
};
exports.getStudent = getStudent;
const isStudentOnsite = (rollNo) => {
    const foundUser = data_1.default.find((student) => student.rollNo === rollNo && student.isOnsiteAllowed);
    if (foundUser) {
        return true;
    }
    else {
        return false;
    }
};
exports.isStudentOnsite = isStudentOnsite;
