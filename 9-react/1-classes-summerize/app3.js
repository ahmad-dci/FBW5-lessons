const arr = [5, 6, 1, 9, 12];

const arr2 = [...arr];
arr[0] = 1;
//console.log(arr2);

class Auto {
    constructor (seatsNum, maxSpeed, color) {
        this.seats = seatsNum;
        this.speed = maxSpeed;
        this.color = color;
    }
    wheals = 4;
    showDescription = function () {
        console.log(`this auto contains ${this.seats} seats and its max speed is ${this.speed}`);
      }
      static showGenerlaDescription() {
          console.log('this is Auto so it has wheels and you can drive it');
      }
}

const newAuto = new Auto(4, 280, 'blue');
const anotherAuto = new Auto(6, 260, 'black');
// add new property
newAuto.doors = 2;
// adda new method to newAuto
newAuto.newDescription = function(){
    console.log(`I am a new Auto with ${this.speed} km/h speed and I am ${this.color}`);
}
newAuto.newDescription()
Auto.doors = 5;
console.log(anotherAuto.doors);
// console.log(newAuto);