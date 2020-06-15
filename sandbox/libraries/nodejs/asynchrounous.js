const fs = require('fs');
const util = require('util');

// sync pattern

const data = fs.readFileSync(__filename);

console.log('File data is', data);

console.log('TEST');

// cb pattern

fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});

console.log('TEST');

// cb nesting

fs.readFile(__filename, function cb1(err, data) {
  fs.writeFile(__filename + '.copy', data, function cb2(err) {
    // Nest more callbacks here...
  });
});

console.log('TEST');

// promisify

const readFile = util.promisify(fs.readFile);

async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');

// fs-promises

/*
const { readFile } = require('fs').promises;

async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');
*/

// promise-nesting

/*
const fs = require('fs').promises;

async function main() {
  const data = await fs.readFile(__filename);
  await fs.writeFile(__filename + '.copy', data);
  // More awaits here...
}

main();
console.log('TEST');
*/