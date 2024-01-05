var saveButton = document.querySelector('#saveButton'); 
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body')

var ideaObjectArray = []

saveButton.addEventListener("click", function () {
    var ideaObject = {
        title: titleInput.id,
        body: bodyInput.id,
        id: Date.now()
    }
    ideaObjectArray.push(ideaObject)
})

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