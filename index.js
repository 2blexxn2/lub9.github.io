/* let userName = prompt("Введіть своє ім'я");
let userScore = 0;
let computerScore = 0;
let gameHistory = [];

let namePattern = /^[a-zA-Zа-яА-ЯёЁіІїЇґҐ'’]{2,30}$/;
if (!namePattern.test(userName)) {
    alert("Введено некоректне ім'я. Ім'я повинно складатися лише з букв і має бути від 2 до 30 символів.");
    userName = prompt("Введіть своє ім'я");
}


function generate() {
    let userNumber = Math.floor(Math.random() * 50) + 1;
    let computerNumber = Math.floor(Math.random() * 50) + 1;

    document.getElementById("userNumber").innerText = userNumber;
    document.getElementById("computerNumber").innerText = computerNumber;

    if (userNumber > computerNumber) {
        userScore++;
    } else if (computerNumber > userNumber) {
        computerScore++;
    }

    document.getElementById(
        "user"
    ).innerHTML = `<h2>${userName}</h2><p class="score">${userScore}</p><p id="userNumber">${userNumber}</p>`;
    document.getElementById(
        "computer"
    ).innerHTML = `<h2>Комп’ютер</h2><p class="score">${computerScore}</p><p id="computerNumber">${computerNumber}</p>`;

    if (userScore === 3 || computerScore === 3) {
        let winner = userScore === 3 ? `${userName}` : "Комп’ютер";
        gameHistory.push(winner); // додаємо переможця до історії
        let isConfirmed = window.confirm(`${winner} виграв! Натисніть OK, щоб почати нову гру.`);
        if (isConfirmed) {
            userScore = 0;
            computerScore = 0;
        }
    }
}

function showHistory() {
    alert(gameHistory.join('\n'));
}

// Додаємо addEventListener до кнопок
document.getElementById('generateButton').addEventListener('click', generate);
document.getElementById('historyButton').addEventListener('click', showHistory);

// Прив'язуємо функцію до клавіші Enter
document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        generate();
    }
}); */

/* let userName = prompt("Введіть своє ім'я"); */
let userScore = 0;
let computerScore = 0;
let gameHistory = [];

let namePattern = /^[a-zA-Zа-яА-ЯёЁіІїЇґҐ'’]{2,30}$/;
do {
    userName = prompt("Введіть своє ім'я");
    if (!namePattern.test(userName)) {
        alert("Введено некоректне ім'я. Ім'я повинно складатися лише з букв і має бути від 2 до 30 символів.");
    } else if (userName[0] !== userName[0].toUpperCase()) {
        alert("Ім'я повинно починатися з великої букви.");
    }
} while (!namePattern.test(userName) || userName[0] !== userName[0].toUpperCase());

function generate() {
    let userNumber = Math.floor(Math.random() * 50) + 1;
    let computerNumber = Math.floor(Math.random() * 50) + 1;

    document.getElementById("userNumber").innerText = userNumber;
    document.getElementById("computerNumber").innerText = computerNumber;

    if (userNumber > computerNumber) {
        userScore++;
    } else if (computerNumber > userNumber) {
        computerScore++;
    }

    document.getElementById(
        "user"
    ).innerHTML = `<h2>${userName}</h2><p class="score">${userScore}</p><p id="userNumber">${userNumber}</p>`;
    document.getElementById(
        "computer"
    ).innerHTML = `<h2>Комп’ютер</h2><p class="score">${computerScore}</p><p id="computerNumber">${computerNumber}</p>`;

    if (userScore === 3 || computerScore === 3) {
        let winner = userScore === 3 ? `${userName}` : "Комп’ютер";
        gameHistory.push(winner); 
        let isConfirmed = window.confirm(`${winner} виграв! Натисніть OK, щоб почати нову гру.`);
        if (isConfirmed) {
            userScore = 0;
            computerScore = 0;
        }
    }
}

function showHistory() {
    alert(gameHistory.join('\n'));
}

document.getElementById('generateButton').addEventListener('click', generate);
document.getElementById('historyButton').addEventListener('click', showHistory);

document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        generate();
    }
});