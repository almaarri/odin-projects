function computerPlay(){
    let rand = Math.floor(Math.random()*3)+1;
    switch(rand){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;}//switch
}

function playRound(playerSelection,computerSelection){
    if (playerSelection == "rock" && computerSelection == "rock")
        return "Draw! You both chose rock."
    else if (playerSelection == "paper" && computerSelection == "paper")
        return "Draw! You both chose paper."
    else if (playerSelection == "scissors" && computerSelection == "scissors")
        return "Draw! You both chose scissors."
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return "You lose! Paper beats rock."}
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        return "You lose! Scissors beats paper."}
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        return "You win! Paper beats rock."}
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        return "You lose! Rock beats scissors."}
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        return "You win! Scissors beats paper."}
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        return "You win! Rock beats scissors."}
}//playRound

//global vars to track score
playerScore = 0;
computerScore = 0;

function game(playerSelection){
    //create div to express game results
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

    //set up round
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    result += " Your score: " + playerScore + " Computer score: " + computerScore;
    if (computerScore == 5)
        result += " Computer wins!!";
    if (playerScore == 5)
        result += " You win!!"

    //print results and score
    content.textContent = result;
}//game


const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', function(){game("rock")});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', function(){game("paper")});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', function(){game("scissors")});