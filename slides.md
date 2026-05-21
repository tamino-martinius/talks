---
title: Lets talk about ... Whats new and upcoming in JavaScript (2019)
---

---
build: true

## Lets Talk about ...
## Whats new (and upcoming) in JS
## 2019 Edition

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

## Stage 0 (Strawperson)

---

# Nested Import

---
build: true

## Currently

```js
import { strictEqual } from 'assert';
import { check as checkC } from './client.js';
import { check as checkS } from './server.js';
```

```js
describe('fancy feature #5', () => {
  it('should work on the client', () => {
    strictEqual(checkC(), 'client ok');
  });

  it('should work on the server', () => {
    strictEqual(checkS(), 'server ok');
  });
});
```

---
build: true

## With nested imports

```js
describe('fancy feature #5', () => {
  import { strictEqual } from 'assert';

  it('should work on the client', () => {
    import { check } from './client.js';
    strictEqual(check(), 'client ok');
  });

  it('should work on the server', () => {
    import { check } from './server.js';
    strictEqual(check(), 'server ok');
  });
});
```

---
build: true

## Advantages
- Lazy evaluation
- Scoped to enclosing block
- Backwards compatible

---
type: section

## Stage 1 (Proposal)

---
build: true

# Math
## Extensions

---
build: true

## Seeded (Pseudo) Random Numbers
### Generates an enumerable based on the passed seed

```js
for (const [i,r] of enumerate(
  Math.seededPRNG({seed:0})
)) {
  // do something with each value
  if(i >= limit) break;
}
```

---
build: true

## Clamp
### Makes sure value stays in given range

```js
Math.clamp(x, lower, upper);
```

```js
Math.clamp(-10, 0, 100);  // → 0
```

```js
Math.clamp(1000, 0, 100); // → 100
```

```js
Math.clamp(0, 10, 100);   // → 10
```

---
build: true

## Scale
### Maps value from input range to output range

```js
Math.scale(x, inLow, inHigh, outLow, outHigh);
```

```js
Math.scale(0.25, 0, 1, 0, 100);    // → 25
```

```js
Math.scale(0.25, 0, 1, -180, 180); // → -90
```

---
build: true

# Iterator
## Extensions

---
build: true

## Sample Iterator

```js
function* naturals() {
  let i = 0;
  while (true) {
    yield i;
    i += 1;
  }
}
```

```js
for (const i of naturals) {
  // do something with each value
  if(i >= limit) break;
}
```

---
build: true

## Filter
### Returns iterator which skips some values of source iterator

```js
const evens = naturals()
  .filter((n) => n % 2 === 0);
```

```js
for (const i of evens) {
  // do something with each value
  if(i >= limit) break;
}
```

---
build: true

## Other extensions
- map
- count
- min / max
- find
- skip / take

---
build: true

# Observable
## Mix of Promise and Iterator

---
build: true

## Create Observable

```js
let observable = new Observable(observer => {
  const {next, error, complete } = observer;
  // Emit a single value after 1 second
  let timer = setTimeout(() => {
    next('hello');
    complete();
  }, 1000);

  // Return cleanup function
  return () => clearTimeout(timer);
});
```

---
build: true

## Observable.prototype.subscribe

```js
let subscription = observable.subscribe(
  x => console.log(x),
  err => console.log(`Failed: ${err}`),
  () => console.log('Finished')
);
```

---
build: true

## Observable.prototype.forEach

```js
observable.forEach(x => {
  console.log(`Received value: ${ x }`);
}).then(() => {
  console.log('Finished successfully')
}).catch(err => {
  console.log(`Finished with error: ${ err }`);
})
```

---
build: true

## Observable.prototype.filter

```js
observable.filter(callback)
Observable.of(1, 2, 3).filter(value => {
  return value > 2;
}).subscribe(value => {
  console.log(value);
});
```

```js
// → 3
```

---
build: true

## Observable.prototype.map

```js
Observable.of(1, 2, 3).map(value => {
  return value * 2;
}).subscribe(value => {
  console.log(value);
});
```

```js
// → 2 → 4 → 6
```

---
build: true

## Observable.prototype.reduce

```js
Observable.of(1, 2, 3).reduce((prev, curr) => {
  return prev + curr;
}).subscribe(result => {
  console.log(result);
});
```

```js
// → 6
```

---
build: true

## Observable.prototype.concat

```js
Observable.of(1, 2, 3).concat(
  Observable.of(4, 5, 6),
  Observable.of(7, 8, 9)
).subscribe(result => {
  console.log(result);
});
```

```js
// → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9
```

---
build: true

# Promise
## Extensions

---
build: true

