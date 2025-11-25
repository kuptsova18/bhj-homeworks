const inputText = document.getElementById("task__input");
const inputBtn = document.getElementById("tasks__add");
const taskLists = document.getElementById("tasks__list");
const STORAGE_KEY = 'myTasks';


function loadTask() {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    if (savedTasks) {
        try {
            const tasks = JSON.parse(savedTasks);
            tasks.forEach(element => {
                addTask(element);
            });
        } catch (error) {
            console.error('Ошибка при загрузке задач:', error);
            localStorage.removeItem(STORAGE_KEY);
        }
    }
}

function saveTasks() {
    const tasksElements = document.querySelectorAll('.task__title');
    const tasksArray = Array.from(tasksElements).map(element => element.textContent); // Извлекаем текст
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasksArray));
}


inputBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask(inputText.value.trim());
})


function addTask(content) {
    if (!content) return;
    taskLists.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${content}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
`   );

    /*const divTask = document.createElement('div');
    divTask.className = 'task';
    const div = document.createElement('div');
    div.textContent = content;
    div.className = 'task__title';

    const a = document.createElement('a');
    a.className = 'task__remove';
    a.innerHTML = '&times;';
    a.href = '#';*/
    const tagsA = taskLists.querySelector('.task__remove');
    console.log(tagsA);
    tagsA.addEventListener('click', function (event) {
            event.preventDefault();
            const tagDiv = taskLists.querySelector('.task');
            tagDiv.remove();
            saveTasks();
        });
    //метод для удаления задач

    /*divTask.appendChild(div);
    divTask.appendChild(a);
    taskLists.appendChild(divTask);*/
    saveTasks();
    inputText.value = '';
}
loadTask();