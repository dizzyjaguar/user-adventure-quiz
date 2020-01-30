import adventures from '../data/adventure-data.js';
// import { gigs } from '../data/adventure-data.js';

const questList = document.getElementById('quest-list');
const questOne = document.getElementById('quest-1');

// this is grabbing data within the object within etc.
// console.log(adventures.firstShow.title);

const firstAdventure = adventures.firstShow;

questOne.textContent = firstAdventure.title;




