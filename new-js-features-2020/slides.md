---
title: Lets talk about ... Whats new and upcoming in JavaScript (2020)
---

---
build: true

## Lets Talk about ...
## Whats new (and upcoming) in JS
## 2020 Edition

---
build: true

# Stages
- Stage 0: Strawperson (Nothing/PoC)
- Stage 1: Proposal (Polyfill)
- Stage 2: Draft (Experimental)
- Stage 3: Candidate (Spec compliant)
- Stage 4: Finished (Shipping)

---
type: section
build: true

## Stage 0 (Strawperson)
## Stage 1 (Proposal)

---
build: true

## Already mentioned
- Nested Imports
- Math Extensions
- Iterator Extensions

---
build: true

# Dedent

---
build: true

## Current

```
console.log(`
  query foo {
    bar
  }
`)
```
- Logs the following string (please note the new lines and indent)
```

  query foo {
    bar
  }

```

---

## Expected

```
console.log(`
  query foo {
    bar
  }
`)
```
- Logs the string without indent and extra lines
```
query foo {
  bar
}
```

---
build: true

## Current Solution

```
import dedent from 'ts-dedent'

console.log(dedent`
  query foo {
    bar
  }
`)
```
- Extra package to remove indentation
```
query foo {
  bar
}
```

---
build: true

## Problems

```
const query = dedent(sql)`
  select *
  from students
  where name = ${name}
`
```

```
const raw = dedent`
  select *
  from students
  where name = ${name}
`

sql`${raw}`;
```

---

## Proposal

````
console.log(```
  query foo {
    bar
  }
```)
````
- Three backtick literals avoids extra space
```
query foo {
  bar
}
```

---
build: true

# UUID

---
build: true

## UUID

```
randomUUID();
```

```
// => "52e6953d-edbe-4953-be2e-65ed3836b2f0"
```

---
build: true

# Async Constructors

---
build: true

## Async Constructors

```
class X {
  async constructor() {
     await ...;
  }
}
```

```
class Y extends X {
  async constructor() {
     await.super();
  }
}
```

---
build: true

# Number.range

---
build: true

## Number.range

```
Number.range(0, Infinity)
  .take(1000)
  .filter((x) => !(x % 3))
  .toArray()
```

```
[...Number.range(1, 100, 2)]
// => odd number from 1 to 99
```

---

## BigInt.range

```
BigInt.range(0, Infinity)
  .take(1000)
  .filter((x) => !(x % 3))
  .toArray()
```

```
[...BigInt.range(1, 100, 2)]
// => odd number from 1 to 99
```

---
build: true

# Array

---
build: true

## Array.equals

```
[{
  foo: 'bar'
}, {
  foo: 'baz'
}].equals[{
    foo: 'bar'
}] // => false
```

```
[{ foo: 'bar' }, { foo: 'baz' }].equals([
  { foo: 'bar' }, { foo: 'baz' }
]) // => true
```

---
build: true

## Array.uniqueBy

```
[1, 2, 3, 3, 2, 1].uniqueBy();
```

```
// => [1, 2, 3]
```

---
build: true

## Array.uniqueBy

```
data = [
  { id: 1, uid: 10000 },
  { id: 2, uid: 10000 },
  { id: 3, uid: 10001 }
];
```

```
data.uniqueBy('uid');
// [
//   { id: 1, uid: 10000 },
//   { id: 3, uid: 10001 }
// ]
```

---
build: true

## Array.uniqueBy

```
data.uniqueBy(({ id, uid }) => `${id}-${uid}`);
```

```
// [
//   { id: 1, uid: 10000 },
//   { id: 2, uid: 10000 },
//   { id: 3, uid: 10001 }
// ]
```

---
build: true

## Array.item

```
[1, 2, 3].item(1);
```

```
// => 2
```

```
[1, 2, 3].item(-1);
```

```
// => 3
```

---
build: true

# await.ops

---
build: true

## await.ops

```
// before
await Promise.all(
  users.map(async x => fetchProfile(x.id))
)
```

```
// after
await.all users.map(
  async x => fetchProfile(x.id)
)
```

---
build: true

## await.ops

```
await.all expr
// => await Promise.all(expr)
```

```
await.race expr
// => await Promise.race(expr)
```

```
await.allSettled expr
// => await Promise.allSettled(expr)
```

```
await.any expr
// => await Promise.any(expr)
```

---
type: section
build: true

## Stage 2 (Draft)
## Stage 3 (Candidate)

---
build: true

## Already mentioned
- Observable
- Decorators
- Temporal
- Promise Extensions
- Set Extensions
- Realms

---
build: true

## private
### in classes or objects

```
class ColorFinder {
  static #red = "#ff0000";
  static #blue = "#00ff00";
  static #green = "#0000ff";
```

---

