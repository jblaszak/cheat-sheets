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
          and a final acknowledgement). Uses lots of error correction which increases latency and bandwidth.  `,
      },
      {
        link: `https://www.spiceworks.com/tech/networking/articles/tcp-vs-udp/`,
      },
    ],
  ],
}
