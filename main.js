var saveButton = document.querySelector('#saveButton'); 
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body')

saveButton.addEventListener("click", function () {
    var ideaObject = {
        title: titleInput.id,
        body: bodyInput.id,
        id: Date.now()
    }
    console.log(ideaObject)
})