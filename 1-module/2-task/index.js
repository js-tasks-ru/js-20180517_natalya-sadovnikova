'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 *
 * @param {string} name - user name
 * @returns {boolean}
 *
 */
function isValid (name) {

    let space;

    if(name !== null) {
        for (let i = 0; i < name.length; i++) {
            if (name.charAt(i) == ' ') {
                space = true;
            }
        }
        if(name.length >= 4 && name !== '' && !space ) {
            return true;
        }
    }

    return false;
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();

