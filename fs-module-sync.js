//synchronous
const { readFileSync,writeFileSync} = require('fs');

//readFileSync - parameters ( path , encoding)
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/sub folder/test.txt', 'utf-8');

//writeFileSync - parameters ( filename , value , object)
// {flag : 'a'} a - append 
const write=writeFileSync('./content/result.text', `result : ${first} , ${second}`,{flag:'a'});

console.log(first);
console.log(second);
console.log(true);

