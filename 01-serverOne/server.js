// import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
//PORT is always capitalized, 8080 is the PORT #
var PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
console.log("Request Made!");
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

//localhost this domain name for the web
//PORT # Gateway to our computer