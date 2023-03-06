document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.querySelector('#btn1');
    const btn2 = document.querySelector('#btn2');
    const btn3 = document.querySelector('#btn3');
  
    function getComputerChoice() {
      const choice=['rock', 'paper', 'scissors'];
      let randomChoice = Math.floor(Math.random() * choice.length);
      console.log(choice[randomChoice]);
      return choice[randomChoice];
    }
  
    function play(player, computer) {
      if (player === computer) {
        console.log("It's a tie!");
      } else if (player === "rock") {
        if (computer === "scissors") {
          console.log("Player wins!");
        } else {
          console.log("Computer wins!");
        }
      } else if (player === "paper") {
        if (computer === "rock") {
          console.log("Player wins!");
        } else {
          console.log("Computer wins!");
        }
      } else if (player === "scissors") {
        if (computer === "paper") {
          console.log("Player wins!");
        } else {
          console.log("Computer wins!");
        }
      }
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
  