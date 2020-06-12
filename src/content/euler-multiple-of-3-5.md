---
layout: post
author: Gian
title: 'Project Euler: Multiples of 3 and 5'
date: 2020-06-10 00:06:15
tags: ['Engineering']
draft: true
image: img/code-repeat.jpg
---

```javascript
const isMultipleOf = n => {
  return n % 3 === 0 ? 3 : n % 5 === 0 ? 3 : 0;
};

/**
 *
 * @desc solutionA
 * complejidad: o(1). es una simple operacion matematica dentro de un rango numerico
 */
const solution = a => {
  let result = 0;
  for (let i = 0; i < a; ++i) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
};

/**
 *
 * @desc solutonB
 * complejidad: o(n) porque en primera instancia, debemos de crear un array con N cantidad de elementos y luego iterar dentro de el y hacer una operacion matematica
 *
 */
const solutionB = n => {
  const sumIndexes = (accum, current, index) => {
    if (index % 3 === 0 || index % 5 === 0) return accum + index;
    return accum;
  };

  /***
   * Se crea un array de N cantidad de elementos
   * Se clona
   *
   */
  return [...new Array(n)].reduce(sumIndexes, 0); //?
};

solutionB(1000); //?
solution(1000); //?
```
