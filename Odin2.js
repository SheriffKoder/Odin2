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


[DOM Manoeuvering]
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


/* List Switcher -----------------------------------------------------*/
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

/* --------------------------------------------------------------------*/


/* textNode is the text for h1,p etc without using innerHTML */
//const h1 = document.createElement('h1');
//const TextNode = document.createTextNode('Hello World');
//h1.appendChild(TextNode);
//document.body.appendChild(h1);


/*////////////////////////////////////////////////////////////////////*/

/* //// javascript, adding new info ////

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
constant (unchanging), cannot be reassigned otherwise will cause error
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

  alert(test); // out of declaration block and outputs true , but if let will error not defined
              //outputs even if IF branch not execute

  for (var i = 0; i < 10; i++) {
  }
  alert(i); //outputs 10

  //var test; //can be defined here also


}

sayHi();
alert(test); //outputs undefined either ways


var can be defined multiple times but let does not get declared more than once
var user = ;
var user = ;

> var can be defined anywhere in the code and code will define it at code starts

> var can be defined in a non executing branch if, etc

* function go() { }(); // <-- can't call Function declaration

best use let and const

//*--------------------*//*
//*--------------------*//*

+ addition, - subtraction, * multiplication, ** exponation, / division, % modulus, ++ increment, -- decrement
operand +(operator) operand 

let z = x ** 2;   // x power 2
let z = Math.pow(x,2);

number + number = number

JavaScript will try to convert strings to numbers in all numeric operations:
* , / , - but not +

so 
number + string = string  // "10"+ 20  = 1020
string + string = string // "10"+ "20" = 1020




>calculation is left to right 

>precedence/flow of calculation
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





////////////////////////////
//// NaN //////////////////
let x = "10";
let y = "10Apple";
let z = x / y; //NaN
let o = isNaN(z); //true

console.log(o);


let x2 = NaN; 
// NaN + number = NaN
//NaN+string = concatenate  

let x3 = typeof NaN; //number
let x4 = typeof Infinity; //number


// Infinity //
let myNumber = 2;
while (myNumber != Infinity) { // Execute until Infinity
    myNumber = myNumber * myNumber;
}

let x5 =  2 / 0; //Division by 0 = Infinity


////////////////////////////
////////////////////////////


*/



