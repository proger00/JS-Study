'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),  // Возвращает самый первый элемент
      wrapper = document.querySelector('.wrapper');

box.style.cssText = 'background-color: blue; width:500px';
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); // Создание элемента внутри js
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

//document.body.append(div);
// wrapper.append(div);
// wrapper.prepend(div);

//hearts[0].before(div);   //hearts[0].after(div);
//circle[0].remove();

//hearts[0].replaceWith(circles[0]);

div.innerHTML= "<h1>Hello world</h1>";     //работает со структурой
//div.textContent = "HELLO";   //работает только с текстом

div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');  //Вставляет текст по первому элементу


//---------УСТАРЕВШИЕ КОНСТРУКЦИИ


// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[0]);  //hearts[0] - элемент, перед которым мы всталяем
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[0]); //меняем на первый элемент второй


