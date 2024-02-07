import { Person } from "./Person";
import { Hobby } from "./Hobby";

const hobby1 = new Hobby("Reading", 5);
const hobby2 = new Hobby("Painting", 3);

const person = new Person("John", 25, 180, [hobby1, hobby2], 75);

console.log("Initial age:", person.age);
person.grow();
console.log("Age after growing:", person.age);

console.log("Initial weight:", person.weight);
person.loseWeight(5);
console.log("Weight after losing weight:", person.weight);

console.log("Initial hobbies:", person.getHobbiesNames());
const hobby3 = new Hobby("Cooking", 2);
person.addHobby(hobby3);
console.log("Hobbies after adding:", person.getHobbiesNames());
