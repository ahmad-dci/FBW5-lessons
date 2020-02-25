class Participant {
    constructor(blalastName, blafirstName){
        this.firstName = blafirstName
        this.lastName = blalastName
    }
    fullName() {
        return this.firstName + ' ' + this.lastName
      }
}



let tim = new Participant('Breuel','Tim')
document.write( tim.fullName() + '<br>')

let safa = new Participant('Bouhlel', 'Safa')
document.write( safa.fullName() + '<br>')