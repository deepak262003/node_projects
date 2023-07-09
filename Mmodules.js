//modules - encapsulated code
//in common JS - every file is module by default
const names = require('./Mnames');
const func = require('./Mutils');
const data = require('./alt-flavours')
console.log(data);

func(names.name1);
func(names.name);