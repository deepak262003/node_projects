const { readFile,writeFile} = require('fs');

// create promise maker function without wrapping function
const util = require('util')

const getText = (path)=>{
    return new Promise((resolve, reject) => {
         readFile(path, 'utf8', (err,data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

const write = util.promisify(writeFile);


const read = async () => { 
    try {
        const data = await getText('./content/first.txt');
        const data1 = await getText('./content/first.txt');
        const status = await write('./content/result-async.txt', `data : ${data, data1}`, { flag: 'a' });
        console.log(data);
        console.log(data1);
        console.log(status);
    } catch(err) {
        console.log(err);
    }
}
read();