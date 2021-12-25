"use strict"
//Задание 3
var a;
var b;
/**
 * функция выполняет матиматическое действие в зависимоти от передаваемых в нее чисел
 * @param {number} a первое число
 * @param {*number} b второе число
 * @returns результат вычислений 
 */
function Math(a, b){
    if (a>=0 && b>=0){
        return alert(a-b);
    }
    if  (a<0 && b<0){
        return alert(a*b);
    }
    if ((a>=0 && b<0) ||(a<0 && b>=0)){
        return alert (a+b);
    }
}
Math(3,2);
Math(-3, -2);
Math(-3, 2);

