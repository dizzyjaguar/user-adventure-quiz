import adventures from '../data/adventure-data.js';
import findById from '../utils/find-by-id.js';
import { getUser, saveUser } from '../data/user-storage.js';

// i need more clarification on what this does
const searchParams = new URLSearchParams(window.location.search);
// this is getting the /?id=_______ part of the url
const questId = searchParams.get('id');
// trying the match the url id with the quest objects id
// NEEDED TO TURN THE OBJECT OBJECT DATA INTO AN ARRAY BEFORE FINDBYID WOULD WORK
const adventuresArray = Object.values(adventures);
const quest = findById(adventuresArray, questId);
console.log(quest);

// this is if there is not quest left then it defaults back to the quest list
// if (!quest) {
//     window.location = '../quests/quest-list.html';
// }

//get all the html elements that will dynamically render the content

const detailTitle = document.getElementById('detail-title');
const detailLocation = document.getElementById('detail-location');
const detailImg = document.getElementById('detail-img');
const detailStory = document.getElementById('detail-storyline');
const choicesForm = document.getElementById('choices-form');
const choices = document.getElementById('choices');

detailTitle.textContent = quest.title;
detailLocation.textContent = quest.location;
detailImg.src = quest.image;
detailStory.textContent = quest.storyline;