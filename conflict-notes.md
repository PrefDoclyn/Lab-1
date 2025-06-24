# Raport z rozwiązania konfliktu (Zadanie 2)

## Gdzie wystąpił konflikt
Konflikt pojawił się podczas łączenia gałęzi `feature/header-design-a` oraz `feature/header-design-b` do gałęzi `main`. Obie gałęzie wprowadzały różne zmiany w elemencie `<h1>` na stronie `index.html`.

## Na czym polegał konflikt
- W `feature/header-design-a`:  
  `<h1>Welcome to Lab Project - Version A</h1>`
- W `feature/header-design-b`:  
  `<h1>My Awesome Lab Website - B style</h1>`

Git nie był w stanie automatycznie scalić tych zmian, ponieważ dotyczyły tego samego fragmentu kodu.

## Jak został rozwiązany
Ręcznie otworzyłem plik `index.html`, usunąłem znaczniki konfliktu (`<<<<<<<`, `=======`, `>>>>>>>`) i zostawiłem ostateczną wersję nagłówka:

```html
<h1>Welcome to My Awesome Lab Project!</h1>
