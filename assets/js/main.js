console.log('Руденко Богдан ДЗ 1');
// Не прошел вариант с рандомом
// Почему в 4 задании при работе не с переменной а с числом, MyTest не откатывает значение обратно к 20,хотя операция идет только на вывод? 
var myNum = 10, myStr='строка',myBool=true,myArr=[1,2,3,4,5],myObj={first:'First Name',last:'Last Name'} ;

console.log('Задание 1 Обьявление переменных \n\n');


console.log('Задание 2 \n');

decimal2 = (myNum.toFixed(2));
console.log(decimal2);

console.log('Задание 3 \n');
var i = 22;
console.log('i = ', ++i);
console.log('i = ',i++);
var i = 22;
console.log('i = ',--i);
console.log('i = ',i--);
console.log('i = ',i);



console.log('Задание 4 \n');

 var myTest = 20;
 console.log('Операции присваивания переменной i = ', myTest);

 console.log(myTest += myNum);

 console.log(myTest -= myNum);

 console.log(myTest *= myNum);

 console.log('Почему при работе не с переменной а с числом, MyTest не откатывает значение обратно к 20? ')

 console.log(myTest/=2);

 console.log(myTest/=25);

 console.log( myTest %= 3);


 console.log('Задание 5 \n');   


var myPi =(Math.PI);
console.log('Число Pi = ',myPi);

// var myRound = 89.2789;
// console.log('Округление',Math.round(myRound));
var myRound = Math.round(89.279); 
console.log('myRound:', myRound);

var myRandom = Math.random()* 10;
console.log('Рандомное число (1 -10) = ',myRandom.toFixed());

var myPow=Math.pow(3,5);
console.log('3^5=',myPow);

     

console.log('Задание 6 \n');

var strObj = {};
strObj.str= 'мама мыла раму, рама мыла маму';
strObj.length = strObj.str.length;
console.log(strObj);

console.log('Задание 7 \n');


 var isRamaPos = (strObj.str.indexOf('рама'));
 console.log('Символ с которого входит слово "рама"= ',isRamaPos);


 console.log('Задание 8 \n');
var strReplace = strObj.str.replace('мама мыла','Мама моет');
strReplace = strReplace.replace('рама мыла','Рама держит')
console.log(strReplace);

console.log('Задание 9 \n');

console.log(strReplace.toUpperCase());
console.log(strReplace.toLowerCase());