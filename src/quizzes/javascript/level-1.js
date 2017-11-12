export default {
  name: 'JavaScript - level 1',
  category: 'JavaScript',
  promo: '/static/images/quiz-banners/logo-javascript.png',
  author: {
    name: 'Piotr Kowalski',
    email: 'piecioshka@gmail.com',
    url: 'https://piecioshka.pl/'
  },
  questions: [
    {
      title: "Z jakich 3 warstw składa się JavaScript?",
      hints: [],
      answers: [
        "Core, BOM, DOM",
        "Webkit, DevTools, HTML",
        "Core, DOM, HTML",
        "HTML, CSS, obrazki"
      ],
      correctAnswerIndex: 0
    },
    {
      title: "Difference between `==` & `===`?",
      hints: [],
      answers: [
        "żadna",
        "jest, ale nie pamiętam",
        "`==` spr. typ, a potem wartość, `===` spr. od razu wartość, nie spr. typu",
        "`===` spr. typ, a potem wartość, `==` spr. od razu wartość, nie spr. typu"
      ],
      correctAnswerIndex: 3
    },
    {
      title: "Różnica między `null` a `undefined`?",
      hints: [],
      answers: [
        "żadna",
        "jest, ale nie pamiętam",
        "`null` jest nieokreślonym obiektem, `undefined` jest wartością nieokreśloną",
        "`null` jest pustą wartością, `undefined` jest tym samym"
      ],
      correctAnswerIndex: 2
    },
    {
      title: "W jaki sposób można odwrócić ciąg znaków? Z **pies** otrzymać **seip**.",
      hints: [],
      answers: [
        "`'pies'.reverse()`",
        "`'pies'.split('').reverse().join('')`",
        "`'pies'.invert()`",
        "`'pies'.join('').reverse().split('')`",
        "`'pies'.flip()`"
      ],
      correctAnswerIndex: 1
    },
    {
      title: "Co zwróci operator `typeof` wykonany przez takimi wartościami: `[]`, `{}`, `1`, `NaN`, `null`, `pies`, `Function`",
      hints: [],
      answers: [
        "array, object, number, number, null, string, function",
        "array, object, number, number, object, string, function",
        "object, object, number, number, null, string, function",
        "object, object, number, number, object, string, function",
        "object, object, number, undefined, null, string, function"
      ],
      correctAnswerIndex: 3
    },
    {
      title: "Jak usunąć element (znacznik) z DOM (Document Object Model)?",
      hints: [],
      answers: [
        "`element.removeNode()`",
        "`element.removeElement()`",
        "`element.parentNode.removeChild(element)`",
        "`element.remove()`"
      ],
      correctAnswerIndex: 2
    },
    {
      title: "Jak skopiować tablicę?",
      hints: [],
      answers: [
        "`[1, 2].copy(true)`;",
        "`[1, 2].copy()`;",
        "`[1, 2].clone()`;",
        "`[1, 2].slice(0)`;"
      ],
      correctAnswerIndex: 3
    }
  ]
};
