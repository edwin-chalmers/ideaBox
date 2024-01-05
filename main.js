var saveButton = document.querySelector('#saveButton'); 
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body')

var ideaObjectArray = []


saveButton.addEventListener("click", function () {
    var ideaObject = {
        title: titleInput.value,
        body: bodyInput.value,
        id: Date.now()
    }
    ideaObjectArray.push(ideaObject)
})

// we click the save button
// the save button takes the value of the title and body and saves them to ideaObjectArray

//when we click the save button
// 


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