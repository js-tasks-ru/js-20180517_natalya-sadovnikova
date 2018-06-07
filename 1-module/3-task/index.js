'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

    let re = /(-?\d+\.?\d*){1,}/g;
    let min = 0, max = 0;
    let numbers = str.match(re);
    let result = {
        min: min,
        max: max
    };

    numbers.forEach(function (item, i, arr) {

        item  = /(\.)/.test(item) ? parseFloat(item) : parseInt(item);

        if(item < result.min ) {
            result.min = item;
        }
        if(item > result.max){
            result.max = item;
        }

    });

    return result;
}

let someStr = '1, -5.8 или 10, 75 хотя 34 + -5.3 и 73';

getMinMax(someStr);