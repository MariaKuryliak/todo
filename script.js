'use strict';

const getBySel = selector => document.querySelector(selector);

let inNewItem = true;
let editNode;

function deleteLi(event) {
    event.target.parentElement.remove();
}

function editLi(event) {
    getBySel('#input').focus();
    getBySel('#input').value = event.target.parentElement.firstElementChild.textContent;
    editNode = event.target;
    inNewItem = false;
}

// const eventHadle = 
const createLi = () => {

    if (inNewItem) {
        const li = document.createElement('li');
        // Text
        const textElement = document.createElement('p');
        textElement.textContent = getBySel('#input').value;
        li.appendChild(textElement);
        // Edit
        const editElement = document.createElement('p');
        editElement.textContent = 'edit';
        editElement.setAttribute('class', 'edit');


        // Delete
        const deleteElement = document.createElement('p');
        deleteElement.setAttribute('class', 'delete');
        deleteElement.textContent = 'X';

        li.appendChild(editElement);
        li.appendChild(deleteElement);

        editElement.setAttribute('onclick', 'editLi(event)');
        deleteElement.setAttribute('onclick', 'deleteLi(event)');

        getBySel('#list').appendChild(li);
        getBySel('#input').value = '';
    } else {
        if (editNode) {
            editNode.parentElement.firstElementChild.textContent = getBySel('#input').value;
            getBySel('#input').value = '';
            inNewItem = true;
        }
    }

}


getBySel('#input').addEventListener('keyup', (event) => {
    if (getBySel('#input').value.trim() && event.key === 'Enter') {
        createLi();
    }
});

getBySel('#add_todo').addEventListener('click', (event) => {
    console.log('asdads');

    if (getBySel('#input').value.trim()) {
        createLi();
    }
})