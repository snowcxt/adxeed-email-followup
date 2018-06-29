
import { RawDraftContentState } from 'draft-js';
import template from 'lodash/template';
import body from './body';
import paragraph from './paragraph';
import parse from './parse';

const bodyTemp = template(body);

export default function draftToEmail(draft: RawDraftContentState) {
    return bodyTemp({
        body: parse(draft, {
            bold: {
                left: '<strong>',
                right: '</strong>',
            },
            paragraph,
            variable: {
                left: '`__',
                right: '__`',
            },
        }),
    });
}
