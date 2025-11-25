# equals() & equalsIgnoreCase()

## equals()
The Java String class equals() method compares the two given strings based on the content of the string. If any character is not matched, it returns false. If all characters are matched, it returns true.

The String equals() method overrides the equals() method of the Object class.

>[!INFO] Internal implementation of equals method 
>```java 
>public boolean equals(Object anObject) {
>     if (this == anObject) {
>         return true;
>     }
>     if (anObject instanceof String) {
>         String anotherString = (String)anObject;
>         int n = count;
>         if (n == anotherString.count) {
>             char v1[] = value;
>             char v2[] = anotherString.value;
>             int i = offset;
>             int j = anotherString.offset;
>             while (n-- != 0) {
>                 if (v1[i++] != v2[j++])
>                 return false;
>              }
>           return true;
>          }
>       }
>      return false;
>}
>```

## Usage and examples : 
```java 
 String a = "Hello";
 String b = "Hello";
 int u = a.equals(b);                // true

 int v = "abc".equals("Abc");        // false    
 int w = "abc".equals("abd");        // false
 int x = "abd".equals("abc");        // false
 int y = "Green".equals("Greenery"); // false
 int z = "Greenery".equals("Green"); // false

```


## Difference between `.equals()` and `==`
Both the equals() method and the == operator are used to compare two objects in Java.

The Java string equals() method, compares two strings and returns true if all characters match in both strings, else returns false.

The `==` operator `compares the reference or memory location of objects` in a heap, whether they point to the same location or not.
Whenever we create an object using the operator new, it will create a new memory location for that object. So we use the == operator to check memory location or address of two objects are the same or not.


## equalsIgnoreCase()
The Java String class equalsIgnoreCase() method compares the two given strings on the basis of the content of the string irrespective of the case (lower and upper) of the string. It is just like the equals() method but doesn't check the case sensitivity. If any character is not matched, it returns false, else returns true.

>[!INFO] Internal implementation of equalsIgnoreCase method 
>```java 
>public boolean equalsIgnoreCase(String anotherString) {    
>       return (this == anotherString) ? true    
>               : (anotherString != null)    
>              && (anotherString.value.length == value.length)    
>              && regionMatches(true, 0, anotherString, 0, value.length);    
>  }    
>```

## Usage and examples : 

```java 
 String a = "Hello";
 String b = "Hello";
 int u = a.equalsIgnoreCase(b);                // true

 int v = "abc".equalsIgnoreCase("Abc");        // true
 int w = "abc".equalsIgnoreCase("abd");        // false
 int x = "abd".equalsIgnoreCase("abc");        // false
 int y = "Green".equalsIgnoreCase("Greenery"); // false
 int z = "Greenery".equalsIgnoreCase("Green"); // false

```


## Difference between `.equals()` and `.equalsIgnoreCase()`

- Both the equals() method and the .equalsIgnoreCase() method are used to compare two strings in Java.

- The Java string equals() method, compares two strings and returns true if all characters match exactly in both strings, else returns false. i.e, equals() is case sensitive.

- The Java string equalsIgnoreCase() method, equality between two strings is checked ignoring the case. i.e, equalsIgnoreCase() is not case sensitive.

<br>



>[!NOTE]  `.equals()` vs `.compareTo()`
>
>>[!IMPORTANT] Similarities 
>> - Both the equals() method and the compareTo() method are used to compare two strings in Java.
>>
>
>
>>[!IMPORTANT] Difference 
>> - The Java string equals() method returns a `boolean` value whereas compareTo() method returns `int` value.
>><br>
>> - The equals() method is generally used to test for `equality` of strings, while the compareTo() method is generally used for `ordering` of String objects.
>>
