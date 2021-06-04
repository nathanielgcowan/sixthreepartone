const creaturesURL = "http://localhost:3000/creatures"
const skillsURL = "http://localhost:3000/skills"
const makeACreature = document.querySelector(".makeacreature")
const enterACreatureName = document.querySelector(".creaturename")
const enterACreatureImage = document.querySelector(".creatureimage")
const enterACreatureDescription = document.querySelector(".creaturedescription")
const card = document.querySelector(".card")

makeACreature.addEventListener("submit", Creature.submitCreature)
Creature.fetchCreatures()