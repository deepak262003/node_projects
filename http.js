const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url == '/') { 
    res.write('home page'); //sends data to requested client
    res.end(); //ending the request
    } 
    else {
        res.end(`<h1>page not found!</h1><br><a href="/">go back home</a>`);
    }
});
// parameter - callback with two arguments
// both are objects - req and res
// req - incoming requests
// res - output response

server.listen(3000); //incoming port