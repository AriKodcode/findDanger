import fs from 'fs';
export default function getByName(name) {
  let list;
  fs.readFile('../data/PEOPLE.json', 'utf-8', (err, data) => {
    if (err) {
      console.log('Error reading file');
    } else {
      list = JSON.parse(data);
      let found = false;
      for (let i = 0; i < list.length; i++) {
        if (list[i]['name'] === name) {
          found = true;
          console.log(list[i]);
        }
      }
      if (!found) {
        console.log('name not found');
      }
    }
  });
}
