/*
getElementById();
getElementsByClassName('x'); 
//all elements with this class name and then becomes an array of elements
getElementsByTagName('x'); //array
.querySelector();   //returns the 'first element', any selector tag/class/id
querySelectorAll();

const btn = document.getElementById('btn');
btn.addEventListener('click', function x() {}  );
//     btn.classList.add('button')


/*////////////////////////////////////////////////////////////////////*/
/* [DOM Manoeuvering]

.lastElementChild //its last child
.children[3] //its child #3
.parentNode
.nextElementSibling
.previousElementSibling

document.insertBefore(newNode, existingNode)
parentEl.insertBefore(createEl, firstchildEl)
parentEl.replaceChild(createEl, firstchildEl)
parentEl.removeChild(firstchildEl)

btn.classList.toggle('button_blue'); //toggle the class on and off


*/


let btn = document.getElementById('btn');
btn.addEventListener('click', addClassFunction);

function addClassFunction () {
    btn.classList.toggle('button_blue');
}




/*////////////////////////////////////////////////////////////////////*/
/* List Switcher
/*take the input-container, add to it an event listener on change, 
this event will take the list and set to it a style of 
event's target's value which is input-container */

const container = document.querySelector(".container");
container.addEventListener("change", (event) => 
{
  const list = document.querySelector("ol");
  list.setAttribute("style", `list-style-type: ${event.target.value}`);
}

                            );



/*////////////////////////////////////////////////////////////////////*/
/* textNode
the text for h1,p etc without using innerHTML */

//const h1 = document.createElement('h1');
//const TextNode = document.createTextNode('Hello World');
//h1.appendChild(TextNode);
//document.body.appendChild(h1);




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* variable types and naming


variables are storage containers
var, let, const                 // var was used in old browsers, and almost the same as let will discuss later

let user = 'john', age = 25;    //can add multiple variables in one line 

let user = 'john',              //multiline break
    age = 25;




//*--------------------*//*
name should be letters, digits, $, _ 
and not start with a digit, not use -
let $, let _ are correct

variable Apple and APPLE and apple
are all different variables, case matters

non-latin letters are allowed but not recommended


//*--------------------*//*
CONST Constant (unchanging), cannot be reassigned otherwise will cause error
const 

uppercase constants writing method, const COLOR_RED = "";
for facts hardcoded in code and easy to remember/use than their values
value is known prior to execution and directly written into the code.

be descriptive, human readable good names, naming is an important skill


//*--------------------*//*
//*--------------------*//*

declared with var, are either function-scoped or global-scoped. 
> they skip the block they are in, IF here for example
and if in function variables skip the block they are in (function or loop)
 

function sayHi () {

  if (x=1) {
  var test = true; // use "var" instead of "let"
  }

  alert(test); // out of declaration block and outputs true , 
               // but if let will error not defined
               // outputs even if IF branch not execute

  for (var i = 0; i < 10; i++) {
  }
  alert(i); //outputs 10

  //var test; //can be defined here also


}

sayHi();
alert(test); //outputs undefined either ways


VAR can be defined multiple times but LET does not get declared more than once
var user = ;
var user = ;

SO:
1) var can be defined/used anywhere in the code and code will define it at code starts
2) var can be defined in a non executing branch if, etc
3) var name can be re-defined



* function go() { }(); // <-- can't call Function declaration

best use let and const instead of var







/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Arithmetic operands


+ addition, - subtraction, * multiplication, 
** exponation power, / division, % modulus, ++ increment, -- decrement
operand +(operator) operand 

8 % 3 (returns 2, as three goes into 8 twice, leaving 2 left over).


cannot 3++;,  
can varName++; //which has a value of 3

x+= 2, -=, *=, /= 
number + number = number


let z = x ** 2;   // x power 2
let z = Math.pow(x,2);



JavaScript will try to convert strings to numbers in all numeric operations:
* , / , - but not +

so 
number + string = string  // "10"+ 20  = 1020
string + string = string // "10"+ "20" = 1020
solution
number + Number(string)



//arithmetic priority
>precedence/flow of calculation left to right
parentheses ()
then Multiplication (*) and division (/) have higher  
then addition (+) and subtraction (-)



numbers in js are 
64-bit floating point, 
integers 15 digit long precision 
decimals are a maximum of number of 17 

Floating point arithmetic is not always 100% accurate:
To solve the problem above, it helps to multiply and divide:

let x = 0xFF;   // FF Hexadecimal

//converting from js decimal to octal, binary etc
//myNumber2.toString(number_type_base); 

//rounding a float number using .toFixed();
const lotsOfDecimal = 1.766584958675746364;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2); // 1.77

to fixed of 2 floats





/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* NaN (not a number)

let x = "10";
let y = "10Apple";
let z = x / y; //NaN
let o = isNaN(z); //true

console.log(o);


let x2 = NaN; 
// NaN + number = NaN
//NaN+String = NaNString  

let x3 = typeof NaN; //number
let x4 = typeof Infinity; //number


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Infinity


let myNumber = 2;
while (myNumber != Infinity) { // Execute until Infinity
    myNumber = myNumber * myNumber;
}

let x5 =  2 / 0; //Division by 0 = Infinity


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*null and undefined

alert( '' == false ); // true
alert( null === undefined ); // false  object/undefined
alert( null == undefined ); // true

when converted to a number, null becomes 0
alert( null > 0 );  // (1) false, because co mparisons convert it to 0
alert( null == 0 ); // (2) false, because null in equality would be only equal to undefined
alert( null >= 0 ); // (3) true

when converted to a number, undefined becomes NaN
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

to avoid these tricks, use === with null/undefined, 
and do not use >= like comparisons

array[-1] or [length+x] undefined









/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Strings and its methods


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* \
const string_with_quotemark = 'this string\'ve got a quote mark';

//string line breaks using \n
const text = "this text has a \n new line break";

\0 null character
\ space

\
new line

\' , \"
\\ backslash
\r carriage return
\v vertical tab
\t tab
\b backspace
\f form feed
\uXXXX


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* template literals : ` ${var}`

//combine a variable/number, with a string using template_literals
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"


//can calculate
${ (score / highestScore) * 100 } 


//respects line breaks and puts them into output
const output = 
`I like the song.
I gave it a score of 90%.`;



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* STRING creation, converting and methods



//Creating a string
strings written between "", '', ``, 
let x = String("");
let string4 = new String('string'); //type object

let s1 = new String("2 + 2");
eval(s1); //returns 2+2
eval(s1.valueOf() )); //returns 4 
// string objects are converted to primitive with valueOf() method.


//but
let s1 = "2 + 2";
eval(s1); //returns 4 directly


/////////////////////////////////////////////////////
//Converting

Number(myString)
toString(myString)

let s1 = null;
let s2 = String(s1);
console.log(s2); //"null" // not use toString();

//convert a string into an array
let text = "a b c d e f";
const myArray = text.split(""); 
myArray is an array

text.split(" ")//split on , " ", | pipe, output before first occurrence of this condition


