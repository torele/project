/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости!!!",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promoAdv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list');
    
  const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
  };

    const makeChanges = () => {
        genre.textContent = 'drama';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };

    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}: ${film}
            <div class="delete"></div>
        </li>
        `;
    });
    
////////////////////////////////////////////////////////////////////////

    const form = document.querySelector('form.add'),
          addedFilm = document.querySelector('.adding__input'),
          chbox = document.querySelector('.chbox');
    
    function addFilm() {
        if(addedFilm.value) {
            if(addedFilm.value.length > 21) {
                addedFilm.value = `${addedFilm.value.substring(0,22)}...`;
            }
            movieDB.movies.push(addedFilm.value);
            if(chbox.checked) {
                console.log('Добавляем любимый фильм');
            }
            sortArr(movieDB.movies);  
            console.log(movieDB.movies);
            createMoovieList(movieDB.movies, movieList);
        } else {
            console.log('Input can not be empty');
        }

    }

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        addFilm();
        event.target.reset();
    });


    function createMoovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films); 

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}: ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMoovieList(films, parent);
            });
        });

    }




    makeChanges();
    deleteAdv(promoAdv);
    createMoovieList(movieDB.movies, movieList);

});

