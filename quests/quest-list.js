import adventures from '../data/adventure-data.js';
// import { gigs } from '../data/adventure-data.js';

const questList = document.getElementById('quest-list');
const questOne = document.getElementById('quest-1');

// this is grabbing data within the object within etc.
// console.log(adventures.firstShow.title);




// THIS IS A HARD CODE LESS EFFICIENT WAY TO DISPLAY THE QUESTS
// const firstAdventure = adventures.firstShow;
// questOne.textContent = firstAdventure.title;
// questOne.href = '../quest/?id=' + firstAdventure.id;

// this turns a hash map into an array so adventuresArray is now an array of all the object values of adventures
const adventuresArray = Object.values(adventures);

//dynamically rendering the list of object quests and creating a list element within them
adventuresArray.forEach((quest) => {
    const questLi = document.createElement('li');
    const questUrl = document.createElement('a');
    questUrl.href = `../detail/?id=${quest.id}`;
    questUrl.textContent = quest.title;
    questLi.appendChild(questUrl);
    questList.appendChild(questLi);
});



