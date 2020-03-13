const people = [
  { name: 'Tyla', year: 1985 },
  { name: 'Zadin', year: 2008 },
  { name: 'Luna', year: 2013},
  { name: 'Mike', year: 1989 },
];

const comments = [
  { text: 'Love this!', id: 823423 },
  { text: 'Super good', id: 237483 },
  { text: 'You are the best', id: 754789},
  { text: 'Sushi is my fav food ever', id: 986378 },
  { text: 'Yay mountains', id: 678463 },
];

// .some will check to see if at least one thing in 
// the array meets what you are looking for

//  const isAdult = people.some(function(person) {
//   const currentyear = (new Data()).getFullYear(); 
//   if(currentyear - person.year >= 19) {
//     return true;
//   }
//  });
// or below as another way to do the same thing

const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});
// if use curley brackets around const in console.log--will give you names as well as true
console.log({isAdult});

// .every returns true or false if every thing in the array matches what you are looking for  
const allAdult = people.every(person => {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
});

console.log({allAdults})

// find is similar to filter, except instead of returning a subset it returns the first item it finds

const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// comments.splice(index, 1);
//  or below to keep both old array and new array
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
