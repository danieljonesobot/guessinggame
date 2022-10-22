let max = 2
let randomNum = Math.floor(Math.random() * max) + 1
console.log(`Stage ${max - 1}`)
console.log(randomNum)

const range = function numberRange() {

  let username = prompt("Enter your username")
  let guess = parseInt(prompt("Enter a guess! It must be a number"))

  let points = 0
  while (guess !== false && guess <= 10) {


    if (guess === randomNum) {
      points = points + 1
      max++
      console.log(`You now have ${points} points! Move to stage ${max - 1}`)

      randomNum = Math.floor(Math.random() * max) + 1
      console.log(randomNum)
      guess = parseInt(prompt("Enter a new guess number!"))

      
    } else {
      console.log("GAME OVER!!")
    }



  }
}
range()




