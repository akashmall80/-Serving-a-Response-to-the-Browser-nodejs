const http = require('http');
const port = 8000;

function requestHandler(req,res)
{
    // we will get the url
    // for localhost:8000 it will give /
    // for localhost:8000/user it will give /user
    // for localhost:8000/prifle it will give /profile
    console.log(req.url);
    

    //it will give response
    res.end('gotcha');
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("server is running", port);
})