## try / attempt
- Converts function to promise
- and sync errors to async

---
build: true

## current

```js
promise = new Promise((resolve, reject) => {
  throw new Error('i failed');
});
promise.catch(console.log); // → i failed
```

---
build: true

## Promise.try

```js
promise = Promise.try(() => {
  throw new Error('i failed');
});
promise.catch(console.log); // → i failed
```

```js
promise = Promise.try(() => {
  return 'result';
});
promise.then(console.log);  // → result
```

---
build: true

## Promise.all
### (ES 2015)
- returns all results as array
- short-circuits on reject

---
build: true

## Promise.race
### (ES 2015)
- resolves first settled promise
- rejects if first settled promise rejects

---
build: true

## Promise.any
- rejects when no promise resolves
- short-circuits on resolve

---
build: true

## Promise.allSettled
- returns all results as array
- does not short circuit

---
type: section

## Stage 2 (Draft)

---

# Decorators

---
build: true

# Temporal
## (like native MomentJS)

---
build: true

## Classes

```js
Instant        // Point in time
```

```js
OffsetDateTime // Offset from UTC (+01:00)
```

```js
CivilDateTime  // Offset from Calendar
```

```js
ZonedDateTime  // Offset + Timezone (Europe/Rome)
```

---
build: true

# (Weak)Set
## Extensions

---
build: true

## Array-like
- filter
- map
- find
- reduce
- join
- ...

---
build: true

## Manipulating
- addAll(... elements)
- deleteAll(... elements)
- intersection
- union
- difference
- ...

---
build: true

## Comparing
- isSubsetOf
- isDisjointFrom
- isSupersetOf

---
build: true

# (Weak)Map
## Extensions

---
build: true

## Array-like
- of / from
- filter
- mapKeys / mapValues
- reduce
- join
- ...

---
build: true

## Manipulating
- deleteAll
- merge
- update

---
build: true

## Aggregation
- groupBy
- keyBy

---
build: true

# throw
## in expression contexts

---
build: true

## Parameter initializers

```js
function save(filename =
  throw new TypeError('Argument required')
) {}
```

---
build: true

## Arrow function bodies

```js
lint(ast, {
  with: () => throw new Error(
    "avoid using 'with' statements.
  ")
});
```

---
build: true

## Conditional expressions

```js
const obj = str
  ? JSON.parse(str)
  : throw new Error('String required')
;
```

---
build: true

## Logical operations

```js
class Product {
  get id() { return this._id; }
  set id(value) {
    this._id = value ||
      throw new Error("Invalid value")
    ;
  }
}
```

---
build: true

## Function implementation hiding

```js
Function.prototype.toString
```

```js
Error.prototype.stack
```

```js
function foo() {
  "hide implementation";
  // ...
}
```

---

# Realms

---
build: true

## Intuitions
- sandbox
- iframe without DOM
- principled version of Node's 'vm' module
- sync worker

---
build: true

## Use cases
- security isolation
- plugins
- in browser code editors
- server-side rendering
- testing

---
build: true

## Example

```js
let g = window; // outer global
let r = new Realm(); // root realm

let f = r.evaluate("(function() { return 17 })");

f() === 17 // true
Error.prototype.stack
```

---
build: true

# String
## Extensions

---
build: true

## String.replaceAll

```js
const query = 'q=query+string+parameters';
```

```js
const withSpaces = query.replace(/\+/g, ' ');
```

```js
const withSpaces = query.replaceAll('+', ' ');
```

---
build: true

# Optional
## Chaining

---
build: true

## Current

```js
var query = 'input[name=foo]';
var $input = $form.querySelector(query)
var value = $input ? $input.value : undefined
```

---
build: true

## With optional chaining

```js
var fooValue = $form.querySelector(query)?.value
```

```js
var street = user?.address?.street
```

```js
iterator.return?.() // manually close an iterator
```

---
build: true

# Nullish
## Coalescing

---
build: true

## current

```js
const undefinedValue =
  response.settings?.undefinedValue
  || 'some other default'
; // result: 'some other default'
```

```js
const nullValue =
  response.settings?.nullValue
  || 'some other default'
; // result: 'some other default'
```

---
build: true

## current problems

```js
response.settings?.showSplashScreen || true
```

```js
// False evaluates to false, result: true
```

```js
response.settings?.animationDuration || 300;
```

```js
// 0 evaluates to false, result: 300
```

```js
response.settings?.headerText || 'Hello, world!'
```

```js
// '' evaluates to false, result: 'Hello, world!'
```

---
build: true

## Nullish Coalescing

```js
response.settings?.showSplashScreen ?? true
```

