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
          { title: `Read 1MB from memory`, definition: `0.25 ms` },
          { title: `Read 1MB from SSD`, definition: `1 ms` },
          {
            title: `Read 1MB over 1Gbps network (no distance)`,
            definition: `10 ms`,
          },
          { title: `Read 1MB from HDD`, definition: `20 ms` },
          {
            title: `Send packet roundtrip US West to Europe`,
            definition: `150 ms`,
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
          { title: `99%`, definition: `3.65 days/year` },
          { title: `99.9%`, definition: `8.77 hrs/year` },
          { title: `99.99%`, definition: `52.60 minutes/year` },
          { title: `99.999%`, definition: `5.26 minutes/year` },
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
        request the proxy and the proxy sends the request to the server. The server then sends the response to the proxy and the proxy send it
        back to the client. This masks the client's information from the server.`,
      },
      {
        p: `For a reverse proxy, the process is similar with the proxy inbetween but the server's information is masked fom the client (i.e. 
          the client thinks they are communicating with the server). This can be useful if you want to cache or filter certain requests to 
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
    [
      { h2: `Leader Election` },
      {
        p: `When you have mutliple servers for redundancy purposes, you must be able to agree on which one is the leader so that requests are not 
        doubled up anywhere. These systems complex math algorithms to reach a concensus, most commonly the Paxos and Raft algorithms which allow for the 
        synchronization of certain operations, even in a distributed setting. Zookeper at Etcd are tools that allow you to implement leader election algorithms 
        on your own.`,
      },
    ],
    [
      { h2: `Peer to Peer Networks` },
      {
        p: `In a peer to peer network, individual machines (peers) send parts of a complete file to one another. In order to discover one another and
        know which parts to send to which other peer, another machine called a 'tracker' is used to coordinate transfers. If a tracker is not used,
        then the 'Gossip' or 'Epidemic' protocol is used where machines tell one another which machine has which parts. This means the peers operate
        by using a distributed hash table (DHT). By using P2P transfer, file distribution can be sped up by orders of magnitude!`,
      },
    ],
    [
      { h2: `Polling` },
      {
        p: `Client issues a request for data that it wants every X seconds. Good for data that changes often but where it is not needed instantaneously.
        Could reduce the interval of requests but that increases the load of requests your servers recieves.`,
      },
    ],
    [
      { h2: `Streaming` },
      {
        p: `Using sockets (files that open/close connections in a long-lived way), you keep a continuous connection from the server to the client and the 
        server pushes (sends data) continuously.`,
      },
    ],
    [
      { h2: `Configuration` },
      {
        p: `Can use configuration files to store parameters or constants that are critical to your system. These can be written in JSON or YAML files,
        and are either static (meaning they ship with your deployment and have to be redeployed whenever you make a change) or dynamic, where the 
        config parameters are in a database or somewhere else outside your system's application code.`,
      },
    ],
    [
      { h2: `Rate Limiting` },
      {
        p: `When you limit requests to your system based on certain restrictions. This can be either restricting the number of requests per second/minute
        per region/ip address/user, etc. Helps prevent against Denial of Service (DOS), but is still vulnerable to distributed DOS (DDOS) attacks. For systems
        that have multiple servers, you can use a Redis server to handle rate-limiting. This rate limiting can also be done in tiers using more complex logic
        to limit both 1 every second and 5 every 30 seconds.`,
      },
    ],
    [
      { h2: `Logging and Monitoring` },
      {
        p: `Logs are extremely useful to figure out what's going wrong in your system when it occurs. These are typically either is JSON or SysLog format.
        Google StackDriver is a great service for keeping track of such logs. These sorts of logs can also be use to track helpful metrics like how many
        people are logging into your system and at what times, the sign on service they're using, the latency they experience, etc. Can also use a time series
        database like InfluxDB, Prometheus, or Graphite to store these logs. In order to visualize these logs, can use a service like Graphana to create
        nice charts. Can integrate logging with monitoring services so when a certain metric is above a certain threshold, you can send a message to a Slack
        chat.`,
      },
    ],
    [
      { h2: `Publish/Subscribe Pattern` },
      {
        p: `This pattern is broken up into three components, a publisher, a topic, and a subscriber. The publisher sends messages to the topic, which
        is a persistant storage solution, which then sends data to each subscriber and keeps track of which messages have been sent to which subscriber.
        These use idempotent operations (operations that perform the same no matter how many times they are performed, i.e. a counter incrementing is not 
        idempotent but a status flag change to "success" is). Messages are guaranteed to be sent at least once (could be more if disconnects and acknowledgement
        is not confirmed by subscriber). Pub/Sub systems typically use qeue to send messages. Because of the persistant storage, you can look at old info.
        Apache Kafka or Google Cloud Pub/Sub are some good solutions to implement these. Key benefits: at-least-once delivery, persistent storage, ordering
        of messages, and replayability of messages.`,
      },
    ],
    [
      { h2: `Map Reduce` },
      {
        p: `Useful for when your data is distributed across many machines. First step (map) is to transform your data into key-value pairs, then you 
        reduce those key values pairs into a final output or file. The control plane is aware of all the data, it's replications, they key-value pairs
        and the outputs. Because the data is typically very large, it is kept where it is kept and the mapping is done on the same machine.  The map and 
        reduce functions are idempotent (same outcome every time). Common example of this counting the occurance of words in distributed text files. Could
        use this to get count of total views on a youtube channel or count the total number of logs from a logging service over a specific time. Hadoop
        and GFS (Google File System) are two common DFSs (Distributed File Systems) used to make a large cluster of machines act like on large file system.
        Hadoop supports MapReduce and many other kinds of data-processing pipelines.`,
      },
    ],
    [
      { h2: `API Design` },
      {
        p: `First need to ask, which part of the system you are designing and what functionality it needs to support. Who is going to be consuming the API?
        Need to write out the entities and resources the API will rely on, the endpoints, the parameters the API will take, and the responses the API will return.
        Plain text example below, but could also use Swagger to define your API.`,
      },
      {
        code: {
          language: `text`,
          code: `# API Definition

## Entity Definitions
### Charge:
- id: uuid
- customer_id: uuid
- amount: integer
- currency: string (or currency-code enum)
- status: enum ["succeeeded", "pending", "failed"]

### Customer:
- id: uuid
- name: string
- address: string
- email: string
- card: Card

### Card
....

## Endpoint Definitions
### Charges
CreateCharge(charge: Charge)
  => Charge
GetCharge(id: uuid)
  => Charge
UpdateCharge(id: uuid, updatedCharge: Charge)
  => Charge
ListCharges(offset: integer, limit: integer)
  => Charge[]
CaptureCharge(id: uuid)
  => Charge
  
### Customers
CreateCustomers(customer: Customer)
  => Customer
GetCustomer(id: uuid)
  => Customer
UpdateCustomer(id: uuid, updatedCustomer: Customer)
  => Customer
DeleteCustomer(id: uuid)
  => Customer
ListCustomers(offset: integer, limit: integer)
  => Customer[]`,
        },
      },
    ],
  ],
}
