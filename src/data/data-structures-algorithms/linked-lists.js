export const pageData = {
  pageTitle: "Linked Lists",
  pageInfo: `Linked lists are data structures of nodes that each have pointers to other nodes and a value. There are a few
  main types, singly linked lists, doubly linked lists, and circular linked lists.  The first node of a linked list is referred
  to as the head while the last is called the tail.`,
  cheats: [
    [
      { link: `https://algo.monster/problems/javascript_overview` },
      { h2: `Singly Linked Lists` },
      {
        p: `The head has a next value that points to another node. The tail has a next value of null. Add or removing nodes is as
    easy as overwriting next pointers.`,
      },
    ],
    [
      { h3: `Time Complexity` },
      {
        definitionList: [
          {
            title: `Accessing the head`,
            definition: `O(1)`,
          },
          {
            title: `Accessing the tail`,
            definition: `O(N), must traverse whole list to reach the tail`,
          },
          {
            title: `Accessing the middle node`,
            definition: `O(N)`,
          },
          {
            title: `Inserting/removing the head`,
            definition: `O(1)`,
          },
          {
            title: `Inserting/removing the tail`,
            definition: `O(N) to access + O(1) to remove`,
          },
          {
            title: `Inserting/removing a middle node`,
            definition: `O(N) to access + O(1) to remove`,
          },
          {
            title: `Searching for a value`,
            definition: `O(N)`,
          },
        ],
      },
    ],
    [
      { h2: `Doubly Linked Lists` },
      {
        p: `Same as a singly linked list, but each node also has a 'prev' property that points to the previous node in the list. 
        The previous node for the head is 'null'.`,
      },
    ],
    [
      { h3: `Time Complexity` },
      {
        definitionList: [
          {
            title: `Accessing the head`,
            definition: `O(1)`,
          },
          {
            title: `Accessing the tail`,
            definition: `O(1)`,
          },
          {
            title: `Accessing the middle node`,
            definition: `O(N)`,
          },
          {
            title: `Inserting/removing the head`,
            definition: `O(1)`,
          },
          {
            title: `Inserting/removing the tail`,
            definition: `O(1)`,
          },
          {
            title: `Inserting/removing a middle node`,
            definition: `O(N) to access + O(1) to remove`,
          },
          {
            title: `Searching for a value`,
            definition: `O(N)`,
          },
        ],
      },
    ],
    [
      { h2: `Circular Linked Lists` },
      {
        p: `A linked list where the tail points to its head, forming a closed circle.  Can be either singly or doubly linked.`,
      },
    ],
  ],
}
