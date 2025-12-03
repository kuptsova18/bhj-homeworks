const signinForm = document.getElementById('signin__form');
const nameUser = document.getElementsByName('login')[0];
const passwordUser = document.getElementsByName('password')[0];
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userIdText = document.getElementById('user_id');

const btn = document.createElement('button');
btn.textContent = "Выйти";
welcome.appendChild(btn);
btn.addEventListener('click', function () {
    localStorage.removeItem('user_id');
    showAuth();
    clearInputs();
})

signinForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
        if (xhr.status === 200 || xhr.status === 201) {
            const response = xhr.responseText;
            if (response && response.success) {
                localStorage.setItem('user_id', response.user_id);
                showWelcome(response.user_id);
                clearInputs();
            } else {
                alert('Неверный логин/пароль');
                clearInputs();
            }
        } else {
            alert('Ошибка сервера. Попробуйте позже.');
            console.error('Ошибка:', xhr.status, xhr.statusText);
        }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    const formData = new FormData(signinForm);
    xhr.send(formData);

})

document.addEventListener('DOMContentLoaded', function () {
    const UserId = localStorage.getItem('user_id');
    showWelcome(UserId);
})

function clearInputs() {
    signinForm.reset();
}

function showWelcome(UserIdSpan) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userIdText.textContent = UserIdSpan;
}


function showAuth(UserIdSpan) {
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
    userIdText.textContent = UserIdSpan;
}