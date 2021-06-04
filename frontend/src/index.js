const creaturesURL = "http://localhost:3000/creatures"
const skillsURL = "http://localhost:3000/skills"
const makeACreature = document.querySelector(".makeacreature")
const enterCreatureName = document.querySelector(".creaturename")
const enterCreatureImage = document.querySelector(".creatureimage")
const enterCreatureDescription = document.querySelector(".creaturedescription")
const card = document.querySelector(".card")

makeACreature.addEventListener("submit", Creature.submitCreature)
Creature.fetchCreatures()