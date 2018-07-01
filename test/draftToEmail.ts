// import { expect } from 'chai';
// import fs from 'fs';
// import path from 'path';
// import draftToEmail from '../src/draftToEmail';

// /* tslint:disable:max-line-length */
// describe('draft to email', () => {
//     it('2 blocks', () => {
//         const test = '{"blocks":[{"key":"1e12k","text":"Hey First name.Some thing abc Some thing","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":3,"style":"BOLD"},{"offset":4,"length":11,"style":"BOLD"},{"offset":30,"length":10,"style":"BOLD"}],"entityRanges":[{"offset":4,"length":10,"key":0},{"offset":15,"length":10,"key":1},{"offset":30,"length":10,"key":2}],"data":{}},{"key":"7clut","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7pbo5","text":"Block2 hi Some thing these a new block","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[{"offset":10,"length":10,"key":3}],"data":{}}],"entityMap":{"0":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}},"1":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}},"2":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}},"3":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}}}}';

//         const result = draftToEmail(JSON.parse(test));
//         const expected = fs.readFileSync(path.join(__dirname, './draftToEmail.html'), 'utf8');

//         expect(result).to.equal(expected);
//     });
// });
