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
  ],
}
