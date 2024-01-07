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

// function adjustFontSize(element) {
//     var parentWidth = element.parentElement.offsetWidth;
//     var contentLength = element.textContent.length;

//     // Adjust these values as needed
//     var desiredWidthRatio = 0.9; // the ratio of content width to parent width
//     var baseFontSize = 25; // in pixels

//     var newFontSize = (parentWidth * desiredWidthRatio) / contentLength;
//     newFontSize = Math.min(Math.max(newFontSize, 15), baseFontSize, 25); // Setting min and max limits

//     element.style.fontSize = newFontSize + 'px';
// }

// // Adjust font sizes on load and resize
// window.onload = window.onresize = function() {
//     document.querySelectorAll('.title-body h3, .title-body p').forEach(adjustFontSize);
// };

titleInput.addEventListener('input', function() {
    var maxLength = this.getAttribute('maxlength');
    var currentLength = this.value.length;
    if (currentLength >= maxLength) {
        titleInput.classList.add('error');
    } else {
        titleInput.classList.remove('error');
    }
});

bodyInput.addEventListener('input', function() {
    var maxLength = this.getAttribute('maxlength');
    var currentLength = this.value.length;
    if (currentLength >= maxLength) {
        bodyInput.classList.add('error');
    } else {
        bodyInput.classList.remove('error');
    }
});