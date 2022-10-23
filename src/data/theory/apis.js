export const pageData = {
  pageTitle: "APIs",
  pageInfo: `Application Progamming Interfaces (APIs) are the interface used to allow programs to communicate with one another.`,
  cheats: [
    [
      { h2: "REST" },
      {
        p: `RESTful APIs stand for Respresentational State Transfer. They are mostly based on resources and must follow these requirements:`,
      },
      {
        definitionList: [
          {
            title: `Client-Server Model`,
            definition: `The client and the server must be clearly distinguished from one another.`,
          },
          {
            title: `Stateless`,
            definition: `The client must send all the information needed to complete the request as part of the request as the server does not
    maintain state.`,
          },
          {
            title: `Cacheable`,
            definition: `The server needs to define which responses can be cached by the client.`,
          },
          {
            title: `Layered System`,
            definition: `If a layered system (using proxy system or load balancers) is used, the client should not need to know which server it is connected to.`,
          },
          {
            title: `Uniform Interface`,
            definition: `The interface should follow these rules: 1. Requests should identify resources, but these resources can follow a different
    representation than that used on the backend.  2. The client should have enough information about a requested resource to edit that resource.
    3. Responses should include messages that describe how to manipulate the resource (i.e. a MIME type).  4. Responses should include links to
    future request options.`,
          },
          {
            title: `Code on Demand`,
            definition: `The server may optionally send code to the client to be executed by the client.`,
          },
        ],
      },
    ],
    [
      { h2: "RPC" },
      {
        p: `Remote Procedure Call. The server provides an interface for the client to call certain functions from the server. Can have APIs that
        combine these with REST for more functionality.`,
      },
    ],
    [
      { h2: "SOAP" },
      {
        p: `Simple Object Access Protocol. It's an XML format for clients and servers to communicate with.  Extremely verbose and not used often
        except when you have two different backend services that need to communicate with one another.  Communicating with the frontend adds a lot
        of extra work. `,
      },
    ],
    [
      { h2: "GraphQL" },
      {
        p: `A query language for querying APIs that describes the format of the requested data.  Major benefit is that it only sends the necessary
        data on the network and it's possible to combine requests for multiple resources in one request.  This minimizes the number of API requests
        necessary and decreases bandwidth/response time.`,
      },
    ],
    [
      { h2: "API Keys" },
      {
        p: `These are unique indentifiers for your application.  It is used on public APIs for tracking purposes (rate limiting, usage stats, etc.)
         and is sent with each request.`,
      },
    ],
  ],
}
