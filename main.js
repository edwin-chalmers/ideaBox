const saveButton = document.querySelector('#saveButton'); 
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body')
const ideasDiv = document.getElementById('ideas')


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
            <img class="star-icon" src="./assets/star.svg" alt="star-icon">
        </div> 
        <div class="title-body">
            <h3>${title}</h3>
            <p> ${body}</p>
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

//when the star is clicked it should changed to the hidden orange star
//element and store it to an array(favObjectArray)