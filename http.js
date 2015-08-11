//Include http module
var http = require("http");

//// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.
http.createServer(function(request, response){

  
  //Attach listener to an end event.
  //this event is called when client sent all data and is waiting for
  request.on("end", function () {
    //Write headers to this response
    //200 is HTTP status code(means success)
    //Second parameter holds header fields in object
    // We are sending plain text, so Content-Type should be text/plain
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    //Send data and end response.
    response.end('HEllo HTTP!');
  });
  //Listen on the 8080 port.
}).listen(8080);
