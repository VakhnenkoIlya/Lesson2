"use strict"
//Задание 4
/**
 * функция складывает два числа
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns результат сложения
 */
function addition (num1, num2){
    return alert("результат сложения двух чисел " + (num1 + num2))
}
/**
 * функция выполняет математическое действие разность
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns результат вычитания
 */
function subtraction (num1, num2){
    return alert ("результат разности двух чисел " + (num1 - num2))
} 
/**
 * функция выполняет математическое действие деление
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns результат вычитания
 */
function share (num1, num2){
    return alert("результат деления двух чисел " + (num1/num2))
}
/**
 * функция выполняет математическое действие умножение
 * @param {number} num1 первое число
 * @param {number} num2 второе число
 * @returns результат умножения
 */
function multiply(num1, num2){
    return alert("результат умножения двух чисел " + (num1*num2))
}
addition(3,3);
subtraction(4, 3);
share(12, 3);
multiply(2,4);
