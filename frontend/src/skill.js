class Skill {

    constructor(skill){
        this.id = skill.id
        this.name = skill.name
        this.creature_id = skill.creature_id
    }

    static createSkill(e){
        e.preventDefault()
        const li = document.createElement('li')
        const skillName = e.target.children[0].value
        const creaturesSkills = e.target.previousElementSibling
        const creatureId = e.target.parentElement.dataset.id
        Skill.submitSkill(skillName, creaturesSkills, creatureId)
        e.target.reset()
    }

    renderSkill(creaturesSkills){
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')
        li.dataset.id = this.id
        li.innerText = this.name
        li.append(deleteButton)
        deleteButton.addEventListener("click", this.deleteSkill)
        creaturesSkills.appendChild(li)
    }

    static submitSkill(skillName, creaturesSkills, creatureId){
        fetch(skillsURL, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
            body: JSON.stringify({
                name: skillName,
                creature_id: creatureId,
                creaturesSkills: creaturesSkills
            })
        })
        .then(response => response.json())
        .then(skill => {
            let newSkill = new Skill(skill)
            const creature = Creature.allCreatures.find(creature => parseInt(creature.id) === newSkill.creature_id)
            creature.skills.push(this)
            newSkill.renderSkill(creaturesSkills)
        })
    }

    deleteSkill(){
        const skillId = this.parentElement.dataset.id
        fetch(`${skillsURL}/${skillId}`,{
            method:"DELETE"
        })
        this.parentElement.remove()
    }
}