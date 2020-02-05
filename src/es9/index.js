const obj = {
    name: 'Alexis',
    age: '24',
    country: 'MX'
};

let { name, ...all} = obj;
// console.log(name, all);
console.log(all);

const obj = {
    name: 'Alexis',
    age: '24',
};

const obj1 = {
    ...obj,
    country: 'MX'
};
console.log(obj1);


//Promise finally

const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        (true)
        //? resolve('Hello world')
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('test error'));
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally( () => console.log('Finalizo'));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);