// STEP 1
// function Cat() {
//     console.log('The new cat has been created.')
// } 

// const Dog = function() {
//     console.log('The new dog has been created.')
// }

// STEP 2
// const cat1 = new Cat()
// const dog1 = new Dog()

// STEP 3
// const Animal = function() {
//     this.move = function() {
//         console.log('The Animal has been created.')

//     }
// }
// const animal1 = new Animal()
// animal1.move()

// STEP 4
// const Animal =  function(message) {
//     this._message = 'Animal is created' 
//     console.log(`${this._message}`)  
// }
// const animal1 = new Animal()

// // STEP 5
// function Animal(type, breed, color, height, length) {
//     this._type = type
//     this._breed = breed
//     this._color = color
//     this._height = height
//     this._length = length
// }
// const animal1 = new Animal('dog', 'Akita Inu','red fawn', '23"','50"')

// STEP 6
// function Animal(type, breed, color, height, length) {
//     this._type = type
//     this._breed = breed
//     this._color = color
//     this._height = height
//     this._length = length
//     this._animalProperties = [this._type, this._breed, this._color, this._height, this._length]

//     for(let i in this._animalProperties) {
//         console.log(this._animalProperties[i])
//     }
// }

// const animal1 = new Animal('dog', 'Akita Inu','red fawn', '23"','50"')

// STEP 7
// function Animal(type, breed, color, height, length) {
//     this._type = type
//     this._breed = breed
//     this._color = color
//     this._height = height
//     this._length = length
//     this.speak = function() {
//         if(type == 'cat') {
//             console.log(`The ${this._color} ${type} is meowing!`)
//         } else if(type =='dog') {
//             console.log(`The ${this._color} ${type} is barking!`)
//         }   
//     }   
// }

// const animal1 = new Animal('dog', 'Akita Inu','red fawn', '23"','50"')
// animal1.speak()

// STEP 8
// function Animal(type, breed, color, height, length) {
//     let _type = type
//     let _breed = breed
//     let _color = color
//     let _height = height
//     let _length = length
//     let checkType = function() {
//         if (_type == 'dog') {
//             return dog
//         } else if (_type == 'cat') {
//             return cat
//         }
//     }
    
//     Animal.prototype.checkType = function() {
//         console.log(`The ${_type} has made a noise!`)
//     }
// }
// const animal1 = new Animal('dog', 'Akita Inu','red fawn', '23"','50"')
// animal1.checkType()

// STEP 9
// let str_ = 'Peter Piper picked a peck of pickled peppers. If Peter Piper pIcked a peck of pickled peppers, where is the peck of pickled peppers Peter Piper Picked? '

// function Text(text) {
//         this.paragraph = text.toString().toLowerCase()
//     }

// Text.prototype.findWords = function (text) {
//     let specWord = prompt('Enter word you want to count')
//     this.paragraph = this.paragraph.replace(/\,/g,'')
//     this.paragraph = this.paragraph.replace(/\:/g,'')
//     this.paragraph = this.paragraph.replace(/\;/g,'')
//     this.paragraph = this.paragraph.replace(/\!/g,'')
//     this.paragraph = this.paragraph.replace(/\?/g,'')
//     this.paragraph = this.paragraph.replace(/\./g,'')
//     this.paragraph = this.paragraph.split(' ')
    
//     let specWords = []
//     for (let i = 0; i < this.paragraph.length; i++) {
//         if (specWord === this.paragraph[i]) {
//             specWords.push(this.paragraph[i])
//         }
//     }
//         alert(`The word "${specWord}" was used ${specWords.length} times.`)
//     }

// const wordFinder = new Text(str_)
// wordFinder.findWords()
