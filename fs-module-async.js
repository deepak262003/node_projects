//aysynchronous - callback is needed

const { readFile, writeFile } = require("fs");

//readFile
//also includes a callback function with parameters error and result

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
    const first = result;
    readFile("./content/sub folder/test.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(result);
        const second = result;
        writeFile(
          "./content/result-async.txt",
          `${first},${second}`,
          (err, result) => {
            if (err) {
              console.log(err);
              }
            else {
                console.log(result);
              }
          }
        );
      }
    });
  }
});
