# Java Cheat Sheet
By Joey Mercer


### Data Types

- **Primitive:** `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`
- **Reference:** Classes (e.g., `String`, `Integer`, `ArrayList`), Interfaces, Arrays

### Operators

- **Arithmetic:**
    - `+`: Addition
    - `-`: Subtraction
    - `*`: Multiplication
    - `/`: Division
    - `%`: Modulus (returns the remainder after division)
- **Relational:**
    - `==`: Equal to
    - `!=`: Not equal to
    - `>`: Greater than
    - `<`: Less than
    - `>=`: Greater than or equal to
    - `<=`: Less than or equal to
- **Logical:**
    - `&&`: Logical AND (both operands must be true)
    - `||`: Logical OR (at least one operand must be true)
    - `!`: Logical NOT (reverses the truth value of the operand)
- **Assignment:**
    - `=`: Assign a value
    - `+=`, `-=`, `*=`, `/=`, `%=`: Compound assignment (combine operation with assignment)

### Control Flow

- **Conditional Statements:**
    - `if`: Executes a block of code if a condition is true.
    - `else if`: Used after an `if` to check another condition if the previous one is false.
    - `else`: Executes a block of code if all previous conditions are false.
    - `switch`: Tests a variable against multiple possible values.
- **Loops:**
    - `for`: Repeats a block of code a fixed number of times.
    - `while`: Repeats a block of code as long as a condition is true.
    - `do-while`: Repeats a block of code at least once, then repeats as long as a condition is true.

## Object-Oriented Programming (OOP)

- **Classes:** Blueprints for objects
- **Objects:** Instances of classes
- **Inheritance:** Creating new classes based on existing ones ("is-a" relationship)
- **Polymorphism:**  Ability of objects to take on many forms ("has-a" relationship)

## Built-in Methods (Examples)

### String

- `length()`: Returns the number of characters in the string.
- `charAt(index)`: Returns the character at the specified index (starting from 0).
- `substring(beginIndex, endIndex)`: Returns a new string that is a portion of the original, starting at `beginIndex` (inclusive) and ending at `endIndex` (exclusive).
- `indexOf(str)`: Returns the index of the first occurrence of the specified substring `str`.
- `equals(anotherString)`: Checks if two strings have the same sequence of characters.
- `toUpperCase()`: Converts all characters in the string to uppercase.
- `toLowerCase()`: Converts all characters in the string to lowercase.

### Math

- `abs(x)`: Returns the absolute value of `x`.
- `round(x)`: Rounds `x` to the nearest integer.
- `ceil(x)`: Rounds `x` up to the nearest integer.
- `floor(x)`: Rounds `x` down to the nearest integer.
- `max(x, y)`: Returns the larger of `x` and `y`.
- `min(x, y)`: Returns the smaller of `x` and `y`. 
- `sqrt(x)`: Returns the square root of `x`.
- `pow(x, y)`: Returns `x` raised to the power of `y`.
- `random()`: Generates a random number between 0.0 (inclusive) and 1.0 (exclusive). 

### Collections (List/ArrayList)

- `add(element)`: Adds the specified `element` to the end of the list.
- `get(index)`: Returns the element at the specified `index` in the list.
- `size()`: Returns the number of elements in the list.
- `remove(index)`: Removes the element at the specified `index` from the list.
- `contains(element)`: Checks if the list contains the specified `element`.

### ... (Add more as needed)
