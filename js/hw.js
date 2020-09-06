'use strict';

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private:false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");

    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
    },
    remberMyFIlms: function(){
        for(let i = 0; i < 2; ++i){
            const a = prompt('Один из последних просмотренных фильмов?',''),
            b = prompt('На сколько вы оцените его?','');
        
            if(a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            }else {
                console.log ('error');
                i--;
            }
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
     writeYourGeners: function(){
        for(let i = 1; i < 2;++i){

            let genres = prompt(`Введите ваши любимые жанры через запятую `).toLowerCase();
            
            if (genres == '' || genres == null){
                console.log('Вы ввели некорректные данные'); 
                i--;
            }else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();

            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);

        });
        
    },
    toggleVisibleMyDB: function(){

        if (personalMovieDB.private){
             personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
        }
    }


};
