let playerScore = 0; 
let botScore = 0;
const playerScore_span = document.getElementById("player-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getBotChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
;}

function win(playerChoice, botChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    botScore_span.innerHTML = botScore;
    result_p.innerHTML = `${convertToWord(playerChoice)} beats ${convertToWord(botChoice)}. You Win 🔥`;
    playerChoice_div.classList.add('green-glow');
    setTimeout(() => playerChoice_div.classList.remove('green-glow'), 400)
}

function lose(playerChoice, botChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    botScore++;
    playerScore_span.innerHTML = playerScore;
    botScore_span.innerHTML = botScore;
    result_p.innerHTML = `${convertToWord(playerChoice)} loses to ${convertToWord(botChoice)}. You Lost 🥺`;
    playerChoice_div.classList.add('red-glow');
    setTimeout(() => playerChoice_div.classList.remove('red-glow'), 400)

}

function draw(playerChoice, botChoice) {
    const playerChoice_div = document.getElementById(playerChoice);
    result_p.innerHTML = `${convertToWord(playerChoice)} tied with ${convertToWord(botChoice)}. Another Round 🤗`;
    playerChoice_div.classList.add('gray-glow');
    setTimeout(() => playerChoice_div.classList.remove('gray-glow'), 400)

}

function game(playerChoice) {
    const botChoice = getBotChoice();
    switch (playerChoice + botChoice) {
        case "rp":
        case "pr":
        case "sp":
            win(playerChoice, botChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, botChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, botChoice);
            break;
    }
}
rock_div.addEventListener('click', () => game("r"));
paper_div.addEventListener('click', () => game("p"));
scissors_div.addEventListener('click', () => game("s"));

main();
