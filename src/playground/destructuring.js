const person = {
    name: 'Clark',
    age: 32,
    location: {
        city: 'Metropolis',
        temp: 34
    }
};

// The typical way of extracting data from object.
// console.log(`${person.name} is ${person.age} years old.`);

// OR 
// const name = person.name;
// const age = person.age;

// console.log(`${name} is ${age} years old`);

// ES6 way of extracting.
const { name: firstName = 'John', age } = person;
// name = John is how we set up a default value.
// Just in case we can't have access to values inside person, this can be the way to change it.
// We can also combo out renaming and setting up default value.
// Sec 10, Lec 88.

console.log(`${firstName} is ${age} years old.`);

// Nested Objects
const { city, temp: temperature } = person.location; 
// temp: temperature is how you rename local variable.
if(city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
};

const book = {
    name: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);