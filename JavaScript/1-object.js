'use strict';

const p1 = {
  name: 'Marcus',
  city: 'Roma',
  born: {
    day: 26,
    month: 4,
    year: 121,
  },
};

const date = `${p1.born.year}-${p1.born.month}-${p1.born.day}`;
console.log(`Name: ${p1.name}\nCity: ${p1.city}\nBorn: ${date}\n`);
