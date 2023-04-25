const fs = require('fs');
const fileName = './data.json';
const file = require(fileName);

file.key = "new value";

function hello()
{
    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
      });
}
