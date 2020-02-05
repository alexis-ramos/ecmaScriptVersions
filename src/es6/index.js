function newFunction (name,age, country) { 
    var name = name || 'Alexis';
    var age = age || 24;
    var country = country || 'MX';
    console.log(name, age, country);
 }


//  es6
function newFunction2(name = 'Alexis', age = 24, country = 'MX') {
    console.log(name, age,country);
}

newFunction();
newFunction2('Alexis', '25', 'CANADA');


//Template Literals
let hello = "Hola";
let world = "mundo";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "velit explicabo similique tempora ut doloribus eius expedita soluta blanditiis laudantium in quidem repellat. \n" +
"otra frase";

//ES6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);


let person = {
    'name': 'Alexis',
    'age': 24,
    'country': 'MX'
};
console.log(person.name, person.age, person.country);

//Destructuracion de elementos en ES6ss
let { name, age, country} = person;
console.log(name,age,country);

//Operador de propragacion

let team1 = ['Alexis','Sebastian','Jair'];
let team2 = ['Diana','Dariana', 'Andrea'];

let education = ['Alan', ...team1, ...team2];
console.log(education);


let name = 'alexis';
let age = '24';
//es5
obj = {name: name, age: age};

//es6
obj2 = {name, age};
//console.log(obj);
console.log(obj2);


//Arrow Function
const names = [
    {name: 'alexis',age: '24'},
    {name: 'sebastian', age: 24}
];

let listOfNames = names.map( function (item) {
    console.log(item.name);
});

let listOfNames2 = names.map( item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
};

//Cuando solo se usa un elemento del objeto
const listOfNames4 = names => {
    ...
};

//Arrow function que recibe solo un numero que multiplica por el mismo
const square = num => num * num;

//Promises = algo va a pasar
const helloPromise = () => {
    return new Promise( (resolve, reject) => {
        if (false) {
            resolve('HEY! ITS OK');
        } else {
            reject('UPSS! SO BAD');
        }
    });
};

helloPromise()
.then(response => console.log(response))
.then(console.log('Hola'))
.catch(error => console.log(error));


//Se agregan clases a es6
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calcular = new calculator();
console.log(calcular.sum(2,2));

//Importar
import {hello} from './module';
hello();

//Generator = recurda los valores
function* helloWorld() {
    if (true) {
        yield 'hello, ';
    }

    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