/////////////////////////////////////////////////////
//javascript treats strings as objects when executing 
methods and properties 


let text = "word of mouth";
let length_count = text.length;
let part_of_text = text.slice(7); // text from 7 onwards
let part_of_text = text.slice(7,10); // from 7-12, count starts at 0
let part_of_text = text.slice(-10,-7); // counting from end of string, starts 1
let part_of_text = text.slice(-7); // text from -7 backwards

text.substring(7,10); //same as slice but does not support -ve numbers starts from 0
text.substr(7,3);     //same as slice but the second parameter defines the length of the output string
text.substr(7);       //

let newText = text.replace("mouth", "mind"); //replaces the string part "mouth" with "mind"
//replaces only the first match, new string is returned not modify the original

let newText = text2.replace(/Mouth/i, "mind"); //replace case in-sensitive
let newText2 = text2.replace(/Mouth/gi, "mind"); //global match, all matches AND case in-sensitive

text.toUpperCase();
text.toLowerCase(); //toLocaleLowerCase("tr")


let text3 = text1.concat(" ", text2); //can be used instead of the + way
let text5 = text4.trim(); // removes white space "surrounding the string"
let text5 = text4.trimStart(); // removes white space "beginning the string"
let text5 = text4.trimEnd(); // removes white space "beginning the string"

string.includes("h"); //true if has this h letter
string.endsWith("h"); //true if ends with this letter //startsWith
string.indexOf("h"); //returns location of h, or -1 if not found


//3 x's at the start
text.padStart(3, "x"); // xxtext 
text.padEnd(3, "x"); // xxtext


let text = "HELLO WORLD";
let char = text.charAt(0); //returns H
let char = text.charCodeAt(0); //returns the unicode UTF-16 i.e 72
text[0] // returns H


/*////////////////////////////////////////////////////////////////////*/
/* Extras


\ude04 //emoji smile


let a = 1;
Boolean(a); // true


When values of different types are compared, 
they get converted to numbers (with the exclusion of a strict equality check).


let date1010 = new Date().getDay(); //gets the day number of today 0-6
let day;




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* switch

//if there is a match the relevant block will be executed 
//if no matches then default

// break out of the switch block,  
// otherwise will continue to next block, 
// can be skipped in last case

//default can be put in any line but watch for break;
//If multiple cases matches a case value, the first case is selected.
//switch cases use strict equality comparison


let expression = "22";

switch(expression) {

  case "22":
        // code block
          break;

  case y:
  case z:                 //y and z use the same code
        // code block
        break;

  default:
        // code block

}









/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Logical Operators and truthy comparisons

|| (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

&& is higher priority than ||


if ("0") {
  //true because only empty string is false and 0 is converted on comparison/equality
}

//letter comparison according to their unicode value
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

*/


//// OR || chain 
//let value1;
//let value2 = alert(1);
//let value3 = "string3";
//let value4 = "string4";
//let value5 = 0;
//let result = value1 || value2 || value3 || value4; 
// executes value2 (but it returns undefined) so will output string3 only. left to right, once find it quits, original form
//a chain of OR || returns the first truthy value or the last one if no truthy value is found.

//let result2 =  value1 || value1 || value5 || "Anonymous"; // output Anonymous
//can be useful if all values not exist/false we output a string or a function/alert

//console.log(result);
//console.log(result2);

////AND && chain, 
//let result3 = value2 && value2 && value1 && value3 & value5;
//if all true outputs the last true value 
//if all false otherwise the first value if all false 
//if true and false, returns the first false

//console.log(result3);







//// Examples ////

// alert( alert(1) && alert(2) );
// executes  alert(1) then undefined(value of alert1 as it returns nothing) then stops
// undefined && undefined


// && executes before ||
/// alert( null || 2 && 3 || 4 ); //returns 3
// null(false) || 3(true) || 4(true)


// a && b || c && d     


////logical instead of if
//let x = 1;
//(x > 0) && alert( 'Greater than zero!' );

//let val = 5;
//let result615 = !val;    //returns !true = false
//console.log(result615); //false


//!! (not not) is !false, gives true
/*
let result616 = (!!"string"); //true, can be used to check on strings
console.log(result616);


if (-1 || 0) alert( 'first' );  //-1 is true so it executes
if (null || -1 && 1) alert( 'third' ); //executes false||true









/*12/10*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


/*////////////////////////////////////////////////////////////////////*/
/* ? operator and its chaining


select_id.addEventListener('change', setWeather);
const choice = select.value;


//Ternary Operator
// condition ? true run/return this code : false run/return this code instead

let accessAllowed = age > 18 ? "adult" : "not adult";
let message = (age < 3) ? 'Hi, baby!' :   (age < 18) ? 'adult!' : (age < 100) ? 'grown!';



// greeting = isBirthday
//   ? 'Happy birthday Mrs. Smith — we hope you have a great day!'
//  : 'Good morning Mrs. Smith.';

//if greeting = birthday, output this, else output this



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/*
regular expressions allows to check a string of characters like passwords


    ////wrapping//
    /   / forward slash at start and end
    / ninja / checks for matching the word ninja within a whole text

    ////flags//
    /g after final slash, all matches
    /i after the final slash case insensitive

    /   /g


    ////including and excluding//
    [ng]inja ,  square brackets means match n or g in first position
    [^pe]inga ,   match everything instead p and e


    / [no][io]nja / i
    //NInja case insenstive


    ////ranges
    [a-z] , range letters from a to z
    [a-zA-Z], lowercase range and  uppercase range

    ////repetitions
    [0-9][0-9][0-9] , three numbers from 0 to 9
    [0-9]+ , any repetitions
    [0-9]{3}, how many times would like it to repeat
    [0-9]{5,8} 5 to 8 characters long
    [0-9]{5,8} at least 5 characters long

    / [A-Z][A-Z]nja / i
    //NInja case insenstive



    ////metacharacters
    \d match any digit character (like [0-9])
    \w match any word character like (a-z A-Z also 0-9 and _)
    \s match a whitespace character (spaces, tabs etc)
    \t match a tab character only

    / \d\s  / digit 0-9 then the second character a whitespace type

    / \w\w nja / i
    //NInja case insenstive


    ////special characters
    +   , at least one or more, any repetitions
    []  , character set
    [^] , anything except after the negate symbol
    ?   , zero-or-one times, makes preceding char optional
    .   , any character except new line/enter
    *   , 0-or-more (something like +)  

    \   , escapes the next character like in meta
    if want to use a special character, use \ before it \*

    / h?e?llo  /    => llo still a match
    / a[a-z]?  /    => a, aa both match
    / car.    /     => car (not match because its asking for a character) 
                      card,cars (match)
    
    / M?r?.?[A-Z][A-Z]nja / i
    //Mr.NInja or NInja case insenstive

    
    ////only want the specified length/expression
    / ^[a-z]{3}$  /         3 letters not more
    the beginning ^ and the end $ of the field





    | means or
    / [p|t|v]?flag /     //[p or t or v](optional) then flag

*/




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Chrome Developer Tools

