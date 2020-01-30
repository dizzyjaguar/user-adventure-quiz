import makeUser from './create-user.js';
import { saveUser } from '../data/user-storage.js';


const loginForm = document.getElementById('login-form');


//const usernameBtn = document.getElementById('create-username');


// the actual html form has the event listener attached to it, the button within the <form><button></form> is automatically recognized as trigger 'submit' because the button tag lives inside the form tag.  This is why we only need to get the form by id because the button is inside the form and defaults to providing the submit
loginForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const loginFormData = new FormData(loginForm);

    const user = makeUser(loginFormData);

    saveUser(user);

    // now need to redirect to another window location
    // window.location = 'quests';
})