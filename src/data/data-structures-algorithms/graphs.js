export const pageData = {
  pageTitle: "Graphs",
  pageInfo: `Graphs are a collection of nodes called vertices that may or may not have connections between them called edges. They can
    be described by what is called an adjacency list. This is typically done with a hash table where every node stores a list of its edges.`,
  cheats: [
    [
      { h2: `Graph Terminology` },
      {
        definitionList: [
          {
            title: `Graph Cycle`,
            definition: `When three or more vertices in the graph are connected in a way that forms a closed loop, a cycle is formed.
              Definition can be broaded to include cycles of length one or two, so clarify with whoever is asking the question what the
              cycle length is defined by.`,
          },
          {
            title: `Acyclic Graph`,
            definition: `A graph with no cycles.`,
          },
          {
            title: `Cyclic Graph`,
            definition: `A graph that has at least one cycle.`,
          },
          {
            title: `Directed Graph`,
            definition: `A graph where the edges can only be traversed in one specified direction.`,
          },
          {
            title: `Undirected Graph`,
            definition: `A graph where the edges can be traversed in both directions.`,
          },
          {
            title: `Strongly Connected Graph`,
            definition: `A graph where there are bidirectional connections between vertices of every pair of vertices.`,
          },
          {
            title: `Weakly Connected Graph`,
            definition: `A graph where there are connections between vertices of every pair of vertices, but not necessarily 
              bidirectional ones.`,
          },
          {
            title: `Disconnected Graph`,
            definition: `A graph that isn't connected...`,
          },
        ],
      },
    ],
    [
      { h2: `Complexity` },
      {
        p: `Depending on the type of graph and algorithm used, the time and space complexity varies.`,
      },
      {
        definitionList: [
          {
            title: `BFS`,
            definition: `O(V+E)`,
          },
          {
            title: `DFS`,
            definition: `O(V+E)`,
          },
        ],
      },
    ],
  ],
}