```
class ColorFinder {
  static #red = "#ff0000";
  static #blue = "#00ff00";
  static #green = "#0000ff";
  static colorName(name) {
    switch (name) {
      case "red": return ColorFinder.#red;
      case "blue": return ColorFinder.#blue;
      case "green": return ColorFinder.#green;
      default: throw new RangeError("unknown color");
    }
  }
}
```

---
build: true

# Record

---

# Record & Tuple

---
build: true

## Record
- immutable
- object like

```
#{ a: 1 }
```

---
build: true

## Record

```
assert({ a: 1 } !== { a: 1 });
```

```
assert(Object(#{ a: 1 }) !== Object(#{ a: 1 }));
```

```
#{ a: 1 } === #{ a: 1 });
```

```
assert(#{ a: NaN } === #{ a: NaN });
```

```
assert(typeof #{ a: 1 } === "record");
```

```
assert(#{ a: 1 } === JSON.parseImmutable(
  JSON.stringify(#{ a: 1 })
));
```

---
build: true

## Record

```
assert(#{ a: 1, b: 2 } === #{ b: 2, a: 1 });
```

```
Object.keys(#{ a: 1, b: 2 }) // => ["a", "b"]
Object.keys(#{ b: 2, a: 1 }) // => ["a", "b"]
```

---
build: true

## Tuple
- immutable
- array like

```
#[ 1, 2, 3 ]
```

---
build: true

## Tuple

```
assert([1, 2] !== [1, 2]);
```

```
assert(Object(#[1, 2]) !== Object(#[1, 2]));
```

```
assert(#[1, 2] === #[1, 2]);
```

```
assert(#[NaN] === #[NaN]);
```

```
assert(typeof #[1, 2] === "tuple");
```

```
assert(#[1, 2] === JSON.parseImmutable(
  JSON.stringify(#[1, 2])
));
```

---
build: true

# Import Assertions

---
build: true

## Import Assertions

```
import json from "./foo.json" assert { type: "json" };
```

```
import("foo.json", { assert: { type: "json" } });
```

---
build: true

## Import Assertions
### using TypeScript / Babel

```
import * as data from "./foo.json";
```

```
// "compilerOptions": { "resolveJsonModule": true }
```

---
build: true

# Optional
## Chaining

---
build: true

## Current

```
var query = 'input[name=foo]';
var $input = $form.querySelector(query)
var value = $input ? $input.value : undefined
```

---
build: true

## With optional chaining

```
var fooValue = $form.querySelector(query)?.value
```

```
var street = user?.address?.street
```

```
iterator.return?.() // manually close an iterator
```

---
build: true

# Nullish
## Coalescing

---
build: true

## current

```
const undefinedValue =
  response.settings?.undefinedValue
  || 'some other default'
; // result: 'some other default'
```

```
const nullValue =
  response.settings?.nullValue
  || 'some other default'
; // result: 'some other default'
```

---
build: true

## current problems

```
response.settings?.showSplashScreen || true
```

```
// False evaluates to false, result: true
```

```
response.settings?.animationDuration || 300;
```

```
// 0 evaluates to false, result: 300
```

```
response.settings?.headerText || 'Hello, world!'
```

```
// '' evaluates to false, result: 'Hello, world!'
```

---
build: true

## Nullish Coalescing

```
response.settings?.showSplashScreen ?? true
```

```
response.settings?.animationDuration ?? 300;
```

```
response.settings?.headerText ?? 'Hello, world!'
```

---
build: true

# Numeric
## Separators

---
build: true

## current

```
1000000000
101475938.38
// Is this a billion? a hundred millions? Ten millions?
```

```
let fee = 12300;
// is this 12,300? Or 123, because it's in cents?
```

```
let amount = 1234500;
// is this 1,234,500? Or cents, hence 12,345?
// Or financial, 4-fixed 123.45?
```

---
build: true

## Numeric Separators

```
1_000_000_000           // Ah, so a billion
101_475_938.38          // hundreds of millions
```

```
let fee = 123_00;       // $123 (12300 cents)
let fee = 12_300;       // $12,300 (thats much)
```

```
let amount = 12345_00;  // 12,345 (1234500 cents)
let amount = 123_4500;  // 123.45 (4-fixed fin.)
let amount = 1_234_500; // 1,234,500
```

---
build: true

## Numeric Separators

```
0.000_001 // fractions
```

```
1e10_000  // exponents
```

```
let nibbles = 0b1010_0001_1000_0101; // binary
```

```
let brandColor = 0x44_BB_44; // hex (colors)
```

---
build: true

## Top Level await

```
const connection = await dbConnector();
```

```
const strings = await import(`/i18n/${navigator.language}`);
```

---
background: assets/images/all-the-things.jpg

# &nbsp;
# Thats it

---
build: true

## Whats next?
- [List of features added lately to v8](https://v8.dev/features)
- [List of proposals](https://github.com/tc39/proposals)
- [Babel Playground](https://babeljs.io/repl/)
- [TypeScript Playground](https://www.typescriptlang.org/play/)
- [CodePen](https://codepen.io/)

---
type: section

# Questions?
