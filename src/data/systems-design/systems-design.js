export const pageData = {
  pageTitle: "Systems Design",
  pageInfo: `You should be able to rationalize why you are using one design for your system over another.  Knowing the components that make
    up the system, the protocols, and the tools available as well as their strong/weak points is essential.`,
  cheats: [
    [
      { h2: "Storage" },
      {
        p: `Data can be either written or read from a storage medium. Other ways of saying this are: storing/retrieving, setting/getting, recording/querying.
        Storage for data can be either on disk or in memory. Anything stored in memory will be super quick to access but will be wiped when the process
        dies or the server is restarted. Anything on disk will persist (hence the name persistant storage). Sometimes data is spread through mutliple 
        servers for redundancy and if not all of them are up to date you can be given "stale" (out of date) data.`,
      },
    ],
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
  ],
}
