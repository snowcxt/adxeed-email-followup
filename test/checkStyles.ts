// import { expect } from 'chai';
import checkStyles from '../src/checkStyles';
import parse from '../src/parse';

describe('checkStyles', () => {
    it('df', () => {
        const styles = checkStyles(require('./checkStyles.json'));
        console.log(JSON.stringify(styles, null, 2));
        const result = parse(styles);
        console.log(result);
        // expect(result).to.equal('<p><ins>{{variable1}}</ins> <strong>123{{variable1}}</strong>456<span style="font-size: 10px;">{{variable1}} 789</span></p> <p>123<strong><ins>{{variable1}}</ins></strong>45<strong>6</strong><span style="color: rgb(97,189,109);background-color: rgb(147,101,184);"><strong><ins>{{variable1}}</ins></strong></span><strong>789 </strong>{{variable1}} 012</p>');
    });
});
