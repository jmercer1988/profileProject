/*
  This query calculates the squares of the values in the 'n' column
  of the 'square' table and returns the original values along with
  their squares in a new column named 'res'.
*/
SELECT
    n, 
    n * n AS res
FROM square;

/*
This query generates an array containing the first 'n' multiples of 'x' for each pair of 'x' and 'n' in the 'counter' table.
The results are returned as a table with columns 'x', 'n', and the array of multiples 'res'.
The results are sorted by 'x' in ascending order, and then by 'n' in ascending order.
*/

WITH RECURSIVE multiples AS (
    SELECT x, n, 1 AS multiplier -- Start with the first multiple
    FROM counter
    UNION ALL
    SELECT x, n, multiplier + 1 -- Generate the next multiple
    FROM multiples
    WHERE multiplier < n -- Stop when 'n' multiples have been generated
)

SELECT x, n, ARRAY_AGG(multiplier * x) AS res -- Aggregate multiples into an array
FROM multiples
GROUP BY x, n
ORDER BY x, n;

/*
This query converts the string in the 's' column of the 'makeuppercase' table to uppercase and returns the result in a new column named 'res'.
*/

SELECT s, UPPER(s) AS res
FROM makeuppercase;

/*
This query retrieves all unique ages from the 'people' table.
*/

SELECT DISTINCT age
FROM people;

/*
This query returns all rows and the columns custid, custname, and custstate from the customers table.
*/

SELECT 
    custid, 
    custname, 
    custstate
FROM 
    customers;

/*
This query calculates the surface area and volume of a box and returns the dimensions along with the calculated values, sorted as specified.
*/

SELECT
    width,
    height,
    depth,
    2 * (width * height + width * depth + height * depth) AS area,
    width * height * depth AS volume
FROM box
ORDER BY area, volume, width, height;

/*
This query removes spaces from the strings in the 'x' column of the 'nospace' table and returns the results in a new column named 'res'.
*/

SELECT x, REPLACE(x, ' ', '') AS res
FROM nospace;

/*
**Explanation:**

1. **SELECT x, REPLACE(x, ' ', '') AS res:**
   - `x`: Selects the original string from the `x` column.
   - `REPLACE(x, ' ', '')`: Applies the `REPLACE` function to the `x` column. This function replaces all occurrences of a space character (' ') with an empty string (''), effectively removing all spaces.
   - `AS res`: Names the result of the `REPLACE` function as `res`.
2. **FROM nospace:** Specifies the table from which the data is being retrieved.
*/


/*
This query retrieves the names and ages of users from the 'users' table who are 18 years old or older.
*/

SELECT 
    name, 
    age
FROM 
    users
WHERE 
    age >= 18;

    /*
This query calculates the square root of values in the 'number1' column and the base-10 logarithm of values in the 'number2' column from the 'decimals' table.
It returns a table with columns 'root' and 'log' containing the calculated results.
*/
SELECT
  SQRT(number1) AS root,
  LOG(number2) AS log
FROM
  decimals

/*

Working out triangles using if the remaining column adds up to 180 using 'a' and 'b' vs whats left:


**Explanation:**

1. **SELECT a, b, ...:**
    - Selects the original columns `a` and `b` from the table.

2. **CASE WHEN a + b >= 180 THEN NULL ELSE 180 - a - b END AS res:**
    - Uses a `CASE` statement to handle different scenarios:
        - If `a + b >= 180`, it returns `NULL` to indicate an invalid triangle.
        - Otherwise, it calculates the third angle `180 - a - b`.
    - Assigns the result (either the third angle or `NULL`) to a new column named `res`.

3. **FROM otherangle:**
    - Specifies the table from which the data is being retrieved.

*/
SELECT
    a,
    b,
CASE
WHEN 
    a + b >= 180 
    THEN NULL
ELSE 
    180 - a - b
END AS 
    res
FROM 
    otherangle;

-- This query finds all values that appear more than once in the specified column.
SELECT 
    column_name
FROM 
    table_name
GROUP BY 
    column_name
HAVING 
    COUNT(*) > 1;

-- This query finds the Nth highest salary using a subquery and OFFSET.
SELECT salary
FROM (
  SELECT DISTINCT 
    salary 
  FROM 
    employees 
  ORDER BY 
    salary 
        DESC 
        OFFSET N-1 
) AS 
    top_salaries
LIMIT 1;

-- This query calculates the running total for each row in a table using a window function.
SELECT
  id,
  value,
SUM(value) 
    OVER (ORDER BY id) 
AS 
    running_total
FROM 
    table_name;

-- This query finds values that exist in both 'table1' and 'table2'.
SELECT 
    column_name
