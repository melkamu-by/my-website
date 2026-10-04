const m = () => console.log("Hello, World!");
m();
const person = {
  name: "Melkamu",
  age: 25

}
//object literal

person.gender = "Male";
person["height"] = 165;
person.name = "Melkamu Belay";//modify
//console.log('person', person   );

//get object keys and values



const objkeys=Object.keys(person);
//console.log('objkeys', objkeys);
for(let key of objkeys){
    //console.log(`${key}: ${person[key]}`);
}
//object constructor
const person2 = new Object();
person2.name = "Senait ";
person2.age = 20;
person2.gender = "Female";
person2["height"] = 160;
person2.hi=function(){
    //console.log(`Hi, my name is ${this.name}`);
}
//console.log('person2', person2);
person2.hi();

//object class
class Person {
    constructor(name, age, gender, height) { 
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
    }
    sayHi() {
        //console.log(`Hi, my name is ${this.name}`);
    }
    addhobby(h) {
        this.hobby = h;

    }
}
//instance/copy of the class
const person3 = new Person("John", 30, "Male", 180);
//console.log('person3', person3);
const person4 = new Person("Tigist", 28, "Female", 165);
//console.log('person4', person4);

person3.sayHi();
person4.sayHi();

//add hobby to person3
person3.addhobby("Reading");
person4.addhobby("Swimming");
//console.log('person3', person3);
//console.log('person4', person4);

const person5 = new Person("Abebe", 35, "Male",);
//console.log('person5', person5);

//construtor function
function House(rooms,area,location){
    this.rooms = rooms;
    this.area = area;
    this.location = location;
}
const house1 = new House(3, 120, "Addis Ababa");
console.log('house1', house1);
const house2 = new House(4, 150, "Bahir Dar");
console.log('house2', house2);


//methods
const dog=new Object();
dog.name="Buddy";
dog.breed="Golden Retriever";
dog.age=3;
dog.bark=function(){
    console.log(`woof!`);
}
dog.bark();

//unary function
const square = x => x * x;
console.log('square(5)', square(5));

//built-in unary function
let num = "5";
let num2=parseInt(num);
console.log(typeof num2); // number
console.log(num2+ 5); // 10 (numeric addition)

//Json object
const jsonString = '{"name": "Melkamu", "age": 25}';
console.log(typeof jsonString); // string
const jsonObject = JSON.parse(jsonString);
console.log(typeof jsonObject); // object
console.log(jsonObject);


//higher order function HOF
function sayHello(name, callback) {
    console.log(`Hello from ${name}!`);
    callback(name);
}
function goodbye(name) {
    console.log(`Goodbye from ${name}!`);    
}
sayHello("Melkamu", goodbye);

//function constructor
const sendMessage=new Function(
    "name",
    "console.log(`Message sent to ${name}!`);"
);
sendMessage("Melkamu");

//pure function
let num1=5;
function increment(){
    num1++;
    return num1;
}
console.log(increment()); // 6

//Generator function
function* generatorFunction(){
    try{
        yield 'Hello';
        yield 'Melkamu';
        yield 'Belay';


    }
    catch(e){
        console.log(e.message);
    }
    
}
const generator=generatorFunction();
console.log(generator.next())
console.log(generator.throw(new Error('Something went wrong!')))
console.log(generator.return('terminate'))
console.log(generator.next())
console.log(generator.next())
//console.log(generator.next().value); // Hello