DOM change
breakpoints
add css pseudo state
check scripts from the resources panel
css properties in alphabetical order

Done: 
from the middle bar in dev tools, styles >
> CSS add class
> CSS add :hover etc
> CSS change margins etc.
> CSS view layers specifity layer-icon

> to view only selected CSS
from the middle bar in dev tools, computed
show all, opaque is the inherited styles

scroll down in style to see also styles
and @supports 
@scope which overrides the global css 



... vertical dots
type, show rendering > view print
> type, Show Coverage > view used html,css,js coverage


Right click the element
Force state > hover
press H and node is hidden, Del for Delete
Copy > Copy JS path

console


//Responsive
... add device type, change to mobile(no-touch) for hover ability

throttle for mid/low, lowers the 3G/cpu performance from your device's capability
can throttle separately from network and performance

Right ... button, more tools > sensors
change geolocation and also orientation


//Sources tab
contains navigator, file viewer, js console

on js file, right click, open link in sources panel, will show script

breakon, break on attribute notifications, will show the line causing that attribute





*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* console tricks

//styling the console %, 2nd parameter
console.log("%c i am a string", "font-size: 20px; color:red;");
console.warn("Warning here"); //warning style
console.error("error here"); //error style
console.info("info here"); //info style
console.assert(1===2, "that is wrong"); //on true no output, on false output this

const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "wrong class");

//console.clear(); //clear console

console.dir(p); //showing the actual element

                    //this enters as dog
const dogs = [{name:"snickers", age: 2}, {name:"popey", age: 3}];

dogs.forEach( (dog) => {

    console.group(`${dog.name}`); //groups console outputs by dog.name
    //.groupCollapsed

      console.log(`this is ${dog.name}`);
      console.log(`${dog.name}`);

    console.groupEnd(`${dog.name}`);

});


//how many used this console
console.count('wes');
console.count('wes');
console.count('wes');


// timing
console.time('fetching data');
fetch('https://api.github.com/users/sheriffkoder')
  .then (data => data.json())
  .then (data => {
        console.timeEnd("fetching data");
        console.log(data);
  });


console.table(dogs); //displays in a table



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*Functions

imagine taking one of the scripts and bundling into a little package
to be used over and over again

*/


//combine all array items together in a string
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' '); //, by default
console.log(madeAString);

//
function hello (name = "chris") {
    //console.log(name);
}


//
document.getElementById("regex");
regex.addEventListener('keydown', logKey);

function logKey (event) {
    //console.log(`you pressed "${event.key}" `);
}

////variations: asynchronous and arrow
//regex.addEventListener('keydown', function  (event) {} );
//regex.addEventListener('keydown',           (event) => {});

//ommiting the brackets if one line
regex.addEventListener('keydown',           (event) => console.log(`you pressed "${event.key}" `) );


//map() takes each item in the array in turn
//takes the value returned by that function and adds it to a new array
//here, return item * 2;
const original_array = [1, 2, 3];
const doubled_array = original_array.map( (item) => item * 2   );
// item.length , each item's length  is returned in a new array


console.log(doubled_array);


/*////////////////////////////////////////////////////////////////////*/
/*

keep parts of code locked away in functions to avoid
js files shadowing similar named variables and items


////if the text parameter is not passed, the value "no text given".

//function showMessage(from, text = "no text given") {
}

////anotherFunction executed if text is not given
//function showMessage( from, text = anotherFunction() )
or check with if text===undefined, 
or text = text || "not given"
or alert(count ?? "not given"); //nullish coalescing operator


//return; //causes function to exit immediately //undefined
not use new line in return unless in parentheses in the first line


a function should do exactly what is suggested by its name no more.
separate actions, make names action informative


*/



function checkAge(age) {
  return (age > 18)? true : confirm('Did parents allow you?');
  //return (age > 18) || false;
}

console.log(checkAge(20));


function min (a,b) {
  //return (a > b)? a : b;
  return (a>b) || b;
}

console.log(min(2,3));

console.log(power(2,2));
//power is x ** p but use loops
//math.pow(x,p)
// pow = (x, p) => n ** n;

function power (n, p) {

  let y = n;
  let i = 0;

  while (i < (p-1) ) {
    
    y = y * n;
    i++;
  
  }
  
  return y;
}

let power2 = function (n, p) {  //expression

  let y = n;
  let i = 0;

  while (i < (p-1) ) {
    
    y = y * n;
    i++;
  
  }
  
  return y;
};



////copy the function to another name
let pow = power; //power can be a declaration or expression name
let pow2 = power2; //power can be a declaration or expression name

console.log("power resuse " + pow2(2,2));

//function declarations can not have ; at the end
//function expressions can have ; at the end, as its a variable declaration
//but it actually did not matter on trying



////passing a function Expression to another function
function mathematics (power_expr) {
  console.log("passed function " + power_expr(2,2));
}
mathematics(power2); //callbacks - function arguments
//mathematics(function() {} );


