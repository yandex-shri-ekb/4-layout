# 4-layout


## Задание №1 «Эй вы, трое»

 * [Вариант № 1 Таблица - вариант древний и беспощадный, работает везде,но не семантичен и говорят таблицы рендерятся по особому](https://rawgithub.com/LanSaid/4-layout/VM/4-1_1.html)
 
 * [ВАРИНТ № 2 Современная таблица работает везде, семантичен слегка, но таблицей и осталась](https://rawgithub.com/LanSaid/4-layout/VM/4-1_2.html)
 
 * [ВАРИНТ № 3 Float'ы разные и много всяких вариантов (все left, left+ right и т.д.) у float'ов видно, что background разный и если его нужно учитывать нужные хитрости](https://rawgithub.com/LanSaid/4-layout/VM/4-1_3.html)
 
 * [ВАРИНТ № 4 Позиционирование - необходима обертка, также если будет что-то всплывающее то с z-index'ами возможны проблемы](https://rawgithub.com/LanSaid/4-layout/VM/4-1_4.html)
 
 * [ВАРИНТ № 5 Современный используем inline-block  и учитываем пробелы либо все тэги пишем без пробелов, или с помощью margin-left сдвигаем или уменьшаем немного ширину или font-size: 0 (возможны проблемы Android'a) и для ie7 и меньше - zoom 1](https://rawgithub.com/LanSaid/4-layout/VM/4-1_5.html)

 * [ВАРИНТ № 6 ультраСовременный - flexbox почти что всем хорош (наверное кроме того что почти не поддерживается)</a></li>](https://rawgithub.com/LanSaid/4-layout/VM/4-1_5.html)

## Задание №2 «Всегда в центре»

  * По ширине страницы, если
    * [Блок имеет фиксированную ширину](https://rawgithub.com/LanSaid/4-layout/VM/4-2_h-1.html)
    * [Блок имеет ширину, которая подстраивается под размер содержимого 1](https://rawgithub.com/LanSaid/4-layout/VM/4-2_h-2.html)
    * [Блок имеет ширину, которая подстраивается под размер содержимого 2](https://rawgithub.com/LanSaid/4-layout/VM/4-2_h-3.html)
  * По высоте страницы, если
    * [Блок имеет фиксированную высоту](https://rawgithub.com/LanSaid/4-layout/VM/4-2_v-1.html)
    * [Блок имеет высоту, которая подстраивается под размер содержимого](https://rawgithub.com/LanSaid/4-layout/VM/4-2_v-2.html)
    * [Блок имеет высоту, которая подстраивается под размер содержимого](https://rawgithub.com/LanSaid/4-layout/VM/4-2_v-3.html)

## Задание №3 «Подвал»

  * [Подвал 1](https://rawgithub.com/LanSaid/4-layout/VM/4-3_1.html)
  * [Подвал 2](https://rawgithub.com/LanSaid/4-layout/VM/4-3_2.html)


## Задание №4\* «Двигайся, давай»

* [Двигайся Раз](https://rawgithub.com/LanSaid/4-layout/VM/4-4.html)
 По идее должно и наоборот, в том смысле что float делать отдельный квадратик, но не работает...


## Задание №5\* «Тройняшки мы»
* [Тройняшки 1](https://rawgithub.com/LanSaid/4-layout/VM/4-5.html)
 Вся хитрость в ширине по умолчанию для обертки (100/ кол-во элементов) и приходится поднимать 2-ой и последующие
элементы на высоту равную высоте элеента + padding(верхний-нижний)


