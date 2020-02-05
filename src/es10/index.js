let array = [1,2,3,4, [1,2,3, ]];
console.log(array.flat(3));

let array = [1,2,3,4];
console.log(array.flatMap(value => [value, value * 2]));


let hello = '           helloWorld';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello world    ';
console.log(hello);
console.log(hello.trimEnd());

try {
    
} catch (error) {
    
}

let entries = [["name","Alexis"], ["age", 24]];
console.log(Object.fromEntries(entries));

let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);