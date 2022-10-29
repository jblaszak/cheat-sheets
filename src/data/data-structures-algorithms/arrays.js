export const pageData = {
  pageTitle: "Arrays",
  pageInfo: `Arrays are a linear collection of data that can be accessed at numbered indicies starting at 0.`,
  cheats: [
    [
      { h2: `Time Complexity` },
      {
        p: `Arrays can be implemented statically or dynamically.  Static arrays have a fixed amount of memory allocated before
      storing the array values. If a new value needs to be added, the whole array must be copied and have extra memory allocated.
      Dynamic arrays set double the amount needed, and when adding a new value goes outside that amount, the array is copied and
      memory doubled again. Amortizing this leads to a constant time insertion at end operation.`,
      },
      {
        definitionList: [
          {
            title: `Accessing a value at given index`,
            definition: `O(1)`,
          },
          {
            title: `Updating a value at given index`,
            definition: `O(1)`,
          },
          {
            title: `Inserting a value at beginning`,
            definition: `O(N)`,
          },
          {
            title: `Inserting a value in middle`,
            definition: `O(N)`,
          },
          {
            title: `Inserting a value at end`,
            definition: `O(1) for dynamic array, O(N) for static array`,
          },
          {
            title: `Removing a value at beginning`,
            definition: `O(N)`,
          },
          {
            title: `Removing a value at middle`,
            definition: `O(N)`,
          },
          {
            title: `Removing a value at end`,
            definition: `O(1)`,
          },
          {
            title: `Copying array`,
            definition: `O(N)`,
          },
        ],
      },
      { link: `https://algo.monster/problems/javascript_overview` },
    ],
  ],
}
