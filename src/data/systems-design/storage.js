export const pageData = {
  pageTitle: "Storage & Databases",
  pageInfo: ``,
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
      { h2: `Relational Databases` },
      {
        p: `A type of database that has a tabular data structure (i.e. tables) where rows contain individual entries (records) and columns are individual attributes
of that entry. The specific rules or plans for the format of a table is called a 'schema'. All records must adhere strictly to this schema. If you want
to add an attribute to a record, you must add that attribute to all records! These use Structured Query Language (SQL). This allows you to perform queries
directly on the database without having to load it in memory and makes it very powerful! If you have complex queries that need to be done, consider using relational
databases over non-relational databases. Must relational databases use ACID transactions.`,
      },
    ],
    [
      { h2: `Non-relational Databases` },
      {
        p: `A type of database where the schema is free-flowing and records can have varying attributes. `,
      },
    ],
    [
      { h2: `ACID Transactions` },
      {
        definitionList: [
          {
            title: `Atomicity`,
            definition: `All operations that are part of the transaction will either all succeed or all fail. If any operations fail,
                the successful ones are rolled back.`,
          },
          {
            title: `Consistency`,
            definition: `The transaction cannot bring the database to an invalid state. This still applies even after the transaction
                is committed or rolled back. All future transactions will see the effect of this transaction. (No stale state)`,
          },
          {
            title: `Isolation`,
            definition: `If multiple transactions are done concurrently, they will have the same effect as if they had been
                done sequentially.`,
          },
          {
            title: `Durability`,
            definition: `Transactions that are committed will remain after any crash, power loss, or network failure as they
                are written to non-volatile storage.`,
          },
        ],
      },
    ],
    [
      { h2: `Database Index` },
      {
        p: `A extra data structure that can be used to reduce the time needed to find records with specific attributes. Many different types of 
            indexes can be used: bitmap indexes, reverse indexes, dense indexes. Using an index will increase the size of the data stored and the write 
            times, but greatly reduce the read times for certain queries.`,
      },
    ],
    [
      { h2: `Key-Value Stores` },
      {
        p: `These are No-SQL databases (databases without a strict schema). They store key-value pairs in hash tables. These are perfect for use cases
        where a strict schema is not required, like caches or dynamic configuration of server variables. Lookup times are very fast in such a database.
        Some popular databases of this type are Redis - in memory datastore, meaning all data will be lost if it shuts down but is very fast, can also
        be used to implement rate-limiting. Etcd - strongly consistent, highly available key-value store and is often used to implement leader election
        in a system. Zookeeper - often used to store important configuration or to perform leader election.`,
      },
      { link: `https://redis.io` },
      { link: `https://etcd.io` },
      { link: `https://zookeeper.apache.org` },
    ],
    [{ h2: `Specialized Storage` }],
    [
      { h3: `Blob Storage` },
      {
        p: `Blob (Binary Large Object) refers to an arbitrary piece of unstructured data like video, binary files, or backups. Most common types are 
        Azure Blob Storage (Microsoft), S3 (Amazon), or GCS (Google). Similar to key-value stores but they are optimized for storing and retrieving 
        massive amounts of large data objects.`,
      },
    ],
    [
      { h3: `Time Series Databases` },
      {
        p: `Generally used whenever data is collected based on a given moment in time, like in a logging or monitoring system or stock history.
        Common ones are InfluxDB, Prometheus and Graphite.`,
      },
    ],
    [
      { h3: `Graph Databases` },
      {
        p: `Used when your dataset has many relationships between data, like a social network. These databases are optimized for queries on data
        that is stored in a graph structure. Neo4j is a commonly used graph database which uses the Cypher, a graph query language that has been
        standardized to be used with other graph databases.`,
      },
    ],
    [
      { h3: `Spatial Database` },
      {
        p: `Used when you have a spatial relationship between your data like for locations on maps. Uses a quadtree to divide the space into
        quadrants. Each child of that node also has quadrants. This makes it quick to find things spacially (log base 4 time for a perfect quadtree).`,
      },
    ],
    [
      { h2: `Replication` },
      {
        p: `A secondary database that is a duplicate of your main database that will take over if your main database fails. The main database takes
        care of keeping the replica up to date using synchronous writes for critical information. In cases where your replica may be geographically 
        separated and taking care of another userbase, you may not care about having them perfectly in sync in which case you can use async writes.`,
      },
    ],
    [
      { h2: `Sharding` },
      {
        p: `When your main database is split up into little databases called shards or data partitions. Useful for when your main database is reaching 
        limitations on size and when you want to minimize the amount of data being duplicated. How you choose which data goes to which shard should 
        minimize hot spots, so using hashed values could be beneficial. These decisions can be done by a reverse proxy inbetween your server and your
        database shards.`,
      },
    ],
  ],
}
