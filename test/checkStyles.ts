import { expect } from 'chai';
import checkStyles from '../src/checkStyles';
import parse from '../src/parse';

/* tslint:disable:max-line-length */
describe('checkStyles', () => {
    it('multi styling', () => {
        const styles = checkStyles(require('./checkStyles.json'));
        const result = parse(styles);
        expect(result).to.equal(`<p><u>{{variable1}}</u> <strong>123{{variable1}}</strong>456<span style="font-size: 10px;">{{variable1}} 789</span></p>
<p>123<strong><u>{{variable1}}</u></strong>45<strong>6</strong><span style="color: #61bd6d;background-color: #e25041;"><strong><u>{{variable1}}</u></strong></span><strong>789 </strong>{{variable1}} 012</p>`);
    });
});
