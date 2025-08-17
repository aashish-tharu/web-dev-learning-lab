let checkID = 0;

function deleteElement(ind) {
    let att = '#' + ind;
    console.log(att);
    document.querySelector(att).remove();
}

function addOperation() {
    let value = document.querySelector('.dataInput').value;

    //creating new list
    let newTask = document.createElement('li');
    newTask.id = 'checkBox'+checkID;

    //ceate new checkbox
    let newCheck = document.createElement('input');
    newCheck.type = 'checkbox';
    newCheck.id = 'history'+checkID;

    //create new label
    let newLabel = document.createElement('label');
    newLabel.setAttribute('for', 'history'+checkID);
    newLabel.id = 'history'+checkID;
    newLabel.innerText = value;

    //create new delete button for each
    let newBtn = document.createElement('button');
    newBtn.id = 'history'+checkID;
    let index = 'checkBox'+checkID;
    newBtn.setAttribute('onClick', `deleteElement('${index}')`);
    // newBtn.addEventListener('onClick', deleteElement(checkId));
    newBtn.innerText = 'Clear';

    newTask.append(newCheck);
    newTask.append(newLabel);
    newTask.append(newBtn);

    document.querySelector('.history').append(newTask);

    checkID++;

    let a = document.querySelector('.dataInput').value = '';
}

let toggle = document.querySelector('.toggle');

function displayM() {
    let displayMo = document.querySelector('body').style.backgroundColor;
    if (displayMo == 'wheat') {
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        let tog = document.querySelector('.toggle').innerText = 'Switch to white';
    } else {
        document.querySelector('body').style.backgroundColor = 'wheat';
        document.querySelector('body').style.color = 'black';
        let tog = document.querySelector('.toggle').innerText = 'Switch to dark';
    }
}

// toggle.addEventListener('onClick', 'displayMode');