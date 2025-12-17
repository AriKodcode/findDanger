import fs from 'fs';
export default function findDangerousPeople() {
  let list;
  fs.readFile('../data/TRANSCRIPTIONS.json', 'utf-8', (err, data) => {
    if (err) {
      console.log('Error reading file');
    } else {
      list = JSON.parse(data);
      let res = [];
      let ages = new Set([]);
      for (let index = 0; index < list.length; index++) {
        ages.add(list[index]['age']);
      }
      ages = [...ages];
      for (let j = 0; j < ages.length; j++) {
        res.push({ [ages[j]]: [] });
      }
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
        if (numDengerous > 0) {
          for (let x = 0; x < res.length; x++) {
            let age = list[i]['age'];
            if (age in res[x]) {
              res[x].push(numDengerous);
            }
          }
        }
      }
      console.log(res);
    }
  });
}
findDangerousPeople();
