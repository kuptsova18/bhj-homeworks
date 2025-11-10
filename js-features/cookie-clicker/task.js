
const counter = document.getElementById("clicker__counter");
const speedCounter = document.getElementById('clicker__counter__speed');
const imgCookie = document.getElementById("cookie");
let bigImage = true;
let lastClickTime = null;
imgCookie.onclick = function () {
    const currentTime = new Date();
    counter.textContent = parseInt(counter.textContent) + 1;
    if (lastClickTime!== null) {
        const timeDiff = (currentTime - lastClickTime) / 1000;
        const cliskSpeed = 1 / timeDiff;
        speedCounter.textContent = cliskSpeed.toFixed(2);
    }
    lastClickTime = currentTime;
    if (bigImage) {
        // Уменьшаем печеньку
        imgCookie.style.width = '200px';
        imgCookie.style.height = 'auto';
    } else {
        // Увеличиваем печеньку
        imgCookie.style.width = '220px';
        imgCookie.style.height = 'auto';
    }
    
    bigImage = !bigImage;
}

