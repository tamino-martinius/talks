---
title: Lets talk about ... Whats new and upcoming in JavaScript (2018)
---

---
build: true

## Lets Talk about ...
## Whats new (and upcoming) in JS
## 2018 Edition

---

# Arrow functions

---
build: true

## Basic Example

```js
odds  = evens.map(function (v) {
  return v + 1;
});
```

```js
odds  = evens.map(v => v + 1);
```

---
build: true

## Multiple parameters

```js
nums = numbers.map(function (v, i) {
  return v + i;
});
```

```js
nums  = numbers.map((v, i) => v + i);
```

---
build: true

## Multiple actions

```js
let shift = false;
shiftPartial = numbers.map(v => {
  shift = !shift;
  return shift ? v + 1 : v;
});
```

---
build: true

## It's a Trap

```js
obj = values.map(v => { [v]: v });
```

---

## It can be a Trap

```js
obj = values.map(v => { [v]: v });
```

```js
obj = values.map(v => ({ [v]: v }));
```

---
build: true

# Promises

```js
function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
```

---
build: true

# Async & Await

```js
async function work() {
  await timeout(10000);
  console.log('done');
}

work();
```

---

# Rest Parameter

---

## ES 5

---
build: true

## ES 5

```js
function f (x, y) {
  var a = Array.prototype.slice.call(
    arguments, 2
  );
  return (x + y) * a.length;
};
f(1, 2, "hello", true, 7) === 9;
```

---
build: true

## ES 6

```js
function f (x, y, ...a) {
  return (x + y) * a.length;
}
f(1, 2, "hello", true, 7) === 9;
```

---

# Template literals

---
build: true

## ES 5

```js
console.log(
  "Hello " + firstName + ",\n" +
  "greetings from GLaDOS"
);
```

---
build: true

## ES 6

```js
console.log(`
  Hello ${firstName},
  greetings from GLaDOS
`);
```

---
build: true

## Its a trap

```
\n
\tHello ${firstName},\n
\tgreetings from GLaDOS\n
```

---
build: true

## It can be a trap

```js
console.log(dedent`
  Hello ${firstName},
  greetings from GLaDOS
`);
```

---

# Iterators

---
build: true

## ES 5

```js
function fibonacci(n) {
  if (n <= 1) return 1;
  return
    fibonacci(n - 1) +
    fibonacci(n - 2)
  ;
}
```

---
build: true

## ES 5

```js
function fibonacci(n) {
  if (n <= 1) return 1;
  return
    fibonacci(n - 1) +
    fibonacci(n - 2)
  ;
}
```

---
build: true

## ES 6 Iterable

```js
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1
    return {
      next () {
        [ pre, cur ] = [ cur, pre + cur ];
        return { done: false, value: cur };
      },
    };
  },
};
```

---
build: true

## ES 6 Iterable Usage

```js
for (let n of fibonacci) {
  if (n > 1000) break;
  console.log(n);
}
```

---

# Generators

---
build: true

## ES 6 Iterable

```js
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1
    return {
      next () {
        [ pre, cur ] = [ cur, pre + cur ];
        return { done: false, value: cur };
      },
    };
  },
};
```

---
build: true

## ES 6 Generator

```js
let fibonacci = {
  *[Symbol.iterator]() {
    let pre = 0, cur = 1
    for (;;) {
      [ pre, cur ] = [ cur, pre + cur ];
      yield cur;
    }
  },
};
```

---

## ES 6 Generator

```js
let *fibonacci = {
  let pre = 0, cur = 1
  for (;;) {
    [ pre, cur ] = [ cur, pre + cur ];
    yield cur;
  }
};
```

---
build: true

## Generator vs Recursion
- Recursion often looks more readable
- Generator can easily use past values

---
build: true

## Building an range array

```js
function range(start, end, step) {
  const range = [];
  while (start < end) {
    range.push(start);
    start += step;
  }
  return range;
}
for (let i of range(0, 10, 2)) {
  console.log(i) // 0, 2, 4, 6, 8
}
```

---
build: true

## ES 6 Generator

```js
function *range(start, end, step) {
  while (start < end) {
    yield start
    start += step
  }
}
for (let i of range(0, 10, 2)) {
  console.log(i) // 0, 2, 4, 6, 8
}
```

---
build: true

## Generator vs Array
- Array can look more readable
- Generator does not create unused values

---
build: true

## Async Generator

```js
async function *getShifts() {}
  while (true) {
    this.buffer = await this.getNextPage();
    if (this.buffer) {
      while(this.buffer.length) {
        yield this.buffer.shift();
      }
    } else { return false; }
  }
}
```

---

```js
this.buffer = await this.getNextPage();
if (this.buffer) {
  while(this.buffer.length) {
    yield this.buffer.shift();
    if (this.buffer.length < 10) {
      this.buffer.push(
        ...await this.getNextPage()
      );
    }
  }
} else { return false; }
```

---
background: assets/images/all-the-things.jpg

# &nbsp;
# Thats it

---

## Whats next?
- [List of features added lately to v8](https://v8.dev/features)
- [List of proposals](https://github.com/tc39/proposals)
- [Babel Playground](https://babeljs.io/repl/)
- [TypeScript Playground](https://www.typescriptlang.org/play/)
- [CodePen](https://codepen.io/)

---
type: section

# Questions?
