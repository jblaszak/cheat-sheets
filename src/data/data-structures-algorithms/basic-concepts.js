export const pageData = {
  pageTitle: "Data Structures & Algorithms Basic Concepts",
  pageInfo: `Data Structures are data, the relationships between the pieces of data, and the functions we can apply to that data.`,
  cheats: [
    [
      { h2: `Complexity Analysis` },
      {
        p: `Used to compare one algorithm to another to determine which one is better. Usually written in Big O notation.`,
      },
      {
        definitionList: [
          {
            title: `Time Complexity`,
            definition: `A measure of how fast an algorithm runs.`,
          },
          {
            title: `Space Complexity`,
            definition: `A measure of how much auxiliary memory an algorithm uses.`,
          },
        ],
      },
    ],
    [
      { h2: `Big O Notation` },
      {
        p: `Defines how the space and time complexity of the algorithm changes as the size of the input increases.
        Ordered from fastest to slowest.  Big O notation can be used to describe the best, average and worst-case
        scenarios for a given algorithm, but typically we use it for the worst case.`,
      },
      {
        p: `Example: O(N+M) could be used to describe an algorithm that has to traverse an array of length 'N' and another
        array of length 'M' once.`,
      },
      {
        definitionList: [
          {
            title: `Constant`,
            definition: `O(1) always takes the same amount of time/memory.`,
          },
          {
            title: `Logarithmic`,
            definition: `O(log(N))`,
          },
          {
            title: `Linear`,
            definition: `O(N) grows at the same rate as the size of the inputs.`,
          },
          {
            title: `Log-Linear`,
            definition: `O(Nlog(N))`,
          },
          {
            title: `Quadratic`,
            definition: `O(N^2)`,
          },
          {
            title: `Cubic`,
            definition: `O(N^3)`,
          },
          {
            title: `Exponential`,
            definition: `O(2^N)`,
          },
          {
            title: `Factorial`,
            definition: `O(N!)`,
          },
        ],
      },
    ],
  ],
}
