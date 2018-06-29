// import assert from 'assert';
// import validate from '../lib/validate';

import { expect } from 'chai';
import parse from '../src/parse';

describe('parse input', () => {
    it('1 bold', () => {
        const test = '{"blocks":[{"key":"8mt8g","text":"Hey adf.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":3,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}';

        const result = parse(JSON.parse(test));

        expect(result).to.equal('<p>Hey <b>adf</b>.</p>');
    });

    it('2 bold', () => {
        const test = '{"blocks":[{"key":"8mt8g","text":"Hey bold1 andbold2","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":5,"style":"BOLD"},{"offset":13,"length":5,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}';

        const result = parse(JSON.parse(test));

        expect(result).to.equal('<p>Hey <b>bold1</b> and<b>bold2</b></p>');
    });
});
