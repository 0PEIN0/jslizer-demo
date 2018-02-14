import jslizer from 'jslizer';

console.log(342, jslizer);

class Test extends jslizer.BaseController {
    constructor() {
        super();
        console.log('test constructor called.');
    }
}
var a = new Test();
console.log(343, a);
