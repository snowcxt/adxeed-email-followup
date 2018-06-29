import { RawDraftContentBlock, RawDraftContentState, RawDraftEntity } from 'draft-js';
import forEach from 'lodash/forEach';

function parseBlock(block: RawDraftContentBlock, entityMap: { [key: string]: RawDraftEntity }, options): string {
    let html = '';
    if (!block.text) {
        return '';
    }
    const insertions = {};
    forEach(block.inlineStyleRanges, (style) => {
        switch (style.style) {
            case 'BOLD':
                insertions[style.offset] = options.bold.left;
                insertions[style.offset + style.length] = options.bold.right;
        }
    });

    const replacements = {};
    forEach(block.entityRanges, (entity) => {
        replacements[entity.offset] = {
            length: entity.length,
            text: `${options.variable.left}${entityMap[entity.key].data.key}${options.variable.right}`,
        };
    });

    for (let i = 0; i <= block.text.length; i++) {
        let char = block.text.charAt(i);
        const insertion = insertions[i];
        if (insertion) {
            html += insertion;
        }

        const replacement = replacements[i];
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

const defaultOptions = {
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

export default function parse(raw: RawDraftContentState, options?) {
    const config = {
        ...defaultOptions,
        ...options,
    };

    let html = '';

    forEach(raw.blocks, (block) => {
        if (!block.text) {
            return;
        }
        html += `${config.paragraph.left}${parseBlock(block, raw.entityMap, config)}${config.paragraph.right}`;
    });

    return html;
}
