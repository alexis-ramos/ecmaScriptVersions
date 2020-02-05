const data = {
    frontend: 'Alexis',
    backend: 'Sebastian',
    design: 'Diana'
};
//Se obtiene el total de los elementos y los arreglos
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Transformacion y solo obtener nombres
const data2 = {
    frontend: 'Alexis',
    backend: 'Sebastian',
    design: 'Diana'
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);


const string = 'Hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' ----'));
console.log('food'.padEnd(12,' ----'));


//Comas al final de arrays, objetos y llamadas a funciones
const obj = {
    name: 'Alexis',
};

//Async await
const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        (false)
        ? setTimeout( () => resolve('Hello world'), 3000)
        : reject( new Error('Test Error'));
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();