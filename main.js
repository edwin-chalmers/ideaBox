var saveButton = document.querySelector('#saveButton'); 
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body')
var ideasDiv = document.getElementById('ideas')

var ideaObjectArray = []

saveButton.addEventListener("click", function () {
    var ideaObject = {
        title: titleInput.value,
        body: bodyInput.value,
        id: Date.now()
    }
    if (!titleInput.value || !bodyInput.value) {
        alert(`Please fill out both forms!`)
    } else {
    ideaObjectArray.push(ideaObject)
    insertCard(titleInput.value, bodyInput.value)
    }
})

function insertCard(title, body) {
    ideasDiv.insertAdjacentHTML('afterbegin', 
        `<div class="idea-containers">
        <h3>${title}</h3>
        <p> ${body}</p>
        </div>`)
}




function saveIdea (title,body) {
    var title = titleInput.value
    var body = bodyInput.value 
    if (title && body){
        var ideaObject = {
            title: title,
            body: body,
            id: Date.now()
        }
        ideaObjectArray.push(ideaObject)
    }
}

