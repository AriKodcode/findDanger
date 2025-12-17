import fs from 'fs';
export default async function getPeopleArrya() {
  try {
    const res = await fetch('https://spiestestserver.onrender.com/people');
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.text();
    fs.writeFile('../data/PEOPLE.json', data, 'utf-8', (err) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log('File written successfully');
      }
    });
  } catch (error) {
    console.error(error.message);
  }
}
