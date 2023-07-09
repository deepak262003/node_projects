const path = require('path');

console.log(path.sep); //seperator
console.log()

const filepath = path.join('/content', 'subfolder', 'text.txt');//joins path with path seperator
//removes trailing path seperators
console.log(filepath);
console.log(path.basename(filepath));

//accepts a sequence of paths or path segments and makes it into a absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(path.resolve(absolute));