import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import javax.swing.tree.TreeNode;

 
 
    /**
     * Converts a camelCase string into a space-separated string.
     *
     * @param input The input camelCase string.
     * @return A string with spaces inserted before uppercase letters, 
     *         or the original input if it's null or empty.
     */

     class Solution {
        public String camelCase(String input) {
         if (input == null || input.isEmpty()) {
           return input;
         }
          
          StringBuilder results = new StringBuilder();
          
          for (int i = 0; i < input.length(); i++) {
            char currentChar = input.charAt(i);
            
            if(Character.isUpperCase(currentChar) && i > 0) {
              results.append(' ');
            }
            
            results.append(currentChar);
          }
          
         return results.toString();
        }
      
        public String camelCaseAlternative(String input) {
          return input.replaceAll("([A-Z])", " $1");
        }
      }

       /**
     * Checks if a given number is a Narcissistic Number (Armstrong Number).
     *
     * @param num  The number to be checked.
     * @return  true if the number is narcissistic, false otherwise.
     */

     public class NumberUtils {

        public boolean isNarcissistic(int number) {
            if (number < 0) {
              return false;
            }
          
          int originalNum = number;
          int power = String.valueOf(number).length();
          int sum = 0;
          
          while (number > 0) {
            int digit = number % 10;
            sum += Math.pow(digit, power);
            number /= 10;
          }
          
          return sum == originalNum;
        }
    }   
      /**
       * Calculates the sum of the numbers in the nth row of the odd number triangle.
       *
       * @param n  The row index (starting from 1).
       * @return The sum of the numbers in the nth row, or null if n is invalid.
       */
      
      class RowSumOddNumbers {
        public int rowSumOddNumbers(int n) {
            return n * n * n;
        }
    }
  
    /**
 * Finds the next integral perfect square after a given number.
 *
 * @param sq The input number.
 * @return The next integral perfect square if sq is a perfect square, otherwise -1.
 */
public class NextPerfectSquare {

  public long findNextSquare(long sq) {
      long root = (long) Math.sqrt(sq); // Calculate square root
      return (root * root == sq) ? (root + 1) * (root + 1) : -1; // Check and calculate
  }
}

/**
 * Checks if a string ends with another string.
 *
 * @param str    The main string.
 * @param ending The ending string to check for.
 * @return true if the str ends with the ending string, false otherwise.
 */
public class StringEndsWith {

  public boolean solution(String str, String ending) {
      return str.endsWith(ending); 
  }
}

/**
 * Squares every digit of an integer and concatenates the results.
 *
 * @param n The input integer.
 * @return The integer formed by concatenating the squares of each digit.
 */
public class SquareDigits {

  public int squareDigits(int n) {
    return Integer.valueOf(
      Integer.toString(n).chars()
      .map(i-> i-48).map(i-> i*i)
      .mapToObj(i-> Integer.toString(i))
      .collect(Collectors.joining())
    );
  }
}

public class HighAndLow {
    /**
     * Finds the highest and lowest numbers in a string of space-separated integers.
     *
     * @param numbers The input string containing space-separated integers.
     * @return A string containing the highest and lowest numbers, separated by a space.
     */
    public String highAndLow(String numbers) {
      String[] nums = numbers.split(" ");
  
      int max = Arrays.stream(nums).mapToInt(Integer::parseInt).max().getAsInt();
      int min = Arrays.stream(nums).mapToInt(Integer::parseInt).min().getAsInt(); 
  
      return max + " " + min;
  }  
}

public class Accumul {

    /**
     * Applies a unique accumulation rule to a string.
     *
     * This function transforms each letter in the input string according to the following rules:
     * 
     * 1. The first occurrence is capitalized.
     * 2. Subsequent occurrences are lowercase and repeated a number of times equal to 
     *    the letter's position in the alphabet (starting from 0 for 'a' or 'A').
     * 3. The resulting strings for each letter are then joined with hyphens.
     *
     * @param s The input string containing only letters from a-z or A-Z.
     * @return The accumulated string following the defined rules.
     */
    
    public String accum(String s) {
      return IntStream.range(0, s.length())
                .mapToObj(i -> Character.toUpperCase(s.charAt(i)) +
                String.valueOf(Character.toLowerCase(s.charAt(i))).repeat(i))  
                .collect(Collectors.joining("-"));
     }
}

//alternative
public static String accum(String s) {
  String[] letters = s.toUpperCase().split("");
  for(int i = 0; i < letters.length; ++i){
    letters[i] += letters[i].toLowerCase().repeat(i);
  }
  return String.join("-", letters);
}


