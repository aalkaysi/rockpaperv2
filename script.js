let playerScore = 0
let computerScore = 0
const button = document.querySelectorAll('.button')
let playerClick

/*button.forEach(element => {
    playerClick = element.innerText
    
});*/

//button.onclick = playRound()

//console.log(button[0].textContent)

/*function pselect(){
    for (i=0; button.length<i; i++)
    console.log(button[i].textContent)
    return
    
}*/

function getVal(clickedValue){
   let playerClick = clickedValue
   
}

console.log(playerClick)

/*function playRound(){

    for (round = 1; round < 6; round++){
    let selection = ["rock", "paper", "scissor"]
    //let playerSelect = getVal()
    
    //console.log(playerSelect)


    //if (playerSelect!= "rock".toLowerCase() || playerSelect != "paper".toLowerCase() || playerSelect != "scissor".toLowerCase()){
       // alert("Please select right value")
   // }

    let computerSelect = selection[Math.floor(Math.random() * selection.length)]
    
    //console.log(`Start round:  ${round}  
    //Computer selects: ${computerSelect} | Player Selects: ${playerSelect} 
    //${choice(playerSelect, computerSelect)}`)
}*/

function choice (choice1, choice2){
    
       if (choice1 === choice2){
       return "It's a Tie!"
   }   if (choice1 == 'rock' && choice2 == 'scissor'){
    playerScore++
    return "Player wins!"
    
}      if (choice1 == 'rock' && choice2 == 'paper'){
    computerScore++
    return "Computer wins!"
    
}      if (choice1 == 'paper' && choice2 == 'scissor'){
    computerScore++
    return "Computer wins!"
    
}      if (choice1 == 'paper' && choice2 == 'rock'){
    playerScore++
    return "Player wins"
    
}      if (choice1 == 'scissor' && choice2 == 'paper'){
    playerScore++
    return "Player wins!"
    
}      if (choice1 == 'scissor' && choice2 == 'rock'){
    computerScore++
    return 'Computer wins!'
}

   }
//}


//playRound()
//console.log("Final score is Player: " + playerScore + " Computer: " + computerScore)
