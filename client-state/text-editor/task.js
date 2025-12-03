const editor = document.getElementById('editor');
const card = document.querySelector('.card');
const btn = document.createElement('button');
btn.textContent = 'Очистить содержимое';
card.appendChild(btn);

btn.addEventListener('click', function(){
    editor.value = '';
    localStorage.removeItem('editor');
})
editor.addEventListener('input', saveText)

window.addEventListener('load', loadText)

function loadText(){
    const savedText = localStorage.getItem('editor');
        editor.value = savedText;
}

function saveText(){
    localStorage.setItem('editor',editor.value);
}
