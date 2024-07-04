# ILE RPG Cheat Sheet
by Joey Mercer

# Core Concepts

**ILE RPG:** IBM's language for business applications on the IBM i operating system.
**Free-Form vs. Fixed-Form**: Modern RPG uses free-form syntax (no column restrictions), but older code might be fixed-form.
**Specifications:** Define files, variables, calculations, and output in your RPG program.

____________________________
# BASIC PROGRAM STRUCTURE:

**FREE**  // Optional directive for fully free-form code

// Control options (e.g., date format, debug settings)
ctl-opt ...; 

// File definitions
dcl-f ...;

// Variable definitions
dcl-s ...;

// Main procedure (if not using RPG cycle)
dcl-proc main...;
  // Your code here
end-proc;
____________________________

# Common Specifications

Control (ctl-opt):
- option(*srcstmt): Show source statements in the compiler listing.
- datfmt(iso): Use ISO date format (YYYY-MM-DD).

File (dcl-f):
- usage(*update): File can be read from and written to.
- extfile('myfile'): Use an externally described file named "myfile."

Definition (dcl-s, dcl-ds):
- name char(10): Define a character variable named "name" with length 10.
- counter int(5) inz(0): Define an integer variable initialized to 0.
- dcl-ds person qualified;
- -  name varchar(50);
- - age int(3); end-ds; Define a data structure.

# Calculations

Use free-form calculations (no C specs):
_________________________

total = price * quantity;
if (discount > 0);
  total -= discount;
endif;

_________________________

Output

dsply ('Hello, ' + name); Display a message.
Use dcl-f to define printer files and output data.


# BUILT IN FUNCTIONS:
______________________________________

**Mathematical Functions**

- %ABS: Absolute value of a numeric expression.
- %DEC: Convert to packed decimal format.
- %DECH: Convert to packed decimal with half adjust.
- %DIV: Integer portion of a quotient.
- %FLOAT: Convert to floating-point format.
- %INT: Convert to integer format.
- %INTH: Convert to integer with half adjust.
- %REM: Integer remainder.
- %SQRT: Square root.
- %UNS: Convert to unsigned integer.
- %UNSH: Convert to unsigned integer with half adjust.

**String Functions** 

- %CHAR: Convert to character data.
- %CHECK: Check characters against a list.
- %CHECKR: Check characters in reverse against a list.
- %CONCAT: Concatenate strings with a separator.
- %CONCATARR: Concatenate array elements with a separator.
- %EDITC: Edit a value using an edit code.
- %EDITFLT: Convert a float to its external representation.
- %EDITW: Edit a value using an edit word.
- %GRAPH: Convert to graphic data.
- %LEFT: Get leftmost characters.
- %LEN: Get or set the length of a string.
- %LOOKUPxx: Look up an array element (e.g., %LOOKUP, %LOOKUPLE).
- %LOWER: Convert to lowercase.
- %REPLACE: Replace a substring.
- %RIGHT: Get rightmost characters.
- %SCAN: Scan for characters.
- %SCANR: Scan in reverse for characters.
- %SCANRPL: Scan and replace characters.
- %SPLIT: Split a string into substrings.
- %STR: Get or store a null-terminated string.
- %SUBST: Get a substring.
- %TLOOKUPxx: Look up a table element (e.g., %TLOOKUP, %TLOOKUPLE).
- %TRIM: Trim characters from the edges.
- %TRIML: Trim leading characters.
- %TRIMR: Trim trailing characters.
- %UCS2: Convert to UCS-2 data.
- %UPPER: Convert to uppercase.
- %XLATE: Translate characters.

**Array Functions**

- %ELEM: Get the number of elements in an array.
- %LOOKUPxx: Look up an array element (e.g., %LOOKUP, %LOOKUPLE).
- %MAXARR: Get the index of the maximum array element.
- %MINARR: Get the index of the minimum array element.
- %SUBARR: Get a subset of an array.
- %XFOOT: Sum array elements.

**Date/Time Functions**

- %CHAR: Convert date/time to character.
- %DATE: Convert to date format.
- %DAYS: Number of days.
- %DIFF: Difference between dates, times, or timestamps.
- %HOURS: Number of hours.
- %MINUTES: Number of minutes.
- %MONTHS: Number of months.
- %MSECONDS: Number of microseconds.
- %SECONDS: Number of seconds.
- %SUBDT: Extract a portion of a date, time, or timestamp.
- %TIME: Convert to time format.
- %TIMESTAMP: Convert to timestamp format.
- %YEARS: Number of years.

**Other Functions**

