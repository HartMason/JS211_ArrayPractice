let cars = ['Ford', 'Tesla', 'Nissan', 'Subaru']

// console.log(cars.length)

let moreCars = ['Jeep', 'Hummer', 'Lincoln', 'Honda']

let totalCars = cars.concat(moreCars)

// console.log(totalCars)

// console.log(totalCars.indexOf('Honda'))

// console.log(totalCars.lastIndexOf('Ford'))

const stringOfCars = totalCars.join() 

// console.log(stringOfCars)

const carsFromString = stringOfCars.split('  ')

// console.log(carsFromString)

let carsInReverse = totalCars.reverse()

// console.log(carsInReverse)

let carsAlphabetical = carsInReverse.sort()



// console.log(carsInReverse.indexOf('Ford'));






const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

let reptiles = pets.slice(4, 6); // It slices starting at four and ends 6   //Slice doesn't manipulate the original array

// console.log(reptiles)
// console.log(pets)

let removedReptiles = pets.splice(4, 2) //Not Sure how this works
// console.log(removedReptiles)
// console.log(pets)


const removedPet = pets.pop()
// console.log(removedPet)
// console.log(pets)

pets.push(removedPet) //Need Help with push()
// console.log(pets)

pets.shift()
// console.log(pets)

pets.unshift('turtle')
// console.log(pets)

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
    numbers.forEach(myFunction)
function myFunction(item, index, arr) {
    arr[index] = item + 2 
}

console.log(numbers)