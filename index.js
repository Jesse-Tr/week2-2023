// load the core node http module

const http = require("http");

//load the core node filesystem (fs) module, using js promises instead of callbacks.

// a promise represents eventual competion of asynch operation and its results.

const fs = require("fs").promises;


//create a function to respond to http requests.
//special varialble " __dirname " has absolute path of where node code is running.

// if fs.readFile() successful, it returns data.
// use then() method to handle success contents parameter contains html file data.

const reqListener = function(req, res) {

  // request url
  console.log(req.url);

  if (req.url === "/") {

    //check request url, if root, return html file.
    fs.readFile(__dirname + "/home.html").then(contents => {

      //set http response header entry
      res.setHeader("content-type", "text/html; charset = UTF-8");

      // return 200 ok http status
      res.writeHead(200);

      //send back file contents + close response
      res.end(contents);


    });
  } else {
    // if request url is not root, return json file.
    fs.readFile(__dirname + "/list.json").then(contents => {

      //set http response header entry
      res.setHeader("content-type", "text/html; charset = UTF-8");

      // return 200 ok http status
      res.writeHead(200);

      //send back file contents + close response
      res.end(contents);
    });
  }
};



// create an http server instance 
const server = http.createServer(reqListener);

//define the TCP port and IP adress to tell our http server to listen to.
const host = "0.0.0.0";
const port = "8080";

//call the listen() method to start listening to http requests
server.listen(
  port, host, () => {
    console.log(
      `server is running on http://${host}: ${port}+`
    );
  }
);