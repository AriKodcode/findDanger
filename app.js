import getPeopleArrya from './serverRequest/getArrayPeople.js';
import getCallArray from './serverRequest/getArrayCall.js';
import getByName from './utils/searchByName.js';
import getByAge from './utils/searchByAge.js';
import rl from 'readline-sync';

function app() {
  console.log('Wellcome agent');
  let choice;
  let checkChoice = true;
  while (checkChoice) {
    choice = rl.question(`-----MENU-----
        press 1 to get a list of people from server
        press 2 to get a list of call records from server
        press 3 to search people by name
        press 4 to search people by age
        press 5 to search dangerous people`);
    if (
      choice === '1' ||
      choice === '2' ||
      choice === '3' ||
      choice === '4' ||
      choice === '5'
    ) {
      checkChoice = false;
    } else {
      console.log('press only 1-5');
    }
  }
}
