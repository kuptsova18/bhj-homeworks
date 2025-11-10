function getHole(index) {
    return document.getElementById(`hole${index}`);
}
const deadCount = document.getElementById("dead");//количество убитых кротов
const lostCount = document.getElementById("lost");//количество промахов
let dead = 0;
let lost = 0;

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i); // получим лунку по индексу
    hole.onclick = function () {
        if (this.classList.contains('hole_has-mole')) {
            dead++;
            deadCount.textContent = dead;
            if (dead === 10) {
                alert('Поздравляем! Вы победили!');
                resetGame();
            }
        } else {
            lost++;
            lostCount.textContent = lost;
            if (lost === 5) {
                alert('Игра окончена! Вы проиграли!');
                resetGame();
            }
        }
    }
}

function resetGame() {
    dead = 0;
    lost = 0;
    deadCount.textContent = 0;
    lostCount.textContent = 0;
}