// console.log("this is javascript");

// **How Web Works Exercise**

// **Part One: Solidify Terminology**

// In your own terms, define the following terms:

//- What is HTTP? Hypertext Transfer Protocol (standard web). How browsers and servers communicate
//- What is a URL? Is a way to tell a server what resources to return. Includes a hostname, port, resource and query
//- What is DNS? Domain name systerm, translates human readable domain names into machine readable IP addresses
//- What is a query string? Provide extra information - search terms, info from forms, etc. This may be used to change a page, js will use this info, more than one query may be used at a time
//- What are two HTTP verbs and how are they different? GET is receving information from a server, it is a request for information, it does not change anything on the website. POST is a request to change information on the website.
//- What is an HTTP request? A request sent from a client to a server asking fro a specific resource. 
//- What is an HTTP response? The message back from the server to the client, which includes the requested resource and additional information about its status and content type.
//- What is an HTTP header? Give a couple examples of request and response headers you have seen. A set of key-value pairs along with an HTTP request or response. Request headers sent by the client server contain details abotu the request like the browser type and the requested resource. Response headers are sent by the server to the client, providing information abotu the response like content type and caching instructions.
//- What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser? A lot of complicated things. There is a request to a server that responds with a response.

// 1. Your browser “resolves” the name into an IP address using DNS
// 2. Your browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things)
// 3. The server sends a response (typically, HTML, with a status code (200 if it was sucessful)
// 4. The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)
// 5. The browser makes separate HTTP requests for those resources and receives response from the server for each

// **Part Two: Practice Tools**

// 1. Using ***curl***, make a ***GET*** request to the *http://icanhazdadjoke.com* API to find all jokes involving the word “pirate”
// 2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*
// 3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser.

// **Part Three: Explore Dev Tools**

// Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.

// Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.

// Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.

// **Part Four: Explore the URL API**

// At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).

// [Read about the URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL)

// Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.

[Solution](https://lessons.springboard.com/Solution-b90d1d16d5f043f79fa6524333d6f99b?pvs=21)
