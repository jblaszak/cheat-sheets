export const pageData = {
  pageTitle: "Hash Tables",
  pageInfo: `Hash tables provide fast insertion, deletion and lookup of key/value pairs. They use a dynamic array of linked lists
    under the hood. Each key is hashed to give it an index in the dynamic array. If there is no entry at that index, a head node of 
    a linked list is created with the value and key at the head.  If there is already a linked list there, a node with the value and key 
    is added to the tail of that linked list.`,
  cheats: [
    [
      { h2: `Time Complexity` },
      {
        p: `If the hashing algorithm is written poorly, there will be a lot of collisions resulting in worse performance because of 
          long linked lists that need to be traversed. This means 0(N) complexity. However, if the hash function is highly optimized 
          (as is often the case), there will be minimal collisions and 0(1) is expected.`,
      },
      {
        definitionList: [
          {
            title: `Inserting a key/value pair`,
            definition: `O(1) on average, 0(N) in the worst case`,
          },
          {
            title: `Removing a key/value pair`,
            definition: `O(1) on average, 0(N) in the worst case`,
          },
          {
            title: `Looking up a key`,
            definition: `O(1) on average, 0(N) in the worst case`,
          },
        ],
      },
    ],
    [
      { h2: `Example Implementation` },
      {
        code: {
          language: `javascript`,
          code: `[
    0: (value1, key1) -> null,
    1: (value2, key2) -> (value3, key3) -> null,
    2: (value4, key4) -> null,
    3: null,
    4: (value5, key5) -> null,
]`,
        },
      },
    ],
  ],
}
