class Creature {

    static allCreatures = []

    constructor(creature){
        this.id = creature.id
        this.name = creature.attributes.name
        this.image = creature.attributes.image
        this.description = creature.attributes.description
        this.skills = creature.attributes.skills
        Creature.allCreatures.push(this)
        this.renderCreature()
    }

    // Render Creatures
    static renderCreatures(creatures){
        card.innerHTML = ""
        for (let c of creatures){
            c.renderCreature()
        }
    }

    // Fetch Creatures
    static fetchCreatures(){
        fetch(creaturesURL)
        .then(res => res.json())
        .then(c => {
            for(let c of creatures.data){
                let newCreatureCard = new Creature(c)
            }
        })
    }

    // Render The Creature

}