- %ADDR: Get the address of a variable.
- %ALLOC: Allocate storage.
- %BITAND, %BITNOT, %BITOR, %BITXOR: Bitwise operations.
- %DATA: Describe a structured document (e.g., JSON, XML).
- %DECPOS: Get the number of decimal positions.
- %EOF: End or beginning of file condition.
- %EQUAL: Exact match condition.
- %ERROR: Error condition.
- %FIELDS: Subfields to update or sort.
- %FOUND: Found condition.
- %GEN: Generator for DATA-GEN.
- %HANDLER: Handling procedure for events.
- %KDS: Search arguments in a data structure.
- %LIST: Create a temporary list (array).
- %MSG: Message ID for SND-MSG.
- %NULLIND: Query or set a null indicator.
- %OCCUR: Set or get the occurrence of a data structure.
- %OMITTED: Parameter-omitted condition.
- %OPEN: File open condition.
- %PADDR: Get a procedure's address.
- %PARMS: Number of parameters passed.
- %PARMNUM: Parameter number.
- %PARSER: Parser for DATA-INTO.
- %PASSED: Parameter-passed condition.
- %PROC: Name of the current procedure.
- %RANGE: Define a numeric range.
- %REALLOC: Reallocate storage.
- %SHTDN: Shut down a program or procedure.
- %SIZE: Get the size in bytes.
- %STATUS: File or program status.
- %TARGET: Target for SND-MSG.
- %THIS: Class instance for a native method.
- %XML: Describe an XML document.

## RPG Concepts and Ideas

**Specifications: The Blueprint of Your RPG Program**

Imagine you're building a house. You need a blueprint that outlines the rooms, dimensions, and materials. In RPG, specifications are like the blueprint for your program. They define:

**Files:** Where you store and retrieve data (like cabinets in your house).
Variables: Containers for holding different types of information (like boxes or jars).  
**Calculations:** How you process and manipulate data (like recipes for cooking).  
**Output:** How you display or print the results (like decorating your house).  

### Program Logic Cycle: The RPG Rollercoaster  

In the traditional RPG model, your program follows a specific cycle (like a rollercoaster ride):  
  
**Read:** Get a record from a file (like picking up a passenger).  
Calculate: Perform operations on the data (like the twists and turns of the ride).  
**Output:** Write results to a file or display (like dropping off the passenger).  
**Repeat:** Go back to step 1 until you've processed all the records (like the rollercoaster going around again).  

## VARIABLES
- dcl-s FldAlpha char(15);  
- dcl-s FldNum packed(7:2);  
- dcl-s wrkItem like(ItemCode);  
       
## UTF-8 variable
- dcl-s MyDesc char(50) ccsid(*utf8);  
 
## Date/Time
dcl-s DateFld date(*YMD) inz(d'29/01/19');  
dcl-s TimeFld time(*EUR) inz(t'13:00:00');  
        
## Pointers
dcl-s MyPtr pointer;  
dcl-s MyVar based(MyPtr);  

## INITIALIZATIONS
dcl-s CurUser char(10) inz(*user);  
dcl-s CurDataJob date inz(*job);  
dcl-s CurDataSys date inz(*sys);  
dcl-s CurOra time inz(*sys);  
dcl-s CurDataOra timestamp inz(*sys);  
dcl-s FldAlpha2 char(15) inz('ABC');  
dcl-s FldNum2 zoned(5) inz(10);  

## KEYWORD
dcl-s bName char(128) template;      
dcl-s bSysName char(10) template;  
dcl-s MyLib like(bName);  

## CONSTANTS
  ### Alphanumeric
 dcl-c CstAlpha const('TENNIS');  
 
  ### Numeric
  dcl-c CstNum const(12345,67);  
  ### Line feed
  dcl-c xLF const(x'25');  

  ### ENUMERATIONS
dcl-enum CASE_TYPE;  
  LOWER 'L';  
  UPPER 'U';  
 end-enum;  
  
dcl-enum COLOR qualified;  
   RED 1;  
   BLU 2;  
   GREEN 3;  
  end-enum;  

## Check number with monitor group and %dec
dcl-s f1 char(8);  
dcl-s wrk packed(8:2);  
dcl-s errnum ind;  

errnum = *off;
  monitor;
    wrk = %dec(f1:8:2);
    on-error;
    errnum = *on;
  endmon;

## Monitor error and escape message

monitor;
         // my code
         on-excp 'CPF4101':'CPF4131';
           ...
         on-error *file;
           ...
       endmon;

## catch I/O error
       chain(e) KeyField customer;
       if %error;
         if %status = 1218;
           // ...
         else;
           // ...
         endif;
       endif;
