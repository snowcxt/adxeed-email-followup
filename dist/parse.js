"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function parseBlock(block, entityMap, options) {
    var html = '';
    if (!block.text) {
        return '';
    }
    var insertions = {};
    block.inlineStyleRanges.forEach(function (style) {
        switch (style.style) {
            case 'BOLD':
                insertions[style.offset] = options.bold.left;
                insertions[style.offset + style.length] = options.bold.right;
        }
    });
    var replacements = {};
    block.entityRanges.forEach(function (entity) {
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
    paragraph: {
        left: '<p>',
        right: '</p>',
    },
    variable: {
        left: '{{',
        right: '}}',
    },
};
function parse(raw, options) {
    var config = __assign({}, defaultOptions, options);
    var html = '';
    raw.blocks.forEach(function (block) {
        if (!block.text) {
            return;
        }
        html += "" + config.paragraph.left + parseBlock(block, raw.entityMap, config) + config.paragraph.right;
    });
    return html;
}
exports.default = parse;