/*
FizzBuzz is a classic programming problem. For numbers 1 through n, print "Fizz" if the number is divisible by 3,
"Buzz" if divisible by 5, and "FizzBuzz" if divisible by both 3 and 5. Otherwise, print the number itself.
*/
public class FizzBuzz {
  public void fizzBuzz(int n) {
      for (int i = 1; i <= n; i++) {
          if (i % 15 == 0) System.out.println("FizzBuzz");
          else if (i % 3 == 0) System.out.println("Fizz");
          else if (i % 5 == 0) System.out.println("Buzz");
          else System.out.println(i);
      }
  }
}

/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward.
This function checks if a string is a palindrome, ignoring non-alphanumeric characters and case.
*/
public class PalindromeChecker {
  public boolean isPalindrome(String str) {
      str = str.replaceAll("[^A-Za-z0-9]", "").toLowerCase();
      int left = 0, right = str.length() - 1;
      while (left < right) {
          if (str.charAt(left++) != str.charAt(right--)) {
              return false;
          }
      }
      return true;
  }
}

/*
The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
This function calculates the factorial recursively.
*/
public class FactorialCalculator {
  public int factorial(int n) {
      if (n == 0) {
          return 1; // Base case: 0! = 1
      } else {
          return n * factorial(n - 1); // Recursive case
      }
  }
}

/*
The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones.
This function calculates the nth Fibonacci number recursively.
*/
public class FibonacciCalculator {
  public int fibonacci(int n) {
      if (n <= 1) {
          return n; // Base cases: 0 and 1
      } else {
          return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
      }
  }
}

/*
This function reverses a given string in place using two pointers.
*/
public class StringReverser {
  public void reverseString(char[] s) {
      int left = 0, right = s.length - 1;
      while (left < right) {
          char temp = s[left];
          s[left++] = s[right];
          s[right--] = temp;
      }
  }
}

/*
This method sorts an array of integers in ascending order using the Arrays.sort() method. 
It utilizes the Dual-Pivot Quicksort algorithm for efficient sorting.
*/
public class ArraySorter {
  public void sortArray(int[] arr) {
      Arrays.sort(arr); 
  }
}

/**
 * Searches for a target value within a sorted array using binary search (recursive implementation).
 *
 * @param arr   The sorted array to search within.
 * @param target The value to search for.
 * @param start  The starting index of the search range (inclusive).
 * @param end    The ending index of the search range (inclusive).
 * @return The index of the target value if found, or -1 if not found.
 *
 * Time Complexity: O(log n) - Logarithmic due to halving the search space at each step.
 * Space Complexity: O(log n) - Recursive call stack depth for a worst-case scenario.
 */
public static int binarySearchRecursive(int[] arr, int target, int start, int end) {
  if (start > end) {
      return -1; // Target not found
  }

  int mid = start + (end - start) / 2; // Calculate the middle index

  if (arr[mid] == target) {
      return mid; // Target found at index mid
  } else if (arr[mid] < target) {
      return binarySearchRecursive(arr, target, mid + 1, end); // Search in the right half
  } else {
      return binarySearchRecursive(arr, target, start, mid - 1); // Search in the left half
  }
}

/**
 * Sorts an array of integers in ascending order using the merge sort algorithm.
 *
 * @param arr The array to be sorted.
 *
 * Time Complexity: O(n log n) - Efficient for large datasets due to divide-and-conquer approach.
 * Space Complexity: O(n) - Requires a temporary array of the same size for merging.
 */
public static void mergeSort(int[] arr) {
  if (arr.length > 1) {
      int mid = arr.length / 2;

      int[] leftHalf = Arrays.copyOfRange(arr, 0, mid);
      int[] rightHalf = Arrays.copyOfRange(arr, mid, arr.length);

      mergeSort(leftHalf);
      mergeSort(rightHalf);

      merge(arr, leftHalf, rightHalf);
  }
}

// Helper function to merge two sorted halves
private static void merge(int[] arr, int[] left, int[] right) {
  int i = 0, j = 0, k = 0; // Indices for left, right, and merged arrays

  // Compare elements from left and right halves, merging them into arr
  while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
          arr[k++] = left[i++];
      } else {
          arr[k++] = right[j++];
      }
  }

  // Copy remaining elements of left, if any
  while (i < left.length) {
      arr[k++] = left[i++];
  }

  // Copy remaining elements of right, if any
  while (j < right.length) {
      arr[k++] = right[j++];
  }
}


/**
 * Sorts an array of integers in ascending order using the quick sort algorithm.
 * 
 * @param arr The array to be sorted.
 * @param low  The starting index of the partition to sort.
 * @param high The ending index of the partition to sort.
 * 
 * Time Complexity: O(n log n) on average, O(n^2) in the worst case.
 * Space Complexity: O(log n) due to recursive call stack.
 */
