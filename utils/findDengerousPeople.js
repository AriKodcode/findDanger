import fs from 'fs';
export default function findDangerousPeople() {
  let list;
  fs.readFile('../data/TRANSCRIPTIONS.json', 'utf-8', (err, data) => {
    if (err) {
      console.log('Error reading file');
    } else {
      list = JSON.parse(data);
      let res = [];
      for (let i = 0; i < list.length; i++) {
        let numDengerous = 0;
        let contentList = list[i]['content'].split(' ');
        for (let word = 0; word < contentList.length; word++) {
          if (
            contentList[word].toLowerCase() === 'death' ||
            contentList[word].toLowerCase() === 'knife' ||
            contentList[word].toLowerCase() === 'bomb' ||
            contentList[word].toLowerCase() === 'attack'
          ) {
            numDengerous++;
          }
        }
        if (!res[list[i]['age']]) {
          let age = list[i]['age'];
          res.push({ age: [numDengerous] });
          console.log(res);
        }
      }
    }
  });
}
findDangerousPeople();
