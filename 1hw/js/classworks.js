
'use strict';

function learnJS(lang, callback){
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS('JS', function(){
    console.log(1);
});

const options = {
    name: "Vasya",
    width: 1024,
    color:{
        bg: "red",
        border: "white"
    }
};

//delete options.name;

for(let key in options){
    if (typeof(options[key]) == 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    
}


//ARRAY METHODS
let arr = [1, 2, 3, 4, 10, 8];

arr.forEach(function(item, i, arr){
    console.log(`${item} внутри массива ${arr}`); //i - index

});

for (let value of arr){
    console.log(value);   // break and continie
}

// ARRAY CREATING
const str = prompt("","");
const products = str.split(", ");   // разделяем строку
products.sort(compareNum);                    //сортировка строк по алфавиту

console.log(products.join('; '));   //выводим на экран в таком виде, котором нам хочется

function compareNum(a, b){
    return a - b;
}

// Объекты и ссылки на них
const obj = {
    a: 5,
    b: 1
};
const copy = obj;// ссылка на объект,  а не его копия!!
copy.a = 10;
console.log(copy);

// Создание копий

function copy2(mainObj){
    let objCopy = {};

    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy; 

}

console.log(Object.assign(obj, copy));  // что помещаем, куда помещаем

//ИЛИ
const clone = Object.assign({}, obj);
clone.a = 20;                            //и все меняется

//ИЛИ
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'efwew';
console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'blogger'],
      internet = [...video, ...blogs, 'facefook'];


//ИЛИ
const array = ["a", "b"];
const nArray = [...array];

//ИЛИ
const q = {
    one: 1,
    two: 2
};
const newQ = {...q};

//call-back функции

const calc = (a, b) => a + b;

const calcLogger = (a, b) => {
    console.log('Calc done');
    return (a+b);
};

// Methods
const str1 = "Hello world";

console.log(str1.slice(6, 11));   // world

console.log(str1.substring(6, 11));   // world

console.log(str1.substr(6, 5)); // world

const num = "12.2px";
console.log(parseInt(num));     // 12
console.log(parseFloat(num));   // 12.2


// OOП
const soldier = {
    healt:400,
    armor:300
};
const john = Object.create(soldier);
//Object.setPrototypeOf(john, solider);