public static void quickSort(int[] arr, int low, int high) {
  if (low < high) {
      int pivotIndex = partition(arr, low, high);
      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
  }
}

// Helper function to partition the array
private static int partition(int[] arr, int low, int high) {
  int pivot = arr[low];  // Choose the first element as the pivot
  int i = low - 1;       // Index for elements less than pivot
  int j = high + 1;      // Index for elements greater than pivot

  while (true) {
      do {
          i++;
      } while (arr[i] < pivot);  // Move i until an element >= pivot is found

      do {
          j--;
      } while (arr[j] > pivot);  // Move j until an element <= pivot is found

      if (i >= j) {
          return j; // Partitioning complete
      }

      swap(arr, i, j); // Swap the elements at i and j
  }
}

// Helper function to swap elements
private static void swap(int[] arr, int i, int j) {
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


/**
 * Implements the Singleton design pattern to ensure only one instance of a class exists.
 *
 * The Singleton class is thread-safe and uses double-checked locking for optimization.
 */
public static class Singleton {

  private static volatile Singleton instance;

  private Singleton() {} // Private constructor to prevent external instantiation

  public static Singleton getInstance() {
      if (instance == null) {
          synchronized (Singleton.class) { // Thread-safe
              if (instance == null) {
                  instance = new Singleton(); // Lazy initialization
              }
          }
      }
      return instance;
  }
}

/**
 * Reverses a singly linked list iteratively.
 *
 * @param head The head node of the linked list.
 * @return The new head of the reversed linked list.
 * 
 * Time Complexity: O(n) - Traverse through the linked list once.
 * Space Complexity: O(1) - Constant extra space used.
 */
public static ListNode reverseList(ListNode head) {
  ListNode prev = null;
  ListNode curr = head;
  while (curr != null) {
      ListNode nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
  }
  return prev; 
}

/**
 * Counts the frequency of each word in a given string.
 *
 * @param text The input string containing words.
 * @return A HashMap mapping words to their frequencies.
 *
 * Time Complexity: O(n), where n is the number of words in the text.
 * Space Complexity: O(n), as we store each unique word in the HashMap.
 */
public static Map<String, Integer> countWordFrequency(String text) {
    Map<String, Integer> frequencyMap = new HashMap<>();
    String[] words = text.split("\\s+");  // Split by whitespace

    for (String word : words) {
        frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);
    }

    return frequencyMap;
}

/**
 * Performs an inorder traversal of a binary tree and prints the node values.
 *
 * Inorder traversal visits the left subtree, then the root, then the right subtree.
 *
 * @param root The root node of the binary tree.
 * 
 * Time Complexity: O(n), where n is the number of nodes in the tree.
 * Space Complexity: O(h), where h is the height of the tree (in the worst case, when the tree is skewed).
 */
public static void inorderTraversal(TreeNode root) {
  if (root != null) {
      inorderTraversal(root.left);
      System.out.print(root.val + " ");
      inorderTraversal(root.right);
  }
}

/**
 * Calculates the average of an array of integers.
 *
 * @param arr The integer array.
 * @return The average value as a double, or NaN if the array is empty.
 */
public static double calculateAverage(int[] arr) {
    if (arr.length == 0) {
        return Double.NaN; // Avoid division by zero
    }

    int sum = 0;
    for (int num : arr) {
        sum += num;
    }
    return (double) sum / arr.length; 
}

/**
 * Performs a breadth-first search (BFS) on a graph starting from a given source node.
 * 
 * @param graph The graph represented as an adjacency list (Map<Integer, List<Integer>>).
 * @param start The source node to start the search from.
 * @return An array representing the shortest distance from the start node to each node, 
 *         or -1 if a node is unreachable.
 * 
 * Time Complexity: O(V + E) where V is the number of vertices (nodes) and E is the number of edges.
 * Space Complexity: O(V) in the worst case, for the queue and the visited array.
 */
public static int[] bfs(Map<Integer, List<Integer>> graph, int start) {
  int numNodes = graph.size();
  int[] distances = new int[numNodes];
  Arrays.fill(distances, -1); // Initialize distances as unreachable

  Queue<Integer> queue = new LinkedList<>();
  queue.add(start);
  distances[start] = 0; // Distance to itself is 0

  while (!queue.isEmpty()) {
      int node = queue.poll();
      for (int neighbor : graph.get(node)) {
          if (distances[neighbor] == -1) { // If not visited
              queue.add(neighbor);
              distances[neighbor] = distances[node] + 1;
          }
      }
  }
  
  return distances;
}
