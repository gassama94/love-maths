// Wait for the DOM to finish loading before running the game
// Get the Buttons elemenyts and Add Event Listeners to them

 document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    //for (let = 0; i <  buttons.length; i++)
    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You Clicked Submit")
            }else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`)
            }
        })


    }
})

/** 
 * The main "loop", called when the script is first loaded 
 * and after the user's answer has been procesed */
function runGame() {
    // Creates two Random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 + 1)
    let num2 = Math.floor(Math.random() * 25 + 1)

}
function checkAnswert(){

}
function calculateCorrectAnswer(){

}
function incremenScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion() {

}
function displaySubtractQuestion (){

}
function displaymultiplyQuestion(){

}