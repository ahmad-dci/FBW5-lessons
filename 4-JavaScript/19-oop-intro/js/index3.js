class Participant {
    constructor(blalastName, blafirstName){
        this.firstName = blafirstName
        this.lastName = blalastName
    }
    fullName() {
        return this.firstName + '-' + this.lastName
      }
}



let tim = new Participant('Breuel','Tim')
tim.tattoos = true
document.write( tim.fullName() + '<br>')

let safa = new Participant('Bouhlel', 'Safa')
document.write( safa.fullName() + '<br>')


let shirin = new Participant('Valizadeh', 'Shirin')
document.write( shirin.fullName() + '<br>')
let belal = new Participant('Sukari', 'Belal')

let parArr = [tim, safa, shirin, belal]

// parArr.forEach(blaItem => {
//     document.write( blaItem.firstName + '<br>')
// })

// function to print first name of each element inside parArr
// first solution 'direct print'
function firstNamePrinter1(arr) {
    arr.forEach(item => {
      document.write(item.firstName + ' '+item.tattoos + '<br>')
    })
  }

  firstNamePrinter1(parArr)

  // second solution 'return a storage'
  function firstNamePrinter2(arr) {
      let storage = ''
        arr.forEach(item => {
             storage += item.firstName + '<br>'
        })
        return storage
      }

      document.write(firstNamePrinter2(parArr))