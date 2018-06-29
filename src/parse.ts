import { RawDraftContentBlock, RawDraftContentState } from 'draft-js';

function parseBlock(block: RawDraftContentBlock): string {
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

    // let offset = 0;
    for (let i = 0; i <= block.text.length; i++) {
        const char = block.text.charAt(i);
        const insertion = insertions[i];
        if (insertion) {
            html += insertion;
            // offset += insertion.length;
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
        html += `<p>${parseBlock(block)}</p>`;
    });

    return html;
}
