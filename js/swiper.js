new Swiper('.trainers__swiper', {

  //стрелки-кнопки
  navigation: {
    nextEl: '.trainers__button-next',
    prevEl: '.trainers__button-prev',
  },

  //отступы между слайдами
  //spaseBetween: 40,

  // количество слайдов для показа если slidesPerView: auto нужно в CSS слайду сделать ширину тоже аuto
  slidesPerView: 1,


  //Адаптив Ширина экрана
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaseBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaseBetween: 40,
    }
  },


  //отключение функционала если слайдов не достаточно
  watchOverflow: true,

  //бесконечная прокрутка
  loop: true,

  //количество дублирующих слайдов если slidesPerView: auto для корректной работы loop
  //loopedSlides: 4,

  //свободный режим
  freeMode: true,

  //автовысота
  autoHeight: true,

  //скорость переключения
  speed: 800,

  //управление клавиатурой
  keyboard: {
    //включить или отключить
    enabled: true,
    //включить или отключить когда слайдер в переделах видимости на экране
    onlyInViewport: true,
    //включить или отключить управление клавишами Page UP & DOWN
    pageUpDown: true,
  },

  //управление колесом мыши
  mousewheel: {
    //чувствительность колеса
    sensitivity: 1,
    //Класс на чем будет срабатывать прокрутка мышью
    eventsTarget: ".swiper-wrapper",
  }
});

new Swiper('.reviews__swiper', {
  loop: true,
  freeMode: true,
  slidesPerView: 1,
  spaceBetween: 0,
  watchOverflow: true,
  autoHeight: true,
  speed: 800,

  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".swiper-wrapper",
  }
});