```js
response.settings?.animationDuration ?? 300;
```

```js
response.settings?.headerText ?? 'Hello, world!'
```

---
type: section

## Stage 3 (Candidate)

---
build: true

# Numeric
## Separators

---
build: true

## current

```js
1000000000
101475938.38
// Is this a billion? a hundred millions? Ten millions?
```

```js
let fee = 12300;
// is this 12,300? Or 123, because it's in cents?
```

```js
let amount = 1234500;
// is this 1,234,500? Or cents, hence 12,345?
// Or financial, 4-fixed 123.45?
```

---
build: true

## Numeric Separators

```js
1_000_000_000           // Ah, so a billion
101_475_938.38          // hundreds of millions
```

```js
let fee = 123_00;       // $123 (12300 cents)
let fee = 12_300;       // $12,300 (thats much)
```

```js
let amount = 12345_00;  // 12,345 (1234500 cents)
let amount = 123_4500;  // 123.45 (4-fixed fin.)
let amount = 1_234_500; // 1,234,500
```

---
build: true

## Numeric Separators

```js
0.000_001 // fractions
```

```js
1e10_000  // exponents
```

```js
let nibbles = 0b1010_0001_1000_0101; // binary
```

```js
let brandColor = 0x44_BB_44; // hex (colors)
```

---
build: true

# Class
## Extensions
- static
- public
- async
- private

---
build: true

## private
### in classes or objects

```js
class ColorFinder {
  static #red = "#ff0000";
  static #blue = "#00ff00";
  static #green = "#0000ff";
```

---

```js
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
type: section

## Stage 4 (Shipping)

---
build: true

## Optional catch binding

```js
try { ... } catch (unused) { ... }
```

```js
try { ... } catch { ... }
```

---
build: true

# Intl
## Internationalization aka I18l

---
build: true

## Langauge dependent formatting for
- Dates / Times
- Numbers
- Plural Rules
- Collator (comparing)

---
build: true

## Intl.DateTimeFormat

```js
const DateFormat = Intl.DateTimeFormat;
```

```js
new DateFormat('en-US').format(date);
// → '12/20/2019'
```

```js
new DateFormat('en-GB').format(date);
// → '20/12/2019'
```

```js
// Include a fallback language
new DateFormat(['foo', 'de']).format(date)
// → '20.12.2019'
```

---
build: true

## Intl.NumberFormat

```js
new Intl.NumberFormat('de-DE', {
  style: 'currency', currency: 'EUR'
}).format(number); // → '123.456,79 €'
```

```js
// the Japanese yen doesn't use a minor unit
new Intl.NumberFormat('ja-JP', {
  style: 'currency', currency: 'JPY'
}).format(number); // → '￥123,457'
```

```js
new Intl.NumberFormat('en-IN', {
  maximumSignificantDigits: 3
}).format(number); // → '1,23,000'
```

---
build: true

## Intl.PluralRules

```js
new Intl.PluralRules('en-US').select(0);
// → 'other'
```

```js
new Intl.PluralRules('en-US').select(1);
// → 'one'
```

```js
new Intl.PluralRules('en-US').select(2);
// → 'other'
```

---
build: true

## Intl.Collator

```js
function letterSort(lang, letters) {
  letters.sort(new Intl.Collator(lang).compare);
  return letters;
}
```

```js
console.log(letterSort('de', ['a','z','ä']));
// expected output: Array ["a", "ä", "z"]
```

```js
console.log(letterSort('sv', ['a','z','ä']));
// expected output: Array ["a", "z", "ä"]
```

---
build: true

# Array
## Extensions

---
build: true

## Array.prototype.flat

```js
const array = [1, [2, [3, [4]]]];
```

```js
array.flat();         // → [1, 2, [3, [4]]];
```

```js
array.flat(2);        // → [1, 2, 3, [4]];
```

```js
array.flat(Infinity); // → [1, 2, 3, 4];
```

---
build: true

## Array.prototype.flatMap

```js
const dup = (x) => [x, x];
```

```js
[3, 4].map(dup);        // → [[3, 3], [4, 4]]
```

```js
[3, 4].map(dup).flat(); // → [3, 3, 4, 4]
```

```js
[3, 4].flatMap(dup);    // → [3, 3, 4, 4]
```

---
build: true

# Object
## Extensions

---
build: true

## Object.prototype.entities
<br/>

```js
const object = { x: 42, y: 50 };
const entries = Object.entries(object);
// → [['x', 42], ['y', 50]]
```

## <br/>Object.prototype.fromEntities

```js
const result = Object.fromEntries(entries);
// → { x: 42, y: 50 }
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
