/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?  ");

if (choice === "mountains") {
    let torch = readline.question(`Do you need torch to navigate through the dark mountains? 
      True or False :
       `);
      if (torch === "false" || torch === "False")
        {
          hasTorch = false;
        }
      else{hasTorch = true;}
    if(hasTorch)
      {
        let confirmBear = readline.question(`You encounter a Bear in the dark mountains, 
          do you need a sword to fight or an invisible cloak to vanish? `);
        if(confirmBear.toLowerCase() === "sword")
          {
            console.log("You fight the bear with the sword fiercely and kill it...");
            let liquidChoice = readline.question(`You are thirsty, you see a pond of water nearby,
              you also see a jug of juice and a sign saying "Dont drink from the pond or the jug" 
              Will you still take the drink? Yes or No `);
              if(liquidChoice.toLowerCase==="yes" || liquidChoice.toLowerCase==="no")
                {
                  console.log("Wise decision...");
                }
          }
        else if (confirmBear.toLowerCase() == "cloak"){
           console.log("You became invisible and escape the imminent death!")
           console.log("Congratulations!..");
        }
      }
    else if(!hasTorch){
      console.log("You have don't have the torch now, You get lost in the dark!!");
    }

}  else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  let choice1 =readline.questionInt("Do you want to become a farmer or a goldsmith? 1 or 2 ?");
  if(choice1 === 1){
        let options = readline.questionInt(`What you would like to grow ? Pick one of the following :
    1. Rice
    2. Vegetables
    3. Cattle
    Enter a number : `);

    switch(options){
      case 1:
        console.log("You grow rice and become a rice farmer!");
      case 2:
        console.log("You become a veggies farmer!");
      case 3:
        console.log("You breed cattle!Life is beautiful!");
    }
        
  
  }
    
  else
  {
      console.log("You become a goldsmith and later become a gold trader!!");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/