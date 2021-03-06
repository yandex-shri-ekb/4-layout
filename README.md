# 4-layout

## Модель отображения

Четвёртое домашнее задание по курсу ШРИ: Модель отображения.

## Описание

Задание состоит из пяти задач, последние две из них повышенной сложности и помечены «звездочкой». 
В первых трех задачах необходимо придумать или найти максимальное число решений, а также нужно объяснить
чем решения различаются и в каких ситуациях их стоит/не стоит применять. Задачи повышенной сложности 
нужно просто решить

## Задание №1 «Эй вы, трое»

Реализуйте трёхколоночную резиновую разметку страницы вида 1-2-1 (25%–50%–25%).


## Задание №2 «Всегда в центре»

У вас есть абсолютно спозиционированный блок с каким-то содержимым. Необходимо поместить его в центре:
  * По ширине страницы, если
    * Блок имеет фиксированную ширину
    * Блок имеет ширину, которая подстраивается под размер содержимого
  * По высоте страницы, если
    * Блок имеет фиксированную высоту
    * Блок имеет высоту, которая подстраивается под размер содержимого (не забудьте скролл ;)

Всё это разные варианты окружения, сооответственно каждое имеет несколько решений.


## Задание №3 «Подвал»

Реализуйте прибитый подвал. Т.е подвал, который всегда прибит к нижней границе viewport'а, если высота содержимого 
меньше высоты viewport'а, и находится под содержимым, в случае если высота содержимого больше высоты viewport'а


## Задание №4\* «Двигайся, давай»

Реализуйте разметку, указанную на картинке:
![Задание №4](http://img-fotki.yandex.ru/get/9555/54530400.3/0_7c9fb_1fdc72d3_orig "Задание №4")
Дополнительным бонусом будет работоспособность реализованной разметки в IE&lt;8.


## Задание №5\* «Тройняшки мы»

Нужно реализовать такое поведение трех элементов интерфейса (например, кнопок) при котором каждая кнопка занимает примерно треть пространства. И, если уменьшая браузер
одна из кнопок достигает своего минимального размера, то остальные кнопки тоже перестают уменьшаться по ширине. Схематически задание можно изобразить так:
![Задание №5](http://img-fotki.yandex.ru/get/9061/54530400.3/0_7ca2a_b7da5f6e_orig "Задание №5")


## Ссылки из лекций
  * [Спецификация CSS - Боксовая модель](http://www.w3.org/TR/CSS2/box.html)
  * [Спецификация CSS - Схемы позиционирования](http://www.w3.org/TR/CSS2/visuren.html)
  * [MDN](https://developer.mozilla.org/) - здесь всегда очень хорошие описания спецификации человеческим языком, в том числе поддержка свойств и особенности реализации
  * [Хабрахабр - Подробно о float](http://habrahabr.ru/post/142486/)
  * [Хабрахабр - То что вам никто не говорил про z-index](http://habrahabr.ru/post/166435/)
  * [Troubleshooting CSS](http://tympanus.net/codrops/2013/07/17/troubleshooting-css/) (или можно почитать перевод на Хабре [http://habrahabr.ru/post/189118/](Проблемы CSS))
  * [Принципы работы современных браузеров](http://www.html5rocks.com/ru/tutorials/internals/howbrowserswork/)
  * [Учебник Вани Сагалаева](http://softwaremaniacs.org/blog/category/primer/)
