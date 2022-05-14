let list = document.querySelector('#list');
let text = document.querySelector('#input')
let button = document.querySelector('#submit');
let edit = document.querySelector('#edit');

button.addEventListener('click' , () => {
    var para = document.createElement('li');
    para.innerText = text.value;
    list.appendChild(para);
    var editButton = document.createElement('button');
    editButton.innerText = "edit";
    list.appendChild(editButton)
    text.value = "";
    para.addEventListener('click', () => {
        para.style.textDecoration = "line-through"
    })
    editButton.addEventListener('click', (event)=> {
        let x = editButton.previousElementSibling;
        x.contentEditable = true;
        x.style.backgroundColor = "#ffed44"

    });
    editButton.addEventListener('dblclick', (event)=> {
        let x = editButton.previousElementSibling;
        x.contentEditable = false;
        x.style.backgroundColor = "#ffe4c4"
        para.style.textDecoration = ""
    });
    para.addEventListener('dblclick', ()=>{
        list.removeChild(para);
        list.removeChild(editButton);
    })
});


