import { expect } from 'chai';
import parse from '../src/parse';

/* tslint:disable:max-line-length */
describe('parse input', () => {
    // it('1 bold', () => {
    //     const test = '{"blocks":[{"key":"8mt8g","text":"Hey adf.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":3,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}';

    //     const result = parse(JSON.parse(test));

    //     expect(result).to.equal('<p>Hey <b>adf</b>.</p>');
    // });

    // it('2 bold', () => {
    //     const test = '{"blocks":[{"key":"8mt8g","text":"Hey bold1 andbold2","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":5,"style":"BOLD"},{"offset":13,"length":5,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}';

    //     const result = parse(JSON.parse(test));

    //     expect(result).to.equal('<p>Hey <b>bold1</b> and<b>bold2</b></p>');
    // });

    // it('1 variable', () => {
    //     const test = '{"blocks":[{"key":"1e12k","text":"Hey First name.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":4,"length":10,"key":0}],"data":{}}],"entityMap":{"0":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}}}}';

    //     const result = parse(JSON.parse(test));

    //     expect(result).to.equal('<p>Hey {{variable1}}.</p>');
    // });

    // it('2 variables', () => {
    //     const test = '{"blocks":[{"key":"1e12k","text":"Hey First name.Some thing","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":4,"length":10,"key":0},{"offset":15,"length":10,"key":1}],"data":{}}],"entityMap":{"0":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}},"1":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}}}}';

    //     const result = parse(JSON.parse(test));

    //     expect(result).to.equal('<p>Hey {{variable1}}.{{variable1}}</p>');
    // });

    // it('2 variables & bold', () => {
    //     const test = '{"blocks":[{"key":"1e12k","text":"Hey First name.Some thing","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":4,"length":11,"style":"BOLD"}],"entityRanges":[{"offset":4,"length":10,"key":0},{"offset":15,"length":10,"key":1}],"data":{}}],"entityMap":{"0":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}},"1":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}}}}';

    //     const result = parse(JSON.parse(test));

    //     expect(result).to.equal('<p>Hey <b>{{variable1}}.</b>{{variable1}}</p>');
    // });

    // it('3 variables & 3 bold', () => {
    //     const test = '{"blocks":[{"key":"1e12k","text":"Hey First name.Some thing abc Some thing","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":3,"style":"BOLD"},{"offset":4,"length":11,"style":"BOLD"},{"offset":30,"length":10,"style":"BOLD"}],"entityRanges":[{"offset":4,"length":10,"key":0},{"offset":15,"length":10,"key":1},{"offset":30,"length":10,"key":2}],"data":{}}],"entityMap":{"0":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}},"1":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}},"2":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}}}}';

    //     const result = parse(JSON.parse(test));

    //     expect(result).to.equal('<p><b>Hey</b> <b>{{variable1}}.</b>{{variable1}} abc <b>{{variable1}}</b></p>');
    // });

    // it('2 blocks', () => {
    //     const test = '{"blocks":[{"key":"1e12k","text":"Hey First name.Some thing abc Some thing","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":3,"style":"BOLD"},{"offset":4,"length":11,"style":"BOLD"},{"offset":30,"length":10,"style":"BOLD"}],"entityRanges":[{"offset":4,"length":10,"key":0},{"offset":15,"length":10,"key":1},{"offset":30,"length":10,"key":2}],"data":{}},{"key":"7clut","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7pbo5","text":"Block2 hi Some thing these a new block","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":7,"style":"BOLD"}],"entityRanges":[{"offset":10,"length":10,"key":3}],"data":{}}],"entityMap":{"0":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}},"1":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}},"2":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}},"3":{"type":"VARIABLE","mutability":"IMMUTABLE","data":{"key":"variable1"}}}}';

    //     const result = parse(JSON.parse(test));

    //     expect(result).to.equal('<p><b>Hey</b> <b>{{variable1}}.</b>{{variable1}} abc <b>{{variable1}}</b></p><p><b>Block2 </b>hi {{variable1}} these a new block</p>');
    // });

    it('df', () => {
        const result = parse(require('./test.json'));
        console.log(result);
        // expect(result).to.equal('<p><b>Hey</b> <b>{{variable1}}.</b>{{variable1}} abc <b>{{variable1}}</b></p><p><b>Block2 </b>hi {{variable1}} these a new block</p>');
    });
});
