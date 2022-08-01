### Константи

В ДЗ лекції 2 ми зробили дві функції, одна переводить долари в гривні, інша навпаки:

```ts
function convertFromUsdToUah(dollarAmount: number) {
  return dollarAmount * 36.97;
}

function convertFromUahToUsd(uahAmount: number) {
  return uahAmount / 36.97;
}

console.log('usd -> uah:', convertFromUsdToUah(100));
console.log('uah -> usd:', convertFromUahToUsd(100));
```

Ми бачимо що курс долара до гривні (`36.97`) повторюється 2 рази. Тепер якщо курс зміниться нам треба буде замінити його в двох місцях.  
Це не є гарним. Наприклад уявте що курс тепер `35.50` i якийсь розробник замінить значення курсу в функції `convertFromUsdToUah` але забуде зробити це в `convertFromUahToUsd`. Тепер наша функція з переводу гривень в долари невірно підраховує число доларів (по старому курсу).

Така проблема вирішується виносом значень що повторюються в константу.

Об'явлення констант має такий формат:

```ts
const назва_константи: тип_константи = значення_константи;
```

`const` - це ключове слово мови TypeScript однакове для всіх констант.  
`назва_константи` - описує за що відповідає ця константа. Не може містити пробілів.  
`тип_константи` - тип (наприклад число).  
`=` - операція присвоювання значення.  
`значення_константи` - значення яке буде підставлене замість `назва_константи`.

Наприклад створимо нову константу `uahExchangeRate` яка буде містити курс гривні на сьогодні:

```ts
const uahExchangeRate: number = 36.97;
```

Тепер замінимо значення `36.97` на `uahExchangeRate` всюди по коду:

```ts
const uahExchangeRate: number = 36.97;

function convertFromUsdToUah(dollarAmount: number) {
  return dollarAmount * uahExchangeRate;
}

function convertFromUahToUsd(uahAmount: number) {
  return uahAmount / uahExchangeRate;
}

console.log('usd -> uah:', convertFromUsdToUah(100));
console.log('uah -> usd:', convertFromUahToUsd(100));
```

Виконаємо `currency-converter.ts` та побачимо в терміналі результат:

```bash
usd -> uah: 3697
uah -> usd: 2.704895861509332
```

Тепер змінимо значення `uahExchangeRate` на `35.50` та виконаємо скріпт знову:

```bash
usd -> uah: 3550
uah -> usd: 2.816901408450704
```

Як бачимо зміною коду в одному місці нам вдалося поміняти курс для конвертації гривень в долари та доларів в гривні.

Іноді константи використовуються просто щоб код був більш читабельний.  
Наприклад якщо наш код виводить $10 в гривнях:

```ts
console.log(convertFromUsdToUah(10));
```

То більш читабельним є варіант:

```ts
const uahAmount = convertFromUsdToUah(10);
console.log(uahAmount);
```

### Тип `string` (строка)

В першій лекції ми виводили строку `hello world` в термінал:

```ts
console.log('hello world');
```

Щоб потренуватись, винесемо `hello world` до константи:

```ts
const helloWorld: string = 'hello world';

console.log(helloWorld);
```

Якщо тип `number` описує числа, то аргументи або константи з типом `string` можуть містити в собі текст.  
Наприклад той же самий код запишемо в формі функції:

```ts
function printText(text: string) {
  console.log(text);
}

printText('hello world');
```

### Вітвлення коду за допомогою `if`

Блок `if` використовується для того щоб виконати код в залежності від різних станів програми та має такий формат:

```ts
if (вираження) {
  // код
}
```

Щоб зрозуміти для чого потрібен `if`, вернемось до нашого конвертера валют.  
Зробимо функцію з конвертації валют більш універсальною.  
Наприклад замість двох функцій об'явимо одну функцію `convertCurrency` з такими аргументами:

```ts
function convertCurrency(from: string, to: string, amount: number) {}
```

де `from` - валюта з якої переводити, `to` - валюта в яку переводити та `amount` - кількість цієї валюти.

Для того щоб виконати різний код в залежності від того, які значення були передані в `from` і `to` використаємо блок `if`:

```ts
function convertCurrency(from: string, to: string, amount: number) {
  if (from === 'uah' && to === 'usd') {
    return convertFromUahToUsd(amount);
  }

  return convertFromUsdToUah(amount);
}
```

Вираження в `if` містить два нових оператора, `===` та `&&`.  
`===` перевіряє що лівий операнд (наприклад `from`) має те ж значення що і правий операнд (`'uah'`).  
`&&` перевіряє що обидва вираження (`from === 'uah'` та `to === 'usd'`) є істиною.

Це означає що функція `convertFromUahToUsd` виконаєтсья тільки якщо `from` дорівнює `'uah'` **та** `to` дорівнює `'usd'`.  
Іншими словами, що ми переводимо гривні в долари, а у будь яких інших випадках код в цьому блоці `if` не виконається.

Тепер наш код повністю виглядає так:

```ts
const uahExchangeRate: number = 35.5;

function convertFromUsdToUah(dollarAmount: number) {
  return dollarAmount * uahExchangeRate;
}

function convertFromUahToUsd(uahAmount: number) {
  return uahAmount / uahExchangeRate;
}

function convertCurrency(from: string, to: string, amount: number) {
  if (from === 'uah' && to === 'usd') {
    return convertFromUahToUsd(amount);
  }

  return convertFromUsdToUah(amount);
}

console.log('usd -> uah:', convertCurrency('usd', 'uah', 100));
console.log('uah -> usd:', convertCurrency('uah', 'usd', 100));
```
