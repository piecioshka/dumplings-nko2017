export default {
  name: 'JavaScript - level 2',
  categoryName: 'JavaScript',
  promo: '/static/images/quiz-banners/logo-javascript.png',
  author: {
    name: 'Piotr Kowalski',
    email: 'piecioshka@gmail.com',
    url: 'https://piecioshka.pl/'
  },
  questions: [
    {
      title: "Jaki będzie wynik wyrażenia:\n" +
      "```javascript\n" +
      "for (var i = 0; i < 5; i++) {\n" +
      "    if (i === 0) {\n" +
      "        setTimeout(function () {\n" +
      "            console.log(i); // ???\n" +
      "        }, 1000);\n" +
      "    }\n" +
      "}\n" +
      "    ```\n",
      hints: [],
      answers: [
        "5",
        "4",
        "0",
        "1"
      ],
      correctAnswerIndex: 0
    },
    {
      title: "Do czego służy `document.createDocumentFragment()`?",
      hints: [],
      answers: [
        "do tworzenia nowego dokumentu",
        "do tworzenia nowego fikcyjnego kontenera, który nie ma zdefiniowanego znacznika",
        "do tworzenia referencji do ostatniego utworzonego kontenera"
      ],
      correctAnswerIndex: 1
    },
    {
      title: "Do czego wykorzystywana jest metoda `hasOwnProperty`?",
      hints: [],
      answers: [
        "do sprawdzania typu zmiennej",
        "do sprawdzania czy zmienna istnieje",
        "do sprawdzania czy właściwość istnieje",
        "do sprawdzania czy dana właściwość należy do oryginalnego obiektu, a nie do jego prototypu"
      ],
      correctAnswerIndex: 3
    },
    {
      title: "Jaka jest różnica między `.call` i `.apply`?",
      hints: [],
      answers: [
        "nie ma",
        "pierwsza oczekuje listy parametrów, którą przekaże funkcji na której zostanie uruchomiona, druga tablicy parametrów",
        "różnica w szybkości działania",
        "pierwsza oczekuje tablicy parametrów, którą przekaże funkcji na której zostanie uruchomiona, druga listy parametrów"
      ],
      correctAnswerIndex: 1
    },
    {
      title: "Jaki będzie wynik operacji: '1' + 2 + 3",
      hints: [],
      answers: [
        "6",
        "'123'",
        "'6'",
        "123"
      ],
      correctAnswerIndex: 1
    },
    {
      title: "Co się stanie, gdy użyjemy zmiennej która nie istnieje?",
      hints: [],
      answers: [
        "stworzy się z wartością `undefined`",
        "zostanie rzucony błąd `ReferenceError`",
        "nic",
        "stworzy się z wartością `null`"
      ],
      correctAnswerIndex: 1
    },
    {
      title: "Co zostanie wyświetlone w konsoli?\n" +
      "```js\n" +
      "var a = 5;\n" +
      "(function() {\n" +
      "    var a = 10;\n" +
      "})();\n" +
      "console.log(a); // ???\n" +
      "```\n",
      hints: [],
      answers: [
        "10",
        "0",
        "5",
        "15"
      ],
      correctAnswerIndex: 2
    },
  ]
};
