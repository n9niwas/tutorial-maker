### Домашнє завдання

Припустимо що нам потрібно розробити фічу яка дозволяє виводити в термінал результат простих математичних операцій.

В цьому завданні ми створимо новий бранч, напишемо код для фічі, запушимо бранч в гітхаб та зробимо рев'ю одне одного.  
Успішним виконанням цього завдання є скріпт який вірно виконує математичну операцію, та цей скріпт має бути в бранчі `next`.

1. Обери математичну операцію:

`+` додаток  
`-` віднімання  
`*` множення  
`/` поділ

2. Створи новий бранч з назвою в такому форматі `ініціали/фіча`.

   Дивись пункт [1] документа [creating-new-pull-request.md](https://github.com/n9niwas/tutorial-maker/blob/next/docs/creating-new-pull-request.md) з командами для створення бранчей.

3. Створи новий файл який буде містити код для фічі.  
   Ім'я файла має описувати що цей файл робить.

   Дивись пункт [1] документа [running-scripts.md](https://github.com/n9niwas/tutorial-maker/blob/next/docs/running-scripts.md) з командами для створення файлів.

4. Напишемо код для цієї фічі.

В цьому ДЗ ми ознайомимося з новою функцією: `console.log`.  
Ця функція виводить в термінал значення переданих в неї аргументів.  
Наприклад цей код виводить в термінал строку `hello world`:

```ts
console.log('hello world');
```

А цей число `5`:

```ts
console.log(5);
```

Також можна вивести багато значень одночасно:

```ts
console.log('строка', 1, 2, 3);
```

Спробуй виконати код зверху та подивись на результат. Звертайся до документа [running-scripts.md](https://github.com/n9niwas/tutorial-maker/blob/next/docs/running-scripts.md) щоб згадати як виконувати файли з кодом (скріпти).

Тепер напиши код який виконує обрану математичну операцію.  
_Підказка:_ математичні оператори потребують формата `<число> <оператор> <число>`, наприклад `1 + 1` aбо `5 - 15` і т.д.

Не забудь зберегти файл!

5. Закомміть свої зміни. Звертайся до пункта [3] документа [creating-new-pull-request.md](https://github.com/n9niwas/tutorial-maker/blob/next/docs/creating-new-pull-request.md) для команд.

6. Запуш свій бранч в гітхаб. Звертайся до пункта [4] документа [creating-new-pull-request.md](https://github.com/n9niwas/tutorial-maker/blob/next/docs/creating-new-pull-request.md) для команд.

7. Створи пул реквест та попрохай свого партнера прорев'юїти.

8. Відкрий пул реквест свого партнера та подивись на зміни (пункти [1]-[2] документа [reviewing-pull-requests.md](https://github.com/n9niwas/tutorial-maker/blob/next/docs/reviewing-pull-requests.md)).

Перевір локально що код твого партнера з математичною операцією виконується корректно (пункт [3] документа [reviewing-pull-requests.md](https://github.com/n9niwas/tutorial-maker/blob/next/docs/reviewing-pull-requests.md)).

9. Додай коментар до строки з `console.log` та попрохай замінити числа на якісь інші (пункт [4] документа [reviewing-pull-requests.md](https://github.com/n9niwas/tutorial-maker/blob/next/docs/reviewing-pull-requests.md)).

Твій партнер зробить те ж саме, тому повернись до свого бранча (`git checkout назва_бранча`), заміни числа, закоміть та запуш зміни.

В пул реквесті твого партнера перевір що числа тепер насправді такі як треба та натисни `Resolve conversation` якщо все вірно.

10. Заапрувни пул реквест твого партнера (пункт [6] документа [reviewing-pull-requests.md](https://github.com/n9niwas/tutorial-maker/blob/next/docs/reviewing-pull-requests.md)).

11. Змерджи свій пул реквест після того як твій партнер його заапрувив. Звертайся до документа [merging-pull-requests.md](https://github.com/n9niwas/tutorial-maker/blob/next/docs/merging-pull-requests.md).
