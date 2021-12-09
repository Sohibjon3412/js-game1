const elChoices = document.querySelectorAll('.choice'),
      score = document.querySelector('#score'),
      modal = document.querySelector('.modal'),
      result = document.querySelector('#result'),
      restart = document.querySelector('#restart'),
      scoreBoard = {
        player: 0,
        computer: 0
      };

function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

function getComputerChoice() {
  const rand = Math.random()*3;
  if (rand < 1) {
    return 'rock';
  } else if (rand <= 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
  
}

// Get game winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player';
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'player') {
    scoreBoard.player++;
    result.innerHTML = `
      <h1 class="text-win">Siz yutdingiz</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)+"ni"}</strong> tanladi</p>
    `;
  } else if (winner === 'computer') {
    scoreBoard.computer++;
    result.innerHTML = `
      <h1 class="text-lose">Siz Yutqazdingiz</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)+"ni"}</strong> tanladi</p>
    `;
  } else {
    result.innerHTML = `
      <h1>Teng</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)+"ni"}</strong> tanladi</p>
    `;
  }
  score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Computer: ${scoreBoard.computer}</p>
    `;
  modal.style.display = 'block';
}

function restartGame() {
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
elChoices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);