FROM 
    table1
INTERSECT
SELECT 
    column_name
FROM 
    table2;
 
-- This query concatenates strings from multiple rows into a single string using STRING_AGG.
SELECT 
    STRING_AGG(column_name, ', ') 
    AS 
        concatenated_string
FROM 
    table_name;

-- This query pivots rows into columns based on a category.
SELECT *
FROM (
  SELECT 
    category, 
    value 
  FROM 
    table_name
) AS 
    source_table
PIVOT (
    SUM(value) 
    FOR 
      category 
      IN 
          (
              'category1', 
              'category2', 
          ...) 
      ) 
AS pivoted_table;

-- This query calculates the difference in days between two date columns.
SELECT 
    start_date, 
    end_date,
    end_date - start_date 
 AS 
    days_difference
FROM 
    table_name;

/*
  Purpose:  Determine if the sum of two integer values is odd.
  Input:    flower1 (INTEGER), flower2 (INTEGER)
  Output:   res (BOOLEAN) - True if the sum is odd, False otherwise

  Logic:
  1. `flower1 + flower2`: Calculates the sum of the two integer columns.
  2. `% 2`:  Applies the modulo operator to the sum. Modulo 2 returns the remainder after dividing by 2.
  3. `= 1`: Checks if the remainder is 1.  A remainder of 1 indicates an odd number. 
  4. `AS res`:  Assigns the result of the boolean expression (True or False) to a new column named `res`.
*/

SELECT flower1, flower2, (flower1 + flower2) % 2 = 1 AS res 
FROM love;

/*
  Purpose:  Checks if strings in the 'str' column are palindromes (ignoring case).
  Input:    
    - Table: 'ispalindrome'
    - Column: 'str' (VARCHAR or similar text type)
  Output:   
    - Column: 'str' (original input string)
    - Column: 'res' (BOOLEAN) - True if the string is a palindrome, False otherwise

  Logic:
  1. Function Definition:
    - `is_palindrome(text VARCHAR)`: A function that takes a string as input.
    - `RETURNS BOOLEAN`: Specifies the return type (true or false).
    - `LANGUAGE plpgsql IMMUTABLE`: This is written in PL/pgSQL and indicates that the result solely depends on the input, enabling potential optimizations.

  2. Within the Function:
    - `text := LOWER(text);`: Converts the input string to lowercase for case-insensitive comparison.
    - `text := REGEXP_REPLACE(text, '[^a-zA-Z0-9]', '', 'g');`: Removes all non-alphanumeric characters using a regular expression.
    - `RETURN text = REVERSE(text);`: Reverses the cleaned string and checks if it's equal to the original. Returns true if a palindrome, false otherwise.

  3. Query:
    - `SELECT str, is_palindrome(str) AS res FROM ispalindrome;`: Selects all strings from the table 'ispalindrome', applies the `is_palindrome` function to each string, and returns the original string and the result (true/false) in a column named 'res'.
*/

CREATE OR REPLACE FUNCTION is_palindrome(text VARCHAR)
RETURNS BOOLEAN
LANGUAGE plpgsql IMMUTABLE
AS $$
BEGIN
   text := LOWER(text);
   text := REGEXP_REPLACE(text, '[^a-zA-Z0-9]', '', 'g');

   RETURN text = REVERSE(text);
END;
$$;

SELECT 
    str, is_palindrome(str) 
    AS res
FROM 
    ispalindrome;

/*
ALTERNATIVELY!
*/

select str, reverse(lower(str)) = lower(str) as res from ispalindrome

/*
  Purpose:  Calculate the total sum of ages from the 'people' table.
  Input:    people table with an 'age' column (assumed to be numeric)
  Output:   A single column named 'age_sum' containing the sum of all ages.
*/

SELECT 
    SUM(age) 
    AS age_sum 
FROM 
    people;

-- Insert a new row into a table with specified values
INSERT INTO 
    table_name (column1, column2, ...)
VALUES 
    (value1, value2, ...);

-- Combine rows from two tables, keeping all rows from the left table even if there's no match in the right table (LEFT JOIN)
SELECT 
    *
FROM 
    table1
LEFT JOIN 
    table2 
    ON 
        table1.column_name = table2.column_name;

-- Group rows in a table by a column and count the number of rows per group
SELECT 
    column1, COUNT(*)
FROM 
    table_name
GROUP BY 
    column1;

-- Filter groups based on a condition after applying GROUP BY
SELECT 
    column1, COUNT(*)
FROM 
    table_name
GROUP BY 
    column1
HAVING 
    COUNT(*) > 5; 

-- Calculate the average value of a column in a table
SELECT 
    AVG(column_name) 
FROM 
    table_name;
