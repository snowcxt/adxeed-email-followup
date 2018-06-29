"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var forEach_1 = __importDefault(require("lodash/forEach"));
var template_1 = __importDefault(require("lodash/template"));
function parseBlock(block, entityMap, options) {
    var html = '';
    if (!block.text) {
        return '';
    }
    var insertions = {};
    forEach_1.default(block.inlineStyleRanges, function (style) {
        switch (style.style) {
            case 'BOLD':
                insertions[style.offset] = options.bold.left;
                insertions[style.offset + style.length] = options.bold.right;
        }
    });
    var replacements = {};
    forEach_1.default(block.entityRanges, function (entity) {
        replacements[entity.offset] = {
            length: entity.length,
            text: "" + options.variable.left + entityMap[entity.key].data.key + options.variable.right,
        };
    });
    for (var i = 0; i <= block.text.length; i++) {
        var char = block.text.charAt(i);
        var insertion = insertions[i];
        if (insertion) {
            html += insertion;
        }
        var replacement = replacements[i];
        if (replacement) {
            html += replacement.text;
            i += replacement.length - 1;
            char = '';
        }
        if (char) {
            html += char;
        }
    }
    return html;
}
var defaultOptions = {
    bold: {
        left: '<b>',
        right: '</b>',
    },
    paragraph: '<p><%= value %></p>',
    variable: {
        left: '{{',
        right: '}}',
    },
};
function parse(raw, options) {
    var config = __assign({}, defaultOptions, options);
    var html = '';
    var paragraph = template_1.default(config.paragraph);
    forEach_1.default(raw.blocks, function (block) {
        if (!block.text) {
            return;
        }
        html += paragraph({ value: parseBlock(block, raw.entityMap, config) });
    });
    return html;
}
exports.default = parse;
