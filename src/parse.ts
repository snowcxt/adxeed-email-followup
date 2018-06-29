import { RawDraftContentBlock, RawDraftContentState, RawDraftEntity } from 'draft-js';

function parseBlock(block: RawDraftContentBlock, entityMap: { [key: string]: RawDraftEntity }): string {
    let html = '';
    if (!block.text) {
        return '';
    }
    const insertions = {};
    block.inlineStyleRanges.forEach((style) => {
        switch (style.style) {
            case 'BOLD':
                insertions[style.offset] = '<b>';
                insertions[style.offset + style.length] = '</b>';
        }
    });

    const replacements = {};
    block.entityRanges.forEach((entity) => {
        replacements[entity.offset] = { text: `{{${entityMap[entity.key].data.key}}}`, length: entity.length };
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

export default function parse(raw: RawDraftContentState) {
    let html = '';

    raw.blocks.forEach((block) => {
        if (!block.text) {
            return;
        }
        html += `<p>${parseBlock(block, raw.entityMap)}</p>`;
    });

    return html;
}
