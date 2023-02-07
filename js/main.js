
// let parrafosCapturados = document.getElementsByTagName("p");



// parrafosCapturados[2].addEventListener("mouseover", ()=>{

// console.log(`Don't mess with Jose`)

// })


// let inputPlayer1 = document.getElementById("player1")

// inputPlayer1.addEventListener(`change`, () => {

//     console.log(inputPlayer.value)

// })



let inputs = Array.from(document.getElementsByTagName("input"))

inputs.map(

    (input) => {
        input.addEventListener(`change`, ()=>{
            console.log( `Estas escribiendo en ${input.name}
            y has escrito ${input.value}`)
        })
        }
)