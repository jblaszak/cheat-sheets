export const pageData = {
  pageTitle: "Systems Design",
  pageInfo: `You should be able to rationalize why you are using one design for your system over another.  Knowing the components that make
    up the system, the protocols, and the tools available as well as their strong/weak points is essential.`,
  cheats: [
    [
      { h2: "Latency" },
      {
        p: `This is the time it takes for a request/response cycle for data.`,
      },
      {
        definitionList: [
          { title: `Read 1MB from memory`, defitition: `0.25 ms` },
          { title: `Read 1MB from SSD`, defitition: `1 ms` },
          {
            title: `Read 1MB over 1Gbps network (no distance)`,
            defitition: `10 ms`,
          },
          { title: `Read 1MB from HDD`, defitition: `20 ms` },
          {
            title: `Send packet roundtrip US West to Europe`,
            defitition: `150 ms`,
          },
        ],
      },
    ],
    [
      { h2: "Throughput" },
      {
        p: `How much data can be transferred by a system over a period of time. Usually measured as bits per second like 1 Gbps or the amount
        of requests per second RPS or queries per second QPS.`,
      },
    ],
    [
      { h2: "Availability" },
      {
        p: `A measure of how resistant a system is to failure (fault tolerance). Typically measured as a percentage of time where the service/system
        is working and operational. A system that has "high availability" (HA) if they have 5 9's worth of uptime. Service providers often have
        a collection of guarantees called Service Level Agreement (SLA) which is made up of Service Level Objectives (SLO) like the amount of availability.`,
      },
      {
        definitionList: [
          { title: `99%`, defitition: `3.65 days/year` },
          { title: `99.9%`, defitition: `8.77 hrs/year` },
          { title: `99.99%`, defitition: `52.60 minutes/year` },
          { title: `99.999%`, defitition: `5.26 minutes/year` },
        ],
      },
      {
        p: `Availability is typically achieved by using redundancy.  This means adding extra machines so in case one fails the others are there to
      provide the service. Passive redundancy refers to have extra machines that distribute the load, while active redunancy refers to extra machines
      that listen to main machine failing and then taking on the workload of the other machine using leader election.`,
      },
      {
        link: `https://en.wikipedia.org/wiki/High_availability#Percentage_calculation`,
      },
    ],
    [
      { h2: "Caching" },
      {
        p: `Caching is used to improve or reduce the latency of a system by storing data in a location that is faster to access than it was originally
        obtained from. Super useful if you're doing a lot of network requests for the same stuff or if the computation of the request takes a lot. Can
        also be used if a specific database request is done by a large number of clients. Redis is an example of an in-memory key-value data store for such things.
        Caching is great for immutable data.`,
      },
      {
        p: `Write-through cache - caching system where when you write a piece of data it writes it to the cache and the database location at the same time. Downside of 
        this is you still have to go to the database.`,
      },
      {
        p: `Write-back cache - caching system where when you write a piece of data it writes it only to the cache immediately. Then whenever it decides,
        either when cache is full or at specific times, it will write that change to the database. This means the cache can be out of sync with the database.
        If anything happens to the cache in the meantime, there is potential for data loss.`,
      },
      {
        p: `If staleness of data is important, like a comment section where you don't want users seeing old version of caches that are distributed over
        lots of servers, you can use tools like Redis as a single cache that is separate from the servers that each client can access. For less important 
        things, the servers can individually cache data and give stale versions.`,
      },
      {
        p: `Caches have limited size. Common practice is to evict the Least Commonly Used (LRU) data or Least Frequently Used. Could release data 
        using FIFO or randomly as well depending on the use case.`,
      },
      {
        p: `Questions to ask: is the data immutable? Is it important for the data to be in sync across servers? If it is important, is there a handy way 
        to ensure CRUD operations are synchronized? When should you evict data from your cache?`,
      },
    ],
    [
      { h2: "Proxies" },
      {
        p: `Server that sits between a client and a server that acts on behalf of the client (in the case of a forward proxy). Client sends A
        request the proxy and the proxy sends the request to the server.  The server then sends the response to the proxy and the proxy send it
        back to the client. This masks the client's information from the server.`,
      },
      {
        p: `For a reverse proxy, the process is similar with the proxy inbetween but the server's information is masked fom the client (i.e. 
          the client thinks they are communicating with the server).  This can be useful if you want to cache or filter certain requests to 
          reduce the load on your server or to handle logging. Proxies can also be used as load balancers! Using a proxy can also help guard against certain attacks
          like DNS (spamming of requests) when used as a load balancer/filterer.`,
      },
    ],
    [
      { h2: "Load Balancers" },
      {
        p: `Prevents servers from getting overloaded, which helps decrease latency and increase throughput. Both physical and software based load
        balancers exist. For hardware, you're limited to the hardware, but software you have much more options. A common approach is to use round
        robin election meaning requests are forwarded to each machine consecutively in order of machine. Weighted round-robin can be used to send 
        more requests to certain machines if they are more powerful. Load balancers can also perform health checks on servers to send more/less to
        them based on their current load. Client IPs can also be hashed so future requests from that client can be redirected to the same server
        (which would likely cache the request by that user and be able to serve requests to that client faster). Path based request routing is also
        an option so different things like payments processing, or other parts of your site are handled by different servers and when updates are made
        it only affects the one server.`,
      },
      {
        p: `Multiple load balancers can be used that communicate to one another to decide how to reroute traffic.`,
      },
    ],
    [
      { h2: "Hashing" },
      {
        p: `Hashing is an action that transforms an arbitrary value into a fixed sized value (typically an integer). For systems design the data 
        can be anything like an IP address or client name. A good hashing function should be quick and evenly distribute all hashes. These are 
        useful properties for something like a load balancer that needs to reroute traffic to same server for request from the same client and 
        also not overload that server with requests from other clients. Examples of some common hashing functions are NP5, BCrypt, SHA1.`,
      },
      {
        p: `If servers fail or new ones are added, the hashing needs to be redone and a simple hashing strategy will alter the resulting hashes
        greatly meaning servers that used to have the same client's requests will likely now recieve a different client's requests.`,
      },
      {
        p: `Consistent hashing is a strategy that helps minimize this issue. Conceptually, all servers are put in a circle representing all possible
        hashed values. A hashed value for a client's request will lie somewhere on that circle as well, and will get sent to the closest server based on 
        the position on the circle. The hashing does not need to be redone and machines can be added/removed freely from that circle. This minimizes 
        the amount of cache misses (requests from one client suddenly being sent to another server that doesn't have it cached). To further increase
        the balance, servers can be hashed mutliple times and distributed evenly across the circle in case the hashing function prefers one part of the
        circle over another. Stronger servers can be hashed more times so that more requests get sent to them.`,
      },
      {
        p: `Rendevous hashing works by mapping clients to servers by computing a score for each server for each client by how much they 'prefer' them and sending
        requests to the server that client prefers the most. If a server fails, the request is sent to the next highest rated server. This means only the
        clients requests that were sent to the machine that failed need to switch machines.`,
      },
    ],
  ],
}
