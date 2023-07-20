// function built into javascript that can send request to API

//fetch(url)
//fetch sends a request object and receives a response object
// const response = fetch({Request})
// when URL is directly entered javascript implicitly creates a request object
// const request = new Request(url)
// const response = fetch(request)

/* request object contains 
   -url
   -methods - default (get)
   -headers
   -cache policy
   while url is only entered in the fetch it sets other object values to the default one 
*/

/*
- fetch is an asynchronous operation
- it returns a promise rather than a response object

// const response = await fetch(url)
   => at first browser calls the server
   => then it receives the response and assigns it to the variable

*/


const url = " http://worldtimeapi.org/api/timezone/America/New_York"
 
 const getData = async() => {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    //.json is also an async operation hence it also needs to be in await
    console.log(data);
}
getData();

//api-token are needed to get access to api
// ?url_parameter=value
// seperated by &

//api-headers
//HTTP headers are additional pieces of information that are sent along with a request or a response between a client and a server.
/*
HTTP headers consist of key-value pairs and provide information about the request or response,
 such as metadata, authentication credentials, caching directives, content types, and more. 
 They help both the client and server understand and process the data being transmitted.

Headers can be classified into two main categories: request headers and response headers.
*/