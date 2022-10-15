'use strict';

const v8 = require('node:v8');
const fs = require('node:fs');

class DateStruct {
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

const p1 = new Person('Marcus', 'Roma', new DateStruct(121, 4, 26));

const v8Data = v8.serialize(p1);
const v8File = './3-file.dat';
fs.writeFile(v8File, v8Data, () => {
  console.log('Saved ' + v8File);
});
