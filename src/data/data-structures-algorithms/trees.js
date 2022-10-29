export const pageData = {
  pageTitle: "Trees",
  pageInfo: `Trees are a special case of a graph. It consists of nodes, each with a value and pointers to child nodes. A tree 
    is essentially a connected, directed, and acyclic graph where there is a root node and whose nodes all have a single parent, 
    except for the root node.`,
  cheats: [
    [
      { link: `https://algo.monster/problems/javascript_overview` },
      { h2: `Tree Terminology` },
      {
        definitionList: [
          {
            title: `Root`,
            definition: `The first node of the tree.`,
          },
          {
            title: `Leaf Nodes / Leaves`,
            definition: `The nodes at the bottom of the tree.`,
          },
          {
            title: `Branch`,
            definition: `A path between the root and its leaves.`,
          },
          {
            title: `Height`,
            definition: `The length of the longest branch.`,
          },
          {
            title: `Depth`,
            definition: `The distance of a node to the root of the tree, also known as the node's 'level'.`,
          },
        ],
      },
    ],
    [
      { h2: `Types of Trees` },
      {
        definitionList: [
          {
            title: `Binary Tree`,
            definition: `A tree where the nodes have up to two child nodes.`,
          },
          {
            title: `K-ary Tree`,
            definition: `A tree where the nodes have up to 'k' child nodes. A binary tree has k=2.`,
          },
          {
            title: `Perfect Binary Tree`,
            definition: `A binary tree where each interior node has two child nodes and where the leaf nodes all have the same depth.`,
          },
          {
            title: `Complete Binary Tree`,
            definition: `Similar to a binary tree.  All interior nodes have two child nodes, but the leaf nodes do not need to have the same depth. 
              The nodes in the last level MUST be as far left as possible.`,
          },
          {
            title: `Balanced Binary Tree`,
            definition: `A binary tree where the left and right subtrees have no heights that differ by no more than 1. This maintains the logarithmic 
              time complexity.`,
          },
          {
            title: `Full Binary Tree`,
            definition: `A binary tree where the nodes have either zero or two child nodes.`,
          },
        ],
      },
    ],
    [
      { h2: `Complexity` },
      {
        definitionList: [
          {
            title: `Balanced Tree`,
            definition: `O(log(N))`,
          },
          {
            title: `Worst Case Unbalanced`,
            definition: `O(N)`,
          },
        ],
      },
    ],
  ],
}
