// Dependencies
// We require/import the HTTP module
// fs is a core Node package for reading and writing files
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 3000;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
// function handleRequest(req, res) {

//   // Here we use the fs package to read our index.html file
//   fs.readFile(__dirname + "/index.html", function(err, data) {
//     if (err) throw err;
//     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//     // an html file.
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }

function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;
    // console.log('current path, path')
    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            return fs.readFile(__dirname + "/index.html", function (error, data) {

                if (error) throw error;
                res.writeHead(200, { "Content-type": "text/html" })
                res.end(data);
            });

        case "/food":
            return fs.readFile(__dirname + "/food.html", function (error, data) {

                if (error) throw error;
                res.writeHead(200, { "Content-type": "text/html" })
                res.end(data);
            });
        case "/movies":
            return fs.readFile(__dirname + "/movies.html", function (error, data) {

                if (error) throw error;
                res.writeHead(200, { "Content-type": "text/html" })
                res.end(data);
            });

        case "/frameworks":
            return fs.readFile(__dirname + "/frameworks.html", function (error, data) {

                if (error) throw error;
                res.writeHead(200, { "Content-type": "text/html" })
                res.end(data);
            });


        default:
            res.writeHead(404);
            res.write("Route not found");
            res.end();

    }



};



// Starts our server
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});


