'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return ((loaf.water / loaf.flour) * 100);
  },
};

//console.log(loaf.hydration());



const rickRolled = {
  foo: 'Never',
  bar: 'Gonna',
  fum: 'Give',
  quux: 'You',
  spam: 'Up',
};

for(let prop in rickRolled){
  //console.log(`${prop}: ${rickRolled[prop]},`);
}


const kimK = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

//console.log(kimK['meals'][3]);


const avengers = [
  {name: 'Tony Stark',
    jobTitle: 'Genius, billionaire,playboy, philanthropist'},
  {name: 'Thor',
    jobTitle: 'God of Hammers'},
  {name: 'Black Widow',
    jobTitle: 'Eye Candy'},
  {name: 'Clint Barton',
    jobTitle: 'Guy who shoots arrows'},
  {name: 'Ant Man',
    jobTitle: 'Paul Rudd'}
];

avengers.forEach(avenger => {
  console.log(`${avenger.name}: ${avenger.jobTitle}`);
});



