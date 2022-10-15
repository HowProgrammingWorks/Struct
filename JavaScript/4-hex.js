'use strict';

const fs = require('fs');

const v8File = './3-file.dat';
fs.readFile(v8File, (err, data) => {
  console.log(
    data
      .toString('hex')
      .toUpperCase()
      .split('')
      .map((c, i) => ((i % 2 !== 0) ? (c + ' ') : c))
      .join('')
  );
});
