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
    //console.log(`${avenger.name}, ${avenger.jobTitle},reports to ${avenger.boss}`);
  } else {
    //console.log(`${avenger.name}, ${avenger.jobTitle}, doesn\'t report to anybody`);
  }
});



//////////CRACKING THE CODE..... 
function decode(encode){
  const decoder = {
    a:2,
    b:3,
    c:4,
    d:5,
    space: ' ',
  };
  const cracked = [];
  
  let words = encode.split(' ');
  //console.log(words);
  
  
  for(let i = 0; i < words.length; i++){
    for(let prop in decoder){
      //console.log(prop);
      //console.log(words[i].slice(0,1));
      if(words[i].slice(0,1) === prop){
        //console.log('found a match');
        cracked.push(words[i][decoder[prop] - 1]);
      } if(words[i].slice(0,1) !== prop){
        cracked.push([decoder['space']]);
      }
    }
  }
  
  //console.log(cracked.join(''));
  //return cracked.join('');
}
let codedMessage = 'craft block argon meter bells brown croon droop';
decode(codedMessage);


const characters = [
  {
    name: 'Gandalf the White',
    nickname: 'gandalf',
    race: 'Wizard',
    origin: 'Middle Earth',
    attack: 10,
    defense: 6,
  },
  {
    name: 'Bilbo Baggins',
    nickname: 'bilbo',
    race: 'Hobbit',
    origin: 'The Shire',
    attack: 2,
    defense: 1,
  },
  {
    name: 'Frodo Baggins',
    nickname: 'frodo',
    race: 'Hobbit',
    origin: 'The Shire',
    attack: 3,
    defense: 2,
  },
  {
    name: 'Aragorn son of Arathorn',
    nickname: 'aragorn',
    race: 'Man',
    origin: 'Dunnedain',
    attack: 6,
    defense: 8,
  },
  {
    name: 'Legolas',
    nickname: 'legolas',
    race: 'Elf',
    origin: 'Woodland Realm',
    attack: 8,
    defense: 5,
  },
];

function createCharacter(name,nickname,race,origin,attack,defense){
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight: function(){
      if(createCharacter.attack > createCharacter.defense){
        return `Your oppent takes ${this.attack - this.defense} and you receive 0 damage`;
      }
    },
  };
}

const character1 = createCharacter('Gandalf','the great','wizard','the hills', 10, 6);
const character2 = createCharacter('frodo baggins','frodo','hobbit','the shire', 2, 1);

character1.describe();
character2.describe();

