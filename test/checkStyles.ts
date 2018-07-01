// import { expect } from 'chai';
import checkStyles from '../src/checkStyles';
import parse from '../src/parse';

describe('checkStyles', () => {
    it('df', () => {
        const styles = checkStyles(require('./checkStyles.json'));
        console.log(JSON.stringify(styles, null, 2));
        const result = parse(styles);
        console.log(result);
        // expect(result).to.equal('<p><b>Hey</b> <b>{{variable1}}.</b>{{variable1}} abc <b>{{variable1}}</b></p><p><b>Block2 </b>hi {{variable1}} these a new block</p>');
    });
});
