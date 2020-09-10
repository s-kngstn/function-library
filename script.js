const input = document.querySelector('.numberInput');
const para = document.querySelector('p');
const section = document.querySelector('div');
    
// RETURN THE SQUARE ROOT OF A NUMBER
function squared(num) {
  return num * num;
}
    
// RETURN THE NUMBER CUBED
function cubed(num) {
  return num * num * num;
}

// RETURN THE FACTORAL OF A NUMBER
function factoral(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num -1;
    while (x > 1) {
      num *= x;
      x--;
    }
    return num;
}
    
// RETURN THE SQUARE ROOT OF A NUMBER
function squareRoot(num) {
  return Math.sqrt(num);
}  

// RETURN THE CIRCUMFERENCE OF A CIRCLES RADIUS
function circumference(num) {
  return 2 * num * 3.14159;
}

// RETURN A RANDOM NUMBER
function randomNum(num) {
  return Math.floor(Math.random() * (num+1));
}

// RETURN A RANDOM COLOR
function randomColor() {
  const rndCol = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
  input.style.borderColor = rndCol;
}

// EVENT HANDLER ON CHANGE (ENTER)
input.onchange = function() {
  const num = input.value;
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    section.innerHTML = `<ul>
                        <li>${num} squared is ${squared(num)}.</li>
                        <li>${num} cubed is ${cubed(num)}.</li>
                        <li>${num} factoral is ${factoral(num)}.</li>
                        <li>${num} square root is ${squareRoot(num)}. </li>
                        <li>${num} circumference is ${circumference(num)}.</li> 
                        <li>${num} Random Number: ${randomNum(num)}.</li> 
                      </ul>`;
  }
}

// EVENT HANDLER ON MOUSE CLICK
input.onclick = function() {
  if (input.value === 'change color') {
  randomColor();
  }
}


// ---------  GOOD CODE VS BAD CODE ----------- //
// --------------- CONSOLE LOG ---------------- //
const foo = { name: 'tom', age: 30, nervous: false};
const bar = { name: 'dick', age: 40, nervous: false};
const baz = { name: 'harry', age: 50, nervous: true};

'Bad Code 💩'
console.log(foo);
console.log(bar);
console.log(baz);
'Good Code'

// --- CSS IN CONSOLE ---//
console.log('%c My Friends', 'color: orange; font-weight: bold;')
/* 
Above is custom CSS in the console
*/

// --- BETTER CONSOLE LOG PRACTISE FOR MULTPLE OBJECTS ---//
console.log({foo, bar, baz});
/* 
Above is a better way to write the three console logs above,
It also shows the variable tied to the object
*/

// --- CONSOLE TABLE ---//
console.table([foo, bar, baz]);
/* 
Above is console table which creates a table in the console
Very useful if you have an Array of like objects
*/

// --------- SPREAD SYNTAX ON ARRAYS --------------- //
// Adding strings to an array
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

'Bad Code'

// pokemon.push('Bulbasaur')
// pokemon.push('Metapod')
// pokemon.push('Weedle')

'Good Array Code'

// PUSH Equivalent
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];
// UNSHIFT Equivalent
pokemon = ['Pikachu', 'Otherguy', ...pokemon];
// Or....
pokemon = ['Oneguy', 'Thatone', ...pokemon, 'Another', ];

// ------------------ LOOPS -------------------------- //

const orders = [500, 30, 99, 15, 223];

'Bad Loop Code'
// we need to compute some values based on this array
// order total
let total = 0;
// order with tax
let withTax = [];
// filter out the high values
let highValue = [];
for (i = 0; i < orders.length; i++) {

  // Reduce
  total += orders[i];


  // Map
  withTax.push(orders[i] * 1.1);

  // Filter
  if (orders[i] > 100) {
    highValue.push(orders[i]);
  } 
}
console.log(total, withTax, highValue);

'Good Loop Code'
// ---------- Array REDUCE LOOP Method ----------------- //
// acc = accumilated value | cur = current value in loop
// takes a callback function (acc, cur)
total = orders.reduce((acc, cur) => acc + cur);
console.log(total);
// ---------- Array MAP LOOP Method ----------------- //
// v = value map them to their value then times by 1.1
withTax = orders.map(v => v * 1.1);
console.log(withTax);
// ---------- Array FILTER LOOP Method ----------------- //
// Whenever the callback function equals true it will
// allow that value through
highValue = orders.filter(v => v > 100);
console.log(highValue);