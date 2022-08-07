let need = 90;
const myfunc = () => {
  console.log("hye there i am inside my func ");
  const myfunc1 = () => {
    console.log(`hey can u have the access, bcz I am inside myfunc1 ${need}`);
  };
  myfunc1();
};
myfunc();



//  some important stuff 
// What exactly is Scope?
// Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code.

// Note:

// Scope means area, space, or region.
// Global scope means global space or a public space.
// Local scope means a local region or a restricted region.

// How Does the Scope Chain Work?
// JavaScript's scope chain determines the hierarchy of places the computer must go through — one after the other — to find the lexical scope (origin) of the specific variable that got called.

// https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/