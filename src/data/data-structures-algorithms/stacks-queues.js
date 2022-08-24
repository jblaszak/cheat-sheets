export const pageData = {
  pageTitle: "Stacks and Queues",
  pageInfo: ``,
  cheats: [
    [
      { h2: `Stacks` },
      {
        p: `A data structure where the last element in is the first element out (LIFO - last in, first out).  Stacks are
          typically implemented as a dynamic array as a singly linked list.`,
      },
    ],
    [
      { h3: `Time Complexity` },
      {
        definitionList: [
          {
            title: `Pushing an element onto the stack`,
            definition: `O(1)`,
          },
          {
            title: `Popping an element off the stack`,
            definition: `O(1)`,
          },
          {
            title: `Viewing the element on top of the stack`,
            definition: `O(1)`,
          },
          {
            title: `Searching for an element in the stack`,
            definition: `O(N)`,
          },
        ],
      },
    ],
    [
      { h2: `Queues` },
      {
        p: `A data structure where the first element in is the first element out (FIFO - first in, first out).  Queues are typically
          implemented as a doubly linked list.`,
      },
    ],
    [
      { h3: `Time Complexity` },
      {
        definitionList: [
          {
            title: `Inserting an element in the queue (at the end)`,
            definition: `O(1)`,
          },
          {
            title: `Removing an element from the queue (at the beginning)`,
            definition: `O(1)`,
          },
          {
            title: `Viewing the element at the from of the queue`,
            definition: `O(1)`,
          },
          {
            title: `Searching for an element in the queue`,
            definition: `O(N)`,
          },
        ],
      },
    ],
  ],
}
