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
}