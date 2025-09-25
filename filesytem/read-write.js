import fs from 'fs';

const path = './inventors.json';

let data = fs.readFileSync(path, 'utf-8');

// muy importante, casi todos los backends la usan
let inventors = JSON.parse(data);

inventors.push({
  first: "Pablo",
  last: "Fernandez",
  year: 2024
});

fs.writeFileSync(path, JSON.stringify(inventors, null, " "), 'utf-8');

console.log(inventors);


