// const - variables that cannot be reassigned
const cREATURES_URL = "http://localhost:3000/creatures"
const sKILLS_URL = "http://localhost:3000/skills"
const makeACreature = document.querySelector(".makeacreature")
const enterCreatureName = document.querySelector(".creaturename")
const enterCreatureImage = document.querySelector(".creatureimage")
const enterCreatureDescription = document.querySelector(".creaturedescription")
const deck = document.querySelector(".card")

// Event Listenter

// color.addEventListener("change", function(e){
//     // remember deck is an array
// let deck = Creature.allCreatures.filter(creature => {
//     for( let ing of creature.skills){
//         if(ing.name.toLowerCase().includes(e.target.value)){
//             return true
//         }}
// })
// Creature.renderCreatures(deck)
// })

// searchBar.addEventListener("keyup", function(e){
//     const findCard = e.target.value.toLowerCase()
//     const foundCard = Creature.allCreatures.filter( creature => {
    
//         if ( creature.name.toLowerCase().includes(findCard)){
//             return true
        
//         }
// })

// Creature.renderCreatures(foundCard)
// })

makeACreature.addEventListener("submit", Creature.submitCreature)
Creature.fetchCreatures()