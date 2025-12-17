import getPeopleArrya from './serverRequest/getArrayPeople.js';
import getCallArray from './serverRequest/getArrayCall.js';
import getByName from './utils/searchByName.js';
import getByAge from './utils/searchByAge.js';
import rl from 'readline-sync';

async function app() {
  console.log('Wellcome agent');
  let appOn = true;
  while (appOn) {
    let choice;
    let checkChoice = true;
    while (checkChoice) {
      choice = rl.question(`-----MENU-----
        press 1 to get a list of people from server
        press 2 to get a list of call records from server
        press 3 to search people by name
        press 4 to search people by age
        press 5 to search dangerous people
        press 6 for Exit
        `);
      if (
        choice === '1' ||
        choice === '2' ||
        choice === '3' ||
        choice === '4' ||
        choice === '5' ||
        choice === '6'
      ) {
        checkChoice = false;
      } else {
        console.log('press only 1-6');
      }
    }
    switch (choice) {
      case '1':
        await getPeopleArrya();
        break;
      case '2':
        await getCallArray();
        break;
      case '3':
        const name = rl.question('Enter name: ');
        getByName(name);
        break;
      case '4':
        const age = rl.question('Enter age: ');
        getByAge(age);
        break;
      case '5':
        break;
      case '6':
        appOn = false;
        console.log('Exit');
    }
  }
}
app();
