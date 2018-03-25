// Javascript is the work horse of the web
// CSS applies style
// Javascript controls all of these things
//  var hello = document.getElementById('hello')

// An object is a thing
var person = {
  name: "Lydia",
  height: "5 foot 7 inches",
  eyeColor: "green",
  shoeSize: 8
}

var person2 = {
  name: "Caleb",
  height: "6 foot 1 inches",
  eyeColor: "Blue",
  shoeSize: 12
}

var person3 = {
  name: "Gerald",
  height: "6 foot 8 inches",
  eyeColor: "Greenish",
  shoeSize: 18
}

var array = [person, person2, person3]

var fixShoeSize = function(collection,sizeAdjustment) {
  // Arrays store values (not keys and values)
  for (var index = 0; index < collection.length; index++) {
    var personObject = collection[index]
    personObject.shoeSize = personObject.shoeSize - sizeAdjustment 
    console.log(personObject)
  }
}

fixShoeSize(array, 3)


