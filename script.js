let player=getPlayersChoice();
let computer=getComputerChoice();

function getPlayersChoice(){
    let answer=prompt('select between rock,paper and scissors');
            if (answer != 'rock' && answer!='paper' && answer!='scissors'){
                
                console.log('answer must be rock paper or scissors');
                let answer=prompt('select between rock,paper and scissors');
            }
            return answer;
        }
        
function getComputerChoice(){
            
            const choice=['rock','paper','scissors'];
            let randomChoice=Math.floor(Math.random()*choice.length);
            console.log(choice[randomChoice]);
            return choice[randomChoice];
        }

        

function play(player,computer){

            

            if (player==='rock' && computer==='scissors'){
                console.log('player wins!')
                
            }   else if(player==='rock' && computer==='rock'){
                    console.log('its a draw');
            }   else if(player==='rock' && computer==='paper'){
                    console.log('computer wins');}
                    

            if (player==='paper'){
                if (computer==='paper'){
                    console.log('its a draw');
                }   else if (computer==='rock'){
                     console.log('player wins!');
                     
                }   else{
                        console.log('computer wins');
                        
                }
            }

            if (player==='scissors'){
                if (computer==='paper'){
                    console.log('player wins!');
                    
                }   else if(computer==='scissors'){
                    console.log('its a draw');
                }   else{
                     console.log('computer wins');
                     
                }

            }
            


        }



function newGame(player,computer){
    for (let i = 0; i < 5; i++){
         player=getPlayersChoice();
         computer=getComputerChoice();
        game=play(player,computer);
        
    }}
newGame(player,computer);
        