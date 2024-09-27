//1.
var str = "JavaScript Programming";
var midIndex = str.length / 2;
var middlePart = str.slice(midIndex - 3, midIndex + 3).toUpperCase();
console.log(middlePart);

//2.
var str = "Hello, World!";
var upperStr = str.toUpperCase();
var length = upperStr.length;
console.log( upperStr);
console.log( length);

//3.
var str = "Hello, World!"; 
var char = str.charAt(7); 
var asciiValue = char.charCodeAt(0);
console.log(char);
console.log(asciiValue);
 
//4.
var str = "   Hello World!   ";
var slicedStr = str.trim().slice(1, 4);
console.log(slicedStr);

//5.
var str1 = "Hello World";
var str2 = "JAVA SCRIPT";
var result = str1 + " " + str2.toLowerCase();
console.log(result);

//6.
var str = "   hello world!   ";
var trimmedStr = str.trim();
var result = trimmedStr.slice(1);
console.log(result);

//7.
var str = "Srilekha";
var result = str.charAt(4).toUpperCase();
console.log(result);  

//8.
var str1 = "hi     "
var str2 = "hello"
var result = str1.trimEnd() + str2;
console.log(result);

//9.
var a = "   HelloWorld   ";
var result = a.trim().toUpperCase().slice(1, 5);
console.log(result);

//10.
var string1 = "HELLO";
var string2 = "WORLD";
var concatStr = string1.toLowerCase() + " " + string2.toLowerCase();
var result = concatStr.charAt(0);
console.log(result);




