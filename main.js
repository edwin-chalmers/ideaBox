const saveButton = document.querySelector('#saveButton'); 
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body')
const ideasDiv = document.getElementById('ideas')
const showIdeasButton = document.querySelector('#show-ideas')
var starIcon = document.querySelector('.star-icon')
var starActive = document.querySelector('.star-active')
var ideaObjectArray = []

saveButton.addEventListener("click", function() {
    var ideaObject = {
        title: titleInput.value,
        body: bodyInput.value,
        id: Date.now(),
        isFavorite: false
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

function insertCard(title, body, id, isFavorite) {
    ideasDiv.insertAdjacentHTML('afterbegin', 
    `<div class="idea-containers" id="${id}" isFavorite="${isFavorite}">
    <div class="purple-box">
        <img id="${id}" class="delete-icon" src="./assets/delete.svg" alt="delete-icon">
        <img id="${id}" class="star-icon" src="./assets/star.svg" alt="star-icon">
    </div> 
    <div class="title-body">
        <h3>${title}</h3>
        <p>${body}</p>
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
        deleteIdeaObjectArray(cardID,)
    }
})

function deleteCard(id) {
    var elementToRemove = document.getElementById(`${id}`)
    elementToRemove.remove()
}

function deleteIdeaObjectArray(cardID) {
    for (let i = 0; i < ideaObjectArray.length; i++) {
        if (ideaObjectArray[i].id == cardID) {
            ideaObjectArray.splice(i, 1);
        }
    }
}

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

ideasDiv.addEventListener("click", function(event) {
    var targetElement = event.target;
    
    if (targetElement.classList.contains('star-icon')) {
        var cardID = targetElement.getAttribute('id');
        favIdea(cardID, targetElement);
    }
});

function favIdea(cardID, starIcon) {
    var currentSrc = starIcon.getAttribute('src');
    var newSrc, isFavorite;

    if (currentSrc === './assets/star.svg') {
        newSrc = './assets/star-active.svg';
        isFavorite = true;
    } else {
        newSrc = './assets/star.svg';
        isFavorite = false;
    }

    starIcon.setAttribute('src', newSrc);

    var ideaContainer = document.getElementById(cardID); // Get the parent .idea-containers element
    ideaContainer.setAttribute('isFavorite', isFavorite); // Update the isFavorite attribute of the ideaContainer
    favoriteIdeaObjectArray(cardID, isFavorite); // Update the ideaObject in the array
}

function favoriteIdeaObjectArray(cardID, isFavorite) {
    // Find the ideaObject in the array and update its isFavorite property
    ideaObjectArray.forEach(function(idea) {
        if (idea.id == cardID) {
            idea.isFavorite = isFavorite;
        }
    });
}

showIdeasButton.addEventListener("click", function() {
    if (showIdeasButton.innerText === "Show Starred Ideas") {
        showIdeasButton.innerText = "Show All Ideas"
        // activate Show Starred Ideas function
    } else {
        showIdeasButton.innerText = "Show Starred Ideas"
        // activate Show Starred All function
    }
})

