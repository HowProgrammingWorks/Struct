'use strict';

class Date {
  constructor(year, month, day) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

class Person {
  constructor(name, city, born) {
    this.name = name;
    this.city = city;
    this.born = born;
  }
}

// Usage

const p1 = new Person('Marcus', 'Roma', new Date(121, 4, 26));

const date = `${p1.born.year}-${p1.born.month}-${p1.born.day}`;
console.log(`Name: ${p1.name}\nCity: ${p1.city}\nBorn: ${date}\n`);
