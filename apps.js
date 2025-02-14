const multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//.4
function logMultiArrayValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

logMultiArrayValues(multiArray);

//.5
function findLargestNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(findLargestNumber(10, 20)); 
console.log(findLargestNumber(50, 30));

//.6
function compareValues(value1, value2) {
    if (value1 === value2) {
        return "The values are equal.";
    } else {
        return "The values are different.";
    }
}

console.log(compareValues(5, 5)); 
console.log(compareValues(5, "5")); 
console.log(compareValues(10, 20)); 


//Day 4 HW

let dog = {     //1
    name: "James",
    numLegs: 4
  
  };

  let dog = {       //2
    name: "Spot",
    numLegs: 4
  };
  console.log(dog.name, dog.numLegs);  

  et dog = {            //3
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs."}
  };
  
  dog.sayLegs();

  let dog = {           //4
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

  function Dog() {      //5
    this.name = "Bert";
    this.color = "Brown";
    this.numLegs = 4;
  } 

  function Dog() {      //6
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }

  let hound = new Dog();

  function Dog(name, color) {       //7
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("George", "White");

  function Fish(name, color) {
    this.name = name;
    this.color = color;
    this.numFins = numFins;
  }

  let herring = new Fish("Gerald", "purple", 7);

  function House(numBedrooms) {     //8
    this.numBedrooms = numBedrooms;
  }
  


  let myhouse = new House(5);

  myhouse instanceof House;

  function Bird(name) {         //9
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
for (let property in canary){
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

function Dog(name) {            //10
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;

  let beagle = new Dog("Snoopy");

  function Dog(name) {          //11
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];


  for(let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }


  function Dog(name) {      //12
    this.name = name;
  }
  
 
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }

  function Dog(name) {          //13
    this.name = name;
  }
  
  Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("woof woof woof");
  },
  describe: function() {
    console.log("My dog is " +this.name)
  }
  };

  let hound = new Dog("Gerard ");

  function Dog(name) {          //14
    this.name = name;
  }
  

  Dog.prototype = {
      constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  function Dog(name) {      //15
    this.name = name;
  }

  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle);

  function Dog(name) {      //16

    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(beagle); // => true
  
 
  Object.prototype.isPrototypeOf(Dog.prototype);



  