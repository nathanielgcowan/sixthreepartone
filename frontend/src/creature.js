class Creature {
    static allCreatures = []

    constructor(creature){
        this.id = creature.id
        this.name = creature.attributes.name
        this.image = creature.attributes.image
        this.description = creature.attributes.description
        this.skills = creature.attributes.skills
        Creature.allCreatures.push(this)
        this.renderCreatures()
    }

    static renderCreatures(creatures){
        card.innerHTML = ""
        for (let creature of creatures){
            creature.renderCreatures()
        }
    }

    static fetchCreatures(){
        fetch(creaturesURL)
        .then(response => response.json())
        .then(creatures => {
            for(let creature of creatures.data){
                let newCreatureCard = new Creature(creature)
            }
        })
    }

    renderCreature(){
        // make the constants
        const creatureLi = document.createElement('li')
        const h3 = document.createElement('h3')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const creaturesSkills = document.createElement('ul')

        // delete button
        const deleteButton = document.createElement('button')

        // skill form
        const skillForm = document.createElement('form')

        creatureLi.dataset.id = this.id
        card.appendChild(creatureLi)
        h3.className=("creature-card")
        h3.innerText = this.name
        img.width = 100
        img.src = this.image
        p.innerText = this.description
        // Delete button
        deleteButton.innerText = "Delete"
        deleteButton.addEventListener("click", this.deleteCreature)
        // Skill Form
        skillForm.innerHTML +=
        `
        Add Skill <input type = "text".
        <input value="Submit">
        `
        skillForm.addEventListener("submit", SKill.createSkill)
        creaturesSkills.dataset.id = this.id
        // Rendering skills per creature
        this.skills.forEach(skill => {
            let newSkill = new skill(skill)
            newSkill.renderSkill(creaturesSkills)
        })
        creatureLi.append(h3, img, p, skillForm, creaturesSkills, deleteButton)
    }

    static submitCreature(e){
        e.preventDefault()
        fetch(creaturesURL, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
            body: JSON.stringify({
                image: enterCreatureImage.value,
                name: enterCreatureName.value,
                description: enterCreatureDescription.value
            })
        })
        .then(response => response.json())
        .then(creature => {
            let newCreature = new Creature(creature.data)
            makeACreature.reset()
        })
    }

    deleteCreature(){
        const creatureId = this.parentElement.dataset.id
        feetch(`${creaturesURL}/${creatureId}`,{
            method: "DELETE"
        })
        this.parentElement.remove()
    }
}