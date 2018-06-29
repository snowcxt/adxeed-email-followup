"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var template_1 = __importDefault(require("lodash/template"));
var body_1 = __importDefault(require("./body"));
var paragraph_1 = __importDefault(require("./paragraph"));
var parse_1 = __importDefault(require("./parse"));
var bodyTemp = template_1.default(body_1.default);
function draftToEmail(draft) {
    return bodyTemp({
        body: parse_1.default(draft, {
            bold: {
                left: '<strong>',
                right: '</strong>',
            },
            paragraph: paragraph_1.default,
            variable: {
                left: '`__',
                right: '__`',
            },
        }),
    });
}
exports.default = draftToEmail;
