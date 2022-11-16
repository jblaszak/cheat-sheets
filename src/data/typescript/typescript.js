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
          language: `typescript`,
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
          language: `typescript`,
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
          language: `typescript`,
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
          language: `typescript`,
          code: `// functions that return values should include type
function add(x: number, y: number): number {
    return x + y;
}

// functions that don't return should have type void
function add(x: number, y: number): void {
    console.log(x + y);
}

let add: (x:number, y: number) => void {
  console.log(x + y);
}

function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  a.b();  //Object is of type 'unknown'.
}

function fail(msg: string): never {
  throw new Error(msg);
}`,
        },
      },
    ],
    [
      { h2: `Objects & Interfaces` },
      {
        code: {
          language: `typescript`,
          code: `interface Coder {
    name: string;
    course: string;
    age?: number; // optional entry
}

// interfaces are used to assign types to objects
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
      { h2: `Types vs Interfaces` },
      {
        code: {
          language: `typescript`,
          code: `type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };
const bird3: BirdInterface = bird1;`,
        },
      },
      {
        p: `Can both extend other interfaces and types.`,
      },
      {
        code: {
          language: `typescript`,
          code: `type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

interface Peacock extends BirdType {
  colourful: true;
  flies: false;
}
interface Chicken extends BirdInterface {
  colourful: false;
  flies: false;
}

let owl: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = { wings: 2, colourful: false, flies: false };`,
        },
      },
      {
        p: `Interfaces are recommneded over types due to better error messages.`,
      },
      {
        p: `Major difference between types and interfaces is that interfaces can be extended when declared a second time (open) while types 
        can not (closed).`,
      },
      {
        code: {
          language: `typescript`,
          code: `// Works fine! 
interface Kitten {
  purrs: boolean;
}

interface Kitten {
  colour: string;
}
          
// Below will throw errors!!!
type Puppy = {
  color: string;
};

type Puppy = {
  toys: number;
};`,
        },
      },
    ],
    [
      { h2: `Generics` },
      {
        code: {
          language: `typescript`,
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
    [
      { h2: `Typescript with React` },
      { p: `Can create a react app typescript template with CRA easily.` },
      {
        code: {
          language: `bash`,
          code: `npx create-react-app myAppName --template typescript`,
        },
      },
      { p: `Add typescript to current react project with:` },
      {
        code: {
          language: `bash`,
          code: `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`,
        },
      },
      { p: `Typescript for a component with props:` },
      {
        code: {
          language: `typescript`,
          code: `interface CoolProps {
  foo: number;
  bar: string;
}

const Cool:FC<CoolProps> = (props) => {
  return <>{ props }</>;
}

// OR
const Cool = (props: CoolProps) => {
  
}`,
        },
      },
    ],
  ],
}
