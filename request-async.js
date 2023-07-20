const http = require('http');

const server = http.createServer(
    (req, res) => {
        if (req.url == '/about'){
            for(let i = 0;i<= 10000; i++){
              console.log(`${i}`)
            }
       }
    }
)

server.listen(5000,
    () => {
    console.log("listening to port 5000...")
})