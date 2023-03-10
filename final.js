let scores = {
    score1: 0,
    score2: 0
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.querySelector('#btn1');
    const btn2 = document.querySelector('#btn2');
    const btn3 = document.querySelector('#btn3');
  
    function getComputerChoice() {
      const choice=['rock', 'paper', 'scissors'];
      let randomChoice = Math.floor(Math.random() * choice.length);
      return choice[randomChoice];
    }
  
    function play(player,computer) {
      let result = "";
    
      // each time calculates the winner

      if (player === computer) {
        result = "It's a tie!";
      } else if (player === "rock") {
          if (computer === "scissors") {
           result = "Player wins!";
           scores.score1 += 1;
          } else {
            result = "Computer wins!";
            scores.score2 += 1;
          }
      } else if (player === "paper") {
          if (computer === "rock") {
            result = "Player wins!";
            scores.score1 += 1;
          } else {
            result = "Computer wins!";
            scores.score2 += 1;
          }
      } else if (player === "scissors") {
        if (computer === "paper") {
          result = "Player wins!";
          scores.score1 += 1;
        } else {
          result = "Computer wins!";
          scores.score2 += 1;
        }
      }
  
      
      //  displays the score
      const div = document.createElement('div');
      div.textContent = `${computer}.    ${result} - Player: ${scores.score1} / Computer: ${scores.score2}`;
      document.body.appendChild(div);
  
      
      // check if someone has score == 5
      if (scores.score1 >= 5) {
        const winDiv = document.createElement('div');
        winDiv.textContent = 'Player wins the game!';
        document.body.appendChild(winDiv);
        resetGame(scores)
      } else if (scores.score2 >= 5) {
        const winDiv = document.createElement('div');
        winDiv.textContent = 'Computer wins the game!';
        document.body.appendChild(winDiv);
        resetGame(scores)
      }
    }


    // resets the score when someone reaches 5 points

    function resetGame(scores){
      scores.score1=0
      scores.score2=0
    }
    


    btn1.addEventListener('click', function(event) {
      let player = 'rock';
      let computer = getComputerChoice();
      play(player, computer);
    });
  
    btn2.addEventListener('click', function(event) {
      let player = 'paper';
      let computer = getComputerChoice();
      play(player, computer);
    });
  
    btn3.addEventListener('click', function(event) {
      let player = 'scissors';
      let computer = getComputerChoice();
      play(player, computer);
    });
  });