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

/*
const characters = [
  {
    name: 'Gandalf the White',
    nickname: 'gandalf',
    race: 'Wizard',
    origin: 'Middle Earth',
    attack: 10,
    defense: 6,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
  },
  {
    name: 'Bilbo Baggins',
    nickname: 'bilbo',
    race: 'Hobbit',
    origin: 'The Shire',
    attack: 2,
    defense: 1,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
  },
  {
    name: 'Frodo Baggins',
    nickname: 'frodo',
    race: 'Hobbit',
    origin: 'The Shire',
    attack: 3,
    defense: 2,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
  },
  {
    name: 'Aragorn son of Arathorn',
    nickname: 'aragorn',
    race: 'Man',
    origin: 'Dunnedain',
    attack: 6,
    defense: 8,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
  },
  {
    name: 'Legolas',
    nickname: 'legolas',
    race: 'Elf',
    origin: 'Woodland Realm',
    attack: 8,
    defense: 5,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
  },
];
*/

///////////////CREATE CHARACTER.. FIGHT//////////
function createCharacter(name,nickname,race,origin,attack,defense,weapon){
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapon: weapon,
    describe: function(){
      if(this.weapon){
        console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`);
      } else {
        console.log(`${this.name} is a ${this.race} from ${this.origin}`);
      }
    },
    evaluateFight: function(character1,character2){
      if(character1.attack > character2.defense){
        console.log(` Your opponent takes ${character1.attack - character2.defense} damage and you receive 0 damage`);
      } if(character2.defense > character1.attack || character1.attack < character2.defense){
        console.log(`${character2.name} takes no damage`);
      }
    },
  };
}
const test1 = createCharacter('Gandalf the white','gandalf','wizard','middle earth', 10, 6, 'wizard staff');
///////////////wizard staff arguement for weapon parameter
const test2 = createCharacter('bilbo baggins','frodo','hobbit','the shire', 2, 1);

//test1.describe();
//test2.describe();

//test1.evaluateFight(test1,test2);

const character1 = createCharacter('Gandalf the white','gandalf','wizard','middle earth', 10, 6);
const character2 = createCharacter('bilbo baggins','frodo','hobbit','the shire', 2, 1);
const character3 = createCharacter('frodo baggins','frodo','hobbit','the shire', 3, 2);
const character4 = createCharacter('aragorn son of arathorn','aragorn','man','dunnedain', 6, 8);
const character5 = createCharacter('legolas','logolas','elf','woodland realm', 8, 5);
const character6 = createCharacter('javi','the great','man','murica', 10, 10);



let characters = [];
characters.push(character1,character2,character3,character4,character5,character6);
//console.log(characters);

/*
function findMe(nickname){
  return nickname.nickname === 'aragorn';
}
console.log(characters.find(findMe));
*/

let result = characters.find(({nickname}) => nickname === 'aragorn');
//console.log(result);

let hobbits = characters.filter(char => char.race === 'hobbit');
//console.log(hobbits);

let above5 = characters.filter(char => char.attack > 5);
//console.log(above5);





//////////////'TOP OF PROGRAM'//////////// 'BONUS: A DATABASE SEARCH'
const heroes = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];


function findOne(arr,query){//query => object
  let inputs = Object.keys(query);
  let arrKeys = [];

  arr.forEach(el => arrKeys.push(Object.keys(el)));
  //console.log(arrKeys[0][2]);
  //console.log(inputs);

  ///////so far so good, can pass in just id or both id and name and works ///search
  for(let i = 0; i < arr.length; i++){
    for(let prop in arrKeys){
      if(arrKeys[prop].includes(inputs[0]) && arrKeys[prop].includes(inputs[1]) && arrKeys[prop].includes(inputs[2])){
        //console.log('found id, name and squad')
        if(arr[i].id === query.id && arr[i].name === query.name && arr[i].squad === query.squad){
          console.log('found id ,name and squad');
          console.log(arr[i]);
          return arr[i];
        }
      } else if(arrKeys[prop].includes(inputs[0]) && arrKeys[prop].includes(inputs[1]) ){
      //console.log('found id and name')
        if(arr[i].id === query.id && arr[i].name === query.name){
          //console.log('found id and name')
          console.log(arr[i]);
          return arr[i];
        }
      }
    }

  }
  
}
///////////id: 1 => name: 'captain america, id:2 => name: 'iron man'
findOne(heroes,{ id: 2, name: 'Iron Man',} );
//characters.find(({nickname}) => nickname === 'aragorn');