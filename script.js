let button = document.querySelector('#enter');
let input = document.querySelector('#userinput');
let list = document.querySelector('#todoList');

function getInputLength() {
    return input.value.length;
}

function reduceInputLength() {
    if (input.value.length > 60) {
        input.value = input.value.slice(0, 57) + '...';
    }
    return input;
}

/* Creating a list element with added delete button and checkbox */
function createListElement() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let divLeft = document.createElement('div');
    let divCenter = document.createElement('div');
    let divRight = document.createElement('div');
    divLeft.classList.add('insideLiLeft');
    divCenter.classList.add('insideLiCenter');
    divRight.classList.add('insideLiRight');
    reduceInputLength();
    divCenter.appendChild(document.createTextNode(input.value));
    divCenter.addEventListener('click', () => divCenter.classList.toggle('done'));
    divRight.appendChild(createDeleteButton());
    list.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(divLeft);
    li.appendChild(divCenter);
    li.appendChild(divRight);
    input.value = '';
}


function createDeleteButton() {
    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('X'));
    deleteButton.addEventListener('click', function () {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    });
    deleteButton.classList.add('deleteBtn');
    return deleteButton;
}

function addListAfterClick() {
    if (getInputLength() !== 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (getInputLength() !== 0 && event.key === 'Enter') {
        createListElement();
    }
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);


