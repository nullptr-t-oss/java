# Operators and Expressions

## Types of Operators in Java
>[!NOTE] Arithmetic Operators
>Arithmetic Operators are used to perform simple arithmetic operations on primitive and non-primitive data types 
>| Operator |	Description|
>| --- | --- |
>|+	|Additive operator (also used for String concatenation)|
>|-|	Subtraction operator|
>|* |	Multiplication operator|
>|/ |	Division operator|
>|% |	Remainder operator<br>(Modulo/Modulus operator)|
>>[!IMPORTANT] Division (/) truncates decimal points for integers

>[!NOTE] <b>Unary Operators</b>
>The unary operators require only one operand; they perform various operations such as incrementing/decrementing a value by one, negating an expression, or inverting the value of a boolean.
>
> |Operator |	Description |
> | --- | --- |
>|+ |	Unary plus operator  indicates positive value (numbers are positive without this, however) |
>| - |	Unary minus operator; negates an expression |
>| ++ | Increment operator; increments a value by 1 |
>| - -	| Decrement operator; decrements a value by 1 |
>| !	 |Logical complement operator; inverts the value of a boolean |

>[!NOTE] Assignment Operator
>'`=`' Assignment operator is used to assign a value to any variable. It has right-to-left associativity, i.e. value given on the right-hand side of the operator is assigned to the variable on the left, and therefore right-hand side value must be declared before using it or should be a constant.
> The assignment operator can be combined with others to create shorthand compound statements
> Example :
> - += , Add and assign.
> - -= , Subtract and assign.
> - *= , Multiply and assign.
> - /= , Divide and assign.
> - %= , Modulo and assign


>[!NOTE] Relational Operators
>These operators specify the relation between two values or expressions. 
> ##### Example :
> 1. greater than ( **>** )
> 2. less than  ( **<** )
> 3. equal to ( <b>==</b> )
> 4. greater than or equal to ( **>=** )
> 5. less than or equal to ( **<=** )
> 6. not-equal-to ( **!=** )

>[!NOTE] Bitwise Operators
> Bitwise Operators are used to perform the manipulation of individual bits of a number and with any of the integer types. They are used when performing update and query operations of the Binary indexed trees. 
> Examples :
> - & (Bitwise AND): returns bit-by-bit AND of input values.
> - | (Bitwise OR): returns bit-by-bit OR of input values.
> - ^ (Bitwise XOR): returns bit-by-bit XOR of input values.
> - ~ (Bitwise Complement): inverts all bits (one's complement).

>[!NOTE] Shift Operators
>Shift Operators are used to shift the bits of a number left or right, thereby multiplying or dividing the number by two, respectively. They can be used when we have to multiply or divide a number by two.
> - `<<` (Left shift): Shifts bits left, filling 0s (multiplies by a power of two).
> - `>>` (Signed right shift): Shifts bits right, filling 0s (divides by a power of two), with the leftmost bit depending on the sign.
> - `>>>` (Unsigned right shift): Shifts bits right, filling 0s, with the leftmost bit always 0.

>[!NOTE] Logical Operator
>These operators are used to combine two or more relational expressions.
> Logical Operators :
> 1. And (&&)
> 2. Or (||)
> 3. Not (!)

>[!NOTE] Dot Operator
>Once memory is allocated to an object, individual data members of the object can be accessed using .(dot) operator.

>[!NOTE] New Operator
>Memory of an object is allocated using new operator. new operator is used to create instance of a class.

>[!NOTE] Ternary operator
>The Ternary Operator is a shorthand version of the if-else statement. It has three operands and hence the name Ternary.<br>
> Syntax :
>```java
>var result = condition ? val1 : val2;
>```
> Here val1 will be returned if condition is `true` else val2 will be returned if condition is `false`.

## Operator Precedence
 
 | Operators | Precedence |
 | --------------- | ---------------- | 
 | postfix       |        expr++,expr- -  |
 | unary |	++expr , - -expr , +expr , -expr , ~ , !|
|multiplicative |	* , / , % |
|additive |	+ , - |
|shift	|<< , >> , >>> |
|relational	|< , > , <= , >= , instanceof|
|equality|	== , !=|
|bitwise AND|	&|
|bitwise exclusive OR|	^ |
|bitwise inclusive OR |	\|  |
|logical AND	|&&|
| logical OR |  \|\| |
|ternary	|? :|
|assignment | = , += , \-\= \, \*\= , \/\= , \%\= , \&\= , \^\= , \|\= , \<\<\=  , \>\>\= , \>\>\>\=     |


## Types of Expressions in Java
>[!NOTE]Pure Expression
>When all the variables and constants involved in an expression belongs to the same datatype.

>[!NOTE]Impure Expression
>When the variables and constants involved in an expression are of multiple datatypes, it known as an impure expression.