//function declarations are preferred to be used 
//because of their un dependance flow of execution on and readability



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/*

Arrow functions

let func = (arg1, arg2, ... ) = > expression
let func = arg1 => expression
let func = () => expression     //if no parameter

func();


//if age then use this function, else func is another function
let func = (age > 18) ?
    () => alert('hello'):
    () => alert ('greetings');

can ommit {} if one line



////Ex
let ask = (question, yes, no) => {
    if (confirm(question)) yes();     //confirm alerts y/n
    else no();
}

ask ("agree ? ", () => alert("you agreed"), () => alert("you not agree"));


////Ex
let lastLetter = (inText) => console.log(inText.charAt(inText.length-1));
lastLetter("text");




var, to the immediate function body (function scope)
let, to the immediate enclosing block donated by {} block scope

console.log(window.var); // var
console.log(window.let); // undefined




*/



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Problem solving /* add to the sticky-note from here */
/*

high performance, scalability
making lots of programs

slowdown and think through the steps

(1) understand the problem (write)
paper, english, make sense, diagram it

(2) plan (interface, output, input)
what about the interface, 
what is the desired output, 

(3) input execution using pseudo code,
the art of turning a problem into code without even knowing how to code.
given inputs, what are the steps to return that output
write code in readable language, 
divide into smaller tasks
work on one by one and if one you do not know can easily tackle
as comments that will guide the production of real code

When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number


//for numbers that divide by 3 without a remainder print Fizz
if (i % 3 === 0) {


/*////////////////////////////////////////////////////////////////////*/
/*
have a framework of providing solutions
valuable skill equal to code proficiency, debugging and system design


1) understand 
most hard problems are hard because you don't understand them
you understand by explaining it in plain simple english  

2) plan
take time to analyze the problem and process information
“Given input X, what are the steps necessary to return output Y?”

3) Divide
do not solve one big problem, break into sub problems
sub-problem, that does not depend on others being solved


4) reduce 
reduce complexity for problem on focus and expand on success

5) Stuck
a. go step by step to check if something wrong
debugging flow over your code written and check what it is executing 

b. reassess, step back, look at the problem from another perspective
anything can be abstracted to a more general approach ?
i.e lost in details and overlook general principles that would solve the problem at a more general level
b.1 another way to reassess is to start again from scratch

c. Research for a solution
even if you solved it, can learn new things



////Practice problem solving
daily challenges one at least on Coderbyte
Each time, you’ll develop strength, wisdom, and perspective.






/*////////////////////////////////////////////////////////////////////*/
/*
////Repetitive programming techniques
recursive approach  
divide the small task into even more simpler pieces
tell the computer how to solve the simplest problem then

ex. make down up greetings print




/*////////////////////////////////////////////////////////////////////*/
/*
////programming is 
never about language
not about memorizing
not about math
is about solving problems

7 to 8 language universal concepts
the secret is algorithms and data

coding is not just writing code
write out the concepts first then code later
understand the problem before trying to solve

comments are code
to know algorithm is done is when you know you can execute each small part
also then will know what language


writing a new variable algorithm has to be in english no code allowed
name, type, initVal
new variable
Name, what do we call this thing
Type, what type of data does it contain
InitVal, what is its starting value


input, not the first line of your algorithm
ask a question and a variable to catch the answer
example : ask the user 'message' and store the answer in 'variable'


the idea is how do you think well,
write and think in algorithm order only 
then convert into comments
turn comments into code
put code
test
failure is wonderful
debug, did you "tell" it what to do incorrectly ?


How to debug
bad implementation can be googled
bad algorithms cannot be googled, start there first
do not start with a solution
start by truly understanding the problem


loops
how does it start, how does it finish, how does it change

while loop get out condition before code


















*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
////Javascript code execution 
/*
when you run javascript program
execute context is executed

1)global/local function execution context
memory and code parts
a)  memory creation phase
    allocates memory to vars/func vars, for a value of undefined
    allocates memory to def functionName, stores whole code
  
b) code execution phase 
    executing each line
    for var, places the assigned value to variables
    for a def function, there is nothing to execute so its skipped
    var function(undefined) = function invoke, new execution context is created for its environment
        with a) memory and b) code parts
        memory phase, like before, 
        in code ex. phase, the argument is passed to the parameter
          return returns value to the undefined func var
          execution context is deleted
  
  the whole global execution context is deleted


  call stack, execution/program/control/runtime/machine stack
  order of execution of the execution context
   
  subsubfunction execution context
  subfunction execution context
  function1 execution context
  global execution context



*/




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
error messages provide developers with a treasure trove of knowledge
and will tell everything about how to resolve

parse error messages and warning without fear
will enable to effectively debug applications

error is an object, 
consisting of name/type and a message/location in code


ReferenceError, 
refers to a variable that is not declared and/or initialized within the current scope.

SyntaxError,
when code trying to run is not written correctly
in accordance with the grammatical rules of javascript

TypeError,
operand/argument passed to a function is incompatible with the type expected by that operator
when attempting to modify a value that cannot be changed
when attempting to use a value in an inappropriate way

Read the error




*/

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
clean code

//working with main containers with a representative ID
named after their destined content
<div id="main-container"/ "header"/"logo"/ "main-menu"


//Explanatory professional comments

//right indenting

//breakup large function into smaller ones

//Naming functions and variables should be descriptive

Each imported file is an HTTP request 
that tampers with the performance of your application. 
So apart from being a consideration for tidiness, 
it is also a consideration for efficiency.

there is a high need to keep up with standards 
in order to maintain a code that’s readable in the future.


//the code is self explaining, so comments should be 
describing what the code does, why it's there
but better is to make code explain itself through naming and spacing
if you feel your code is too complex to understand without comments, 
the code is probably written in a bad way, it should not need comments
make the code readable for human first then compiler

1) code self explanatory
2) comments for why written

Self Documenting Code: take code as a documentation

A professional programmer is prepared to bend their personal style 
to reflect the needs of the team.




