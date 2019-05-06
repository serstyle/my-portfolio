const card = document.getElementById('card-project1')
const card2 = document.getElementById('card-project2')
const card3 = document.getElementById('card-project3')


const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');

class Modal{ //no need of that it s just to make it more readable
  constructor(github, description){
    this.github = github;
    this.description = description
  }
}

const github1 = 'https://github.com/serstyle/book_friend'
const description1 = 
`
 <p>The website let users create a secure account and search books into the Google books API to add it in their own book lists. There is a possibility to let reviews on each books.
 The user can also follow others users and see their book lists and last reviews.</p>
 <p>For a test account you can take test@test as email and test as password but you can also create your own account.</p>
`

const book_friend = new Modal(github1, description1)


const github2 = 'https://github.com/serstyle/weather-app'
const description2 = 
`
A simple web app which let users search for the weather of a city. They can also create an account with the city of their 
choice and it would show the weather of this city.

The front end is deploy on netlify and the back end on heroku.
`

const weather_app = new Modal(github2, description2)

const github3 = "https://github.com/serstyle/smart-brain-ts"
const description3 = 
`
It's a project from an online course I add typescript and change the design, with that course's project I learnt how to use React, Typescript, Docker, JWT.
A web app with clarifai api to detect face on photo you publish with secure authentication (bcrypt and jwt) and profile. The front end is deploy on netlify and the back end on heroku.
`

const face_recognize = new Modal(github3, description3)

// Events
//could pass github1 and description1 instead of the object but I find it more readable like that
card.addEventListener('click', (event)=>openModal(event, book_friend.github, book_friend.description)); 
card2.addEventListener('click', (event)=>openModal(event, weather_app.github, weather_app.description));
card3.addEventListener('click', (event)=>openModal(event, face_recognize.github, face_recognize.description));
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
window.addEventListener('mousewheel', closeModal);
window.addEventListener('touchmove', closeModal);

// Open
function openModal(e, github, description) {
    if(e.target.tagName == "DIV" || e.target.tagName == "H3"){
        return null
    }
    e.preventDefault();
    const title = e.path[1].firstElementChild.innerText;
    const live = e.path[1].firstElementChild.href;

    const header = document.getElementsByClassName('modal-title')
    const body = document.getElementsByClassName('modal-description')
    
    header[0].textContent = title;
    body[0].innerHTML = description;

    const modalLive = document.getElementsByClassName('modal-live');
    modalLive[0].outerHTML = `<a class='modal-live' href=${live}>See it in Live</a>`

    const modalGithub = document.getElementsByClassName('modal-github');
    modalGithub[0].outerHTML = `<a class='modal-github' href=${github}>See it on Github</a>`

    modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
