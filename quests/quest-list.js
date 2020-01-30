import adventures from '../data/adventure-data.js';
// import { gigs } from '../data/adventure-data.js';

const questList = document.getElementById('quest-list');
const questOne = document.getElementById('quest-1');

// this is grabbing data within the object within etc.
// console.log(adventures.firstShow.title);

const firstAdventure = adventures.firstShow;
// creating a function or a for loop for doing this would be more efficient, try and refactor to that after.
questOne.textContent = firstAdventure.title;
questOne.href = '../quest/?id=' + firstAdventure.id;




