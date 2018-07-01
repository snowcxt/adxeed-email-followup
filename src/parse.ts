import {
    RawDraftContentState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

export default function parse(raw: RawDraftContentState) {
    return draftToHtml(raw).trim();
}
