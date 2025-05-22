// Overview of Sorting Algorithm

/**
 * 1. Binary Array (or an array of two types of element) --> solved using partition algorithm quick sort (lomato, hoare, naive)
 * 2. Array with three values
 * 3. Array of size n and small ranged values. --> counting sort (time: O(n+k), space O(k))
 * 4. Array of size n and range is of size n^2 or n^3 or closer --> radix sort
 * 5. Array of uniformily distributes data over a range --> bucket sort
 * 6. When memory writes are costly --> selection sort and cycle sort
 * 7. When adajest swapes are allowed --> bubble sort, optimized version of bubble sort is cocktail sort
 * 8. When array size is small -->  Selection sort and insertion sort. Insertion sort work best
 * 9. When available extra memory is less --> shell sort
 */

/**
 * General Purpose Sorting Algorithm:
 * 1. Merge Sort
 * 2. Heap Sort
 * 3. Quick Sort
 * 
 * --> Hybrid Algorithm (used in libraries):
 * 1. TimSort --> mix of insertion sort and merge sort
 * 2. IntroSort --> mix of quick sort, heap sort and insertion sort
 */