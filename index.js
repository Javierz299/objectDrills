'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return ((loaf.water / loaf.flour) * 100);
  },
};

console.log(loaf.hydration());



const rickRolled = {
  foo: 'Never',
  bar: 'Gonna',
  fum: 'Give',
  quux: 'You',
  spam: 'Up',
};

for(let prop in rickRolled){
  console.log(`${prop}: ${rickRolled[prop]},`);
}


