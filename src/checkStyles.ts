import {
    RawDraftContentBlock, RawDraftContentState,
} from 'draft-js';
import forEach from 'lodash/forEach';
import map from 'lodash/map';

function checkBlock(block: RawDraftContentBlock): RawDraftContentBlock {
    if (block.inlineStyleRanges.length <= 0 || block.entityRanges.length <= 0) {
        return block;
    }

    block.inlineStyleRanges = map(block.inlineStyleRanges, (style) => {
        const start = style.offset;
        const end = style.offset + style.length;

        let newOffset = -1;
        let newLength = style.length;
        forEach(block.entityRanges, (entity) => {
            const entityStart = entity.offset;
            const entityEnd = entityStart + entity.length;

            if (start >= entityEnd || end <= entityStart || (start <= entityStart && end >= entityEnd)) {
                return;
            }

            if (start > entityStart) {
                newOffset = entityStart;
                // console.log('start > entityStart', start - entityStart);
                newLength += (start - entityStart);
            }

            if (end < entityEnd) {
                // console.log('end < entityEnd', entityEnd - end);
                newLength += (entityEnd - end);
            }
        });

        return {
            length: newLength > style.length ? newLength : style.length,
            offset: newOffset > -1 ? newOffset : style.offset,
            style: style.style,
        };
    });

    block.entityRanges = [];
    return block;
}

export default function checkStyles(raw: RawDraftContentState): RawDraftContentState {
    raw.blocks = map(raw.blocks, (block) => checkBlock(block));
    return raw;
}
