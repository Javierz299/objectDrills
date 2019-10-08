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

/////////PHASE 1//////////
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
  //console.log(`${avenger.name}: ${avenger.jobTitle}`);
});


//////////PHASE 2//////////
const avengers2 = [
  {name: 'Tony Stark',
    jobTitle: 'Genius, billionaire,playboy, philanthropist'},
  {name: 'Thor',
    jobTitle: 'God of Hammers',
    boss: 'Tony Stark'},
  {name: 'Black Widow',
    jobTitle: 'Eye Candy',
    boss: 'Tony Stark'},
  {name: 'Clint Barton',
    jobTitle: 'Guy who shoots arrows',
    boss: 'Tony Stark'},
  {name: 'Ant Man',
    jobTitle: 'Paul Rudd',
    boss: 'Tony Stark'}
];
  
avengers2.forEach(avenger => {
  if(avenger.boss){
    console.log(`${avenger.name}, ${avenger.jobTitle},reports to ${avenger.boss}`);
  } else {
    console.log(`${avenger.name}, ${avenger.jobTitle}, doesn\'t report to anybody`);
  }
});



