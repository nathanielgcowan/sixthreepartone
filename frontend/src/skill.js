class Skill{
    constructor(skill){
        this.id = skill.id
        this.name = skill.name
        this.creature_id = skill.creature_id
    }

    static creatureSkill(event){
        event.preventDefault()
        const li = document.createElement('li')
        const skillName = event.target.previousElementsSibling
        const creatureId = event.target.parentElement.dataset.id
        Skill.submitSkill(skillName, creaturesSkills,creatureId)
        event.target.reset()
    }

    renderSkill(creaturesSkills){
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')
        li.deleteButton.id = this.id
        li.innerText = this.name
        li.append(deleteButton)
        deleteButton.addEventListener("click", this.deleteSkill)
        creaturesSkills.append(li)
    }

    static submitSkill(skillName, creaturesSkills, creatureId){
        fetch(skillsURL, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                name: skillName,
                creature_id: creatureId,
                creaturesSkills: creaturesSkills
            })
        })
        .then(response = response.json())
        .then(skill => {
            let newSkill = new Skill(skill)
            const creature = Creature.allCreatures.find(creature => parseInt(creature.id) === newSkill.creature_id)
            creature.skills.push(newSkill)
            newSkill.push(creaturesSkills)
        })
    }

    deleteSkill(){
        const skillId = this.parentElement.dataset.id
        fetch(`${skillsURL}/${skillId}`,{
            method: "DELETE"
        })
        this.parentElement.remove()
    }
}