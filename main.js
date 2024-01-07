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
    `<div class="purple-box">
        <img id="${id}" class="delete-icon" src="./assets/delete.svg" alt="delete-icon">
        <img id="${id}" class="star-icon" src="./assets/star.svg" alt="star-icon">
        <img id="${id}" class="star-active" class="hidden" src="./assets/star-active.svg" alt="star-icon-active">
    </div> 
    <div class="title-body">
        <h3>${title}</h3>
        <p> ${body}</p>
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
    var targetElement = event.target.closest('.star-icon')
    
    if (targetElement) {
        var cardID = targetElement.getAttribute('id')
        favIdea(cardID)
        // favObjectArray.push(cardID)
        console.log(cardID)
    }
})

function favIdea(cardID) {
    var elementToFavorite = document.getElementById(`${cardID}`)
    // elementToFavorite.appendChild()
    
    if(starIcon.classList.contains('hidden')) {
        starIcon.classList.add('hidden')
        starActive.classList.remove('hidden')
    } else {
        starIcon.classList.remove('hidden')
        starActive.classList.add('hidden')
    }
}


    