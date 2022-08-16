export const pageData = {
  pageTitle: "TypeScript",
  pageInfo: `Adds static typing to Javascript.  Main purpose is to prevent bugs related to incorrect types and
    improve development workflow.`,
  cheats: [
    [
      { h2: `Basics` },
      { p: `All typescript files will have the '.ts' file extension.` },
      {
        code: {
          language: `javascript`,
          code: `let test = 123; // implicitly sets type to number
test = '456';  // throws error

let test: number = 123; // explicitly sets type to number
test = '456'; // throws error

let test: number | string = 123; // explicitly sets type to string or number
test = '456' // works fine

let test: any = 123; // allows for any type, only really useful if converting some older project from js to ts`,
        },
      },
    ],
    [
      { h2: `Custom Types` },
      {
        code: {
          language: `javascript`,
          code: `type NumString = number | string;
let test: NumString = 123;

type State = 'off' | 'on';
let test: State = 123; // throws error
let test: State = 'on'; // works fine
test = 'on'; // later on don't need to declare type anymore as it's already set`,
        },
      },
    ],
    [
      { h2: `Enums` },
      {
        code: {
          language: `javascript`,
          code: `enum State {
    On = 'on',
    Off = 'off'
}

let test: State = State.Off;
console.log(test); // outputs 1 (since 1 represents the 2nd value in the enum)`,
        },
      },
    ],
    [
      { h2: `Functions` },
      {
        code: {
          language: `javascript`,
          code: `// functions that return values should include type
function add(x: number, y: number): number {
    return x + y;
}

// functions that don't return should have type void
function add(x: number, y: number): void {
    console.log(x + y);
}`,
        },
      },
    ],
    [
      { h2: `Objects & Interfaces` },
      {
        code: {
          language: `javascript`,
          code: `interface Coder {
    name: string;
    course: string;
    age?: number; // optional entry
}

// interafaces are used to assign types to objects
const bob: Coder = {
    name: 'bob',
    job: 'developer',
    age: 30, // throws error if optional entry isn't set
}

const bill: Coder = {
    name: 'bill',
    job: 'developer',
}

// classes implement interfaces
class SuperCoder implements Coder {
    name: string;
    job: string;

    constructor(name: string) {
        this.name = name;
        this.job = 'developer';
    }
}`,
        },
      },
    ],
    [
      { h2: `Generics` },
      {
        code: {
          language: `javascript`,
          code: `const arr = [1,2,3,'4']; // typescript doesn't prevent this
const arr = Array<number> = [1,2,3,'4']; // throws error
const arr = Array<number> = [1,2,3]; // works fine!

interface GetterSetter<Key, Value> {
    set: {key: Key, value: Value} => void;
    get: {key: Key} => Value;
}

class StringNumGetterSetter implements GetterSetter<string, number> {
    map: Map<string, number> = new Map();

    set(key: string, value: number): void {
        this.map.set(key, value);
    }

    get(key: string): number {
        return this.map.get(key);
    }
}`,
        },
      },
    ],
  ],
}
