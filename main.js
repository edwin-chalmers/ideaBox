var saveButton = document.querySelector('#saveButton'); 
var titleInput = document.querySelector('#title');
var bodyInput = document.querySelector('#body')

var ideaObjectArray = []


// saveButton.addEventListener("click", function () {
//     var ideaObject = {
//         title: titleInput.value,
//         body: bodyInput.value,
//         id: Date.now()
//     }
//     ideaObjectArray.push(ideaObject)
// })

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
    }
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

