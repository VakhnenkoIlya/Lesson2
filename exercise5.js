"use strict"
/**
 * Функция выполняет математическое действие (+, -, /, *) в зависимости от переданного в него значения
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @param {string} operation значение определяет матемматическое действие
 */
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'сложение':
            addition(arg1, arg2);
            break;
        case 'разность':
        subtraction(arg1, arg2);
            break;
        case 'деление':
        share(arg1, arg2);
            break;
        case 'умножение':
            multiply(arg1, arg2);
            break;    
        }
}
mathOperation(2, 2, 'сложение');
mathOperation(2, 2, 'разность');
mathOperation(9, 3, 'деление');
mathOperation(3, 3, 'умножение');