/*////////////////////////////////////////////////////////////////////*/
/*
chaining methods
str.replace("k", "R").toUpperCase().substr(0,4); 

// A quick utility function that does what it says:

*/
function titleCaseName(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


//using object's methods all together
/*
userControllerObj.findUser("test2@test2.com").formatName()
.createLayout().displayUser();
*/




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* 



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
Arrays, 
an ordered collection of items (strings, numbers or other things)
type of object

can have variables of different types in the same array
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

the array's real strength is in the built-in properties and methods


array.length=2;   //this will give length and cut off the remaining items
array.length=0;   //clears and array


///////////////////////////////////////////////////////
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";

//for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}

// fruits.forEach(myFunction);
function myFunction(value) {
  text += "<li>" + value + "</li>";
}


text += "</ul>";

document.getElementById("demo").innerHTML = text;



///////////////////////////////////////////////////////
In JavaScript, arrays always use numbered indexes, no names
If you use named indexes, JavaScript will redefine the array to an object.

You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.


///////////////////////////////////////////////////////
// Create an array with two elements:
const points = new Array(40, 100);
const points = [40]; //error

multi dimensional arrays
let matrix = [
  [ 1,2,3 ],
  [ 4,5,6 ],
  [ 7,8,9 ],
];

matrix[1][1]; //5





//to check wether is an array or not, returns true
ArrayName.isArray(fruits);
ArrayName instanceof Array;


Array.pop/push();  //removes/adds last of array, changes original
Array.shift();  //removes the first element, and the rest takes its place
Array.unshift();  //add beginning of array
delete array[0];    //not recommended, causes holes


let Array3 = Array1.concat(Array2);
let Array4 = Array1.concat(Array2, Array3);
let Array3 = Array1.concat("string"); //outputs array



Array.splice(2,0,"Lemon","Kiwi"); 
//first position, items removed, to add, returns array with deleted items
//can be used to remove middle items without holes by having no additions

Array.slice(3,4);
//return array of items from this position
//start and (not to) end
//original not affected

Array.toString(); //returns a comma separated string
Object.toString();

if (String(Array) === '1,2,3')



[]+1    and ""+1    // "1"
[1]+1   and "1"+1   // "11"
[1,2]+1 and "12"+1   //1,21

not use arrays with == or === , false, comparing reference like objects
or even > , <
compare item by item using for..of
*/

//let arrayX = [1,2,3];
//let arrayY = [1,2,3];
//alert( String(arrayX) === '1,2,3'); //true
//0 is false, '0' is a string know the difference
//console.log( 0 == []); //true, [] converted to primitive becomes empty string '' which is false
//console.log( '0' == []); //false



//still have next tutorial and complete reference



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Array Loops


collection of items want to do something with every item
Array, Set, Map


//preferable to be used on objects
for (const item of array) {
  item.
}


//output cat which is each item for each loop itr
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

//console each(which is called cat) of cats
for (const cat of cats) {
  //console.log(cat);
}


function toUpper (input) {
  return input.toUpperCase();
}

//map - apply function to each of cats and put into upperCats
const upperCats = cats.map(toUpper);
console.log(upperCats);


//filter - if it returns true, then the item is added to the new array
function LCat(input) {
  return input.startsWith("L");
}

const filtered = cats.filter(LCat);
const filtered2 = cats.filter( input => input.startsWith("L")  );


console.log(filtered2);

*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*  Loops


let i = 1, use let for the counter to reassign each time the loop rounds
visible only inside the loop header () cant be used in the loop lines

conditions can be skipped to 
for( ;; )


for of is less buggy than normal for loop
but normal for loop allows more control over iterations

break;  //break out of the "loop entirely" to next line of code, stays in nest, 
continue;   //skips to next "loop iteration"  ... , cant be used with tenary?operator


initialization
while ( condition ) { //condition is converted to boolean
  expression
}


////in do/while condition comes after the code inside the loop.
runs at least once

initialization
do {
} while (condition)



//to break a specific loop, use labels
outer: for (let i=0; i<3; i++) {

  inner: for (let j = 0; j < 3; j++) {

  if(!input) break outer; //otheriwse will break inner and cont outer
}

*/

//console.log(Boolean(0)); //false
//++i / i++

//for (let i = 0; i < 5; ++i) alert( i ); 
//the increment is separated from the condition so no diff to i++


//if number >100 or cancel
/*
let num;

  do {
  
      num = prompt("Enter a number greater than 100?", 0);
  
  } while (num <= 100 && num);
*/





//////////////////////////////////////////////
//array middle location
let arrayX = new Array(3);

let middle = (arrayX.length/2)+0.5; //3
let middle2 = Math.floor((arrayX.length -1) /2);

console.log(middle2);


for (let i=0; i<arrayX.length; i++){

    if (i == middle-1) {
      arrayX[i]= " M ";

    }
    else {
      arrayX[i]= "X";
    }
}

console.log(arrayX);





//////////////////////////////////////////////
//
/*

////run forever/break
while (true) {

      let value = prompt();
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
}
*/


////store a function in an array and call it
let arrayY =['a',' b' ,'c'];
arrayY[2] = function () { console.log("hey");}

console.log(arrayY);
arrayY[2]();



////alter array elements using for..in
let arrayZ = ["1","2","3"];

for (let item in arrayZ) {  //item is like i locations

    console.log(arrayZ[item]);
    arrayZ[item] = 0;
}

console.log(arrayZ);


//for..in 
//integer properties are sorted, others appear in creation order


//Math.trunc(Number("1.2")) //gives 1, +49 gives 49






/*////////////////////////////////////////////////////////////////////*/


let Array1811 = ['4', '5'];

//Array.forEach(function/arrowFunction)
Array1811.forEach(item => {
  //console.log(item);

});


for (const item of Array1811) {
  //console.log(item);

}


let schedule = {"name": "name"};
for (let key in schedule) {
    // if the loop has started, there is a property
    //console.log("item")  
}


//////////////////////////////////////////////

let object1811 = {
  "John": 100,
  "Ann": 160,
  "Peter": 130
}

//console.log(object1811["John"]);

let sum1811 = 0;
for (let index in object1811) {
  //console.log(object1811[index]);
  sum1811=sum1811+object1811[index];
}

//console.log(sum1811);

//ForEach works on array only
//for..in works on array and object

//index will output each item name
//object[index] will output each item's value, object[name] = its value

//index in array is value1, value2
//index in object is value1, value2
//object[value1] : value



//////////////////////////////////////////////

//Example
let menu1811 = {
  width: 200,
  height: 300,
  title: "My menu"
};

//console.log(menu1811);

for (let item1811 in menu1811) {
  //console.log(Number(menu1811[item1811]));

  if (!isNaN(Number(menu1811[item1811]))) {
    menu1811[item1811] = menu1811[item1811] * 2;
  }
  else {
    continue;
    //console.log("this is a number");
    //console.log(menu1811[item1811]);
  }

}

//console.log(menu1811);


/*////////////////////////////////////////////////////////////////////*/
/* Arguments array

////arguments can be accessed as an array

function func1 (a, b ,c)
    let x = arguments[0];  //0,1,2
    a = 123;
    arguments[0] = 123;  //another way of accessing arguments

    for (let i=0; i< arguments.length; i++) {
      let inputLength = arguments[i].length;
    }

    arguments


//must use argument, for arg[0] to work which will shadow the argument
//but if put parameter value, arg[0] not used, the argument will be used "if found"




//ex
function funcWithDefault() {
  console.log(arguments);

  arguments.forEach(arg => {
    console.log(arguments); //not work, have to be convered to an array first using Array.from(arguments)

  })

}
    //...args, or any name. its the "rest parameter" only once in end
    //arg is an array can use length on
//ex
function funcWithDefault(...args) {
  console.log(arguments);

  args.forEach(arg => {
    console.log(arg); //work

  });

}
funcWithDefault(10,20); // 10


//ex
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);//can be , : or even </li><li> to generate html
}
// returns "red, orange, blue"
myConcat(', ', 'red', 'orange', 'blue');


//access arguments forEach by using the ...args parameter


////Array.from
//Array.from(arrayLike, mapFn, thisArg);
//console.log(Array.from([1, 2, 3], x => x + x) , n/a);
// expected output: Array [2, 4, 6]
//2,3 parameters are optional
//arrow functions can be used
//mapFn can get two arguments


// Create an array based on a property of DOM Elements
//const images = document.querySelectorAll('img');
//const sources = Array.from(images, (image) => image.src);
//const insecureSources = sources.filter((link) => link.startsWith('http://'));

/*
f(1,2,3);
function f() {
  return Array.from(arguments);
}
*/










/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* 

DOM - Document Object Model
when html is parsed by a web browser, it is converted to DOM
DOM manipulation changes the browser's render and dom tree not the html file

parent, child, sibling


*/


const container2611 = document.querySelector("#testdiv_2109"); //first match
//querySelectorAll //node list of all matches of the selector
//use Array.From() to convert it to an array and use methods

console.dir(container2611.firstElementChild);
console.dir(container2611.previousElementSibling);





const div2611 = document.createElement("div"); //allocates memory to be appended later in the DOM
//parentNode.appendChild(childNode);    //append to last of children
//parentNode.insertBefore(newNode, referenceNode);  //append before reference node in parent node
//parentNode.removeChild(childname)







div2611.style.color = "blue";
div2611.style.cssText = "color: blue;   background: white;" ;  //add several styles
div2611.setAttribute("style", "color: blue;   background: white;");

//div2611.style.backgroundColor //to access b-c use camelCase and remove -
//div2611.style["background-color"] //or use in brackets






//div2611.setAttribute("id", "idName")
//div2611.getAttribute("id")
//div2611.removeAttribute("id")


//div2611.classList.add("new");
//div2611.classList.remove("new");
//div2611.classList.toggle("new");


//div2611.textContent
//div2611.innerHTML


//<script src="./name.js" defer> </script>
//if put in the head element will be loaded after the html is parsed



//Example : add items using DOM methods
/*
let testContainer2611 = document.getElementById("container2611");

let para26 = document.createElement("p");
para26.innerHTML = "Hey, i'm red!";
testContainer2611.appendChild(para26);

let h3_2911 = document.createElement("h3");
h3_2911.innerHTML = "i'm a blue h3!";
testContainer2611.appendChild(h3_2911);

let div2911 = document.createElement("h3");
div2911.style.cssText = "border: 1px solid black; background: pink;"

    let div2911_h1 = document.createElement("h1");
    div2911_h1.innerHTML = "I'm a div";

    let div2911_p = document.createElement("p");
    div2911_p.innerHTML = "ME TOO";

    div2911.appendChild(div2911_h1);
    div2911.appendChild(div2911_p);

testContainer2611.appendChild(div2911);
*/



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Events

//HTML event, allows one "onclick" for example as an event per element 
//onevent property, same issue
//event listeners, allows multiple events

all three can use a functionCall();

x.removeEventListener("click", Fn);

propagation is useful
when dont want an inner item click
to activate an outer click event



*/


let function2911 = function () {
  alert ("hello world");
}

const btn2911 = document.querySelector("#btn2911");
//btn2911.onclick = () => alert("Hello World");
btn2911.addEventListener("click", () => {
  alert ("hello world - eventListener");
});

btn2911.addEventListener("click", (e) => {
  e.target.style.background="blue";
});

//e, object refrences the event itself
//access to useful properties/function related

//use forEach button to work with eventListener

const buttons = document.querySelectorAll("button");
buttons.forEach( (button_test) => {
  console.log(button_test);

  button_test.addEventListener("click", (e) => {
    e.target.style.background="blue";
  });
  
});



function logText(e) {
  console.log(e.target.id);
}

buttons.forEach( button => addEventListener("click", logText, {once:true}));
//this click event happens only once


/*////////////////////////////////////////////////////////////////////*/
/*
identifiers and values are leaves or nodes without children

Node.TEXT_NODE  , node.nodeValue//holds the string text 
Node.COMMENT_NODE
Node.ELEMENT_NODE

.children //contains only element children not other types of child like text/comment

x.href
x.alt


let paras = document.body.getElementsByTagName("p1");
document.body.insertBefore(paras[2], paras[0]);
// .replaceChild removes


let arrayish = {0: "one", 1: "two", length: 2};
let array23 = Array.from(arrayish);
console.log(array23); //one, two
console.log(array23.map(s => s.toUpperCase()));





//access size and position of an element, read only
.offsetWidth
.offsetHeight

//access size and position of a child in an element with padding but ignoring borders
.clientWidth
.clientHeight

.offsetParent //returns nearest ancestor
.clientTop    //returns the width of the top border of an element
.offsetLeft   //returns the left position in pixels relative to the parent

rect = x.getBoundingClientRect();
returns precise position of an element to the screen
top, bottom, left, right
using rect.top.toFixed();


to the document
add the current scroll position, 
window.pageXOffset, window.pageYOffset

window.scrollBy(100,100);   //force scroll



//ex. time taken by function input
function time(name, action) {
  let start = Date.now();
  action();
  console.log(name, "took", Date.now() - start , "ms");
}


requestAnimationFrame—it lets the browser know that we are done for now, and it can go ahead and do the things that browsers do, such as updating the screen and responding to user actions.


*/



/*////////////////////////////////////////////////////////////////////*/
/*
Prevent Default


events, default action like down arrow/browser scroll down
right click/context menu

preventDefault, to avoid calling before default behavior takes place because it has already been taken care of

can be used to implement own keyboard shorcuts or context menu.
and change what user expect
however some events cant be intercepted for some browsers

x.addEventListener("click", event => { 
  console.log("this is the new action");
  event.preventDefault();
});


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
key presses

window.addEventListener("keydown", event => { //keydown is when key on hold
    if (event.key == "v") {
      document.body.style.background = "violet";
    }
  });

//shiftKey, ctrlKey, altKey, and metaKey(CMD)
  if (event.key == "v" && event.ctrlKey) {  //ctrl+v


focus:
when nothing in particular has focus, 
document.body acts as the target node

this is where the key event originates
most nodes other than links, buttons, form fields, input, textarea
cannot have focus unles given a tabindex attribute

virtual keyboards on android phones, old keyboards
do not fire key events
best read from a focused field



/*////////////////////////////////////////////////////////////////////*/
/*
Pointer events:
mice: mouse clicks, touchpads, trackballs
touchsreens
the two are different

mice events happen to the DOM node below the mouse pointer when the event occurs

a "click" event fires after a "mouseup"

two clicks close together in an area, "dblclick" is fired

mousedown on a para1, 
then move pointer to para2 and release
the click event will happen on the element that contains both para1, para2


//ex: simple dot drawing
window.addEventListener("click", event => {
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});



/*////////////////////////////////////////////////////////////////////*/
/* mouse motion

mousemove //track position of the mouse
mouse-dragging functionality

left code = 1
right code = 2
middle code = 4
left+right code = 3

/////////////////////////////////////////////////////
//Ex. change bar width by dragging it
let lastX; // Tracks the last observed mouse X position
let bar = document.querySelector("#barX");
bar.addEventListener("mousedown", event => {
  if (event.button == 0) {
    lastX = event.clientX;
    window.addEventListener("mousemove", moved);
    event.preventDefault(); // Prevent selection
  }
});

function moved(event) {
  if (event.buttons == 0) {
    window.removeEventListener("mousemove", moved);
  } else {
    let dist = event.clientX - lastX;
    let newWidth = Math.max(10, bar.offsetWidth + dist);
    bar.style.width = newWidth + "px";
    lastX = event.clientX;
  }
}
/////////////////////////////////////////////////////



/*////////////////////////////////////////////////////////////////////*/
/* touch events

touchstart
touchmove
touchend

touches property given to the event objects
holds an array of points

may want to use preventDefault in touch event handlers
to avoid scrolling, swiping mouse events etc



//ex: multi finger touch circle around
function update(event) {
    for (let dot; dot = document.querySelector("dot");) {
      dot.remove();
    }
    for (let i = 0; i < event.touches.length; i++) {
      let {pageX, pageY} = event.touches[i];
      let dot = document.createElement("dot");
      dot.style.left = (pageX - 50) + "px";
      dot.style.top = (pageY - 50) + "px";
      document.body.appendChild(dot);
    }
  }
  window.addEventListener("touchstart", update);
  window.addEventListener("touchmove", update);
  window.addEventListener("touchend", update);



*/



/*////////////////////////////////////////////////////////////////////*/
/* scroll events

scroll event fired on a scrolled element
what user currently looking at
showing indication of progress, highlighting part of table of contents, page number


//ex: progress-bar top/left of 0, border2px, 
//% relative to page width
let bar = document.querySelector("#progress");
  window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    bar.style.width = `${(pageYOffset / max) * 100}%`;
  });

//innerHeight, innerWidth for the window width


/*////////////////////////////////////////////////////////////////////*/
/* focus events

//gain: gain focus
//blur: lose focus



/*////////////////////////////////////////////////////////////////////*/
/* web workers
js process that runs alongside the main script on its own timeline
workers do not share their global scope or any other data
comm. with them by in/out messages





*/

/*
let squareWorker = new Worker("code/squareworker.js");
squareWorker.addEventListener("message", event => {
    console.log("The worker responded:", event.data);
});
squareWorker.postMessage(10);
squareWorker.postMessage(24); 
//sends a message, cause "message" event to fire in receiver
//the script that created thr worker sends and recv. messages through the worker object
//worker talks to script by sending and listening directly on its global scope
//only messages that can be represented as JSON can be sent as messages
//the other side will receive a copy of them, not the value itself





/*////////////////////////////////////////////////////////////////////*/
/* Timers


clearTimeout(setTimeOutReturned);  //stops the timeout

cancelAnimationFrame works as clearTimeout
when called on a value returned by requestAnimationFrame


/*////////////////////////////////////////////////////////////////////*/
/* Debouncing

some events fire rapidly, 
if done time-consuming,
document slow


//use timeout to make sure not doing it too often

ex
//user type react
//not for every input event
//wait until a pause occurs
//instead of immediatly performing an action, use timeout
//clear previous timeout (if any)
//so when events occur close together than our timeout delay
//timeout from the prev. event will be cancelled
  let textarea = document.querySelector("textarea");
  let timeout;
  textarea.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log("Typed!"), 500);
  });




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

document
document.body //the body's html
document.body.style.... //changes the dom live not the source file





*/

//console.dir(document);    //outputs the properties and methods can look at to use from
//console.dir(document.location.pathname); 

//console.dir(document.all[30]);  //.all output all elements as an array to select from
//console.log(document.links);    //array of links

//.innerText //respects style, textContent can be logged without respect to style display for example

////$ in jquery is the doc.q in v-js
//var header = $("#headerid");
//var header = document.querySelector("#headerid");


//var odd = document.querySelectorAll("li:nth-child(odd)");
//odd[i].style.backgroundColor = "lightgrey";


//contain html text, so have to be aware of html whitespaces i.e textnodes
//childNodes,firstChild, nextSibling 

//does not have html text like enters and spaces
//children, first/LastElementChild 

/*////////////////////////////////////////////////////////////////////*/
/*03/12

newDiv.id = "id_name"; //give id

document.createTextNode and append it  //textNode

.insertBefore //to insert in the dom after creation and appending

//use button click event to change by id/query document's styles

console.log(e);   //all properties to use from e(event)
e.type //type of event


e.offsetX/Y     //position from the element itself

console.log(e.altKey);  //will output true if clickevent+pressed_alt


bos.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)"
innerHTML = "<h3>" +e.target.value+ "<h3>";

.keypress //any press
.oncut
.onpaste


form, onsubmit, preventDefault();


/*///////////////////////////////*/
/*




*/


function forumX () {

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//Form submit event
form.addEventListener("submit", addItem);

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//Add item
function addItem (e) {

    e.preventDefault();   //avoid normal submit of form
  ////////////////////////////////////////////////////////
  //get input value
    var newItem = document.getElementById("item").value; //input type

  //create new li element
    var li = document.createElement("li");
    li.className = "list-group-item";
  //add the input value
    li.appendChild(document.createTextNode(newItem)); /**/



  ////////////////////////////////////////////////////////
  //create del button element
  var deleteBtn = document.createElement("button");
  deleteBtn.className= "btn btn-danger btn-sm float-right delete"; /**/
  
  //Append text Node
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);


  ////////////////////////////////////////////////////////
  itemList.appendChild(li);

}


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//removing an item after confirmation
itemList.addEventListener("click", removeItem);

function removeItem (e) {

  if (e.target.classList.contains("delete")) {  /**///select the button only
    console.log(1);

    if (confirm("are you sure?")){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }

  } 
}


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

var filter = document.getElementById("filter");

filter.addEventListener("keyup", filterItems);

function filterItems(e) {
  //(1) get filter input, convert to lowercase as default
  var text = e.target.value.toLowerCase();
  //console.log(text);

  //(2) grab all li's from item list
  var items = itemList.getElementsByTagName("li");   /**///itemList. like doc.
  //console.log(items);

  //pass through all items
  Array.from(items).forEach( item => {

      var itemName = item.firstChild.textContent;
      //console.log(itemName);

      // find itemName in text but it has to return a match value
      if(itemName.toLowerCase().indexOf(text) != -1) {
        item.style.display = "block";

      }

      else {
        item.style.display = "none";
      }
  });


}

}





/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*


////Git branching
alternate reality versions of files at the same time
used also when sharing code with others and not want to change the main branch

git config --global init.defaultBranch main
//this is how we set the default branch for our repos at the beginning

from the "main" branch will set out other branches
multiple so can leave other branches as they are 
and reserve main for working properly finished features

each feature added using "feature branches"


////Make new branches
git branch <name>     //create branch
git checkout  <name>  //switch to this named branch
git branch -d <name>  //delete a not needed branch

git checkout -b <name>  //create and switch
git branch              //see all current branches 
                        //with the current in *


////Merging
1 - git checkout main   //switch to main
2 - git merge <name>    //takes from "name" and add to the current branch

git push origin rps-ui  //push the current new added branch to github

make sure you are on the right branch
git push origin rps-ui      //use this now instead of > git push origin main



You can add files, commit to this branch, and push changes to your repo, 
just like you would with the main branch. Everything is the same 
except when you push the changes, you’d use git push origin rps-ui 
instead of git push origin main


Steps to creating, editing, merging a branch
git checkout -b rps-ui          //create new branch beside main
git add .
git commit -m
git push origin rps-ui
git checkout main               //switch to main
git merge rps-ui                //merge current(main) with rps
when asks for commit msg: press i, put message, esc, :wq, enter
git push origin main            //normal push
git branch -d rps-ui            //delete the branch from local repo
git push --delete origin rps-ui //delete from repo on github


//content uploaded from local branch to remote branch
git push -u origin <local-branch-name>   
git push -u <remote-repo> <local-branch-name> 
-u : creates a tracking reference for every branch pushed, auto linking
//auto link local branch you push with the remote one
//allows use commands like git pull without arguments
//remote-repo is origin on local system
//remote-repo can be url
//branch: the remote repository branch



*/




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Objects

creating objects
accessing object properties
multiple object operators
powerful array functions


data types, eight are primitive
their values contain only a single thing

////creating objects
let user = new Object();    //object constructor
let user = {};              //object literal

let user = {
  key/name/identifier: value,   //this line is property
  "two word": value,            //multi words are quoted

};

uer.key;
user["two word"];

let key2 = "two word";
user[key2];   //user["two word"]

alert(key in user);   //true as key exists in user


////creating object using prompt

let name = prompt("enter fruit name", "apple");

let bag = {
  [name]: 5,
  [name+"nameExtension"]: 5,
  0 : "test",    //0 is converted to "" when calling
  __proto__: "test",    //will cause issues

  subObject: {
    first: name,
    second: type,
  },





}

alert(bag.john);   //5 if name = john
alert(bag.namenameExtension);

bag[0] //correct call
bag["0"] //correct call

bag.subObject.first;




////returning objects

function makeUser (name,age) {
  return {
    name: name,
    age: age,
  }
    or
  return {
    name,
    age,
  }

}


////

for (let keys in user) {

  alert(keys);

}



//ex
function isEmpty (obj) {

  for (let x in obj) {
    return false; //if the loop did exist, then its not empty
  }

  return true;

}
console.log(isEmpty(user));


//ex
function multiplyNumeric(obj) {

  for (let x in obj) {

    console.log(x);
    console.log(obj[x]);

    if (!isNaN(Number(obj[x]))) {
      obj[x]=obj[x]*2;
    }
  }

  console.log(obj);

}

 

//transfer a series of structured related data
//sending a request to the server to be put into a database
//in a single object


"" used for two words


but
[] used to access an unset variable
let x="first";
person.x; doesnt work
person[x]; 

function logProperty(propertyName) {
  console.log(person[propertyName]["1"]);
}

//adding custom on the fly
const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;



//object constructors
//written with first capital 

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}
const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();


