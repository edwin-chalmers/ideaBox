const saveButton = document.querySelector('#saveButton'); 
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body')
const ideasDiv = document.getElementById('ideas')

var ideaObjectArray = []

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
    insertCard(titleInput.value, bodyInput.value)
    clearForm()
    }
})

titleInput.addEventListener('input', saveState);
bodyInput.addEventListener('input', saveState);
function saveState() {
    if (!titleInput.value || !bodyInput.value) {
        // saveButton.classList.add('disabled')
    } else {
    saveButton.classList.remove('disabled')
    }
}

function insertCard(title, body) {
    ideasDiv.insertAdjacentHTML('afterbegin', 
        `<div class="idea-containers">
        <h3>${title}</h3>
        <p> ${body}</p>
        </div>`)
}

function clearForm() {
    titleInput.value = ''
    bodyInput.value = ''
    saveButton.classList.add('disabled')
}



