// Introduction to Graph

/**
 * 
 *      v1 ------- v3-------
 *      |          |        v5
 *      |          |        |
 *      V2 ------- v4 ------
 * 
 * Graph = (V, E) [V --> vertices, E --> edges]
 * 
 *  V = {v1, v2, v3, v4, v5}
 * 
 *  E = {(v1, v2), (v1, v3), (v2, v4), (v3, v4), (v3, v5)}
 * 
 */

/**
 * o Two types of graph:
 * 1. Directed Graph --> only one way travel, represented by arrow
 * 2. Undirected Graph --> no arrow representation, both way representation
 * 
 * o Directed Graph:
 * ================
 *      v1 ------> v3------->
 *      |          |        v5
 *     ⬇️         ⬇️        |
 *      V2 ------> v4 ------>
 * 
 * o in degree(v3) = 1
 * o out degree(v3) = 2
 * 
 * o sum of indegrees = |E|
 * o Sum of outdegrees = |E|
 * Maximum number of edges = |V| * (|V| - 1) [in which connection can be made, every vertex can have in arrow & out arrow]
 * 
 * 
 * 
 * 
 * Undirected Graph:
 * ==================
 *      v1 ------- v3-------
 *      |          |        v5
 *      |          |        |
 *      V2 ------- v4 ------
 * 
 * o Degree(v3) = 3
 * o sum of degrees = 2 X |E|
 * o Maximum number of edges = (|V| * (|V| - 1)) / 2
 */


// ========================================
/**
 * o Walk: v1, v2, v4, v2
 *  We are walking from v1 to v2 , v2 to v4, v4 to again v2
 * 
 * o Path: v1, v2, v4
 * path cannot be in reverse
 * 
 * o Cyclic: There exists a walk that begins and ends with same vertex.
 *  example
 *      a --- b
 *      |     |
 *      c --- d
 * 
 * o Acyclic: 
 *  ex: directed acyclic graph.
 */

// ===========================================
// Weighted and unweighted graphs
/**
 * o Weighted graph: quantity of the link is also given. 
 * Ex: joins of road between different junction. one junction connection
 * road is 4km and other 10km long
 * 
 * o Unweighted graph.
 */