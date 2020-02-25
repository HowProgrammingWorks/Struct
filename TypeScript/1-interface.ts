interface IDate {
  day: number;
  month: number;
  year: number;
}

interface IPerson {
  name: string;
  city: string;
  born: IDate;
}

// Usage

const p1: IPerson = {
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
