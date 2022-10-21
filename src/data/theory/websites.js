export const pageData = {
  pageTitle: "Website Theory",
  pageInfo: `A collection of terms and concepts involving websites.`,
  cheats: [
    [
      { h2: "Document Object Model (DOM)" },
      {
        p: `The document object model is a programming API for HTML and XML documents.  It defines the logical structure (a tree data structure) of the elements on the page and the way the document is accessed and manipulated.`,
      },
      {
        link: `https://www.w3.org/TR/WD-DOM/introduction.html#:~:text=The%20Document%20Object%20Model%20(DOM,document%20is%20accessed%20and%20manipulated.`,
      },
    ],
    [
      { h2: "Accessibility" },
      {
        p: `Means using semantic HTML and making sure the site can be used by assitive technologies like screen readers.`,
      },
      { h3: "Accessibility Tree" },
      {
        p: `A tree that is created from the DOM tree and is interacted with by assitive technologies like screen readers.
            Each node contains information such as name, description, role, and state.  You can view the accessibility tree inside
            of Chrome Developer tools!`,
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree`,
      },
      { h3: "WAI-ARIA" },
      {
        p: `Stands for "Web Accessibility Initiative - Accessible Rich Internet Applications" and describes HTML attributes
            that add extra information to the accessibility tree.  Contains mostly three types of attributes - roles (to describe 
            what an element does), properties (to provide extra meaning such as labels) and states (to provide the current state such 
            as disabled). Check HTML accessibility section for more detailed info.`,
      },
      {
        link: `https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics`,
      },
    ],
    [
      { h2: "Client-Server Model" },
      {
        p: `Most modern systems are designed using this paradigm where clients request data or service from a server and servers provide that data
        to the client.  NOTE: A server may also be a client in the sense that it recieves a request from a client but then needs to make a request
        to a database for some data before it can send it to the original client. For the web, browsers are clients that request HTML pages from
        servers.`,
      },
      {
        p: `Clients - execute code quickly, users can see code, have low computing power, don't have direct access to database`,
      },
      {
        p: `Servers - execute code slowly because they have to wait on network, implemenation details of code are hidden from end user,
      "infinite" computing power as servers are scalable, quick and easy database access`,
      },
    ],
    [
      { h2: "URL" },
      {
        p: `https://www.mycoolsite.com:443/myPage?someValue=100#pageSection`,
      },
      {
        definitionList: [
          { title: `https://`, definition: `Scheme or protocol to use` },
          { title: `www`, definition: `Subdomain` },
          { title: `mycoolsite.com`, definition: `Domain` },
          { title: `.com`, definition: `Top Level Domain` },
          {
            title: `:443`,
            definition: `Port, optional as browsers put it in for you (443 for https or 80 for http)`,
          },
          { title: `myPage`, definition: `Path` },
          { title: `?someValue=100`, definition: `Query Parameters` },
          {
            title: `#pageSection`,
            definition: `Tag in HTML to target for scroll behaviour`,
          },
        ],
      },
    ],
    [
      { h2: "Domain Name System (DNS)" },
      {
        p: `Used to convert the domain name to an IP address.  When a request is sent from your computer it goes
        to a resolving name server that will talk to other servers and cache the names/ips for certain domains so they 
        can more quickly serve them to you. If the server doesn't have the domain cached, it reaches out to a root name
        server, a TLD (top level domain) name server, and eventually an authoritative name server to find the correct IP
        address for the domain name.`,
      },
    ],
    [
      { h2: "TCP - Transmission Control Protocol" },
      {
        p: `Used to establish connections between a client and server on the internet. Uses the IP address to open a TCP connection
        and sends data as packets. Establishes a connection using a three-way handshake (synchronization, synchronization acknowledgement,
          and a final acknowledgement). Uses lots of error correction which increases latency and bandwidth.`,
      },
      {
        link: `https://www.spiceworks.com/tech/networking/articles/tcp-vs-udp/`,
      },
    ],
    [
      { h2: "HTTP" },
      {
        p: `Hyper Text Transfer Protocol is a protocol for transmitting 'hypermedia' on the web.  It is stateless, which means that only one
        message is sent at a time with no memory of previous requests, though cookies can be used to create sessions. These requests are usually
        sent over TCP.`,
      },
    ],
    [
      { h2: `HTTP Requests` },
      {
        p: `HTTP Requests are used to ask a server to do something, typically CRUD operations (Create, Read, Update, Delete). A request is
      composed of several parts: the request line and some headers.  The request line contains the method (GET, POST, etc.), a path, and an 
      HTTP version number. There are many different types of headers that are used to give extra information to the server to help it process
      the request. The minimum required are the host and accept headers.  Accept headers tell the server what type of response we are expecting.`,
      },
      { link: `https://en.wikipedia.org/wiki/List_of_HTTP_header_fields` },
    ],
    [
      { h2: `Request Methods` },
      {
        p: `Not an exhaustive list of the possible request methods, but contains some of the more common ones. The methods used depend on
        the server and how they implement them.`,
      },
      {
        definitionList: [
          {
            title: "GET",
            definition: `Retrieves data from the server`,
          },
          {
            title: "POST",
            definition: `Submits data to the server`,
          },
          {
            title: "PUT",
            definition: `Replaces data on the server`,
          },
          {
            title: "DELETE",
            definition: `Deletes data on the server`,
          },
          {
            title: "PATCH",
            definition: `Partially updates data on the server`,
          },
          {
            title: "HEAD",
            definition: `Same as GET request but does not contain the body`,
          },
        ],
      },
    ],
    [
      { h3: "GET Request" },
      { p: `Used to get data.` },
      {
        code: {
          language: `text/plain`,
          code: `GET /mypage/mystuff HTTP/1.1
        
Host: www.mysite.com
Accept: text/html`,
        },
      },
    ],
    [
      { h3: "POST Request" },
      {
        p: `Used to send data to a server (in the body of the request), typically for storing in a database.`,
      },
      {
        code: {
          language: `text/plain`,
          code: `POST /submit HTTP/1.1
        
Host: www.mysite.com
Accept: application/json
Content-Type: application/json

{
  "key1": value1,
  "key2": value2,
}`,
        },
      },
    ],
    [
      { h2: "HTTP Responses" },
      {
        p: `This is what you get back from a server when you send it a request. It contains the version, the status code of the request,
      and a status message.  Some headers are included as well as a body containing some data.`,
      },
      {
        code: {
          language: `text/plain`,
          code: `HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html>
  ... rest of site
</html>`,
        },
      },
    ],
    [
      { h3: "HTTP Response Codes" },
      {
        p: `Consists of 3 digits. 100-199 is informational (rarely used), 200-299 are success messages, 300-399 redirection message,
        400-499 client error messages, 500-599 server side error messages.`,
      },
      {
        definitionList: [
          { title: "200", definition: "OK" },
          { title: "201", definition: "Created" },
          { title: "301", definition: "Moved Permanently" },
          { title: "302", definition: "Found (Moved temporarily)" },
          { title: "400", definition: "Bad Request" },
          { title: "401", definition: "Unauthorized (Not Authenticated)" },
          { title: "403", definition: "Forbidden" },
          { title: "404", definition: "Not Found" },
          { title: "500", definition: "Internal Server Error" },
          { title: "503", definition: "Service Unavailable" },
        ],
      },
    ],
    [
      { h2: "Session Cookies as Headers" },
      {
        p: `Cookies are used to save data in the browser.  These can be sent back and forth from the client and server to keep
      track of a user session. When this is done they are called session cookies.`,
      },
      { p: `Header for server setting a cookie` },
      {
        code: {
          language: `text/plain`,
          code: `Set-Cookie: auth-token:3435`,
        },
      },
      { p: `Header for client sending cookie back` },
      {
        code: {
          language: `text/plain`,
          code: `Cookie: auth-token:3435`,
        },
      },
    ],
    [
      { h2: "HTTPS" },
      {
        p: `A more secure version of HTTP where there is end to end encryption use Transport Layer Security (TLS) (previously Secure Socket Layer - 
          SSL), this means requests and responses are both encrypted.`,
      },
      { link: `https://www.cloudflare.com/learning/ssl/what-is-https` },
    ],
  ],
}
