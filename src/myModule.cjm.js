const mySecondModule = require('./mySecondModule.cjm');

console.log('mySecondModule', mySecondModule);

console.log('myModule inside', module);

module.exports = {
    module: 'module',
}