function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
const salva = new Person("Salva");
salva.name;
salva.introduceSelf();




every time string is created it becomes an instance of String
thus has several common methods and properties available on it

myString.AnAvailableStringMethod
document.AnAvailableDocumentMethod



*/

/*////////////////////////////////////////////////////////////////////*/
/* 06/12

    //array.filter
    //filter passes through each item in array containing objects
    //as an inventor(each) to decide keep it or not
    const fifteen = inventors.filter(functionName1);

    function functionName1 (inventor) {
      if (inventor.year >= 1500 && inventor.year < 1600) {
        //arrayObjitem.property
        return true;
      }

    }

    //.table on an object returns a nice looking table representation
    console.table(fifteen);

    const fifteen = inventors.filter( inventor => (inventor.year >= 1500 && inventor.year < 1600) );
    //arrow function on a condition only no if no code, return true 


    ////////////////////////////////////////
    ////////////////////////////////////////


    ////map returns the array with each inventor changed to this stringconcat.
    const fullNames = inventors.map(inventor => (inventor.first + " " +inventor.last))


    ////////////////////////////////////////
    ////////////////////////////////////////


    ////sort
    //for each 2 items, a/b, if a > b , return1/put a before, 
    const ordered = inventors.sort ( (a,b) => a.year > b.year ? 1 : -1);


    ////////////////////////////////////////
    ////////////////////////////////////////


    //reduce
    //to calculate each life-span of each inventor in our array
    //build something on every single one
    //parameters 
    //(what you returned from the function last time every time, each-inventor)
    //the 0 the total's value to start with

    let totalYears = inventors.reduce((total, inventor)=> 
          {return total+(inventor.passed - inventor.year)
    },0);

    const oldest = inventors.sort(function(a,b) {
        const lastGuy = a.passed - a.year;
        const nextGuy = a.passed - a.year;
        
        return lastGuy > nextGuy ? -1 : 1;
    });


    ////////////////////////////////////////


    // ex. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce(function(obj, item) {

      //console.log(item);

      if (!obj[item]){    //2.if obj not have this item
        obj[item] = 0;    //put it in obj
      }

      obj[item]++;        //increase the this called item in obj

      return obj; 


    }, {
        //1.leave initial empty as we dont know what is in the array
    });

    console.log(transportation);


    ////////////////////////////////////////
    ////////////////////////////////////////


    // ex. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    //go to webpage, check the items container's class which is mw-category
    //get dom elements out of the page
    const category = document.querySelector(".mw-category"); //a
    const links = [...category.querySelectorAll("a")]; //"spread" every single item into an array

    //de is a link changed to textContent only
    //then filter the mapped to return what matches the text
    const de = links.map(link => link.textContent)
                    .filter(place => place.includes("Wall")); 


    ////////////////////////////////////////
    ////////////////////////////////////////



    // ex. sort Exercise
    // Sort the people alphabetically by last name
    const alpha = people.sort(fnName4);

    function fnName4 (lastOne, nextOne) {

      const [aLast, afirst] = lastOne.split(", ");  
      //rather than return a full array, return in two variables
      const [bLast, bfirst] = lastOne.split(", ");  

      return aLast > bLast ? 1 : -1;

    }

    ////////////////////////////////////////
    ////////////////////////////////////////

  //some checks for every item that we have 
  //at least one item in your array has what you are looking for
    //const isAdult = people.some(someFn);

    const isAdult = people.some(person => (
      (new Date()).getFullYear() - person.year >=19
    ));
    
    //function returns true on person meeting this requirement
    console.log({isAdult}); 
    //putting between parenthesis, shows the item in question not just true


    ////////////////////////////////////////

    //every checks for every item that we have 
    //all of them must have what you are looking for

        const AllAdult = people.every(person => (
      (new Date()).getFullYear() - person.year >=19
    ));
    console.log(AllAdult);


    ////////////////////////////////////////
    ////////////////////////////////////////

    ////array.find() //array of objects with property id
    //like filter, but returns the first item that it finds

    const comment = comments.find(comment => comment.id === 823423);

    function fnFind (comment) {

      if (comment.id === 823423) {
        return true;
      }

    };

    console.log(comment);


    ////////////////////////////////////////
    ////////////////////////////////////////


    //Array.findIndex
    //find where something is inside an array

    const index = comments.findIndex(comment => comment.id === 823423);

    console.log(index);

    ////////////////////////////////////////


    //output into two arrays
    //start 0 go until index, start index+1 and go until the end
    //add ... to spread into one array
    const newComments = [
      ...comments.slice(0,index),  
      ...comments.slice(index+1)

    ];


    ////////////////////////////////////////
    ////////////////////////////////////////


/*////////////////////////////////////////////////////////////////////*/
/*

//if a parameter is not specified, give a value
function myFunction(x, y=5) {


function sum(...args) 
//infinite number of arguments as an array

function findMax() 
// arguments[i]



    //



// Revision on Reduce method //


const inventors = [
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },

];
//object is the first in test if not defined
//so the next current person will be returned and will be the oldest
//and what is returned is stored in the oldest (initial factor)

//array.reduce(fn, values) , array.reduceRight
//returns single value
//initial value is first[0] item in array and iteration from array[1]
//if value supplied iteration starts from array[0]


const findTheOldest = inventors.reduce((oldest, currentPerson) => {

    const currentAge = currentPerson.yearOfBirth - currentPerson.yearOfDeath;
    const oldestAge = oldest.yearOfBirth - oldest.yearOfDeath;

    if (oldestAge > currentAge) {
      return oldest
    }
    else {
      return currentPerson;
    }
    
    
  });

  console.log(findTheOldest);


*/


