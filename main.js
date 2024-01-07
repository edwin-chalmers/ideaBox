const saveButton = document.querySelector('#saveButton'); 
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body')
const ideasDiv = document.getElementById('ideas')
var starIcon = document.querySelector('.star-icon')
var starActive = document.querySelector('.star-active')
var ideaObjectArray = []
var favObjectArray= []

saveButton.addEventListener("click", function () {
    var ideaObject = {
        title: titleInput.value,
        body: bodyInput.value,
        id: Date.now()
    }
    if (!titleInput.value || !bodyInput.value) {
        saveButton.classList.add('disabled')
    } else {
    saveButton.classList.remove('disabled')
    ideaObjectArray.push(ideaObject)
    insertCard(titleInput.value, bodyInput.value, Date.now())
    clearForm()
    }
})

titleInput.addEventListener('input', saveState);
bodyInput.addEventListener('input', saveState);
function saveState() {
    if (!titleInput.value || !bodyInput.value) {
    } else {
    saveButton.classList.remove('disabled')
    }
}

function insertCard(title, body, id) {
    ideasDiv.insertAdjacentHTML('afterbegin', 
    `<div class="idea-containers" id="${id}">
    <div class="purple-box">
        <img id="${id}" class="delete-icon" src="./assets/delete.svg" alt="delete-icon">
        <img id="${id}" class="star-icon" src="./assets/star.svg" alt="star-icon">
    </div> 
    <div class="title-body">
        <h3>Lorem Ipsum is simply dummy</h3>
        <p> Lorem Ipsum is simply dummy text of the printing Lorem Ipsu</p>
    </div>
    </div>`)
}

function clearForm() {
    titleInput.value = ''
    bodyInput.value = ''
    saveButton.classList.add('disabled')
}

///// ?????
ideasDiv.addEventListener("click", function(event) {
    var targetElement = event.target.closest('.delete-icon')
    
    if (targetElement) {
        var cardID = targetElement.getAttribute('id')
        deleteCard(cardID)
    }
})

function deleteCard(id) {
    var elementToRemove = document.getElementById(`${id}`)
    elementToRemove.remove()

}

ideasDiv.addEventListener("click", function(event) {
    var targetElement = event.target;
    
    if (targetElement.classList.contains('star-icon')) {
        var cardID = targetElement.getAttribute('id');
        favIdea(cardID, targetElement);
    }
});

function favIdea(cardID, starIcon) {
    var currentSrc = starIcon.getAttribute('src');

    var newSrc;
    if (currentSrc === './assets/star.svg') {
        newSrc = './assets/star-active.svg';
    } else {
        newSrc = './assets/star.svg';
    }

    starIcon.setAttribute('src', newSrc);

    // ... rest of your code ...
}