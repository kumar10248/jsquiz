import { ReadingContent, QuizQuestion } from '../types';

export const sampleReadingContent: ReadingContent[] = [
 
  {
    "id": 1,
    "question": "What are the possible ways to create objects in JavaScript",
    "description": "There are many ways to create objects in javascript as mentioned below:\n\n    1. Object literal syntax:\n\n       The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.\n\n       \n\n       Object literal property values can be of any data type, including array, function, and nested object.\n\n       Note: This is one of the easiest ways to create an object and it's most commonly used for creating simple, ad-hoc objects.\n\n    2. Object constructor:\n\n       The simplest way to create an empty object is using the `Object` constructor. Currently this approach is not recommended.\n\n       \n\n       The `Object()` is a built-in constructor function so \"new\" keyword is not required for creating plain objects. The above code snippet can be re-written as:\n\n       \n       However, `Object()` can be used to either create a plain object or convert a given value into its corresponding object wrapper, whereas `new Object()` is specifically used to explicitly create a new object instance.\n       \n    3. Object's create method:\n\n       The `create` method of Object is used to create a new object by passing the specified prototype object and properties as arguments, i.e., this pattern is helpful to create new objects based on existing objects. In other words, this is useful for setting up prototypal inheritance. The second argument is optional and it is used to create properties on a newly created object.\n\n       The following code creates a new empty object whose prototype is null.\n\n       \n\n       The following example creates an object along with additional new properties.\n\n       \n\n    4. Function constructor:\n\n       In this approach, create any function and apply the new operator to create object instances. This was the main way to do constructor-based OOP before ES6 classes.\n\n       \n    5. Function constructor with prototype:\n\n       This is similar to function constructor but it uses prototype for their properties and methods. Using prototype means you're sharing methods/properties across instances, which saves memory and improve performance.\n\n       \n\n       This is equivalent to creating an instance with `Object.create` method with a function prototype and then calling that function with an instance and parameters as arguments.\n\n       \n\n       (OR)\n\n       \n\n    6. Object's assign method:\n\n       The `Object.assign` method is used to copy all the properties from one or more source objects and stores them into a target object. This is mainly used for cloning and merging\n\n       The following code creates a new staff object by copying properties of his working company and the car he owns.\n\n       \n\n    7. ES6 Class syntax:\n\n       ES6 introduces class feature to create objects. This is syntactic sugar over the prototype-based system.\n\n       \n\n    8. Singleton pattern:\n\n       A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance. This way one can ensure that they don't accidentally create multiple instances.\n\n         Singleton with Closure (Classic JS Pattern)\n        \n         In modern JavaScript applications, singletons are commonly implemented using ES6 modules for their built-in caching behavior, or closures for encapsulated state management.",
    "codeExamples": [
      "var object = {\n         name: \"Sudheer\",\n         age: 34,\n       };",
      "var object = new Object();",
      "var object = Object();",
      "var object = Object.create(null);",
      "let vehicle = {\n         wheels: \"4\",\n         fuelType: \"Gasoline\",\n         color: \"Green\",\n       };\n       let carProps = {\n         type: {\n           value: \"Volkswagen\",\n         },\n         model: {\n           value: \"Golf\",\n         },\n       };\n\n       var car = Object.create(vehicle, carProps);\n       console.log(car);",
      "function Person(name) {\n         this.name = name;\n         this.age = 21;\n       }\n       var object = new Person(\"Sudheer\");",
      "function Person() {}\n       Person.prototype.name = \"Sudheer\";\n       var object = new Person();",
      "function func(x, y, z) {\n        this.x = x;\n        this.y = y;\n        this.z = z;\n       }\n\n       var instance = new func(1, 2, 3);",
      "function func(x, y, z) {\n          this.x = x;\n          this.y = y;\n          this.z = z;\n       }\n       // Create a new instance using function prototype.\n       var newInstance = Object.create(func.prototype)\n\n       // Call the function\n       var result = func.call(newInstance, 1, 2, 3),\n\n       // If the result is a non-null object then use it otherwise just use the new instance.\n       console.log(result && typeof result === 'object' ? result : newInstance);",
      "const orgObject = { company: \"XYZ Corp\" };\n       const carObject = { name: \"Toyota\" };\n       const staff = Object.assign({}, orgObject, carObject);",
      "class Person {\n         constructor(name) {\n           this.name = name;\n         }\n       }\n\n       var object = new Person(\"Sudheer\");",
      "const Singleton = (function () {\n        let instance;\n\n        function createInstance() {\n          return { name: \"Sudheer\" };\n        }\n\n        return {\n          getInstance: function () {\n            if (!instance) {\n              instance = createInstance();\n            }\n            return instance;\n          }\n        };\n        })();\n\n        // Usage\n        const obj1 = Singleton.getInstance();\n        const obj2 = Singleton.getInstance();\n\n        console.log(obj1 === obj2); // true"
    ],
    "tables": []
  },
  {
    "id": 2,
    "question": "What is a prototype chain",
    "description": "The prototype chain is a core concept in JavaScript’s inheritance model. It allows objects to inherit properties and methods from other objects. When you try to access a property or method on an object, JavaScript first looks for it on that object itself. If it’s not found, the engine looks up the object's internal `[[Prototype]]` reference (accessible via `Object.getPrototypeOf(obj)` or the deprecated `__proto__` property) and continues searching up the chain until it finds the property or reaches the end (usually `null`).\n\n    For objects created via constructor functions, the prototype chain starts with the instance, then refers to the constructor’s `.prototype` object, and continues from there. For example:\n\n    \n\n    This mechanism allows for property and method sharing among objects, enabling code reuse and a form of inheritance.\n\n    Summary:\n\n    *   The prototype chain enables inheritance in JavaScript.\n    *   If a property isn’t found on an object, JavaScript looks up its prototype chain.\n    *   The prototype of an object instance can be accessed with `Object.getPrototypeOf(obj)` or `__proto__`.\n    *   The prototype of a constructor function is available via `Constructor.prototype`.\n    *   The chain ends when the prototype is `null`.\n\n    The prototype chain among objects appears as below, \n    \n    ![Screenshot](images/prototype_chain.png)",
    "codeExamples": [
      "function Person() {}\n    const person1 = new Person();\n\n    console.log(Object.getPrototypeOf(person1) === Person.prototype); // true"
    ],
    "tables": [],
     "image":["/images/prototype.png"],
     "imageSize":"large"
  },
  
  {
    "id": 4,
    "question": "What is JSON and its common operations",
    "description": "JSON (JavaScript Object Notation) is a lightweight, text-based data format that uses JavaScript object syntax for structuring data. It was popularized by Douglas Crockford and is widely used for transmitting data between a server and a client in web applications. JSON files typically have a `.json` extension and use the MIME type `application/json`. \n\n     Common Operations with JSON\n\n    1. Parsing: Transforming a JSON-formatted string into a native JavaScript object.\n      ```js\n      const obj = JSON.parse(jsonString);\n      ```\n      - Example:  \n        ```js\n        const jsonString = '{\"name\":\"John\",\"age\":30}';\n        const obj = JSON.parse(jsonString);  // { name: \"John\", age: 30 }\n        ```\n\n    2. Stringification: Converting a JavaScript object into a JSON-formatted string, commonly used for data transmission or storage.\n      ```js\n      const jsonString = JSON.stringify(object);\n      ```\n      - Example:  \n        ```js\n        const obj = { name: \"Jane\", age: 25 };\n        const jsonString = JSON.stringify(obj);  // '{\"name\":\"Jane\",\"age\":25}'\n        ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 5,
    "question": "What is the purpose of the array slice method",
    "description": "The `slice()` method in JavaScript is used to extract a section of an array, returning a new array containing the selected elements. It does not modify the original array. The method takes two arguments:\n\n    - start: The index at which extraction begins (inclusive).\n    - end (optional): The index before which to end extraction (exclusive). If omitted, extraction continues to the end of the array.\n\n    You can also use negative indices, which count from the end of the array.\n\n     Examples:\n\n    ```js\n    let arrayIntegers = [1, 2, 3, 4, 5];\n\n    let arrayIntegers1 = arrayIntegers.slice(0, 2);    // [1, 2]\n    let arrayIntegers2 = arrayIntegers.slice(2, 3);    // [3]\n    let arrayIntegers3 = arrayIntegers.slice(4);       // [5]\n    let arrayIntegers4 = arrayIntegers.slice(-3, -1);  // [3, 4]\n    ```\n\n    Note:  \n    The `slice()` method does not mutate (change) the original array; instead, it returns a new array containing the extracted elements.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 6,
    "question": "What is the purpose of the array splice method",
    "description": "The `splice()` method in JavaScript is used to add, remove, or replace elements within an array. Unlike `slice()`, which creates a shallow copy and does not alter the original array, `splice()` modifies the original array in place and returns an array containing the removed elements.\n\n     Syntax\n\n    \n    - start: The index at which to start changing the array.\n    - deleteCount: (Optional) The number of elements to remove from the array. If omitted, all elements from the start index to the end of the array will be removed.\n    - item1, item2, ...: (Optional) Elements to add to the array, starting at the start position.\n\n     Examples\n\n    \n\n    Note:  \n    - The `splice()` method modifies the original array.\n    - It returns an array containing the elements that were removed (if any).\n    - You can use it both to remove and insert elements in a single operation.",
    "codeExamples": [
      "array.splice(start, deleteCount, item1, item2, ...)",
      "let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];\n    let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];\n    let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];\n\n    // Remove the first two elements\n    let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); \n    // arrayIntegers1: [1, 2]\n    // arrayIntegersOriginal1 (after): [3, 4, 5]\n\n    // Remove all elements from index 3 onwards\n    let arrayIntegers2 = arrayIntegersOriginal2.splice(3);     \n    // arrayIntegers2: [4, 5]\n    // arrayIntegersOriginal2 (after): [1, 2, 3]\n\n    // Remove 1 element at index 3, then insert \"a\", \"b\", \"c\" at that position\n    let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, \"a\", \"b\", \"c\"); \n    // arrayIntegers3: [4]\n    // arrayIntegersOriginal3 (after): [1, 2, 3, \"a\", \"b\", \"c\", 5]"
    ],
    "tables": [],
   
  },
  
  
  {
    "id": 9,
    "question": "What is the difference between == and === operators",
    "description": "JavaScript provides two types of equality operators:\n\n    - Loose equality (`==`, `!=`): Performs type conversion if the types differ, comparing values after converting them to a common type.\n    - Strict equality (`===`, `!==`): Compares both value and type, without any type conversion.\n\n     Strict Equality (`===`)\n    - Two strings are strictly equal if they have exactly the same sequence of characters and length.\n    - Two numbers are strictly equal if they have the same numeric value.\n      - Special cases:\n        - `NaN === NaN` is `false`\n        - `+0 === -0` is `true`\n    - Two booleans are strictly equal if both are `true` or both are `false`.\n    - Two objects are strictly equal if they refer to the same object in memory.\n    - `null` and `undefined` are not strictly equal.\n\n     Loose Equality (`==`)\n    - Converts operands to the same type before making the comparison.\n    - `null == undefined` is `true`.\n    - `\"1\" == 1` is `true` because the string is converted to a number.\n    - `0 == false` is `true` because `false` is converted to `0`.\n\n     Examples:",
    "codeExamples": [
      "0 == false            // true      (loose equality, type coercion)\n    0 === false           // false     (strict equality, different types)\n    1 == \"1\"              // true      (string converted to number)\n    1 === \"1\"             // false     (different types)\n    null == undefined     // true      (special case)\n    null === undefined    // false     (different types)\n    '0' == false          // true      ('0' is converted to 0)\n    '0' === false         // false     (different types)\n    NaN == NaN            // false     (NaN is never equal to itself)\n    NaN === NaN           // false\n    [] == []              // false     (different array objects)\n    [] === []             // false\n    {} == {}              // false     (different object references)\n    {} === {}             // false"
    ],
    "tables": []
  },
  {
    "id": 10,
    "question": "What are lambda expressions or arrow functions",
    "description": "Arrow functions (also known as \"lambda expressions\") provide a concise syntax for writing function expressions in JavaScript. Introduced in ES6, arrow functions are often shorter and more readable, especially for simple operations or callbacks.\n\n     Key Features:\n    - Arrow functions do not have their own `this`, `arguments`, `super`, or `new.target` bindings. They inherit these from their surrounding (lexical) context.\n    - They are best suited for non-method functions, such as callbacks or simple computations.\n    - Arrow functions cannot be used as constructors and do not have a `prototype` property.\n    - They also cannot be used with `new`, `yield`, or as generator functions.\n\n     Syntax Examples:",
    "codeExamples": [
      "const arrowFunc1 = (a, b) => a + b;    // Multiple parameters, returns a + b\n    const arrowFunc2 = a => a * 10;        // Single parameter (parentheses optional), returns a * 10\n    const arrowFunc3 = () => {};           // No parameters, returns undefined\n    const arrowFunc4 = (a, b) => {\n      // Multiple statements require curly braces and explicit return\n      const sum = a + b;\n      return sum * 2;\n    };"
    ],
    "tables": []
  },
  {
    "id": 11,
    "question": "What is a first class function",
    "description": "In JavaScript, first-class functions(first-class citizens) mean that functions are treated like any other variable. That means:\n\n    1. You can assign a function to a variable.\n    2. You can pass a function as an argument to another function.\n    3. You can return a function from another function.\n\n    This capability enables powerful patterns like callbacks, higher-order functions, event handling, and functional programming in JavaScript.\n    \n    For example, the handler function below is assigned to a variable and then passed as an argument to the `addEventListener` method.",
    "codeExamples": [
      "const handler = () => console.log(\"This is a click handler function\");\n    document.addEventListener(\"click\", handler);"
    ],
    "tables": []
  },
  {
    "id": 12,
    "question": "What is a first order function",
    "description": "A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value. i.e,  It's a regular function that works with primitive or non-function values.",
    "codeExamples": [
      "const firstOrder = () => console.log(\"I am a first order function!\");"
    ],
    "tables": []
  },
  {
    "id": 13,
    "question": "What is a higher order function",
    "description": "A higher-order function is a function that either accepts another function as an argument, returns a function as its result, or both. This concept is a core part of JavaScript's functional programming capabilities and is widely used for creating modular, reusable, and expressive code.\n\n    The syntactic structure of higher order function will be explained with an example as follows,\n\n      \n\n    In this example:\n\n    1. `firstOrderFunc` is a regular (first-order) function.\n\n    2. `higherOrder` is a higher-order function because it takes another function as an argument.\n\n    3. `firstOrderFunc` is also called a callback function because it is passed to and executed by another function.",
    "codeExamples": [
      "// First-order function (does not accept or return another function)\n      const firstOrderFunc = () => \n        console.log(\"Hello, I am a first-order function\");\n\n      // Higher-order function (accepts a function as an argument)\n      const higherOrder = (callback) => callback();\n\n      // Passing the first-order function to the higher-order function\n      higherOrder(firstOrderFunc);"
    ],
    "tables": []
  },
  {
    "id": 14,
    "question": "What is a unary function",
    "description": "A unary function (also known as a monadic function) is a function that accepts exactly one argument. The term \"unary\" simply refers to the function's arity—the number of arguments it takes.\n\n    Let us take an example of unary function,\n\n    \n    In this example:\n\n    - `unaryFunction` takes a single parameter `a`, making it a unary function.\n    - It performs a simple operation: adding 10 to the input and printing the result.",
    "codeExamples": [
      "const unaryFunction = (a) => console.log(a + 10); // This will add 10 to the input and log the result\n    unaryFunction(5); // Output: 15"
    ],
    "tables": []
  },
  {
    "id": 15,
    "question": "What is the currying function",
    "description": "Currying is the process of transforming a function with multiple arguments into a sequence of nested functions, each accepting only one argument at a time.\n\n    This concept is named after mathematician Haskell Curry, and is commonly used in functional programming to enhance modularity and reuse.\n\n\n     Before Currying (Normal n-ary Function)\n\n    \n    This is a standard function that takes three arguments at once.\n\n     After Currying (Unary Function Chain)\n    \n    Each function in the chain accepts one argument and returns the next function, until all arguments are provided and the final result is computed.\n\n     Benefits of Currying\n      - Improves code reusability\n      → You can partially apply functions with known arguments.\n\n      - Enhances functional composition\n      → Easier to compose small, pure functions.\n\n      - Encourages clean, modular code\n      → You can split logic into smaller single-responsibility functions.",
    "codeExamples": [
      "const multiArgFunction = (a, b, c) => a + b + c;\n\n    console.log(multiArgFunction(1, 2, 3)); // Output: 6",
      "const curryUnaryFunction = (a) => (b) => (c) => a + b + c;\n\n    console.log(curryUnaryFunction(1));       // Returns: function (b) => ...\n    console.log(curryUnaryFunction(1)(2));    // Returns: function (c) => ...\n    console.log(curryUnaryFunction(1)(2)(3)); // Output: 6"
    ],
    "tables": []
  },
  {
    "id": 16,
    "question": "What is a pure function",
    "description": "A pure function is a function whose output depends only on its input arguments and produces no side effects. This means that given the same inputs, a pure function will always return the same output, and it does not modify any external state or data.\n\n    Let's take an example to see the difference between pure and impure functions,\n\n     Example: Pure vs. Impure Functions\n\n    \n    - `impureAddNumber` changes the external variable numberArray and returns the new length of the array, making it impure.\n    - `pureAddNumber` creates a new array with the added number and does not modify the original array, making it pure.",
    "codeExamples": [
      "// Impure Function\n    let numberArray = [];\n    const impureAddNumber = (number) => numberArray.push(number);\n\n    // Pure Function\n    const pureAddNumber = (number) => (inputArray) =>\n      inputArray.concat([number]);\n\n    // Usage\n    console.log(impureAddNumber(6)); // returns 1\n    console.log(numberArray);        // returns [6]\n\n    console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]\n    console.log(numberArray);                   // remains [6]"
    ],
    "tables": []
  },
  {
    "id": 17,
    "question": "What are the benefits of pure functions",
    "description": "Some of the major benefits of pure functions are listed below,\n\n    - Easier testing: Since output depends only on input, pure functions are simple to test.\n    - Predictability: No hidden side effects make behavior easier to reason about.\n    - Immutability: Pure functions align with ES6 best practices, such as preferring const over let, supporting safer and more maintainable code.\n    - No side effects: Reduces bugs related to shared state or mutation.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 18,
    "question": "What is the purpose of the let keyword",
    "description": "The `let` keyword in JavaScript is used to declare a block-scoped local variable. This means that variables declared with `let` are only accessible within the block, statement, or expression where they are defined. This is a significant improvement over the older `var` keyword, which is function-scoped (or globally-scoped if declared outside a function), and does not respect block-level scoping.\n\n     Key Features of `let`:\n    - Block Scope: The variable exists only within the nearest enclosing block (e.g., inside an `{}` pair).\n    - No Hoisting Issues: While `let` declarations are hoisted, they are not initialized until the code defining them is executed. Accessing them before declaration results in a ReferenceError (temporal dead zone).\n    - No Redeclaration: The same variable cannot be declared twice in the same scope with `let`.\n\n     Example:\n\n    \n\n    In this example, the `counter` inside the `if` block is a separate variable from the one outside. The `let` keyword ensures that both have their own distinct scope.\n\n    In summary, you need to use `let` when you want variables to be limited to the block in which they are defined, preventing accidental overwrites and bugs related to variable scope.",
    "codeExamples": [
      "let counter = 30;\n    if (counter === 30) {\n      let counter = 31;\n      console.log(counter); // Output: 31 (block-scoped variable inside if-block)\n    }\n    console.log(counter); // Output: 30 (outer variable, unaffected by inner block)"
    ],
    "tables": []
  },
  
  {
    "id": 20,
    "question": "What is the reason to choose the name let as a keyword",
    "description": "The keyword `let` was chosen because it originates from mathematical notation, where \"let\" is used to introduce new variables (for example, \"let x = 5\"). This term was adopted by several early programming languages such as Scheme and BASIC, establishing a tradition in computer science. JavaScript follows this convention by using `let` to declare variables with block scope, providing a modern alternative to `var`. The choice helps make the language more familiar to programmers coming from other languages and aligns with the mathematical practice of variable assignment.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 21,
    "question": "How do you redeclare variables in a switch block without an error",
    "description": "When you try to redeclare variables using `let` or `const` in multiple `case` clauses of a `switch` statement, you will get a SyntaxError. This happens because, in JavaScript, all `case` clauses within a `switch` statement share the same block scope. For example:\n    \n    \n    \n    To avoid this error, you can create a new block scope within each `case` clause by wrapping the code in curly braces `{}`. This way, each `let` or `const` declaration is scoped only to that block, and redeclaration errors are avoided:\n    \n    \n    \n    That means, to safely redeclare variables in different cases of a switch statement, wrap each case’s code in its own block using curly braces. This ensures each variable declaration is scoped to its specific case block.",
    "codeExamples": [
      "let counter = 1;\n    switch (x) {\n      case 0:\n        let name;\n        break;\n      case 1:\n        let name; // SyntaxError: Identifier 'name' has already been declared\n        break;\n    }",
      "let counter = 1;\n    switch (x) {\n      case 0: {\n        let name;\n        // code for case 0\n        break;\n      }\n      case 1: {\n        let name; // No SyntaxError\n        // code for case 1\n        break;\n      }\n    }"
    ],
    "tables": []
  },
  {
    "id": 22,
    "question": "What is the Temporal Dead Zone",
    "description": "The Temporal Dead Zone (TDZ) refers to the period between the start of a block and the point where a variable declared with `let` or `const` is initialized. During this time, the variable exists in scope but cannot be accessed, and attempting to do so results in a `ReferenceError`.\n    \n    This behavior is part of JavaScript's ES6 (ECMAScript 2015) specification and applies only to variables declared with `let` and `const`, not `var`. Variables declared with `var` are hoisted and initialized with `undefined`, so accessing them before the declaration does not throw an error, though it can lead to unexpected results.\n    \n     Example",
    "codeExamples": [
      "function someMethod() {\n        console.log(counter1); // Output: undefined (due to var hoisting)\n        console.log(counter2); // Throws ReferenceError (TDZ for let)\n    \n        var counter1 = 1;\n        let counter2 = 2;\n    }"
    ],
    "tables": []
  },
  {
    "id": 23,
    "question": "What is an IIFE (Immediately Invoked Function Expression)",
    "description": "IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,\n\n    \n\n    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables from the IIFE then it throws an error as below,",
    "codeExamples": [
      "(function () {\n      // logic here\n    })();",
      "(function () {\n      var message = \"IIFE\";\n      console.log(message);\n    })();\n    console.log(message); //Error: message is not defined"
    ],
    "tables": []
  },
  {
    "id": 24,
    "question": "How do you decode or encode a URL in JavaScript?",
    "description": "`encodeURI()` function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string.\n    `decodeURI()` function is used to decode an URL. This function requires an encoded URL string as parameter and return that decoded string.\n\n    Note: If you want to encode characters such as `/ ? : @ & = + $ ` then you need to use `encodeURIComponent()`.",
    "codeExamples": [
      "let uri = \"employeeDetails?name=john&occupation=manager\";\n    let encoded_uri = encodeURI(uri);\n    let decoded_uri = decodeURI(encoded_uri);"
    ],
    "tables": []
  },
  {
    "id": 25,
    "question": "What is memoization",
    "description": "Memoization is a functional programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.\n    Let's take an example of adding function with memoization,",
    "codeExamples": [
      "const memoizeAddition = () => {\n      let cache = {};\n      return (value) => {\n        if (value in cache) {\n          console.log(\"Fetching from cache\");\n          return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.\n        } else {\n          console.log(\"Calculating result\");\n          let result = value + 20;\n          cache[value] = result;\n          return result;\n        }\n      };\n    };\n    // returned function from memoizeAddition\n    const addition = memoizeAddition();\n    console.log(addition(20)); //output: 40 calculated\n    console.log(addition(20)); //output: 40 cached"
    ],
    "tables": []
  },
  {
    "id": 26,
    "question": "What is Hoisting",
    "description": "Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation.\n    Let's take a simple example of variable hoisting,\n\n    \n\n    The above code looks like as below to the interpreter,\n\n    \n\n    In the same fashion, function declarations are hoisted too\n\n    \n\n    This hoisting makes functions to be safely used in code before they are declared.",
    "codeExamples": [
      "console.log(message); //output : undefined\n    var message = \"The variable Has been hoisted\";",
      "var message;\n    console.log(message);\n    message = \"The variable Has been hoisted\";",
      "message(\"Good morning\"); //Good morning\n\n    function message(name) {\n      console.log(name);\n    }"
    ],
    "tables": []
  },
  {
    "id": 27,
    "question": "What are classes in ES6",
    "description": "In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.\n    For example, the prototype based inheritance written in function expression as below,\n\n    \n\n    Whereas ES6 classes can be defined as an alternative",
    "codeExamples": [
      "function Bike(model, color) {\n      this.model = model;\n      this.color = color;\n    }\n\n    Bike.prototype.getDetails = function () {\n      return this.model + \" bike has\" + this.color + \" color\";\n    };",
      "class Bike {\n      constructor(color, model) {\n        this.color = color;\n        this.model = model;\n      }\n\n      getDetails() {\n        return this.model + \" bike has\" + this.color + \" color\";\n      }\n    }"
    ],
    "tables": []
  },
  {
    "id": 28,
    "question": "What are closures",
    "description": "A closure is the combination of a function bundled(enclosed) together with its lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution. The closure has three scope chains.\n\n    1. Own scope where variables defined between its curly brackets\n    2. Outer function's variables\n    3. Global variables\n\n    Let's take an example of closure concept,\n\n    \n\n    As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.",
    "codeExamples": [
      "function Welcome(name) {\n      var greetingInfo = function (message) {\n        console.log(message + \" \" + name);\n      };\n      return greetingInfo;\n    }\n    var myFunction = Welcome(\"John\");\n    myFunction(\"Welcome \"); //Output: Welcome John\n    myFunction(\"Hello Mr.\"); //output: Hello Mr. John"
    ],
    "tables": []
  },
  {
    "id": 29,
    "question": "What are modules",
    "description": "Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 30,
    "question": "Why do you need modules",
    "description": "Below are the list of benefits using modules in javascript ecosystem\n\n    1. Maintainability\n    2. Reusability\n    3. Namespacing",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 31,
    "question": "What is scope in javascript",
    "description": "Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 32,
    "question": "What is a service worker",
    "description": "A Service worker is basically a script (JavaScript file) that runs in the background, separate from a web page and provides features that don't need a web page or user interaction. Some of the major features of service workers are Rich offline experiences(offline first web application development), periodic background syncs, push notifications, intercept and handle network requests and programmatically managing a cache of responses.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 33,
    "question": "How do you manipulate DOM using a service worker",
    "description": "Service worker can't access the DOM directly. But it can communicate with the pages it controls by responding to messages sent via the `postMessage` interface, and those pages can manipulate the DOM.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 34,
    "question": "How do you reuse information across service worker restarts",
    "description": "The problem with service worker is that it gets terminated when not in use, and restarted when it's next needed, so you cannot rely on global state within a service worker's `onfetch` and `onmessage` handlers. In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 35,
    "question": "What is IndexedDB",
    "description": "IndexedDB is a low-level API for client-side storage of larger amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 36,
    "question": "What is web storage",
    "description": "Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.\n\n    1. Local storage: It stores data for current origin with no expiration date.\n    2. Session storage: It stores data for one session and the data is lost when the browser tab is closed.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 37,
    "question": "What is a post message",
    "description": "Post message is a method that enables cross-origin communication between Window objects.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 38,
    "question": "What is a Cookie",
    "description": "A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs.\n    For example, you can create a cookie named username as below,\n\n    \n\n    ![Screenshot](images/cookie.png)",
    "codeExamples": [
      "document.cookie = \"username=John\";"
    ],
    "tables": []
  },
  {
    "id": 39,
    "question": "Why do you need a Cookie",
    "description": "Cookies are used to remember information about the user profile(such as username). It basically involves two steps,\n\n    1. When a user visits a web page, the user profile can be stored in a cookie.\n    2. Next time the user visits the page, the cookie remembers the user profile.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 40,
    "question": "What are the options in a cookie",
    "description": "There are few below options available for a cookie,\n\n    1. By default, the cookie is deleted when the browser is closed but you can change this behavior by setting expiry date (in UTC time).\n\n    \n\n    2. By default, the cookie belongs to a current page. But you can tell the browser what path the cookie belongs to using a path parameter.",
    "codeExamples": [
      "document.cookie = \"username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC\";",
      "document.cookie = \"username=John; path=/services\";"
    ],
    "tables": []
  },
  {
    "id": 41,
    "question": "How do you delete a cookie",
    "description": "You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie value in this case.\n    For example, you can delete a username cookie in the current page as below.\n\n    \n\n    Note: You should define the cookie path option to ensure that you delete the right cookie. Some browsers doesn't allow to delete a cookie unless you specify a path parameter.",
    "codeExamples": [
      "document.cookie =\n      \"username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;\";"
    ],
    "tables": []
  },
  
  {
    "id": 43,
    "question": "What is the main difference between localStorage and sessionStorage",
    "description": "LocalStorage is the same as SessionStorage but it persists the data even when the browser is closed and reopened(i.e it has no expiration time) whereas in sessionStorage data gets cleared when the page session ends.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 44,
    "question": "How do you access web storage",
    "description": "The Window object implements the `WindowLocalStorage` and `WindowSessionStorage` objects which has `localStorage`(window.localStorage) and `sessionStorage`(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local).\n    For example, you can read and write on local storage objects as below",
    "codeExamples": [
      "localStorage.setItem(\"logo\", document.getElementById(\"logo\").value);\n    localStorage.getItem(\"logo\");"
    ],
    "tables": []
  },
  {
    "id": 45,
    "question": "What are the methods available on session storage",
    "description": "The session storage provided methods for reading, writing and clearing the session data",
    "codeExamples": [
      "// Save data to sessionStorage\n    sessionStorage.setItem(\"key\", \"value\");\n\n    // Get saved data from sessionStorage\n    let data = sessionStorage.getItem(\"key\");\n\n    // Remove saved data from sessionStorage\n    sessionStorage.removeItem(\"key\");\n\n    // Remove all saved data from sessionStorage\n    sessionStorage.clear();"
    ],
    "tables": []
  },
  {
    "id": 46,
    "question": "What is a storage event and its event handler",
    "description": "The StorageEvent is an event that fires when a storage area has been changed in the context of another document. Whereas onstorage property is an EventHandler for processing storage events.\n    The syntax would be as below\n\n    \n\n    Let's take the example usage of onstorage event handler which logs the storage key and it's values",
    "codeExamples": [
      "window.onstorage = functionRef;",
      "window.onstorage = function (e) {\n      console.log(\n        \"The \" +\n          e.key +\n          \" key has been changed from \" +\n          e.oldValue +\n          \" to \" +\n          e.newValue +\n          \".\"\n      );\n    };"
    ],
    "tables": []
  },
  {
    "id": 47,
    "question": "Why do you need web storage",
    "description": "Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. Also, the information is never transferred to the server. Hence this is a more recommended approach than Cookies.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 48,
    "question": "How do you check web storage browser support",
    "description": "You need to check browser support for localStorage and sessionStorage before using web storage,",
    "codeExamples": [
      "if (typeof Storage !== \"undefined\") {\n      // Code for localStorage/sessionStorage.\n    } else {\n      // Sorry! No Web Storage support..\n    }"
    ],
    "tables": []
  },
  {
    "id": 49,
    "question": "How do you check web workers browser support",
    "description": "You need to check browser support for web workers before using it",
    "codeExamples": [
      "if (typeof Worker !== \"undefined\") {\n      // code for Web worker support.\n    } else {\n      // Sorry! No Web Worker support..\n    }"
    ],
    "tables": []
  },
  {
    "id": 50,
    "question": "Give an example of a web worker",
    "description": "You need to follow below steps to start using web workers for counting example\n\n    1. Create a Web Worker File: You need to write a script to increment the count value. Let's name it as counter.js\n\n    \n\n    Here postMessage() method is used to post a message back to the HTML page\n\n    2. Create a Web Worker Object: You can create a web worker object by checking for browser support. Let's name this file as web_worker_example.js\n\n    \n\n    and we can receive messages from web worker\n\n    \n\n    3. Terminate a Web Worker:\n       Web workers will continue to listen for messages (even after the external script is finished) until it is terminated. You can use the terminate() method to terminate listening to the messages.\n\n    \n\n    4. Reuse the Web Worker: If you set the worker variable to undefined you can reuse the code",
    "codeExamples": [
      "let i = 0;\n\n    function timedCount() {\n      i = i + 1;\n      postMessage(i);\n      setTimeout(\"timedCount()\", 500);\n    }\n\n    timedCount();",
      "if (typeof w == \"undefined\") {\n      w = new Worker(\"counter.js\");\n    }",
      "w.onmessage = function (event) {\n      document.getElementById(\"message\").innerHTML = event.data;\n    };",
      "w.terminate();",
      "w = undefined;"
    ],
    "tables": []
  },
  {
    "id": 51,
    "question": "What are the restrictions of web workers on DOM",
    "description": "WebWorkers don't have access to below javascript objects since they are defined in an external files\n\n    1. Window object\n    2. Document object\n    3. Parent object",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 52,
    "question": "What is a promise",
    "description": "A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder for a value that may not be available yet but will be resolved in the future.\n\n    A Promise can be in one of three states:\n    - `pending`: Initial state, neither fulfilled nor rejected.\n    - `fulfilled`: The operation completed successfully.\n    - `rejected`: The operation failed (e.g., due to a network error).\n\n\n     Promise Syntax\n\n    \n     Example: Creating and Using a Promise\n    \n    In the above example:\n\n    *   A `Promise` is created to handle an asynchronous operation with `resolve` and `reject` callbacks.\n    *   The `setTimeout` resolves the promise with a value after 5 seconds.\n    *   `.then()`, `.catch()`, and `.finally()` are used to handle success, errors, and cleanup respectively.\n\n    The action flow of a promise will be as below,\n\n    ![Screenshot](images/promises.png)",
    "codeExamples": [
      "const promise = new Promise(function (resolve, reject) {\n      // Perform async operation\n    });",
      "const promise = new Promise((resolve, reject) => {\n      setTimeout(() => {\n        resolve(\"I'm a Promise!\");\n      }, 5000);\n    });\n\n    promise\n      .then((value) => console.log(value)); // Logs after 5 seconds: \"I'm a Promise!\"\n      .catch((error) => console.error(error))  // Handles any rejection\n      .finally(() => console.log(\"Done\"));     // Runs regardless of success or failure"
    ],
    "tables": []
  },
  {
    "id": 53,
    "question": "Why do you need a promise",
    "description": "Promises are used to handle asynchronous operations, especially in languages like JavaScript, which often work with non-blocking operations such as network requests, file I/O, and timers. When an operation is asynchronous, it doesn't immediately return a result; instead, it works in the background and provides the result later. Handling this in a clean, organized way can be difficult without a structured approach.\n\n    Promises are used to:\n\n    1.  Handle asynchronous operations.\n    2.  Provide a cleaner alternative to callbacks.\n    3.  Avoid callback hell.\n    4.  Make code more readable and maintainable.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 54,
    "question": "Explain the three states of promise",
    "description": "Promises have three states:\n\n    1. Pending: This is an initial state of the Promise before an operation begins\n    2. Fulfilled: This state indicates that the specified operation was completed.\n    3. Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 55,
    "question": "What is a callback function",
    "description": "A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action.\n    Let's take a simple example of how to use callback function",
    "codeExamples": [
      "function callbackFunction(name) {\n      console.log(\"Hello \" + name);\n    }\n\n    function outerFunction(callback) {\n      let name = prompt(\"Please enter your name.\");\n      callback(name);\n    }\n\n    outerFunction(callbackFunction);"
    ],
    "tables": []
  },
  {
    "id": 56,
    "question": "Why do we need callbacks",
    "description": "The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response, javascript will keep executing while listening for other events.\n    Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.\n\n    \n\n    As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.",
    "codeExamples": [
      "function firstFunction() {\n      // Simulate a code delay\n      setTimeout(function () {\n        console.log(\"First function called\");\n      }, 1000);\n    }\n    function secondFunction() {\n      console.log(\"Second function called\");\n    }\n    firstFunction();\n    secondFunction();\n\n    // Output:\n    // Second function called\n    // First function called"
    ],
    "tables": []
  },
  {
    "id": 57,
    "question": "What is a callback hell",
    "description": "Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,",
    "codeExamples": [
      "async1(function(){\n        async2(function(){\n            async3(function(){\n                async4(function(){\n                    ....\n                });\n            });\n        });\n    });"
    ],
    "tables": []
  },
  {
    "id": 58,
    "question": "What are server-sent events",
    "description": "Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter/X updates, stock price updates, news feeds etc.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 59,
    "question": "How do you receive server-sent event notifications",
    "description": "The EventSource object is used to receive server-sent event notifications. For example, you can receive messages from server as below,",
    "codeExamples": [
      "if (typeof EventSource !== \"undefined\") {\n      var source = new EventSource(\"sse_generator.js\");\n      source.onmessage = function (event) {\n        document.getElementById(\"output\").innerHTML += event.data + \"<br>\";\n      };\n    }"
    ],
    "tables": []
  },
  {
    "id": 60,
    "question": "How do you check browser support for server-sent events",
    "description": "You can perform browser support for server-sent events before using it as below,",
    "codeExamples": [
      "if (typeof EventSource !== \"undefined\") {\n      // Server-sent events supported. Let's have some code here!\n    } else {\n      // No server-sent events supported\n    }"
    ],
    "tables": []
  },

  {
    "id": 62,
    "question": "What are the main rules of promise",
    "description": "A promise must follow a specific set of rules:\n\n    1. A promise is an object that supplies a standard-compliant `.then()` method\n    2. A pending promise may transition into either fulfilled or rejected state\n    3. A fulfilled or rejected promise is settled and it must not transition into any other state.\n    4. Once a promise is settled, the value must not change.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 63,
    "question": "What is callback in callback",
    "description": "You can nest one callback inside in another callback to execute the actions sequentially one by one. This is known as callbacks in callbacks. Beware, too many levels of nesting lead to [Callback hell](https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-filewhat-is-a-callback-hell)",
    "codeExamples": [
      "loadScript(\"/script1.js\", function (script) {\n      console.log(\"first script is loaded\");\n\n      loadScript(\"/script2.js\", function (script) {\n        console.log(\"second script is loaded\");\n\n        loadScript(\"/script3.js\", function (script) {\n          console.log(\"third script is loaded\");\n          // after all scripts are loaded\n        });\n      });\n    });"
    ],
    "tables": []
  },
  {
    "id": 64,
    "question": "What is promise chaining",
    "description": "The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,\n\n    \n\n    In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,\n\n    1. The initial promise resolves in 1 second,\n    2. After that `.then` handler is called by logging the result(1) and then return a promise with the value of result \\* 2.\n    3. After that the value passed to the next `.then` handler by logging the result(2) and return a promise with result \\* 3.\n    4. Finally the value passed to the last `.then` handler by logging the result(6) and return a promise with result \\* 4.",
    "codeExamples": [
      "new Promise(function (resolve, reject) {\n      setTimeout(() => resolve(1), 1000);\n    })\n      .then(function (result) {\n        console.log(result); // 1\n        return result * 2;\n      })\n      .then(function (result) {\n        console.log(result); // 2\n        return result * 3;\n      })\n      .then(function (result) {\n        console.log(result); // 6\n        return result * 4;\n      });"
    ],
    "tables": []
  },
  {
    "id": 65,
    "question": "What is promise.all",
    "description": "Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected. For example, the syntax of promise.all method is below,\n\n    \n\n    Note: Remember that the order of the promises(output the result) is maintained as per input order.",
    "codeExamples": [
      "Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log(`Error in promises ${error}`))"
    ],
    "tables": []
  },
  {
    "id": 66,
    "question": "What is the purpose of the race method in promise",
    "description": "Promise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first",
    "codeExamples": [
      "var promise1 = new Promise(function (resolve, reject) {\n      setTimeout(resolve, 500, \"one\");\n    });\n    var promise2 = new Promise(function (resolve, reject) {\n      setTimeout(resolve, 100, \"two\");\n    });\n\n    Promise.race([promise1, promise2]).then(function (value) {\n      console.log(value); // \"two\" // Both promises will resolve, but promise2 is faster\n    });"
    ],
    "tables": []
  },
  {
    "id": 67,
    "question": "What is a strict mode in javascript",
    "description": "JavaScript’s \"use strict\" directive is used to opt into a stricter parsing and error-handling mode for your scripts or functions. It helps catch common bugs, makes your code more secure, and prepares it for future versions of JavaScript.\n\n    Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression `\"use strict\";` instructs the browser to use the javascript code in the Strict mode. This also enables block-scoped variables.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 68,
    "question": "Why do you need strict mode",
    "description": "Strict mode is useful to write \"secure\" JavaScript by notifying \"bad syntax\" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 69,
    "question": "How do you declare strict mode",
    "description": "The strict mode is declared by adding \"use strict\"; to the beginning of a script or a function.\n    If declared at the beginning of a script, it has global scope.\n\n    \n\n    and if you declare inside a function, it has local scope",
    "codeExamples": [
      "\"use strict\";\n    x = 3.14; // This will cause an error because x is not declared",
      "x = 3.14; // This will not cause an error.\n    myFunction();\n\n    function myFunction() {\n      \"use strict\";\n      y = 3.14; // This will cause an error\n    }"
    ],
    "tables": []
  },
  {
    "id": 70,
    "question": "What is the purpose of double exclamation",
    "description": "The double exclamation or negation(!!) ensures the resulting type is a boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, it will be true.\n    For example, you can test IE version using this expression as below,\n\n    \n\n    If you don't use this expression then it returns the original value.\n\n    \n\n    Note: The expression !! is not an operator, but it is just twice of ! operator.",
    "codeExamples": [
      "let isIE8 = false;\n    isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);\n    console.log(isIE8); // returns true or false",
      "console.log(navigator.userAgent.match(/MSIE 8.0/)); // returns either an Array or null"
    ],
    "tables": []
  },
  {
    "id": 71,
    "question": "What is the purpose of the delete operator",
    "description": "The delete operator is used to delete the property as well as its value.",
    "codeExamples": [
      "var user = { firstName: \"John\", lastName: \"Doe\", age: 20 };\n    delete user.age;\n\n    console.log(user); // {firstName: \"John\", lastName:\"Doe\"}"
    ],
    "tables": []
  },
  {
    "id": 72,
    "question": "What is typeof operator",
    "description": "You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.",
    "codeExamples": [
      "typeof \"John Abraham\"; // Returns \"string\"\n    typeof (1 + 2); // Returns \"number\"\n    typeof [1, 2, 3]; // Returns \"object\" because all arrays are also objects"
    ],
    "tables": []
  },
  {
    "id": 73,
    "question": "What is undefined property",
    "description": "The undefined property indicates that a variable has not been assigned a value, or declared but not initialized at all. The type of undefined value is undefined too.\n\n    \n\n    Any variable can be emptied by setting the value to undefined.",
    "codeExamples": [
      "var user; // Value is undefined, type is undefined\n    console.log(typeof user); //undefined",
      "user = undefined;"
    ],
    "tables": []
  },
  {
    "id": 74,
    "question": "What is null value",
    "description": "The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values. The type of null value is object.\n    You can empty the variable by setting the value to null.",
    "codeExamples": [
      "var user = null;\n    console.log(typeof user); //object"
    ],
    "tables": []
  },
  
  {
    "id": 76,
    "question": "What is eval",
    "description": "The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.",
    "codeExamples": [
      "console.log(eval(\"1 + 2\")); //  3"
    ],
    "tables": []
  },
  
  {
    "id": 78,
    "question": "How do you access history in javascript",
    "description": "The window.history object contains the browser's history. You can load previous and next URLs in the history using back() and next() methods.\n\n    \n\n    Note: You can also access history without window prefix.",
    "codeExamples": [
      "function goBack() {\n      window.history.back();\n    }\n    function goForward() {\n      window.history.forward();\n    }"
    ],
    "tables": []
  },
  {
    "id": 79,
    "question": "How do you detect caps lock key turned on or not",
    "description": "The `mouseEvent getModifierState()` is used to return a boolean value that indicates whether the specified modifier key is activated or not. The modifiers such as CapsLock, ScrollLock and NumLock are activated when they are clicked, and deactivated when they are clicked again.\n\n    Let's take an input element to detect the CapsLock on/off behavior with an example:\n\n    ```html\n    <input type=\"password\" onmousedown=\"enterInput(event)\" />\n\n    <p id=\"feedback\"></p>\n\n    <script>\n      function enterInput(e) {\n        var flag = e.getModifierState(\"CapsLock\");\n        if (flag) {\n          document.getElementById(\"feedback\").innerHTML = \"CapsLock activated\";\n        } else {\n          document.getElementById(\"feedback\").innerHTML =\n            \"CapsLock not activated\";\n        }\n      }\n    </script>\n    ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 80,
    "question": "What is isNaN",
    "description": "The isNaN() function is used to determine whether a value is an illegal number (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.",
    "codeExamples": [
      "isNaN(\"Hello\"); //true\n    isNaN(\"100\"); //false"
    ],
    "tables": []
  },

  {
    "id": 82,
    "question": "What are global variables",
    "description": "Global variables are those that are available throughout the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable",
    "codeExamples": [
      "msg = \"Hello\"; // var is missing, it becomes global variable"
    ],
    "tables": []
  },
  {
    "id": 83,
    "question": "What are the problems with global variables",
    "description": "The problem with global variables is the conflict of variable names of local and global scope. It is also difficult to debug and test the code that relies on global variables.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 84,
    "question": "What is NaN property",
    "description": "The NaN property is a global property that represents \"Not-a-Number\" value. i.e, It indicates that a value is not a legal number. It is very rare to use NaN in a program but it can be used as return value for few cases",
    "codeExamples": [
      "Math.sqrt(-1);\n    parseInt(\"Hello\");"
    ],
    "tables": []
  },
  {
    "id": 85,
    "question": "What is the purpose of isFinite function",
    "description": "The isFinite() function is used to determine whether a number is a finite, legal number. It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), otherwise it returns true.",
    "codeExamples": [
      "isFinite(Infinity); // false\n    isFinite(NaN); // false\n    isFinite(-Infinity); // false\n\n    isFinite(100); // true"
    ],
    "tables": []
  },
  {
    "id": 86,
    "question": "What is an event flow",
    "description": "Event flow refers to the order in which events are handled in the browser when a user interacts with elements on a webpage like clicking, typing, hovering, etc.\n\n    When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object.\n\n    Hence, there are three phases in JavaScript’s event flow:\n\n    1. Event Capturing(Top to Bottom): The event starts from the window/document and moves down the DOM tree toward the target element.\n    2. Target phase: The event reaches the target element — the element that was actually interacted with.\n    3. Event Bubbling(Bottom to Top): The event then bubbles back up from the target element to the root.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 87,
    "question": "What is event capturing",
    "description": "Event capturing is a phase of event propagation in which an event is first intercepted by the outermost ancestor element, then travels downward through the DOM hierarchy until it reaches the target (innermost) element.\n\n    To handle events during the capturing phase, you need to pass `true` as the third argument to the `addEventListener` method.",
    "codeExamples": [
      "<div>\n        <button class=\"child\">Hello</button>\n      </div>\n\n      <script>\n        const parent = document.querySelector(\"div\");\n        const child = document.querySelector(\".child\");\n\n        // Capturing phase: parent listener (runs first)\n        parent.addEventListener(\"click\", function () {\n          console.log(\"Parent (capturing)\");\n        }, true); // `true` enables capturing\n\n        // Bubbling phase: child listener (runs after)\n        child.addEventListener(\"click\", function () {\n          console.log(\"Child (bubbling)\");\n        });\n      </script>\n      // Parent (capturing)\n      // Child (bubbling)"
    ],
    "tables": []
  },
  {
    "id": 88,
    "question": "What is event bubbling",
    "description": "Event bubbling is a type of event propagation in which an event first triggers on the innermost target element (the one the user interacted with), and then bubbles up through its ancestors in the DOM hierarchy — eventually reaching the outermost elements, like the document or window.\n\n    By default, event listeners in JavaScript are triggered during the bubbling phase, unless specified otherwise.\n\n    \n\n    Here, at first, the event triggers on the child button. Thereafter it bubbles up and triggers the parent div's event handler.",
    "codeExamples": [
      "<div>\n      <button class=\"child\">Hello</button>\n    </div>\n\n    <script>\n      const parent = document.querySelector(\"div\");\n      const child = document.querySelector(\".child\");\n\n      // Bubbling phase (default)\n      parent.addEventListener(\"click\", function () {\n        console.log(\"Parent\");\n      });\n\n      child.addEventListener(\"click\", function () {\n        console.log(\"Child\");\n      });\n    </script>\n    //Child\n    //Parent"
    ],
    "tables": []
  },
  {
    "id": 89,
    "question": "How do you submit a form using JavaScript",
    "description": "You can submit a form using `document.forms[0].submit()`. All the form input's information is submitted using onsubmit event handler",
    "codeExamples": [
      "function submit() {\n      document.forms[0].submit();\n    }"
    ],
    "tables": []
  },
  {
    "id": 90,
    "question": "How do you find operating system details",
    "description": "The window.navigator object contains information about the visitor's browser OS details. Some of the OS properties are available under platform property,",
    "codeExamples": [
      "console.log(navigator.platform);"
    ],
    "tables": []
  },
  {
    "id": 91,
    "question": "What is the difference between document load and DOMContentLoaded events",
    "description": "The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. Whereas The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images).",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 92,
    "question": "What is the difference between native, host and user objects",
    "description": "`Native objects` are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec.\n    `Host objects` are objects provided by the browser or runtime environment (Node).\n\n    For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects.\n    `User objects` are objects defined in the javascript code. For example, User objects created for profile information.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 93,
    "question": "What are the tools or techniques used for debugging JavaScript code",
    "description": "You can use below tools or techniques for debugging javascript\n\n    1. Chrome Devtools\n    2. debugger statement\n    3. Good old console.log statement",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 94,
    "question": "What are the pros and cons of promises over callbacks",
    "description": "Below are the list of pros and cons of promises over callbacks,\n\n    Pros:\n\n    1. It avoids callback hell which is unreadable\n    2. Easy to write sequential asynchronous code with .then()\n    3. Easy to write parallel asynchronous code with Promise.all()\n    4. Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)\n\n    Cons:\n\n    5. It makes little complex code\n    6. You need to load a polyfill if ES6 is not supported",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 95,
    "question": "What is the difference between an attribute and a property",
    "description": "Attributes are defined on the HTML markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes: `type` and `value`,\n\n    \n\n    You can retrieve the attribute value as below, for example after typing \"Good morning\" into the input field:\n\n    \n\n    And after you change the value of the text field to \"Good evening\", it becomes like",
    "codeExamples": [
      "<input type=\"text\" value=\"Name:\">",
      "const input = document.querySelector(\"input\");\n    console.log(input.getAttribute(\"value\")); // Good morning\n    console.log(input.value); // Good morning",
      "console.log(input.getAttribute(\"value\")); // Good evening\n    console.log(input.value); // Good evening"
    ],
    "tables": []
  },
  {
    "id": 96,
    "question": "What is same-origin policy",
    "description": "The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 97,
    "question": "What is the purpose of void 0",
    "description": "Void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. It is commonly used for HTML documents that use href=\"JavaScript:Void(0);\" within an `<a>` element. i.e, when you click a link, the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression.\n    For example, the below link notify the message without reloading the page",
    "codeExamples": [
      "<a href=\"JavaScript:void(0);\" onclick=\"alert('Well done!')\">\n      Click Me!\n    </a>"
    ],
    "tables": []
  },
  {
    "id": 98,
    "question": "Is JavaScript a compiled or interpreted language",
    "description": "JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 99,
    "question": "Is JavaScript a case-sensitive language",
    "description": "Yes, JavaScript is a case sensitive language. The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 100,
    "question": "Is there any relation between Java and JavaScript",
    "description": "No, they are entirely two different programming languages and have nothing to do with each other. But both of them are Object Oriented Programming languages and like many other languages, they follow similar syntax for basic features(if, else, for, switch, break, continue etc).",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 101,
    "question": "What are events",
    "description": "Events are \"things\" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can `react` on these events. Some of the examples of HTML events are,\n\n      1. Web page has finished loading\n      2. Input field was changed\n      3. Button was clicked\n\n      Let's describe the behavior of click event for button element,",
    "codeExamples": [
      "<!doctype html>\n      <html>\n       <head>\n         <script>\n           function greeting() {\n             alert('Hello! Good morning');\n           }\n         </script>\n       </head>\n       <body>\n         <button type=\"button\" onclick=\"greeting()\">Click me</button>\n       </body>\n      </html>"
    ],
    "tables": []
  },
  {
    "id": 102,
    "question": "Who created javascript",
    "description": "JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Initially it was developed under the name `Mocha`, but later the language was officially called `LiveScript` when it first shipped in beta releases of Netscape.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 103,
    "question": "What is the use of preventDefault method",
    "description": "The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases.\n\n      \n\n      Note: Remember that not all events are cancelable.",
    "codeExamples": [
      "document\n        .getElementById(\"link\")\n        .addEventListener(\"click\", function (event) {\n          event.preventDefault();\n        });"
    ],
    "tables": []
  },
  {
    "id": 104,
    "question": "What is the use of stopPropagation method",
    "description": "The stopPropagation method is used to stop the event from bubbling up the event chain. For example, the below nested divs with stopPropagation method prevents default event propagation when clicking on nested div(Div1)",
    "codeExamples": [
      "<p>Click DIV1 Element</p>\n      <div onclick=\"secondFunc()\">DIV 2\n        <div onclick=\"firstFunc(event)\">DIV 1</div>\n      </div>\n\n      <script>\n      function firstFunc(event) {\n        alert(\"DIV 1\");\n        event.stopPropagation();\n      }\n\n      function secondFunc() {\n        alert(\"DIV 2\");\n      }\n      </script>"
    ],
    "tables": []
  },
  {
    "id": 105,
    "question": "What are the steps involved in return false usage",
    "description": "The return false statement in event handlers performs the below steps,\n\n      1. First it stops the browser's default action or behaviour.\n      2. It prevents the event from propagating the DOM\n      3. Stops callback execution and returns immediately when called.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 106,
    "question": "What is BOM",
    "description": "The Browser Object Model (BOM) allows JavaScript to \"talk to\" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.\n\n      ![Screenshot](images/bom.png)",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 107,
    "question": "What is the use of setTimeout",
    "description": "The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds. For example, let's log a message after 2 seconds using setTimeout method,",
    "codeExamples": [
      "setTimeout(function () {\n        console.log(\"Good morning\");\n      }, 2000);"
    ],
    "tables": []
  },
  {
    "id": 108,
    "question": "What is the use of setInterval",
    "description": "The setInterval() method is used to call a function or evaluate an expression at specified intervals (in milliseconds). For example, let's log a message after 2 seconds using setInterval method,",
    "codeExamples": [
      "setInterval(function () {\n        console.log(\"Good morning\");\n      }, 2000);"
    ],
    "tables": []
  },
  {
    "id": 109,
    "question": "Why is JavaScript treated as Single threaded",
    "description": "JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes. Whereas languages like java, go, C++ can make multi-threaded and multi-process programs.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 110,
    "question": "What is an event delegation",
    "description": "Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.\n\n      For example, if you wanted to detect field changes inside a specific form, you can use event delegation technique,",
    "codeExamples": [
      "var form = document.querySelector(\"#registration-form\");\n\n      // Listen for changes to fields inside the form\n      form.addEventListener(\n        \"input\",\n        function (event) {\n          // Log the field that was changed\n          console.log(event.target);\n        },\n        false\n      );"
    ],
    "tables": []
  },
  {
    "id": 111,
    "question": "What is ECMAScript",
    "description": "ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications. The first edition of ECMAScript was released in 1997.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 112,
    "question": "What is JSON",
    "description": "JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 113,
    "question": "What are the syntax rules of JSON",
    "description": "Below are the list of syntax rules of JSON\n\n      1. The data is in name/value pairs\n      2. The data is separated by commas\n      3. Curly braces hold objects\n      4. Square brackets hold arrays",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 114,
    "question": "What is the purpose JSON stringify",
    "description": "When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.",
    "codeExamples": [
      "var userJSON = { name: \"John\", age: 31 };\n      var userString = JSON.stringify(userJSON);\n      console.log(userString); //\"{\"name\":\"John\",\"age\":31}\""
    ],
    "tables": []
  },
  {
    "id": 115,
    "question": "How do you parse JSON string",
    "description": "When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.",
    "codeExamples": [
      "var userString = '{\"name\":\"John\",\"age\":31}';\n      var userJSON = JSON.parse(userString);\n      console.log(userJSON); // {name: \"John\", age: 31}"
    ],
    "tables": []
  },
  {
    "id": 116,
    "question": "Why do you need JSON",
    "description": "When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 117,
    "question": "What are PWAs",
    "description": "Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 118,
    "question": "What is the purpose of clearTimeout method",
    "description": "The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout()function before that. i.e, The return value of setTimeout() function is stored in a variable and it’s passed into the clearTimeout() function to clear the timer.\n\n      For example, the below setTimeout method is used to display the message after 3 seconds. This timeout can be cleared by the clearTimeout() method.",
    "codeExamples": [
      "<script>\n           var msg;\n           function greeting() {\n              alert('Good morning');\n           }\n           function start() {\n             msg =setTimeout(greeting, 3000);\n\n           }\n\n           function stop() {\n               clearTimeout(msg);\n           }\n      </script>"
    ],
    "tables": []
  },
  {
    "id": 119,
    "question": "What is the purpose of clearInterval method",
    "description": "The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function. i.e, The return value returned by setInterval() function is stored in a variable and it’s passed into the clearInterval() function to clear the interval.\n\n      For example, the below setInterval method is used to display the message for every 3 seconds. This interval can be cleared by the clearInterval() method.",
    "codeExamples": [
      "<script>\n           var msg;\n           function greeting() {\n              alert('Good morning');\n           }\n           function start() {\n             msg = setInterval(greeting, 3000);\n\n           }\n\n           function stop() {\n               clearInterval(msg);\n           }\n      </script>"
    ],
    "tables": []
  },
  {
    "id": 120,
    "question": "How do you redirect new page in javascript",
    "description": "In vanilla javascript, you can redirect to a new page using the `location` property of window object. The syntax would be as follows,",
    "codeExamples": [
      "function redirect() {\n        window.location.href = \"newPage.html\";\n      }"
    ],
    "tables": []
  },
  {
    "id": 121,
    "question": "How do you check whether a string contains a substring",
    "description": "There are 3 possible ways to check whether a string contains a substring or not,\n\n      1. Using includes: ES6 provided `String.prototype.includes` method to test a string contains a substring\n\n      \n\n      2. Using indexOf: In an ES5 or older environment, you can use `String.prototype.indexOf` which returns the index of a substring. If the index value is not equal to -1 then it means the substring exists in the main string.\n\n      \n\n      3. Using RegEx: The advanced solution is using Regular expression's test method(`RegExp.test`), which allows for testing for against regular expressions",
    "codeExamples": [
      "var mainString = \"hello\",\n        subString = \"hell\";\n      mainString.includes(subString);",
      "var mainString = \"hello\",\n        subString = \"hell\";\n      mainString.indexOf(subString) !== -1;",
      "var mainString = \"hello\",\n        regex = /hell/;\n      regex.test(mainString);"
    ],
    "tables": []
  },
  {
    "id": 122,
    "question": "How do you validate an email in javascript",
    "description": "You can validate an email in javascript using regular expressions. It is recommended to do validations on the server side instead of the client side. Because the javascript can be disabled on the client side.\n\n      \n\n      \n\n      The above regular expression accepts unicode characters.",
    "codeExamples": [
      "function validateEmail(email) {\n        var re =\n          /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n        return re.test(String(email).toLowerCase());\n      }"
    ],
    "tables": []
  },
  {
    "id": 123,
    "question": "How do you get the current url with javascript",
    "description": "You can use `window.location.href` expression to get the current url path and you can use the same expression for updating the URL too. You can also use `document.URL` for read-only purposes but this solution has issues in FF.",
    "codeExamples": [
      "console.log(\"location.href\", window.location.href); // Returns full URL"
    ],
    "tables": []
  },
  {
    "id": 124,
    "question": "What are the various url properties of location object",
    "description": "The below `Location` object properties can be used to access URL components of the page,\n\n      1. href - The entire URL\n      2. protocol - The protocol of the URL\n      3. host - The hostname and port of the URL\n      4. hostname - The hostname of the URL\n      5. port - The port number in the URL\n      6. pathname - The path name of the URL\n      7. search - The query portion of the URL\n      8. hash - The anchor portion of the URL",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 125,
    "question": "How do get query string values in javascript",
    "description": "You can use URLSearchParams to get query string values in javascript. Let's see an example to get the client code value from URL query string,",
    "codeExamples": [
      "const urlParams = new URLSearchParams(window.location.search);\n      const clientCode = urlParams.get(\"clientCode\");"
    ],
    "tables": []
  },
  {
    "id": 126,
    "question": "How do you check if a key exists in an object",
    "description": "You can check whether a key exists in an object or not using three approaches,\n\n      1. Using in operator: You can use the in operator whether a key exists in an object or not\n\n         \n\n         and If you want to check if a key doesn't exist, remember to use parenthesis,\n\n         \n\n      2. Using hasOwnProperty method: You can use `hasOwnProperty` to particularly test for properties of the object instance (and not inherited properties)\n\n         \n\n      3. Using undefined comparison: If you access a non-existing property from an object, the result is undefined. Let’s compare the properties against undefined to determine the existence of the property.",
    "codeExamples": [
      "\"key\" in obj;",
      "!(\"key\" in obj);",
      "obj.hasOwnProperty(\"key\"); // true",
      "const user = {\n           name: \"John\",\n         };\n\n         console.log(user.name !== undefined); // true\n         console.log(user.nickName !== undefined); // false"
    ],
    "tables": []
  },
  {
    "id": 127,
    "question": "How do you loop through or enumerate javascript object",
    "description": "You can use the `for-in` loop to loop through javascript object. You can also make sure that the key you get is an actual property of an object, and doesn't come from the prototype using `hasOwnProperty` method.",
    "codeExamples": [
      "var object = {\n        k1: \"value1\",\n        k2: \"value2\",\n        k3: \"value3\",\n      };\n\n      for (var key in object) {\n        if (object.hasOwnProperty(key)) {\n          console.log(key + \" -> \" + object[key]); // k1 -> value1 ...\n        }\n      }"
    ],
    "tables": []
  },
  {
    "id": 128,
    "question": "How do you test for an empty object",
    "description": "There are different solutions based on ECMAScript versions\n\n      1. Using Object entries(ECMA 7+): You can use object entries length along with constructor type.\n\n      \n\n      2. Using Object keys(ECMA 5+): You can use object keys length along with constructor type.\n\n      \n\n      3. Using for-in with hasOwnProperty(Pre-ECMA 5): You can use a for-in loop along with hasOwnProperty.",
    "codeExamples": [
      "Object.entries(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well",
      "Object.keys(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well",
      "function isEmpty(obj) {\n        for (var prop in obj) {\n          if (obj.hasOwnProperty(prop)) {\n            return false;\n          }\n        }\n\n        return JSON.stringify(obj) === JSON.stringify({});\n      }"
    ],
    "tables": []
  },
  {
    "id": 129,
    "question": "What is an arguments object",
    "description": "The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function,\n\n      \n\n      Note: You can't apply array methods on arguments object. But you can convert into a regular array as below.",
    "codeExamples": [
      "function sum() {\n        var total = 0;\n        for (var i = 0, len = arguments.length; i < len; ++i) {\n          total += arguments[i];\n        }\n        return total;\n      }\n\n      sum(1, 2, 3); // returns 6",
      "var argsArray = Array.prototype.slice.call(arguments);"
    ],
    "tables": []
  },
  {
    "id": 130,
    "question": "How do you make first letter of the string in an uppercase",
    "description": "You can create a function which uses a chain of string methods such as charAt, toUpperCase and slice methods to generate a string with the first letter in uppercase.",
    "codeExamples": [
      "function capitalizeFirstLetter(string) {\n        return string.charAt(0).toUpperCase() + string.slice(1);\n      }"
    ],
    "tables": []
  },
  {
    "id": 131,
    "question": "What are the pros and cons of for loops",
    "description": "The for-loop is a commonly used iteration syntax in javascript. It has both pros and cons\n\n       Pros\n\n      1. Works on every environment\n      2. You can use break and continue flow control statements\n\n       Cons\n\n      3. Too verbose\n      4. Imperative\n      5. You might face off-by-one errors.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 132,
    "question": "How do you display the current date in javascript",
    "description": "You can use `new Date()` to generate a new Date object containing the current date and time. For example, let's display the current date in mm/dd/yyyy",
    "codeExamples": [
      "var today = new Date();\n      var dd = String(today.getDate()).padStart(2, \"0\");\n      var mm = String(today.getMonth() + 1).padStart(2, \"0\"); //January is 0!\n      var yyyy = today.getFullYear();\n\n      today = mm + \"/\" + dd + \"/\" + yyyy;\n      document.write(today);"
    ],
    "tables": []
  },
  {
    "id": 133,
    "question": "How do you compare two date objects",
    "description": "You need to use date.getTime() method in order to compare unix timestamp values",
    "codeExamples": [
      "var d1 = new Date();\n      var d2 = new Date(d1);\n      console.log(d1.getTime() === d2.getTime()); //True\n      console.log(d1 === d2); // False"
    ],
    "tables": []
  },
  {
    "id": 134,
    "question": "How do you check if a string starts with another string",
    "description": "You can use ECMAScript 6's `String.prototype.startsWith()` method to check if a string starts with another string or not. But it is not yet supported in all browsers. Let's see an example to see this usage,",
    "codeExamples": [
      "\"Good morning\".startsWith(\"Good\"); // true\n      \"Good morning\".startsWith(\"morning\"); // false"
    ],
    "tables": []
  },
  {
    "id": 135,
    "question": "How do you trim a string in javascript",
    "description": "JavaScript provided a trim method on string types to trim any whitespaces present at the beginning or ending of the string.\n\n      \n\n      If your browser(<IE9) doesn't support this method then you can use below polyfill.",
    "codeExamples": [
      "\"  Hello World   \".trim(); //Hello World",
      "if (!String.prototype.trim) {\n        (function () {\n          // Make sure we trim BOM and NBSP\n          var rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;\n          String.prototype.trim = function () {\n            return this.replace(rtrim, \"\");\n          };\n        })();\n      }"
    ],
    "tables": []
  },
  {
    "id": 136,
    "question": "How do you add a key value pair in javascript",
    "description": "There are two possible solutions to add new properties to an object.\n\n      Let's take a simple object to explain these solutions.\n\n      \n\n      1. Using dot notation: This solution is useful when you know the name of the property\n\n      \n\n      2. Using square bracket notation: This solution is useful when the name of the property is dynamically determined or the key's name is non-JS like \"user-name\"",
    "codeExamples": [
      "var object = {\n        key1: value1,\n        key2: value2,\n      };",
      "object.key3 = \"value3\";",
      "obj[\"key3\"] = \"value3\";"
    ],
    "tables": []
  },
  {
    "id": 137,
    "question": "Is the !-- notation represents a special operator",
    "description": "No,that's not a special operator. But it is a combination of 2 standard operators one after the other,\n\n      1. A logical not (!)\n      2. A prefix decrement (--)\n\n      At first, the value decremented by one and then tested to see if it is equal to zero or not for determining the truthy/falsy value.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 138,
    "question": "How do you assign default values to variables",
    "description": "You can use the logical or operator `||` in an assignment expression to provide a default value. The syntax looks like as below,\n\n      \n\n      As per the above expression, variable 'a 'will get the value of 'c' only if 'b' is falsy (if is null, false, undefined, 0, empty string, or NaN), otherwise 'a' will get the value of 'b'.",
    "codeExamples": [
      "var a = b || c;"
    ],
    "tables": []
  },
  {
    "id": 139,
    "question": "How do you define multiline strings",
    "description": "You can define multiline string literals using the '\\n' character followed by line terminator('\\').\n\n      \n\n      But if you have a space after the '\\n' character, there will be indentation inconsistencies.",
    "codeExamples": [
      "var str = \"This is a \\n very lengthy \\n sentence!\";\n      console.log(str);"
    ],
    "tables": []
  },
  {
    "id": 140,
    "question": "What is an app shell model",
    "description": "An application shell (or app shell) architecture is one way to build a Progressive Web App that reliably and instantly loads on your users' screens, similar to what you see in native applications. It is useful for getting some initial HTML to the screen fast without a network.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 141,
    "question": "Can we define properties for functions",
    "description": "Yes, we can define properties for functions because functions are also objects.",
    "codeExamples": [
      "fn = function (x) {\n        //Function code goes here\n      };\n\n      fn.name = \"John\";\n\n      fn.profile = function (y) {\n        //Profile code goes here\n      };"
    ],
    "tables": []
  },
  {
    "id": 142,
    "question": "What is the way to find the number of parameters expected by a function",
    "description": "You can use `function.length` syntax to find the number of parameters expected by a function. Let's take an example of `sum` function to calculate the sum of numbers,",
    "codeExamples": [
      "function sum(num1, num2, num3, num4) {\n        return num1 + num2 + num3 + num4;\n      }\n      sum.length; // 4 is the number of parameters expected."
    ],
    "tables": []
  },
  {
    "id": 143,
    "question": "What is a polyfill",
    "description": "A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it. For example, Silverlight plugin polyfill can be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7.\n\n      There are two main polyfill libraries available,\n\n      1. Core.js: It is a modular javascript library used for cutting-edge ECMAScript features.\n      2. Polyfill.io: It provides polyfills that are required for browser needs.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 144,
    "question": "What are break and continue statements",
    "description": "The break statement is used to \"jump out\" of a loop. i.e, It breaks the loop and continues executing the code after the loop.\n\n      \n\n      The continue statement is used to \"jump over\" one iteration in the loop. i.e, It breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.",
    "codeExamples": [
      "for (i = 0; i < 10; i++) {\n        if (i === 5) {\n          break;\n        }\n        text += \"Number: \" + i + \"<br>\";\n      }",
      "for (i = 0; i < 10; i++) {\n        if (i === 5) {\n          continue;\n        }\n        text += \"Number: \" + i + \"<br>\";\n      }"
    ],
    "tables": []
  },
  {
    "id": 145,
    "question": "What are js labels",
    "description": "The label statement allows us to name loops and blocks in JavaScript. We can then use these labels to refer back to the code later. For example, the below code with labels avoids printing the numbers when they are same,",
    "codeExamples": [
      "var i, j;\n\n      loop1: for (i = 0; i < 3; i++) {\n        loop2: for (j = 0; j < 3; j++) {\n          if (i === j) {\n            continue loop1;\n          }\n          console.log(\"i = \" + i + \", j = \" + j);\n        }\n      }\n\n      // Output is:\n      //   \"i = 1, j = 0\"\n      //   \"i = 2, j = 0\"\n      //   \"i = 2, j = 1\""
    ],
    "tables": []
  },
  {
    "id": 146,
    "question": "What are the benefits of keeping declarations at the top",
    "description": "It is recommended to keep all declarations at the top of each script or function. The benefits of doing this are,\n\n      1. Gives cleaner code\n      2. It provides a single place to look for local variables\n      3. Easy to avoid unwanted global variables\n      4. It reduces the possibility of unwanted re-declarations",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 147,
    "question": "What are the benefits of initializing variables",
    "description": "It is recommended to initialize variables because of the below benefits,\n\n      1. It gives cleaner code\n      2. It provides a single place to initialize variables\n      3. Avoid undefined values in the code",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 148,
    "question": "What are the recommendations to create new object",
    "description": "It is recommended to avoid creating new objects using `new Object()`. Instead you can initialize values based on it's type to create the objects.\n\n      1. Assign {} instead of new Object()\n      2. Assign \"\" instead of new String()\n      3. Assign 0 instead of new Number()\n      4. Assign false instead of new Boolean()\n      5. Assign [] instead of new Array()\n      6. Assign /()/ instead of new RegExp()\n      7. Assign function (){} instead of new Function()\n\n      You can define them as an example,",
    "codeExamples": [
      "var v1 = {};\n      var v2 = \"\";\n      var v3 = 0;\n      var v4 = false;\n      var v5 = [];\n      var v6 = /()/;\n      var v7 = function () {};"
    ],
    "tables": []
  },
  {
    "id": 149,
    "question": "How do you define JSON arrays",
    "description": "JSON arrays are written inside square brackets and arrays contain javascript objects. For example, the JSON array of users would be as below,",
    "codeExamples": [
      "\"users\":[\n        {\"firstName\":\"John\", \"lastName\":\"Abrahm\"},\n        {\"firstName\":\"Anna\", \"lastName\":\"Smith\"},\n        {\"firstName\":\"Shane\", \"lastName\":\"Warn\"}\n      ]"
    ],
    "tables": []
  },
  {
    "id": 150,
    "question": "How do you generate random integers",
    "description": "You can use `Math.random()` with `Math.floor()` to return random integers. For example, if you want generate random integers between 1 to 10, the multiplication factor should be 10,\n\n      \n\n      Note: `Math.random()` returns a random number between 0 (inclusive), and 1 (exclusive)",
    "codeExamples": [
      "Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10\n      Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100"
    ],
    "tables": []
  },
  {
    "id": 151,
    "question": "Can you write a random integers function to print integers within a range",
    "description": "Yes, you can create a proper random function to return a random number between min and max (both included)",
    "codeExamples": [
      "function randomInteger(min, max) {\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n      }\n      randomInteger(1, 100); // returns a random integer from 1 to 100\n      randomInteger(1, 1000); // returns a random integer from 1 to 1000"
    ],
    "tables": []
  },
  {
    "id": 152,
    "question": "What is tree shaking",
    "description": "Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export). Initially this has been popularized by the ES2015 module bundler `rollup`, these days practically all bundlers use this technique.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 153,
    "question": "What is the need of tree shaking",
    "description": "Tree Shaking can significantly reduce the code size in any application. i.e, The less code we send over the wire the more performant the application will be. For example, if we just want to create a “Hello World” Application using SPA frameworks then it will take around a few MBs, but by tree shaking it can bring down the size to just a few hundred KBs. Tree shaking is implemented in Rollup and Webpack bundlers.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 154,
    "question": "Is it recommended to use eval",
    "description": "No, it allows arbitrary code to be run which causes a security problem. As we know that the eval() function is used to run text as code. In most of the cases, it should not be necessary to use it.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 155,
    "question": "What is a Regular Expression",
    "description": "A regular expression is a sequence of characters that forms a search pattern. You can use this search pattern for searching data in a text. These can be used to perform all types of text search and text replace operations. Let's see the syntax format now,\n\n      \n\n      For example, the regular expression or search pattern with case-insensitive username would be,",
    "codeExamples": [
      "/pattern/modifiers;",
      "/John/i;"
    ],
    "tables": []
  },
  {
    "id": 156,
    "question": "What are the string methods that accept Regular expression",
    "description": "There are six string methods: `search()`, `replace()`, `replaceAll()`, `match()`, `matchAll()`, and `split()`.\n\n      The `search()` method uses an expression to search for a match, and returns the position of the match.\n\n      \n\n      The `replace()` and `replaceAll()` methods are used to return a modified string where the pattern is replaced.\n\n      \n\n      The `match()` and `matchAll()` methods are used to return the matches when matching a string against a regular expression.\n\n      \n\n      The `split()` method is used to split a string into an array of substrings, and returns the new array.",
    "codeExamples": [
      "var msg = \"Hello John\";\n      var n = msg.search(/John/i); // 6",
      "var msg = \"ball bat\";\n      var n1 = msg.replace(/b/i, \"c\"); // call bat\n      var n2 = msg.replaceAll(/b/i, \"c\"); // call cat",
      "var msg = \"Hello John\";\n      var n1 = msg.match(/[A-Z]/g); // [\"H\", \"J\"]\n      var n2 = msg.matchAll(/[A-Z]/g); // this returns an iterator",
      "var msg = \"Hello John\";\n      var n = msg.split(/\\s/); // [\"Hello\", \"John\"]"
    ],
    "tables": []
  },
 
  {
    "id": 158,
    "question": "What are regular expression patterns",
    "description": "Regular Expressions provide a group of patterns in order to match characters. Basically they are categorized into 3 types,\n\n      1. Brackets: These are used to find a range of characters.\n         For example, below are some use cases,\n         1. [abc]: Used to find any of the characters between the brackets(a,b,c)\n         2. [0-9]: Used to find any of the digits between the brackets\n         3. (a      2. Metacharacters: These are characters with a special meaning.\n         For example, below are some use cases,\n         1. \\\\d: Used to find a digit\n         2. \\\\s: Used to find a whitespace character\n         3. \\\\b: Used to find a match at the beginning or ending of a word\n      3. Quantifiers: These are useful to define quantities.\n         For example, below are some use cases,\n         1. n+: Used to find matches for any string that contains at least one n\n         2. n\\*: Used to find matches for any string that contains zero or more occurrences of n\n         3. n?: Used to find matches for any string that contains zero or one occurrences of n",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 159,
    "question": "What is a RegExp object",
    "description": "RegExp object is a regular expression object with predefined properties and methods. Let's see the simple usage of RegExp object,",
    "codeExamples": [
      "var regexp = new RegExp(\"\\\\w+\");\n      console.log(regexp);\n      // expected output: /\\w+/"
    ],
    "tables": []
  },
  {
    "id": 160,
    "question": "How do you search a string for a pattern",
    "description": "You can use the `test()` method of regular expression in order to search a string for a pattern, and return true or false depending on the result.",
    "codeExamples": [
      "var pattern = /you/;\n      console.log(pattern.test(\"How are you?\")); //true"
    ],
    "tables": []
  },
  {
    "id": 161,
    "question": "What is the purpose of exec method",
    "description": "The purpose of exec method is similar to test method but it executes a search for a match in a specified string and returns a result array, or null instead of returning true/false.",
    "codeExamples": [
      "var pattern = /you/;\n      console.log(pattern.exec(\"How are you?\")); //[\"you\", index: 8, input: \"How are you?\", groups: undefined]"
    ],
    "tables": []
  },
  {
    "id": 162,
    "question": "How do you change the style of a HTML element",
    "description": "You can change inline style or classname of a HTML element using javascript DOM-manipulation\n\n      1. Using style property: You can modify inline style using style property\n\n      \n\n      2. Using ClassName property: It is easy to modify element class using className property",
    "codeExamples": [
      "document.getElementById(\"title\").style.fontSize = \"30px\";",
      "document.getElementById(\"title\").className = \"custom-title\";"
    ],
    "tables": []
  },
  {
    "id": 163,
    "question": "What would be the result of 1+2+'3'",
    "description": "The output is going to be `33`. Since `1` and `2` are numeric values, the result of the first two digits is going to be a numeric value `3`. The next digit is a string type value because of that the addition of numeric value `3` and string type value `3` is just going to be a concatenation value `33`. Other operationrs like `3 * '3'` do yield correct results because the string is coerced into a number.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 164,
    "question": "What is a debugger statement",
    "description": "The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.\n      For example, in the below function a debugger statement has been inserted. So\n      execution is paused at the debugger statement just like a breakpoint in the script source.",
    "codeExamples": [
      "function getProfile() {\n        // code goes here\n        debugger;\n        // code goes here\n      }"
    ],
    "tables": []
  },
  {
    "id": 165,
    "question": "What is the purpose of breakpoints in debugging",
    "description": "You can set breakpoints in the javascript code once the debugger statement is executed and the debugger window pops up. At each breakpoint, javascript will stop executing, and let you examine the JavaScript values. After examining values, you can resume the execution of code using the play button.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 166,
    "question": "Can I use reserved words as identifiers",
    "description": "No, you cannot use the reserved words as variables, labels, object or function names. Let's see one simple example,",
    "codeExamples": [
      "var else = \"hello\"; // Uncaught SyntaxError: Unexpected token else"
    ],
    "tables": []
  },
  {
    "id": 167,
    "question": "How do you detect a mobile browser",
    "description": "You can use regex which returns a true or false value depending on whether or not the user is browsing with a mobile.",
    "codeExamples": [
      "window.mobilecheck = function () {\n        var mobileCheck = false;\n        (function (a) {\n          if (\n            /(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(\n              a\n            ) ||\n            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(\n              a.substr(0, 4)\n            )\n          )\n            mobileCheck = true;\n        })(navigator.userAgent || navigator.vendor || window.opera);\n        return mobileCheck;\n      };"
    ],
    "tables": []
  },
  {
    "id": 168,
    "question": "How do you detect a mobile browser without regexp",
    "description": "You can detect mobile browsers by simply running through a list of devices and checking if the useragent matches anything. This is an alternative solution for RegExp usage,",
    "codeExamples": [
      "function detectmob() {\n        if (\n          navigator.userAgent.match(/Android/i) ||\n          navigator.userAgent.match(/webOS/i) ||\n          navigator.userAgent.match(/iPhone/i) ||\n          navigator.userAgent.match(/iPad/i) ||\n          navigator.userAgent.match(/iPod/i) ||\n          navigator.userAgent.match(/BlackBerry/i) ||\n          navigator.userAgent.match(/Windows Phone/i)\n        ) {\n          return true;\n        } else {\n          return false;\n        }\n      }"
    ],
    "tables": []
  },
  {
    "id": 169,
    "question": "How do you get the image width and height using JS",
    "description": "You can programmatically get the image and check the dimensions(width and height) using Javascript.",
    "codeExamples": [
      "var img = new Image();\n      img.onload = function () {\n        console.log(this.width + \"x\" + this.height);\n      };\n      img.src = \"http://www.google.com/intl/en_ALL/images/logo.gif\";"
    ],
    "tables": []
  },
  {
    "id": 170,
    "question": "How do you make synchronous HTTP request",
    "description": "Browsers provide an XMLHttpRequest object which can be used to make synchronous HTTP requests from JavaScript.",
    "codeExamples": [
      "function httpGet(theUrl) {\n        var xmlHttpReq = new XMLHttpRequest();\n        xmlHttpReq.open(\"GET\", theUrl, false); // false for synchronous request\n        xmlHttpReq.send(null);\n        return xmlHttpReq.responseText;\n      }"
    ],
    "tables": []
  },
  {
    "id": 171,
    "question": "How do you make asynchronous HTTP request",
    "description": "Browsers provide an XMLHttpRequest object which can be used to make asynchronous HTTP requests from JavaScript by passing the 3rd parameter as true.\n\n      \n\n      Today this is considered deprecated, because an async `fetch` call (in browsers later than 2016) is simpler and more robust.",
    "codeExamples": [
      "function httpGetAsync(theUrl, callback) {\n        var xmlHttpReq = new XMLHttpRequest();\n        xmlHttpReq.onreadystatechange = function () {\n          if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)\n            callback(xmlHttpReq.responseText);\n        };\n        xmlHttpReq.open(\"GET\", theUrl, true); // true for asynchronous\n        xmlHttpReq.send(null);\n      }"
    ],
    "tables": []
  },
  {
    "id": 172,
    "question": "How do you convert date to another timezone in javascript",
    "description": "You can use the toLocaleString() method to convert dates in one timezone to another. For example, let's convert current date to British English timezone as below,",
    "codeExamples": [
      "console.log(new Date().toLocaleString(\"en-GB\", { timeZone: \"UTC\" })); //29/06/2019, 09:56:00"
    ],
    "tables": []
  },
  {
    "id": 173,
    "question": "What are the properties used to get size of window",
    "description": "You can use innerWidth, innerHeight, clientWidth, clientHeight properties of windows, document element and document body objects to find the size of a window. Let's use them combination of these properties to calculate the size of a window or document,",
    "codeExamples": [
      "var width =\n        window.innerWidth ||\n        document.documentElement.clientWidth ||\n        document.body.clientWidth;\n\n      var height =\n        window.innerHeight ||\n        document.documentElement.clientHeight ||\n        document.body.clientHeight;"
    ],
    "tables": []
  },
  {
    "id": 174,
    "question": "What is a conditional operator in javascript",
    "description": "The conditional (ternary) operator is the only JavaScript operator that takes three operands which acts as a shortcut for `if` statements.",
    "codeExamples": [
      "var isAuthenticated = false;\n      console.log(\n        isAuthenticated ? \"Hello, welcome\" : \"Sorry, you are not authenticated\"\n      ); // Sorry, you are not authenticated"
    ],
    "tables": []
  },
  {
    "id": 175,
    "question": "Can you apply chaining on conditional operator",
    "description": "Yes, you can apply chaining on conditional operators similar to `if … else if … else if … else` chain. The syntax is going to be as below,",
    "codeExamples": [
      "function traceValue(someParam) {\n        return condition1\n          ? value1\n          : condition2\n          ? value2\n          : condition3\n          ? value3\n          : value4;\n      }\n\n      // The above conditional operator is equivalent to:\n\n      function traceValue(someParam) {\n        if (condition1) {\n          return value1;\n        } else if (condition2) {\n          return value2;\n        } else if (condition3) {\n          return value3;\n        } else {\n          return value4;\n        }\n      }"
    ],
    "tables": []
  },
  {
    "id": 176,
    "question": "What are the ways to execute javascript after a page load",
    "description": "You can execute javascript after page load in many different ways,\n\n      1. window.onload:\n\n      \n\n      2. document.onload:\n\n      \n\n      3. body onload:",
    "codeExamples": [
      "window.onload = function ...",
      "document.onload = function ...",
      "<body onload=\"script();\">"
    ],
    "tables": []
  },

  {
    "id": 178,
    "question": "Can you give an example of when you really need a semicolon",
    "description": "It is recommended to use semicolons after every statement in JavaScript. For example, in the below case (that is an IIFE = Immediately Invoked Function Expression) it throws an error \".. is not a function\" at runtime due to missing semicolon.\n\n      \n\n      and it will be interpreted as\n\n      \n\n      In this case, we are passing the second function as an argument to the first function and then trying to call the result of the first function call as a function. Hence, the second function will fail with a \"... is not a function\" error at runtime.",
    "codeExamples": [
      "// define a function\n      var fn = (function () {\n        //...\n      })(\n        // semicolon missing at this line\n\n        // then execute some code inside a closure\n        function () {\n          //...\n        }\n      )();",
      "var fn = (function () {\n        //...\n      })(function () {\n        //...\n      })();"
    ],
    "tables": []
  },
  {
    "id": 179,
    "question": "What is the freeze method",
    "description": "The `freeze()` method is used to freeze an object. Freezing an object does not allow adding new properties to an object, prevents removing, and prevents changing the enumerability, configurability, or writability of existing properties. i.e. It returns the passed object and does not create a frozen copy.\n\n      \n\n      Remember freezing is only applied to the top-level properties in objects but not for nested objects.\n      For example, let's try to freeze user object which has employment details as nested object and observe that details have been changed.\n\n      \n\n      Note: It causes a TypeError if the argument passed is not an object.",
    "codeExamples": [
      "const obj = {\n        prop: 100,\n      };\n\n      Object.freeze(obj);\n      obj.prop = 200; // Throws an error in strict mode\n\n      console.log(obj.prop); //100",
      "const user = {\n        name: \"John\",\n        employment: {\n          department: \"IT\",\n        },\n      };\n\n      Object.freeze(user);\n      user.employment.department = \"HR\";"
    ],
    "tables": []
  },
  {
    "id": 180,
    "question": "What is the purpose of the freeze method",
    "description": "Below are the main benefits of using freeze method,\n\n      1. It is used for freezing objects and arrays.\n      2. It is used to make an object immutable.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 181,
    "question": "Why do I need to use the freeze method",
    "description": "In the Object-oriented paradigm, an existing API contains certain elements that are not intended to be extended, modified, or re-used outside of their current context. Hence it works as the `final` keyword which is used in various languages.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 182,
    "question": "How do you detect a browser language preference",
    "description": "You can use the navigator object to detect a browser language preference as below,",
    "codeExamples": [
      "var language =\n        (navigator.languages && navigator.languages[0]) || // Chrome / Firefox\n        navigator.language || // All browsers\n        navigator.userLanguage; // IE <= 10\n\n      console.log(language);"
    ],
    "tables": []
  },
  {
    "id": 183,
    "question": "How to convert a string to title case with javascript",
    "description": "Title case means that the first letter of each word is capitalized. You can convert a string to title case using the below function,",
    "codeExamples": [
      "function toTitleCase(str) {\n        return str.replace(/\\w\\S*/g, function (txt) {\n          return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();\n        });\n      }\n      toTitleCase(\"good morning john\"); // Good Morning John"
    ],
    "tables": []
  },
  {
    "id": 184,
    "question": "How do you detect if javascript is disabled on the page",
    "description": "You can use the `<noscript>` tag to detect javascript disabled or not. The code block inside `<noscript>` gets executed when JavaScript is disabled, and is typically used to display alternative content when the page generated in JavaScript.",
    "codeExamples": [
      "<script type=\"javascript\">\n          // JS related code goes here\n      </script>\n      <noscript>\n          <a href=\"next_page.html?noJS=true\">JavaScript is disabled in the page. Please click Next Page</a>\n      </noscript>"
    ],
    "tables": []
  },
  {
    "id": 185,
    "question": "What are various operators supported by javascript",
    "description": "An operator is capable of manipulating(mathematical and logical computations) a certain value or operand. There are various operators supported by JavaScript as below,\n\n      1. Arithmetic Operators: Includes + (Addition), – (Subtraction), \\* (Multiplication), / (Division), % (Modulus), ++ (Increment) and – – (Decrement)\n      2. Comparison Operators: Includes == (Equal), != (Not Equal), === (Equal with type), > (Greater than), >= (Greater than or Equal to), < (Less than), <= (Less than or Equal to)\n      3. Logical Operators: Includes && (Logical AND), || (Logical OR), ! (Logical NOT)\n      4. Assignment Operators: Includes = (Assignment Operator), += (Add and Assignment Operator), –= (Subtract and Assignment Operator), \\*= (Multiply and Assignment), /= (Divide and Assignment), %= (Modules and Assignment)\n      5. Ternary Operators: It includes conditional(: ?) Operator\n      6. typeof Operator: It uses to find type of variable. The syntax looks like `typeof variable`",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 186,
    "question": "What is a rest parameter",
    "description": "Rest parameter is an improved way to handle function parameters which allows us to represent an indefinite number of arguments as an array. The syntax would be as below,\n\n      \n\n      For example, let's take a sum example to calculate on dynamic number of parameters,\n\n      \n\n      Note: Rest parameter is added in ES2015 or ES6",
    "codeExamples": [
      "function f(a, b, ...theArgs) {\n        // ...\n      }",
      "function sum(...args) {\n        let total = 0;\n        for (const i of args) {\n          total += i;\n        }\n        return total;\n      }\n\n      console.log(sum(1, 2)); //3\n      console.log(sum(1, 2, 3)); //6\n      console.log(sum(1, 2, 3, 4)); //10\n      console.log(sum(1, 2, 3, 4, 5)); //15"
    ],
    "tables": []
  },
  {
    "id": 187,
    "question": "What happens if you do not use rest parameter as a last argument",
    "description": "The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array. For example, if you define a function like below it doesn’t make any sense and will throw an error.",
    "codeExamples": [
      "function someFunc(a,…b,c){\n      //You code goes here\n      return;\n      }"
    ],
    "tables": []
  },
  {
    "id": 188,
    "question": "What are the bitwise operators available in javascript",
    "description": "Below are the list of bitwise logical operators used in JavaScript\n\n      1. Bitwise AND ( & )\n      2. Bitwise OR ( | )\n      3. Bitwise XOR ( ^ )\n      4. Bitwise NOT ( ~ )\n      5. Left Shift ( << )\n      6. Sign Propagating Right Shift ( >> )\n      7. Zero fill Right Shift ( >>> )",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 189,
    "question": "What is a spread operator",
    "description": "Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let's take an example to see this behavior,",
    "codeExamples": [
      "function calculateSum(x, y, z) {\n        return x + y + z;\n      }\n\n      const numbers = [1, 2, 3];\n\n      console.log(calculateSum(...numbers)); // 6"
    ],
    "tables": []
  },
  {
    "id": 190,
    "question": "How do you determine whether object is frozen or not",
    "description": "`Object.isFrozen()` method is used to determine if an object is frozen or not.An object is frozen if all of the below conditions hold true,\n\n      1. If it is not extensible.\n      2. If all of its properties are non-configurable.\n      3. If all its data properties are non-writable.\n         The usage is going to be as follows,",
    "codeExamples": [
      "const object = {\n        property: \"Welcome JS world\",\n      };\n      Object.freeze(object);\n      console.log(Object.isFrozen(object));"
    ],
    "tables": []
  },
  {
    "id": 191,
    "question": "How do you determine two values same or not using object",
    "description": "The `Object.is()` method determines whether two values are the same value. For example, the usage with different types of values would be,\n\n      \n\n      Two values are considered identical if one of the following holds:\n\n      1. both undefined\n      2. both null\n      3. both true or both false\n      4. both strings of the same length with the same characters in the same order\n      5. both the same object (means both object have same reference)\n      6. both numbers and\n         both +0\n         both -0\n         both NaN\n         both non-zero and both not NaN and both have the same value.",
    "codeExamples": [
      "Object.is(\"hello\", \"hello\"); // true\n      Object.is(window, window); // true\n      Object.is([], []); // false"
    ],
    "tables": []
  },
  {
    "id": 192,
    "question": "What is the purpose of using object is method",
    "description": "Some of the applications of Object's `is` method are follows,\n\n      1. It is used for comparison of two strings.\n      2. It is used for comparison of two numbers.\n      3. It is used for comparing the polarity of two numbers.\n      4. It is used for comparison of two objects.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 193,
    "question": "How do you copy properties from one object to other",
    "description": "You can use the `Object.assign()` method which is used to copy the values and properties from one or more source objects to a target object. It returns the target object which has properties and values copied from the source objects. The syntax would be as below,\n\n      \n\n      Let's take example with one source and one target object,\n\n      \n\n      As observed in the above code, there is a common property(`b`) from source to target so it's value has been overwritten.",
    "codeExamples": [
      "Object.assign(target, ...sources);",
      "const target = { a: 1, b: 2 };\n      const source = { b: 3, c: 4 };\n\n      const returnedTarget = Object.assign(target, source);\n\n      console.log(target); // { a: 1, b: 3, c: 4 }\n\n      console.log(returnedTarget); // { a: 1, b: 3, c: 4 }"
    ],
    "tables": []
  },
  {
    "id": 194,
    "question": "What are the applications of the assign method",
    "description": "Below are the some of main applications of `Object.assign()` method,\n\n      1. It is used for cloning an object.\n      2. It is used to merge objects with the same properties.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 195,
    "question": "What is a proxy object",
    "description": "The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc.\n\n      A proxy is created with two parameters: a target object which you want to proxy and a handler object which contains methods to intercept fundamental operations. The syntax would be as follows,\n\n      \n\n      Let's take a look at below examples of proxy object and how the get method which customize the lookup behavior,\n\n      \n\n      In the above code, it uses `get` handler which define the behavior of the proxy when an operation is performed on it. These proxies are mainly used for some of the below cross-cutting concerns.\n\n      1. Logging\n      2. Authentication or Authorization\n      3. Data binding and observables\n      4. Function parameter validation\n\n      Note: This feature was introduced with ES6.",
    "codeExamples": [
      "var p = new Proxy(target, handler);",
      "//Example1:\n\n      const person = {\n        name: \"Sudheer Jonna\",\n        age: 35,\n      };\n\n      const handler = {\n        get(target, prop) {\n          if (prop === \"name\") {\n            return \"Mr. \" + target[prop];\n          }\n          return target[prop];\n        },\n      };\n\n      const proxy = new Proxy(person, handler);\n\n      //Example2:\n\n      var handler1 = {\n        get: function (obj, prop) {\n          return prop in obj ? obj[prop] : 100;\n        },\n      };\n\n      var p = new Proxy({}, handler1);\n      p.a = 10;\n      p.b = null;\n\n      console.log(p.a, p.b); // 10, null\n      console.log(\"c\" in p, p.c); // false, 100"
    ],
    "tables": []
  },
  {
    "id": 196,
    "question": "What is the purpose of the seal method",
    "description": "The `Object.seal()` method is used to seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But values of present properties can still be changed as long as they are writable. The next level of immutability would be the [`Object.freeze()`](what-is-a-freeze-method) method. Let's see the below example to understand more about `seal()` method",
    "codeExamples": [
      "const object = {\n        property: \"Welcome JS world\",\n      };\n      Object.seal(object);\n      object.property = \"Welcome to object world\";\n      console.log(Object.isSealed(object)); // true\n      delete object.property; // You cannot delete when sealed\n      console.log(object.property); //Welcome to object world"
    ],
    "tables": []
  },
  {
    "id": 197,
    "question": "What are the applications of the seal method",
    "description": "Below are the main applications of `Object.seal()` method,\n\n      1. It is used for sealing objects and arrays.\n      2. It is used to make properties of an object non-configurable.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 198,
    "question": "What are the differences between the freeze and seal methods",
    "description": "If an object is frozen using the `Object.freeze()` method then its properties become immutable and no changes can be made in them whereas if an object is sealed using the `Object.seal()` method then the changes can be made in the existing properties of the object.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 199,
    "question": "How do you determine if an object is sealed or not",
    "description": "The `Object.isSealed()` method is used to determine if an object is sealed or not. An object is sealed if all of the below conditions hold true\n\n      1. If it is not extensible.\n      2. If all of its properties are non-configurable.\n      3. If it is not removable (but not necessarily non-writable).\n         Let's see it in the action",
    "codeExamples": [
      "const object = {\n        property: \"Hello, Good morning\",\n      };\n\n      Object.seal(object); // Using seal() method to seal the object\n\n      console.log(Object.isSealed(object)); // checking whether the object is sealed or not"
    ],
    "tables": []
  },
  {
    "id": 200,
    "question": "How do you get enumerable key and value pairs",
    "description": "The `Object.entries()` method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a `for...in` loop. Let's see the functionality of `object.entries()` method in an example,\n\n      \n\n      Note: The order is not guaranteed as object defined.",
    "codeExamples": [
      "const object = {\n        a: \"Good morning\",\n        b: 100,\n      };\n\n      for (let [key, value] of Object.entries(object)) {\n        console.log(`${key}: ${value}`); // a: 'Good morning'\n        // b: 100\n      }"
    ],
    "tables": []
  },
  {
    "id": 201,
    "question": "What is the main difference between Object.values and Object.entries method",
    "description": "The `Object.values()` method's behavior is similar to `Object.entries()` method but it returns an array of values instead [key,value] pairs.",
    "codeExamples": [
      "const object = {\n        a: \"Good morning\",\n        b: 100,\n      };\n\n      for (let value of Object.values(object)) {\n        console.log(`${value}`); // 'Good morning \\n100'\n      }"
    ],
    "tables": []
  },
  {
    "id": 202,
    "question": "How can you get the list of keys of any object",
    "description": "You can use the `Object.keys()` method which is used to return an array of a given object's own property names, in the same order as we get with a normal loop. For example, you can get the keys of a user object,",
    "codeExamples": [
      "const user = {\n        name: \"John\",\n        gender: \"male\",\n        age: 40,\n      };\n\n      console.log(Object.keys(user)); //['name', 'gender', 'age']"
    ],
    "tables": []
  },
  {
    "id": 203,
    "question": "How do you create an object with a prototype",
    "description": "The `Object.create()` method is used to create a new object with the specified prototype object and properties. i.e, It uses an existing object as the prototype of the newly created object. It returns a new object with the specified prototype object and properties.",
    "codeExamples": [
      "const user = {\n        name: \"John\",\n        printInfo: function () {\n          console.log(`My name is ${this.name}.`);\n        },\n      };\n\n      const admin = Object.create(user);\n\n      admin.name = \"Nick\"; // Remember that \"name\" is a property set on \"admin\" but not on \"user\" object\n\n      admin.printInfo(); // My name is Nick"
    ],
    "tables": []
  },
  {
    "id": 204,
    "question": "What is a WeakSet",
    "description": "A `WeakSet` is used to store a collection of weakly(weak references) held objects. The syntax would be as follows,\n\n      \n\n      Let's see the below example to explain it's behavior,",
    "codeExamples": [
      "new WeakSet([iterable]);",
      "var ws = new WeakSet();\n      var user = {};\n      ws.add(user);\n      ws.has(user); // true\n      ws.delete(user); // removes user from the set\n      ws.has(user); // false, user has been removed"
    ],
    "tables": []
  },
  {
    "id": 205,
    "question": "What are the differences between WeakSet and Set",
    "description": "The main difference is that references to objects in `Set` are strong while references to objects in `WeakSet` are weak. i.e, An object in `WeakSet` can be garbage collected if there is no other reference to it.\n      Other differences are:\n\n      1. `Set` can store any value whereas `WeakSet` can store only collections of objects\n      2. `WeakSet` does not have size property unlike `Set`\n      3. `WeakSet` does not have methods such as clear, keys, values, entries, forEach.\n      4. `WeakSet` is not iterable.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 206,
    "question": "List down the collection of methods available on WeakSet",
    "description": "Below are the list of methods available on `WeakSet`,\n\n      1. `add(value)`: A new object is appended with the given value\n      2. `delete(value)`: Deletes the value from the collection.\n      3. `has(value)`: It returns true if the value is present in the collection, otherwise it returns false.\n\n      Let's see the functionality of all the above methods in an example,",
    "codeExamples": [
      "var weakSetObject = new WeakSet();\n      var firstObject = {};\n      var secondObject = {};\n      // add(value)\n      weakSetObject.add(firstObject);\n      weakSetObject.add(secondObject);\n      console.log(weakSetObject.has(firstObject)); //true\n      weakSetObject.delete(secondObject);"
    ],
    "tables": []
  },
  {
    "id": 207,
    "question": "What is a WeakMap",
    "description": "A `WeakMap` object is a collection of key/value pairs in which the keys are weakly referenced. In this case, keys must be objects and the values can be arbitrary values. The syntax looks like the following:\n\n      \n\n      Let's see the below example to explain it's behavior,",
    "codeExamples": [
      "new WeakMap([iterable]);",
      "var ws = new WeakMap();\n      var user = {};\n      ws.set(user);\n      ws.has(user); // true\n      ws.delete(user); // removes user from the map\n      ws.has(user); // false, user has been removed"
    ],
    "tables": []
  },
  {
    "id": 208,
    "question": "What are the differences between WeakMap and Map",
    "description": "The main difference is that references to key objects in `Map` are strong while references to key objects in `WeakMap` are weak. i.e, A key object in `WeakMap` can be garbage collected if there is no other reference to it.\n      Other differences are,\n\n      1. `Map` can store any key type whereas `WeakMap` can store only collections of key objects\n      2. `WeakMap` does not have size property unlike `Map`\n      3. `WeakMap` does not have methods such as clear, keys, values, entries, forEach.\n      4. `WeakMap` is not iterable.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 209,
    "question": "List down the collection of methods available on WeakMap",
    "description": "Below are the list of methods available on `WeakMap`,\n\n      1. `set(key, value)`: Sets the value for the key in the `WeakMap` object. Returns the `WeakMap` object.\n      2. `delete(key)`: Removes any value associated to the key.\n      3. `has(key)`: Returns a Boolean asserting whether a value has been associated to the key in the `WeakMap` object or not.\n      4. `get(key)`: Returns the value associated to the key, or undefined if there is none.\n         Let's see the functionality of all the above methods in an example,",
    "codeExamples": [
      "var weakMapObject = new WeakMap();\n      var firstObject = {};\n      var secondObject = {};\n      // set(key, value)\n      weakMapObject.set(firstObject, \"John\");\n      weakMapObject.set(secondObject, 100);\n      console.log(weakMapObject.has(firstObject)); //true\n      console.log(weakMapObject.get(firstObject)); // John\n      weakMapObject.delete(secondObject);"
    ],
    "tables": []
  },
  {
    "id": 210,
    "question": "What is the purpose of uneval",
    "description": "The `uneval()` is an builtin function which is used to create a string representation of the source code of an Object. It is a top-level function and is not associated with any object. Let's see the below example to know more about it's functionality,\n\n      \n\n      The `uneval()` function has been deprecated. It is recommended to use `toString()` for functions and `JSON.stringify()` for other cases.",
    "codeExamples": [
      "var a = 1;\n      uneval(a); // returns a String containing 1\n      uneval(function user() {}); // returns \"(function user(){})\"",
      "function user() {}\n      console.log(user.toString()); // returns \"(function user(){})\""
    ],
    "tables": []
  },
  {
    "id": 211,
    "question": "How do you encode an URL",
    "description": "The `encodeURI()` function is used to encode complete URI which has special characters except (, / ? : @ & = + $ ) characters.",
    "codeExamples": [
      "var uri = \"https://mozilla.org/?x=шеллы\";\n      var encoded = encodeURI(uri);\n      console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
    ],
    "tables": []
  },
  {
    "id": 212,
    "question": "How do you decode an URL",
    "description": "The `decodeURI()` function is used to decode a Uniform Resource Identifier (URI) previously created by `encodeURI()`.",
    "codeExamples": [
      "var uri = \"https://mozilla.org/?x=шеллы\";\n      var encoded = encodeURI(uri);\n      console.log(encoded); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B\n      try {\n        console.log(decodeURI(encoded)); // \"https://mozilla.org/?x=шеллы\"\n      } catch (e) {\n        // catches a malformed URI\n        console.error(e);\n      }"
    ],
    "tables": []
  },
  {
    "id": 213,
    "question": "How do you print the contents of web page",
    "description": "The `window` object provides a `print()` method which is used to print the contents of the current window. It opens a Print dialog box which lets you choose between various printing options. Let's see the usage of print method in an example,\n\n      ```html\n      <input type=\"button\" value=\"Print\" onclick=\"window.print()\" />\n      ```\n\n      Note: In most browsers, it will block while the print dialog is open.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 214,
    "question": "What is the difference between uneval and eval",
    "description": "The `uneval` function returns the source of a given object; whereas the `eval` function does the opposite, by evaluating that source code in a different memory area. Let's see an example to clarify the difference,",
    "codeExamples": [
      "var msg = uneval(function greeting() {\n        return \"Hello, Good morning\";\n      });\n      var greeting = eval(msg);\n      greeting(); // returns \"Hello, Good morning\""
    ],
    "tables": []
  },
  {
    "id": 215,
    "question": "What is an anonymous function",
    "description": "An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below,\n\n      \n\n      Let's see the above anonymous function in an example,",
    "codeExamples": [
      "function (optionalParameters) {\n        //do something\n      }\n\n      const myFunction = function(){ //Anonymous function assigned to a variable\n        //do something\n      };\n\n      [1, 2, 3].map(function(element){ //Anonymous function used as a callback function\n        //do something\n      });",
      "var x = function (a, b) {\n        return a * b;\n      };\n      var z = x(5, 10);\n      console.log(z); // 50"
    ],
    "tables": []
  },
  {
    "id": 216,
    "question": "What is the precedence order between local and global variables",
    "description": "A local variable takes precedence over a global variable with the same name. Let's see this behavior in an example.",
    "codeExamples": [
      "var msg = \"Good morning\";\n      function greeting() {\n        msg = \"Good Evening\";\n        console.log(msg); // Good Evening\n      }\n      greeting();"
    ],
    "tables": []
  },
  {
    "id": 217,
    "question": "What are javascript accessors",
    "description": "ECMAScript 5 introduced javascript object accessors or computed properties through getters and setters. Getters uses the `get` keyword whereas Setters uses the `set` keyword.",
    "codeExamples": [
      "var user = {\n        firstName: \"John\",\n        lastName: \"Abraham\",\n        language: \"en\",\n        get lang() {\n          return this.language;\n        },\n        set lang(lang) {\n          this.language = lang;\n        },\n      };\n      console.log(user.lang); // getter access lang as en\n      user.lang = \"fr\";\n      console.log(user.lang); // setter used to set lang as fr"
    ],
    "tables": []
  },
  {
    "id": 218,
    "question": "How do you define property on Object constructor",
    "description": "The `Object.defineProperty()` static method is used to define a new property directly on an object, or modify an existing property on an object, and returns the object. Let's see an example to know how to define property,",
    "codeExamples": [
      "const newObject = {};\n\n      Object.defineProperty(newObject, \"newProperty\", {\n        value: 100,\n        writable: false,\n      });\n\n      console.log(newObject.newProperty); // 100\n\n      newObject.newProperty = 200; // It throws an error in strict mode due to writable setting"
    ],
    "tables": []
  },
  {
    "id": 219,
    "question": "What is the difference between get and defineProperty",
    "description": "Both have similar results unless you use classes. If you use `get` the property will be defined on the prototype of the object whereas using `Object.defineProperty()` the property will be defined on the instance it is applied to.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 220,
    "question": "What are the advantages of Getters and Setters",
    "description": "Below are the list of benefits of Getters and Setters,\n\n      1. They provide simpler syntax\n      2. They are used for defining computed properties, or accessors in JS.\n      3. Useful to provide equivalence relation between properties and methods\n      4. They can provide better data quality\n      5. Useful for doing things behind the scenes with the encapsulated logic.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 221,
    "question": "Can I add getters and setters using defineProperty method",
    "description": "Yes, You can use the `Object.defineProperty()` method to add Getters and Setters. For example, the below counter object uses increment, decrement, add and subtract properties,",
    "codeExamples": [
      "var obj = { counter: 0 };\n\n      // Define getters\n      Object.defineProperty(obj, \"increment\", {\n        get: function () {\n          this.counter++;\n          return this.counter;\n        },\n      });\n      Object.defineProperty(obj, \"decrement\", {\n        get: function () {\n          this.counter--;\n          return this.counter;\n        },\n      });\n\n      // Define setters\n      Object.defineProperty(obj, \"add\", {\n        set: function (value) {\n          this.counter += value;\n        },\n      });\n      Object.defineProperty(obj, \"subtract\", {\n        set: function (value) {\n          this.counter -= value;\n        },\n      });\n\n      obj.add = 10;\n      obj.subtract = 5;\n      console.log(obj.increment); //6\n      console.log(obj.decrement); //5"
    ],
    "tables": []
  },
  {
    "id": 222,
    "question": "What is the purpose of switch-case",
    "description": "The `switch case` statement in JavaScript is used for decision making purposes. In a few cases, using the `switch case` statement is going to be more convenient than `if-else` statements. The syntax would be as below,\n\n      \n\n      The above multi-way branch statement provides an easy way to dispatch execution to different parts of code based on the value of the expression.",
    "codeExamples": [
      "switch (expression)\n      {\n          case value1:\n              statement1;\n              break;\n          case value2:\n              statement2;\n              break;\n          .\n          .\n          case valueN:\n              statementN;\n              break;\n          default:\n              statementDefault;\n      }"
    ],
    "tables": []
  },
  {
    "id": 223,
    "question": "What are the conventions to be followed for the usage of switch case",
    "description": "Below are the list of conventions should be taken care,\n\n      1. The expression can be of type either number or string.\n      2. Duplicate values are not allowed for the expression.\n      3. The default statement is optional. If the expression passed to switch does not match with any case value then the statement within default case will be executed.\n      4. The break statement is used inside the switch to terminate a statement sequence.\n      5. The break statement is optional. But if it is omitted, the execution will continue on into the next case.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 224,
    "question": "What are primitive data types",
    "description": "A primitive data type is data that has a primitive value (which has no properties or methods). There are 7 types of primitive data types.\n\n      1. string\n      2. number\n      3. boolean\n      4. null\n      5. undefined\n      6. bigint\n      7. symbol",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 225,
    "question": "What are the different ways to access object properties",
    "description": "There are 3 possible ways for accessing the property of an object.\n\n      1. Dot notation: It uses dot for accessing the properties\n\n      \n\n      2. Square brackets notation: It uses square brackets for property access\n\n      \n\n      3. Expression notation: It uses expression in the square brackets",
    "codeExamples": [
      "objectName.property;",
      "objectName[\"property\"];",
      "objectName[expression];"
    ],
    "tables": []
  },
  {
    "id": 226,
    "question": "What are the function parameter rules",
    "description": "JavaScript functions follow below rules for parameters,\n\n      1. The function definitions do not specify data types for parameters.\n      2. Do not perform type checking on the passed arguments.\n      3. Do not check the number of arguments received.\n         i.e, The below function follows the above rules,",
    "codeExamples": [
      "function functionName(parameter1, parameter2, parameter3) {\n        console.log(parameter1); // 1\n      }\n      functionName(1);"
    ],
    "tables": []
  },
  {
    "id": 227,
    "question": "What is an error object",
    "description": "An error object is a built in error object that provides error information when an error occurs. It has two properties: name and message. For example, the below function logs error details,",
    "codeExamples": [
      "try {\n        greeting(\"Welcome\");\n      } catch (err) {\n        console.log(err.name + \"<br>\" + err.message);\n      }"
    ],
    "tables": []
  },
  {
    "id": 228,
    "question": "When do you get a syntax error",
    "description": "A SyntaxError is thrown if you try to evaluate code with a syntax error. For example, the below missing quote for the function parameter throws a syntax error",
    "codeExamples": [
      "try {\n        eval(\"greeting('welcome)\"); // Missing ' will produce an error\n      } catch (err) {\n        console.log(err.name);\n      }"
    ],
    "tables": []
  },
  
  {
    "id": 230,
    "question": "What are the various statements in error handling",
    "description": "Below are the list of statements used in an error handling,\n\n      1. try: This statement is used to test a block of code for errors\n      2. catch: This statement is used to handle the error\n      3. throw: This statement is used to create custom errors.\n      4. finally: This statement is used to execute code after try and catch regardless of the result.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 231,
    "question": "What are the two types of loops in javascript",
    "description": "1. Entry Controlled loops: In this kind of loop type, the test condition is tested before entering the loop body. For example, For Loop and While Loop comes under this category.\n      2. Exit Controlled Loops: In this kind of loop type, the test condition is tested or evaluated at the end of the loop body. i.e, the loop body will execute at least once irrespective of test condition true or false. For example, do-while loop comes under this category.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 232,
    "question": "What is nodejs",
    "description": "Node.js is a server-side platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. It is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 233,
    "question": "What is the Intl object",
    "description": "The `Intl` object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. It provides access to several constructors and language sensitive functions.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 234,
    "question": "How do you perform language specific date and time formatting",
    "description": "You can use the `Intl.DateTimeFormat` object which is a constructor for objects that enable language-sensitive date and time formatting. Let's see this behavior with an example,",
    "codeExamples": [
      "var date = new Date(Date.UTC(2019, 07, 07, 3, 0, 0));\n      console.log(new Intl.DateTimeFormat(\"en-GB\").format(date)); // 07/08/2019\n      console.log(new Intl.DateTimeFormat(\"en-AU\").format(date)); // 07/08/2019"
    ],
    "tables": []
  },
  {
    "id": 235,
    "question": "What is an Iterator",
    "description": "An iterator is an object which defines a sequence and a return value upon its termination. It implements the Iterator protocol with a `next()` method which returns an object with two properties: `value` (the next value in the sequence) and `done` (which is true if the last value in the sequence has been consumed).",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 236,
    "question": "How does synchronous iteration works",
    "description": "Synchronous iteration was introduced in ES6 and it works with below set of components,\n\n      Iterable: It is an object which can be iterated over via a method whose key is Symbol.iterator.\n\n      Iterator: It is an object returned by invoking `[Symbol.iterator]()` on an iterable. This iterator object wraps each iterated element in an object and returns it via `next()` method one by one.\n\n      IteratorResult: It is an object returned by `next()` method. The object contains two properties; the `value` property contains an iterated element and the `done` property determines whether the element is the last element or not.\n\n      Let's demonstrate synchronous iteration with an array as below",
    "codeExamples": [
      "const iterable = [\"one\", \"two\", \"three\"];\n      const iterator = iterable[Symbol.iterator]();\n      console.log(iterator.next()); // { value: 'one', done: false }\n      console.log(iterator.next()); // { value: 'two', done: false }\n      console.log(iterator.next()); // { value: 'three', done: false }\n      console.log(iterator.next()); // { value: 'undefined, done: true }"
    ],
    "tables": []
  },
  {
    "id": 237,
    "question": "What is the event loop",
    "description": "The event loop is a process that continuously monitors both the call stack and the event queue and checks whether or not the call stack is empty. If the call stack is empty and there are pending events in the event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. The call stack executes the event, and any additional events generated during the execution are added to the end of the event queue.\n\n      Note: The event loop allows Node.js to perform non-blocking I/O operations, even though JavaScript is single-threaded, by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 238,
    "question": "What is the call stack",
    "description": "Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program. It has two major actions,\n\n      1. Whenever you call a function for its execution, you are pushing it to the stack.\n      2. Whenever the execution is completed, the function is popped out of the stack.\n\n      Let's take an example and it's state representation in a diagram format\n\n      \n\n      The above code processed in a call stack as below,\n\n      3. Add the `hungry()` function to the call stack list and execute the code.\n      4. Add the `eatFruits()` function to the call stack list and execute the code.\n      5. Delete the `eatFruits()` function from our call stack list.\n      6. Delete the `hungry()` function from the call stack list since there are no items anymore.\n\n      ![Screenshot](images/call-stack.png)",
    "codeExamples": [
      "function hungry() {\n        eatFruits();\n      }\n      function eatFruits() {\n        return \"I'm eating fruits\";\n      }\n\n      // Invoke the `hungry` function\n      hungry();"
    ],
    "tables": []
  },
  {
    "id": 239,
    "question": "What is the event queue",
    "description": "The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. It is also known as the Callback Queue or Macrotask Queue.\n\n      Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, Web API executes it and awaits the result. Once it is finished, it moves the callback into the event queue (the callback of a promise is moved into the microtask queue).\n\n      The event loop constantly checks whether or not the call stack is empty. Once the call stack is empty and there is a callback in the event queue, the event loop moves the callback into the call stack. But if there is a callback in the microtask queue as well, it is moved first. The microtask queue has a higher priority than the event queue.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 240,
    "question": "What is a decorator",
    "description": "A decorator is an expression that evaluates to a function and that takes the target, name, and decorator descriptor as arguments. Also, it optionally returns a decorator descriptor to install on the target object. Let's define admin decorator for user class at design time,",
    "codeExamples": [
      "function admin(isAdmin) {\n         return function(target) {\n             target.isAdmin = isAdmin;\n         }\n      }\n\n      @admin(true)\n      class User() {\n      }\n      console.log(User.isAdmin); //true\n\n       @admin(false)\n       class User() {\n       }\n       console.log(User.isAdmin); //false"
    ],
    "tables": []
  },
  {
    "id": 241,
    "question": "What are the properties of the Intl object",
    "description": "Below are the list of properties available on the `Intl` object,\n\n      1. Collator: These are the objects that enable language-sensitive string comparison.\n      2. DateTimeFormat: These are the objects that enable language-sensitive date and time formatting.\n      3. ListFormat: These are the objects that enable language-sensitive list formatting.\n      4. NumberFormat: Objects that enable language-sensitive number formatting.\n      5. PluralRules: Objects that enable plural-sensitive formatting and language-specific rules for plurals.\n      6. RelativeTimeFormat: Objects that enable language-sensitive relative time formatting.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 242,
    "question": "What is an Unary operator",
    "description": "The unary(+) operator is used to convert a variable to a number.If the variable cannot be converted, it will still become a number but with the value NaN. Let's see this behavior in an action.",
    "codeExamples": [
      "var x = \"100\";\n      var y = +x;\n      console.log(typeof x, typeof y); // string, number\n\n      var a = \"Hello\";\n      var b = +a;\n      console.log(typeof a, typeof b, b); // string, number, NaN"
    ],
    "tables": []
  },
  {
    "id": 243,
    "question": "How do you sort elements in an array",
    "description": "The `sort()` method is used to sort the elements of an array in place and returns the sorted array. The default sort order is ascending, based on the string Unicode order. The example usage would be as below,\n\n      \n\n      Beware: `sort()` is changing the original array.",
    "codeExamples": [
      "var months = [\"Aug\", \"Sep\", \"Jan\", \"June\"];\n      months.sort();\n      console.log(months); //  [\"Aug\", \"Jan\", \"June\", \"Sep\"]"
    ],
    "tables": []
  },
  {
    "id": 244,
    "question": "What is the purpose of compareFunction while sorting arrays",
    "description": "The compareFunction is used to define the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.\n\n      Let's take an example to see the usage of compareFunction,",
    "codeExamples": [
      "let numbers = [1, 2, 5, 3, 4];\n      numbers.sort((a, b) => b - a);\n      console.log(numbers); // [5, 4, 3, 2, 1]"
    ],
    "tables": []
  },
  {
    "id": 245,
    "question": "How do you reverse an array",
    "description": "You can use the `reverse()` method to reverse the elements in an array. This method is useful to sort an array in descending order. Let's see the usage of `reverse()` method in an example,",
    "codeExamples": [
      "let numbers = [1, 2, 5, 3, 4];\n      numbers.sort((a, b) => b - a);\n      numbers.reverse();\n      console.log(numbers); // [1, 2, 3, 4 ,5]"
    ],
    "tables": []
  },
  {
    "id": 246,
    "question": "How do you find the min and max values in an array",
    "description": "You can use `Math.min` and `Math.max` methods on array variables to find the minimum and maximum elements within an array. Let's create two functions to find the min and max value with in an array,",
    "codeExamples": [
      "var marks = [50, 20, 70, 60, 45, 30];\n      function findMin(arr) {\n        return Math.min.apply(null, arr);\n      }\n      function findMax(arr) {\n        return Math.max.apply(null, arr);\n      }\n\n      console.log(findMin(marks));\n      console.log(findMax(marks));"
    ],
    "tables": []
  },
  {
    "id": 247,
    "question": "How do you find the min and max values without Math functions",
    "description": "You can write functions which loop through an array comparing each value with the lowest value or highest value to find the min and max values. Let's create those functions to find min and max values,",
    "codeExamples": [
      "var marks = [50, 20, 70, 60, 45, 30];\n      function findMin(arr) {\n        var length = arr.length;\n        var min = Infinity;\n        while (length--) {\n          if (arr[length] < min) {\n            min = arr[length];\n          }\n        }\n        return min;\n      }\n\n      function findMax(arr) {\n        var length = arr.length;\n        var max = -Infinity;\n        while (length--) {\n          if (arr[length] > max) {\n            max = arr[length];\n          }\n        }\n        return max;\n      }\n\n      console.log(findMin(marks));\n      console.log(findMax(marks));"
    ],
    "tables": []
  },
  {
    "id": 248,
    "question": "What is an empty statement and purpose of it",
    "description": "The empty statement is a semicolon (;) indicating that no statement will be executed, even if JavaScript syntax requires one. Since there is no action with an empty statement you might think that it's usage is quite less, but the empty statement is occasionally useful when you want to create a loop that has an empty body. For example, you can initialize an array with zero values as below,",
    "codeExamples": [
      "// Initialize an array a\n      for (let i = 0; i < a.length; a[i++] = 0);"
    ],
    "tables": []
  },
  {
    "id": 249,
    "question": "How do you get the metadata of a module",
    "description": "You can use the `import.meta` object which is a meta-property exposing context-specific meta data to a JavaScript module. It contains information about the current module, such as the module's URL. In browsers, you might get different meta data than NodeJS.",
    "codeExamples": [
      "<script type=\"module\" src=\"welcome-module.js\"></script>;\n      console.log(import.meta); // { url: \"file:///home/user/welcome-module.js\" }"
    ],
    "tables": []
  },
  {
    "id": 250,
    "question": "What is the comma operator",
    "description": "The comma operator is used to evaluate each of its operands from left to right and returns the value of the last operand. This is totally different from comma usage within arrays, objects, and function arguments and parameters. For example, the usage for numeric expressions would be as below,",
    "codeExamples": [
      "var x = 1;\n      x = (x++, x);\n\n      console.log(x); // 2"
    ],
    "tables": []
  },
  {
    "id": 251,
    "question": "What is the advantage of the comma operator",
    "description": "It is normally used to include multiple expressions in a location that requires a single expression. One of the common usages of this comma operator is to supply multiple parameters in a `for` loop. For example, the below for loop uses multiple expressions in a single location using comma operator,\n\n      \n\n      You can also use the comma operator in a return statement where it processes before returning.",
    "codeExamples": [
      "for (var a = 0, b =10; a <= 10; a++, b--)",
      "function myFunction() {\n        var a = 1;\n        return (a += 10), a; // 11\n      }"
    ],
    "tables": []
  },
  {
    "id": 252,
    "question": "What is typescript",
    "description": "TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes\n      and many other features, and compiles to plain JavaScript. Angular is built entirely in TypeScript and it is used as the primary language there. You can install it globally as\n\n      ```bash\n      npm install -g typescript\n      ```\n\n      Let's see a simple example of TypeScript usage,\n\n      ```typescript\n      function greeting(name: string): string {\n        return \"Hello, \" + name;\n      }\n\n      let user = \"Sudheer\";\n\n      console.log(greeting(user));\n      ```\n\n      The greeting method allows only string type as argument.",
    "codeExamples": [],
    "tables": []
  },

  {
    "id": 254,
    "question": "What are the advantages of typescript over javascript",
    "description": "Below are some of the advantages of typescript over javascript,\n\n      1. TypeScript is able to find compile time errors at the development time only and it makes sures less runtime errors. Whereas javascript is an interpreted language.\n      2. TypeScript is strongly-typed or supports static typing which allows for checking type correctness at compile time. This is not available in javascript.\n      3. TypeScript compiler can compile the .ts files into ES3,ES4 and ES5 unlike ES6 features of javascript which may not be supported in some browsers.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 255,
    "question": "What is an object initializer",
    "description": "An object initializer is an expression that describes the initialization of an Object. The syntax for this expression is represented as a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}). This is also known as literal notation. It is one of the ways to create an object.",
    "codeExamples": [
      "var initObject = { a: \"John\", b: 50, c: {} };\n\n      console.log(initObject.a); // John"
    ],
    "tables": []
  },
  {
    "id": 256,
    "question": "What is a constructor method",
    "description": "The constructor method is a special method for creating and initializing an object created within a class. If you do not specify a constructor method, a default constructor is used. The example usage of constructor would be as below,",
    "codeExamples": [
      "class Employee {\n        constructor() {\n          this.name = \"John\";\n        }\n      }\n\n      var employeeObject = new Employee();\n\n      console.log(employeeObject.name); // John"
    ],
    "tables": []
  },
  {
    "id": 257,
    "question": "What happens if you write constructor more than once in a class",
    "description": "The \"constructor\" in a class is a special method and it should be defined only once in a class. i.e, If you write a constructor method more than once in a class it will throw a `SyntaxError` error.\n\n      \n\n      This constructor is called by using the special function call `new` (see example above).",
    "codeExamples": [
      "class Employee {\n         constructor() {\n           this.name = \"John\";\n         }\n         constructor() {   //  Uncaught SyntaxError: A class may only have one constructor\n           this.age = 30;\n         }\n       }\n\n       var employeeObject = new Employee();\n\n       console.log(employeeObject.name);"
    ],
    "tables": []
  },
  {
    "id": 258,
    "question": "How do you call the constructor of a parent class",
    "description": "You can use the `super` keyword to call the constructor of a parent class. Remember that `super()` must be called before using `this` reference. Otherwise it will cause a reference error. Let's the usage of it,",
    "codeExamples": [
      "class Square extends Rectangle {\n        constructor(length) {\n          super(length, length);\n          this.name = \"Square\";\n        }\n\n        get area() {\n          return this.width * this.height;\n        }\n\n        set area(value) {\n          this.area = value;\n        }\n      }"
    ],
    "tables": []
  },
  {
    "id": 259,
    "question": "How do you get the prototype of an object",
    "description": "You can use the `Object.getPrototypeOf(obj)` method to return the prototype of the specified object. i.e. The value of the internal `prototype` property. If there are no inherited properties then `null` value is returned.",
    "codeExamples": [
      "const newPrototype = {};\n      const newObject = Object.create(newPrototype);\n\n      console.log(Object.getPrototypeOf(newObject) === newPrototype); // true"
    ],
    "tables": []
  },
  {
    "id": 260,
    "question": "What happens If I pass string type for getPrototype method",
    "description": "In ES5, it will throw a TypeError exception if the obj parameter isn't an object. Whereas in ES2015, the parameter will be coerced to an `Object`.",
    "codeExamples": [
      "// ES5\n      Object.getPrototypeOf(\"James\"); // TypeError: \"James\" is not an object\n      // ES2015\n      Object.getPrototypeOf(\"James\"); // String.prototype"
    ],
    "tables": []
  },
  {
    "id": 261,
    "question": "How do you set the prototype of one object to another",
    "description": "You can use the `Object.setPrototypeOf()` method that sets the prototype (i.e., the internal `Prototype` property) of a specified object to another object or null. For example, if you want to set prototype of a square object to rectangle object would be as follows,",
    "codeExamples": [
      "Object.setPrototypeOf(Square.prototype, Rectangle.prototype);\n      Object.setPrototypeOf({}, null);"
    ],
    "tables": []
  },
  {
    "id": 262,
    "question": "How do you check whether an object can be extended or not",
    "description": "The `Object.isExtensible()` method is used to determine if an object is extendable or not. i.e, Whether it can have new properties added to it or not.\n\n      \n\n      Note: By default, all the objects are extendable. i.e, The new properties can be added or modified.",
    "codeExamples": [
      "const newObject = {};\n      console.log(Object.isExtensible(newObject)); //true"
    ],
    "tables": []
  },
  {
    "id": 263,
    "question": "How do you prevent an object from being extend",
    "description": "The `Object.preventExtensions()` method is used to prevent new properties from ever being added to an object. In other words, it prevents future extensions to the object. Let's see the usage of this property,",
    "codeExamples": [
      "const newObject = {};\n      Object.preventExtensions(newObject); // NOT extendable\n\n      try {\n        Object.defineProperty(newObject, \"newProperty\", {\n          // Adding new property\n          value: 100,\n        });\n      } catch (e) {\n        console.log(e); // TypeError: Cannot define property newProperty, object is not extensible\n      }"
    ],
    "tables": []
  },
  {
    "id": 264,
    "question": "What are the different ways to make an object non-extensible",
    "description": "You can mark an object non-extensible in 3 ways,\n\n      1. `Object.preventExtensions`\n      2. `Object.seal`\n      3. `Object.freeze`",
    "codeExamples": [
      "var newObject = {};\n\n      Object.preventExtensions(newObject); // Prevent objects are non-extensible\n      Object.isExtensible(newObject); // false\n\n      var sealedObject = Object.seal({}); // Sealed objects are non-extensible\n      Object.isExtensible(sealedObject); // false\n\n      var frozenObject = Object.freeze({}); // Frozen objects are non-extensible\n      Object.isExtensible(frozenObject); // false"
    ],
    "tables": []
  },
  {
    "id": 265,
    "question": "How do you define multiple properties on an object",
    "description": "The `Object.defineProperties()` method is used to define new or modify existing properties directly on an object and returning the object. Let's define multiple properties on an empty object,",
    "codeExamples": [
      "const newObject = {};\n\n      Object.defineProperties(newObject, {\n        newProperty1: {\n          value: \"John\",\n          writable: true,\n        },\n        newProperty2: {},\n      });"
    ],
    "tables": []
  },
  {
    "id": 266,
    "question": "What is the MEAN stack",
    "description": "The MEAN (MongoDB, Express, AngularJS, and Node.js) stack is the most popular open-source JavaScript software tech stack available for building dynamic web apps where you can write both the server-side and client-side halves of the web project entirely in JavaScript.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 267,
    "question": "What is obfuscation in javascript",
    "description": "Obfuscation is the deliberate act of creating obfuscated javascript code(i.e, source or machine code) that is difficult for humans to understand. It is something similar to encryption, but a machine can understand the code and execute it.\n      Let's see the below function before Obfuscation,\n\n      \n\n      And after the code Obfuscation, it would be appeared as below,",
    "codeExamples": [
      "function greeting() {\n        console.log(\"Hello, welcome to JS world\");\n      }",
      "eval(\n        (function (p, a, c, k, e, d) {\n          e = function (c) {\n            return c;\n          };\n          if (!\"\".replace(/^/, String)) {\n            while (c--) {\n              d[c] = k[c] || c;\n            }\n            k = [\n              function (e) {\n                return d[e];\n              },\n            ];\n            e = function () {\n              return \"\\\\w+\";\n            };\n            c = 1;\n          }\n          while (c--) {\n            if (k[c]) {\n              p = p.replace(new RegExp(\"\\\\b\" + e(c) + \"\\\\b\", \"g\"), k[c]);\n            }\n          }\n          return p;\n        })(\n          \"2 1(){0.3('4, 7 6 5 8')}\",\n          9,\n          9,\n          \"console|greeting|function|log|Hello|JS|to|welcome|world\".split(\"|\"),\n          0,\n          {}\n        )\n      );"
    ],
    "tables": []
  },
  {
    "id": 268,
    "question": "Why do you need Obfuscation",
    "description": "Below are the few reasons for Obfuscation,\n\n      1. The Code size will be reduced. So data transfers between server and client will be fast.\n      2. It hides the business logic from outside world and protects the code from others\n      3. Reverse engineering is highly difficult\n      4. The download time will be reduced",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 269,
    "question": "What is Minification",
    "description": "Minification is the process of removing all unnecessary characters(empty spaces are removed) and variables will be renamed without changing it's functionality. It is also a type of obfuscation .",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 270,
    "question": "What are the advantages of minification",
    "description": "Normally it is recommended to use minification for heavy traffic and intensive requirements of resources. It reduces file sizes with below benefits,\n\n      1. Decreases loading times of a web page\n      2. Saves bandwidth usages",
    "codeExamples": [],
    "tables": []
  },

  {
    "id": 272,
    "question": "What are the common tools used for minification",
    "description": "There are many online/offline tools to minify the javascript files,\n\n      1. Google's Closure Compiler\n      2. UglifyJS2\n      3. jsmin\n      4. javascript-minifier.com/\n      5. prettydiff.com",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 273,
    "question": "How do you perform form validation using javascript",
    "description": "JavaScript can be used to perform HTML form validation. For example, if the form field is empty, the function needs to notify, and return false, to prevent the form being submitted.\n      Lets' perform user login in an html form,\n\n      ```html\n      <form name=\"myForm\" onsubmit=\"return validateForm()\" method=\"post\">\n        User name:\n        <input type=\"text\" name=\"uname\" />\n        <input type=\"submit\" value=\"Submit\" />\n      </form>\n      ```\n\n      And the validation on user login is below,",
    "codeExamples": [
      "function validateForm() {\n        var x = document.forms[\"myForm\"][\"uname\"].value;\n        if (x == \"\") {\n          alert(\"The username shouldn't be empty\");\n          return false;\n        }\n      }"
    ],
    "tables": []
  },
  {
    "id": 274,
    "question": "How do you perform form validation without javascript",
    "description": "You can perform HTML form validation automatically without using javascript. The validation enabled by applying the `required` attribute to prevent form submission when the input is empty.\n\n      ```html\n      <form method=\"post\">\n        <input type=\"text\" name=\"uname\" required />\n        <input type=\"submit\" value=\"Submit\" />\n      </form>\n      ```\n\n      Note: Automatic form validation does not work in Internet Explorer 9 or earlier.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 275,
    "question": "What are the DOM methods available for constraint validation",
    "description": "The below DOM methods are available for constraint validation on an invalid input,\n\n      1. `checkValidity()`: It returns true if an input element contains valid data.\n      2. `setCustomValidity()`: It is used to set the `validationMessage` property of an input element.\n         Let's take an user login form with DOM validations",
    "codeExamples": [
      "function myFunction() {\n        var userName = document.getElementById(\"uname\");\n        if (!userName.checkValidity()) {\n          document.getElementById(\"message\").innerHTML =\n            userName.validationMessage;\n        } else {\n          document.getElementById(\"message\").innerHTML =\n            \"Entered a valid username\";\n        }\n      }"
    ],
    "tables": []
  },
  {
    "id": 276,
    "question": "What are the available constraint validation DOM properties",
    "description": "Below are the list of some of the constraint validation DOM properties available,\n\n      1. `validity`: It provides a list of boolean properties related to the validity of an input element.\n      2. `validationMessage`: It displays the message when the validity is false.\n      3. `willValidate`: It indicates if an input element will be validated or not.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 277,
    "question": "What are the validity properties",
    "description": "The validity property of an input element provides a set of properties related to the validity of data.\n\n      1. `customError`: It returns true, if a custom validity message is set.\n      2. `patternMismatch`: It returns true, if an element's value does not match its pattern attribute.\n      3. `rangeOverflow`: It returns true, if an element's value is greater than its max attribute.\n      4. `rangeUnderflow`: It returns true, if an element's value is less than its min attribute.\n      5. `stepMismatch`: It returns true, if an element's value is invalid according to step attribute.\n      6. `tooLong`: It returns true, if an element's value exceeds its maxLength attribute.\n      7. `typeMismatch`: It returns true, if an element's value is invalid according to type attribute.\n      8. `valueMissing`: It returns true, if an element with a required attribute has no value.\n      9. `valid`: It returns true, if an element's value is valid.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 278,
    "question": "Give an example usage of the rangeOverflow property",
    "description": "If an element's value is greater than its max attribute then the `rangeOverflow` property is true. For example, the below form submission throws an error if the value is more than 100,\n\n      ```html\n      <input id=\"age\" type=\"number\" max=\"100\" />\n      <button onclick=\"myOverflowFunction()\">OK</button>\n      ```",
    "codeExamples": [
      "function myOverflowFunction() {\n        if (document.getElementById(\"age\").validity.rangeOverflow) {\n          alert(\"The mentioned age is not allowed\");\n        }\n      }"
    ],
    "tables": []
  },
  {
    "id": 279,
    "question": "Are enums available in javascript",
    "description": "No, javascript does not natively support enums. But there are different kinds of solutions to simulate them even though they may not provide exact equivalents. For example, you can use freeze or seal on object,",
    "codeExamples": [
      "var DaysEnum = Object.freeze({\"monday\":1, \"tuesday\":2, \"wednesday\":3, ...})"
    ],
    "tables": []
  },
  {
    "id": 280,
    "question": "What is an enum",
    "description": "An enum is a type restricting variables to one value from a predefined set of constants. JavaScript has no enums but typescript provides built-in enum support.",
    "codeExamples": [
      "enum Color {\n       RED, GREEN, BLUE\n      }"
    ],
    "tables": []
  },
  {
    "id": 281,
    "question": "How do you list all properties of an object",
    "description": "You can use the `Object.getOwnPropertyNames()` method which returns an array of all properties found directly in a given object. Let's see the usage of this in an example below:",
    "codeExamples": [
      "const newObject = {\n        a: 1,\n        b: 2,\n        c: 3,\n      };\n\n      console.log(Object.getOwnPropertyNames(newObject));\n      [\"a\", \"b\", \"c\"];"
    ],
    "tables": []
  },
  {
    "id": 282,
    "question": "How do you get property descriptors of an object",
    "description": "You can use the `Object.getOwnPropertyDescriptors()` method which returns all own property descriptors of a given object. The example usage of this method is below,",
    "codeExamples": [
      "const newObject = {\n        a: 1,\n        b: 2,\n        c: 3,\n      };\n      const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);\n      console.log(descriptorsObject.a.writable); //true\n      console.log(descriptorsObject.a.configurable); //true\n      console.log(descriptorsObject.a.enumerable); //true\n      console.log(descriptorsObject.a.value); // 1"
    ],
    "tables": []
  },
  {
    "id": 283,
    "question": "What are the attributes provided by a property descriptor",
    "description": "A property descriptor is a record which has the following attributes\n\n      1. `value`: The value associated with the property\n      2. `writable`: Determines whether the value associated with the property can be changed or not\n      3. `configurable`: Returns true if the type of this property descriptor can be changed and if the property can be deleted from the corresponding object.\n      4. `enumerable`: Determines whether the property appears during enumeration of the properties on the corresponding object or not.\n      5. `set`: A function which serves as a setter for the property\n      6. `get`: A function which serves as a getter for the property",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 284,
    "question": "How do you extend classes",
    "description": "The `extends` keyword is used in class declarations/expressions to create a class which is a child of another class. It can be used to subclass custom classes as well as built-in objects. The syntax would be as below,\n\n      \n\n      Let's take an example of Square subclass from Polygon parent class,",
    "codeExamples": [
      "class ChildClass extends ParentClass { ... }",
      "class Square extends Rectangle {\n        constructor(length) {\n          super(length, length);\n          this.name = \"Square\";\n        }\n\n        get area() {\n          return this.width * this.height;\n        }\n\n        set area(value) {\n          this.area = value;\n        }\n      }"
    ],
    "tables": []
  },
  {
    "id": 285,
    "question": "How do I modify the url without reloading the page",
    "description": "The `window.location.href` property will be helpful to modify the url but it reloads the page. HTML5 introduced the `history.pushState()` and `history.replaceState()` methods, which allow you to add and modify history entries, respectively. For example, you can use pushState as below,\n\n      \n\n      This mechanism is used by routing libraries of frameworks like React and Angular in order to simulate the behaviour of a multi-page-website, even though they are only SPA (Single Page Applications).",
    "codeExamples": [
      "window.history.pushState(\"page2\", \"Title\", \"/page2.html\");"
    ],
    "tables": []
  },
  {
    "id": 286,
    "question": "How do you check whether or not an array includes a particular value",
    "description": "The `Arrayincludes()` method is used to determine whether an array includes a particular value among its entries by returning either true or false. Let's see an example to find an element(numeric and string) within an array.",
    "codeExamples": [
      "var numericArray = [1, 2, 3, 4];\n      console.log(numericArray.includes(3)); // true\n\n      var stringArray = [\"green\", \"yellow\", \"blue\"];\n      console.log(stringArray.includes(\"blue\")); //true"
    ],
    "tables": []
  },
  {
    "id": 287,
    "question": "How do you compare scalar arrays",
    "description": "You can use length and every method of arrays to compare two scalars (compared directly using `===`) arrays. The combination of these expressions can give the expected result,\n\n      \n\n      If you would like to compare arrays irrespective of order then you should sort them before,",
    "codeExamples": [
      "const arrayFirst = [1, 2, 3, 4, 5];\n      const arraySecond = [1, 2, 3, 4, 5];\n      console.log(\n        arrayFirst.length === arraySecond.length &&\n          arrayFirst.every((value, index) => value === arraySecond[index])\n      ); // true",
      "const arrayFirst = [2, 3, 1, 4, 5];\n      const arraySecond = [1, 2, 3, 4, 5];\n      console.log(\n        arrayFirst.length === arraySecond.length &&\n          arrayFirst\n            .sort()\n            .every((value, index) => value === arraySecond[index])\n      ); //true"
    ],
    "tables": []
  },
  {
    "id": 288,
    "question": "How to get the value from get parameters",
    "description": "The `new URL()` object accepts the url string and `searchParams` property of this object can be used to access the get parameters.",
    "codeExamples": [
      "let urlString = \"http://www.some-domain.com/about.html?x=1&y=2&z=3\"; //window.location.href\n      let url = new URL(urlString);\n      let parameterZ = url.searchParams.get(\"z\");\n      console.log(parameterZ); // 3"
    ],
    "tables": []
  },
  {
    "id": 289,
    "question": "How do you print numbers with commas as thousand separators",
    "description": "You can use the `Number.prototype.toLocaleString()` method which returns a string with a language-sensitive representation such as thousand separator, currency etc. of this number.",
    "codeExamples": [
      "function convertToThousandFormat(x) {\n        return x.toLocaleString(); // 12,345.679\n      }\n\n      console.log(convertToThousandFormat(12345.6789));"
    ],
    "tables": []
  },
 
  {
    "id": 291,
    "question": "Does JavaScript support namespaces",
    "description": "JavaScript doesn’t support namespaces by default. So if you create any element (function, method, object, variable) then it becomes global and pollutes the global namespace. Let's take an example of defining two functions without any namespace,\n\n      \n\n      It always calls the second function definition. In this case, namespaces will solve the name collision problem.",
    "codeExamples": [
      "function func1() {\n        console.log(\"This is a first definition\");\n      }\n      function func1() {\n        console.log(\"This is a second definition\");\n      }\n      func1(); // This is a second definition"
    ],
    "tables": []
  },
  {
    "id": 292,
    "question": "How do you declare a namespace",
    "description": "Even though JavaScript lacks namespaces, we can use Objects, an IIFE (Immediately Invoked Function Expression) or `let`/`const` to create namespaces.\n\n      1. Using Object Literal Notation: Let's wrap variables and functions inside an Object literal which acts as a namespace. After that you can access them using object notation\n\n         \n\n      2. Using IIFE (Immediately invoked function expression): The outer pair of parentheses of IIFE creates a local scope for all the code inside of it and makes the anonymous function a function expression. Due to that, you can create the same function in two different function expressions to act as a namespace.\n\n         \n\n      3. Using a block and a let/const declaration: In ECMAScript 6, you can simply use a block and a let declaration to restrict the scope of a variable to a block.",
    "codeExamples": [
      "var namespaceOne = {\n             function func1() {\n                 console.log(\"This is a first definition\");\n             }\n         }\n         var namespaceTwo = {\n               function func1() {\n                   console.log(\"This is a second definition\");\n               }\n           }\n         namespaceOne.func1(); // This is a first definition\n         namespaceTwo.func1(); // This is a second definition",
      "(function () {\n           function fun1() {\n             console.log(\"This is a first definition\");\n           }\n           fun1();\n         })();\n\n         (function () {\n           function fun1() {\n             console.log(\"This is a second definition\");\n           }\n           fun1();\n         })();",
      "{\n           let myFunction = function fun1() {\n             console.log(\"This is a first definition\");\n           };\n           myFunction();\n         }\n         //myFunction(): ReferenceError: myFunction is not defined.\n\n         {\n           let myFunction = function fun1() {\n             console.log(\"This is a second definition\");\n           };\n           myFunction();\n         }\n         //myFunction(): ReferenceError: myFunction is not defined."
    ],
    "tables": []
  },
  {
    "id": 293,
    "question": "How do you invoke javascript code in an iframe from the parent page",
    "description": "Initially iFrame needs to be accessed using either `document.getElementBy` or `window.frames`. After that `contentWindow` property of iFrame gives the access for targetFunction",
    "codeExamples": [
      "document.getElementById(\"targetFrame\").contentWindow.targetFunction();\n      window.frames[0].frameElement.contentWindow.targetFunction(); // Accessing iframe this way may not work in latest versions chrome and firefox"
    ],
    "tables": []
  },
  {
    "id": 294,
    "question": "How do you get the timezone offset of a date object",
    "description": "You can use the `getTimezoneOffset` method of the date object. This method returns the time zone difference, in minutes, from current locale (host system settings) to UTC",
    "codeExamples": [
      "var offset = new Date().getTimezoneOffset();\n      console.log(offset); // -480"
    ],
    "tables": []
  },
  {
    "id": 295,
    "question": "How do you load CSS and JS files dynamically",
    "description": "You can create both link and script elements in the DOM and append them as child to head tag. Let's create a function to add script and style resources as below,",
    "codeExamples": [
      "function loadAssets(filename, filetype) {\n        if (filetype == \"css\") {\n          // External CSS file\n          var fileReference = document.createElement(\"link\");\n          fileReference.setAttribute(\"rel\", \"stylesheet\");\n          fileReference.setAttribute(\"type\", \"text/css\");\n          fileReference.setAttribute(\"href\", filename);\n        } else if (filetype == \"js\") {\n          // External JavaScript file\n          var fileReference = document.createElement(\"script\");\n          fileReference.setAttribute(\"type\", \"text/javascript\");\n          fileReference.setAttribute(\"src\", filename);\n        }\n        if (typeof fileReference != \"undefined\")\n          document.getElementsByTagName(\"head\")[0].appendChild(fileReference);\n      }"
    ],
    "tables": []
  },
  {
    "id": 296,
    "question": "What are the different methods to find HTML elements in DOM",
    "description": "If you want to access any element in an HTML page, you need to start with accessing the document object. Later you can use any of the below methods to find the HTML element,\n\n      1. `document.getElementById(id)`: It finds an element by Id\n      2. `document.getElementsByTagName(name)`: It finds an element by tag name (returns an node list)\n      3. `document.getElementsByClassName(name)`: It finds an element by class name (returns an node list)\n      4. `document.querySelector(cssSelector)`: It finds an element by css selector\n      5. `document.querySelectorAll(cssSelector)`: It finds all elements by css selector (returns a node list)",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 297,
    "question": "What is jQuery",
    "description": "jQuery is a popular cross-browser JavaScript library that provides Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers. It is widely famous with its philosophy of “Write less, do more”. For example, you can display welcome message on the page load using jQuery as below,\n\n      \n\n      Note: You can download it from jquery's official site or install it from CDNs, like google.",
    "codeExamples": [
      "$(document).ready(function () {\n        // It selects the document and apply the function on page load\n        alert(\"Welcome to jQuery world\");\n      });"
    ],
    "tables": []
  },
  {
    "id": 298,
    "question": "What is V8 JavaScript engine",
    "description": "V8 is an open source high-performance JavaScript engine used by the Google Chrome browser, written in C++. It is also being used in the node.js project. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors.\n      Note: It can run standalone, or can be embedded into any C++ application.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 299,
    "question": "Why do we call javascript as dynamic language",
    "description": "JavaScript is a loosely typed or a dynamic language because variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned/reassigned with values of all types.",
    "codeExamples": [
      "let age = 50; // age is a number now\n      age = \"old\"; // age is a string now\n      age = true; // age is a boolean"
    ],
    "tables": []
  },
  {
    "id": 300,
    "question": "What is a void operator",
    "description": "The `void` operator evaluates the given expression and then returns `undefined` (i.e, without returning value). The syntax would be as below,\n\n      \n\n      Let's display a message without any redirection or reload\n\n      \n\n      Note: This operator is often used to obtain the undefined primitive value, using `void(0)`. Also it can be used to call asynchronous functions without waiting for the result.",
    "codeExamples": [
      "void expression;\n      void expression;",
      "<a href=\"javascript:void(alert('Welcome to JS world'))\">\n        Click here to see a message\n      </a>"
    ],
    "tables": []
  },
  {
    "id": 301,
    "question": "How to set the cursor to wait",
    "description": "The cursor can be set to wait in JavaScript by using the property `cursor`. Let's perform this behavior on page load using the below function.\n\n      \n\n      and this function invoked on page load\n\n      ```html\n      <body onload=\"myFunction()\"></body>\n      ```",
    "codeExamples": [
      "function myFunction() {\n        window.document.body.style.cursor = \"wait\";\n      }"
    ],
    "tables": []
  },
  {
    "id": 302,
    "question": "How do you create an infinite loop",
    "description": "You can create infinite loops using for and while loops without using any expressions. The for loop construct or syntax is better approach in terms of ESLint and code optimizer tools,",
    "codeExamples": [
      "for (;;) {}\n      while (true) {}"
    ],
    "tables": []
  },
  {
    "id": 303,
    "question": "Why do you need to avoid with statement",
    "description": "JavaScript's with statement was intended to provide a shorthand for writing recurring accesses to objects. So it can help reduce file size by reducing the need to repeat a lengthy object reference without performance penalty. Let's take an example where it is used to avoid redundancy when accessing an object several times.\n\n      \n\n      Using `with` it turns this into:\n\n      \n\n      But this `with` statement creates performance problems since one cannot predict whether an argument will refer to a real variable or to a property inside the with argument.",
    "codeExamples": [
      "a.b.c.greeting = \"welcome\";\n      a.b.c.age = 32;",
      "with (a.b.c) {\n        greeting = \"welcome\";\n        age = 32;\n      }"
    ],
    "tables": []
  },
  {
    "id": 304,
    "question": "What is the output of the following for loops",
    "description": "The output of the above for loops is 4 4 4 4 and 0 1 2 3\n\n      Explanation: Due to the event queue/loop of javascript, the `setTimeout` callback function is called after the loop has been executed. Since the variable i is declared with the `var` keyword it became a global variable and the value was equal to 4 using iteration when the time `setTimeout` function is invoked. Hence, the output of the second loop is `4 4 4 4`.\n\n      Whereas in the second loop, the variable i is declared as the `let` keyword it becomes a block scoped variable and it holds a new value(0, 1 ,2 3) for each iteration. Hence, the output of the first loop is `0 1 2 3`.",
    "codeExamples": [
      "for (var i = 0; i < 4; i++) {\n        // global scope\n        setTimeout(() => console.log(i));\n      }\n\n      for (let i = 0; i < 4; i++) {\n        // block scope\n        setTimeout(() => console.log(i));\n      }"
    ],
    "tables": []
  },
  {
    "id": 305,
    "question": "List down some of the features of ES6",
    "description": "Below are the list of some new features of ES6,\n\n      1. Support for constants or immutable variables\n      2. Block-scope support for variables, constants and functions\n      3. Arrow functions\n      4. Default parameters\n      5. Rest and Spread Parameters\n      6. Template Literals\n      7. Multi-line Strings\n      8. Destructuring Assignment\n      9. Enhanced Object Literals\n      10. Promises\n      11. Classes\n      12. Modules",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 306,
    "question": "What is ES6",
    "description": "ES6 is the sixth edition of the javascript language and it was released in June 2015. It was initially known as ECMAScript 6 (ES6) and later renamed to ECMAScript 2015. Almost all the modern browsers support ES6 but for the old browsers there are many transpilers, like Babel.js etc.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 307,
    "question": "Can I redeclare let and const variables",
    "description": "No, you cannot redeclare let and const variables. If you do, it throws below error\n\n      ```bash\n      Uncaught SyntaxError: Identifier 'someVariable' has already been declared\n      ```\n\n      Explanation: The variable declaration with `var` keyword refers to a function scope and the variable is treated as if it were declared at the top of the enclosing scope due to hoisting feature. So all the multiple declarations contributing to the same hoisted variable without any error. Let's take an example of re-declaring variables in the same scope for both var and let/const variables.\n\n      \n\n      The block-scoped multi-declaration throws syntax error,",
    "codeExamples": [
      "var name = \"John\";\n      function myFunc() {\n        var name = \"Nick\";\n        var name = \"Abraham\"; // Re-assigned in the same function block\n        alert(name); // Abraham\n      }\n      myFunc();\n      alert(name); // John",
      "let name = \"John\";\n      function myFunc() {\n        let name = \"Nick\";\n        let name = \"Abraham\"; // Uncaught SyntaxError: Identifier 'name' has already been declared\n        alert(name);\n      }\n\n      myFunc();\n      alert(name);"
    ],
    "tables": []
  },
  {
    "id": 308,
    "question": "Does the `const` variable make the value immutable",
    "description": "No, the `const` variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)",
    "codeExamples": [
      "const userList = [];\n      userList.push(\"John\"); // Can mutate even though it can't re-assign\n      console.log(userList); // ['John']"
    ],
    "tables": []
  },
  {
    "id": 309,
    "question": "What are default parameters",
    "description": "In ES5, we need to depend on logical OR operators to handle default values of function parameters. Whereas in ES6, Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed. Let's compare the behavior with an examples,\n\n      \n\n      The default parameters makes the initialization more simpler,",
    "codeExamples": [
      "//ES5\n      var calculateArea = function (height, width) {\n        height = height || 50;\n        width = width || 60;\n\n        return width * height;\n      };\n      console.log(calculateArea()); //300",
      "//ES6\n      var calculateArea = function (height = 50, width = 60) {\n        return width * height;\n      };\n\n      console.log(calculateArea()); //300"
    ],
    "tables": []
  },
  {
    "id": 310,
    "question": "What are template literals",
    "description": "Template literals or template strings are string literals allowing embedded expressions. These are enclosed by the back-tick (`) character instead of double or single quotes.\n      In ES6, this feature enables using dynamic expressions as below,\n\n      \n\n      In ES5, you need break string like below,\n\n      \n\n      Note: You can use multi-line strings and string interpolation features with template literals.",
    "codeExamples": [
      "var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`;",
      "var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.`"
    ],
    "tables": []
  },
  {
    "id": 311,
    "question": "How do you write multi-line strings in template literals",
    "description": "In ES5, you would have to use newline escape characters('\\\\n') and concatenation symbols(+) in order to get multi-line strings.\n\n      \n\n      Whereas in ES6, You don't need to mention any newline sequence character,",
    "codeExamples": [
      "console.log(\"This is string sentence 1\\n\" + \"This is string sentence 2\");",
      "console.log(`This is string sentence\n      'This is string sentence 2`);"
    ],
    "tables": []
  },
  {
    "id": 312,
    "question": "What are nesting templates",
    "description": "The nesting template is a feature supported within template literals syntax to allow inner backticks inside a placeholder ${ } within the template. For example, the below nesting template is used to display the icons based on user permissions whereas outer template checks for platform type,\n\n      \n\n      You can write the above use case without nesting template features as well. However, the nesting template feature is more compact and readable.",
    "codeExamples": [
      "const iconStyles = `icon ${\n        isMobilePlatform()\n          ? \"\"\n          : `icon-${user.isAuthorized ? \"submit\" : \"disabled\"}`\n      }`;",
      "//Without nesting templates\n      const iconStyles = `icon ${\n        isMobilePlatform()\n          ? \"\"\n          : user.isAuthorized\n          ? \"icon-submit\"\n          : \"icon-disabled\"\n      }`;"
    ],
    "tables": []
  },
  {
    "id": 313,
    "question": "What are tagged templates",
    "description": "Tagged templates are the advanced form of templates in which tags allow you to parse template literals with a function. The tag function accepts the first parameter as an array of strings and remaining parameters as expressions. This function can also return manipulated strings based on parameters. Let's see the usage of this tagged template behavior of an IT professional skill set in an organization,",
    "codeExamples": [
      "var user1 = \"John\";\n      var skill1 = \"JavaScript\";\n      var experience1 = 15;\n\n      var user2 = \"Kane\";\n      var skill2 = \"JavaScript\";\n      var experience2 = 5;\n\n      function myInfoTag(strings, userExp, experienceExp, skillExp) {\n        var str0 = strings[0]; // \"Mr/Ms. \"\n        var str1 = strings[1]; // \" is a/an \"\n        var str2 = strings[2]; // \"in\"\n\n        var expertiseStr;\n        if (experienceExp > 10) {\n          expertiseStr = \"expert developer\";\n        } else if (skillExp > 5 && skillExp <= 10) {\n          expertiseStr = \"senior developer\";\n        } else {\n          expertiseStr = \"junior developer\";\n        }\n\n        return `${str0}${userExp}${str1}${expertiseStr}${str2}${skillExp}`;\n      }\n\n      var output1 = myInfoTag`Mr/Ms. ${user1} is a/an ${experience1} in ${skill1}`;\n      var output2 = myInfoTag`Mr/Ms. ${user2} is a/an ${experience2} in ${skill2}`;\n\n      console.log(output1); // Mr/Ms. John is a/an expert developer in JavaScript\n      console.log(output2); // Mr/Ms. Kane is a/an junior developer in JavaScript"
    ],
    "tables": []
  },
  {
    "id": 314,
    "question": "What are raw strings",
    "description": "ES6 provides a raw strings feature using the `String.raw()` method which is used to get the raw string form of template strings. This feature allows you to access the raw strings as they were entered, without processing escape sequences. For example, the usage would be as below,\n\n      \n\n      If you don't use raw strings, the newline character sequence will be processed by displaying the output in multiple lines\n\n      \n\n      Also, the raw property is available on the first argument to the tag function",
    "codeExamples": [
      "var calculationString = String.raw`The sum of numbers is \\n${\n        1 + 2 + 3 + 4\n      }!`;\n      console.log(calculationString); // The sum of numbers is \\n10!",
      "var calculationString = `The sum of numbers is \\n${1 + 2 + 3 + 4}!`;\n      console.log(calculationString);\n      // The sum of numbers is\n      // 10!",
      "function tag(strings) {\n        console.log(strings.raw[0]);\n      }"
    ],
    "tables": []
  },
  {
    "id": 315,
    "question": "What is destructuring assignment",
    "description": "The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables.\n      Let's get the month values from an array using destructuring assignment\n\n      \n\n      and you can get user properties of an object using destructuring assignment,",
    "codeExamples": [
      "var [one, two, three] = [\"JAN\", \"FEB\", \"MARCH\"];\n\n      console.log(one); // \"JAN\"\n      console.log(two); // \"FEB\"\n      console.log(three); // \"MARCH\"",
      "var { name, age } = { name: \"John\", age: 32 };\n\n      console.log(name); // John\n      console.log(age); // 32"
    ],
    "tables": []
  },
  {
    "id": 316,
    "question": "What are default values in destructuring assignment",
    "description": "A variable can be assigned a default value when the value unpacked from the array or object is undefined during destructuring assignment. It helps to avoid setting default values separately for each assignment. Let's take an example for both arrays and object use cases,\n\n      Arrays destructuring:\n\n      \n\n      Objects destructuring:",
    "codeExamples": [
      "var x, y, z;\n\n      [x = 2, y = 4, z = 6] = [10];\n      console.log(x); // 10\n      console.log(y); // 4\n      console.log(z); // 6",
      "var { x = 2, y = 4, z = 6 } = { x: 10 };\n\n      console.log(x); // 10\n      console.log(y); // 4\n      console.log(z); // 6"
    ],
    "tables": []
  },
  {
    "id": 317,
    "question": "How do you swap variables in destructuring assignment",
    "description": "If you don't use destructuring assignment, swapping two values requires a temporary variable. Whereas using a destructuring feature, two variable values can be swapped in one destructuring expression. Let's swap two number variables in array destructuring assignment,",
    "codeExamples": [
      "var x = 10,\n        y = 20;\n\n      [x, y] = [y, x];\n      console.log(x); // 20\n      console.log(y); // 10"
    ],
    "tables": []
  },
  {
    "id": 318,
    "question": "What are enhanced object literals",
    "description": "Object literals make it easy to quickly create objects with properties inside the curly braces. For example, it provides shorter syntax for common object property definition as below.",
    "codeExamples": [
      "//ES6\n      var x = 10,\n        y = 20;\n      obj = { x, y };\n      console.log(obj); // {x: 10, y:20}\n      //ES5\n      var x = 10,\n        y = 20;\n      obj = { x: x, y: y };\n      console.log(obj); // {x: 10, y:20}"
    ],
    "tables": []
  },
  {
    "id": 319,
    "question": "What are dynamic imports",
    "description": "The dynamic imports using `import()` function syntax allows us to load modules on demand by using promises or the async/await syntax. Currently this feature is in [stage4 proposal](https://github.com/tc39/proposal-dynamic-import). The main advantage of dynamic imports is reduction of our bundle's sizes, the size/payload response of our requests and overall improvements in the user experience.\n      The syntax of dynamic imports would be as below,",
    "codeExamples": [
      "import(\"./Module\").then((Module) => Module.method());"
    ],
    "tables": []
  },
  {
    "id": 320,
    "question": "What are the use cases for dynamic imports",
    "description": "Below are some of the use cases of using dynamic imports over static imports,\n\n      1. Import a module on-demand or conditionally. For example, if you want to load a polyfill on legacy browser\n\n         \n\n      2. Compute the module specifier at runtime. For example, you can use it for internationalization.\n\n         \n\n      3. Import a module from within a regular script instead a module.",
    "codeExamples": [
      "if (isLegacyBrowser()) {\n             import(···)\n             .then(···);\n         }",
      "import(`messages_${getLocale()}.js`).then(···);"
    ],
    "tables": []
  },
  {
    "id": 321,
    "question": "What are typed arrays",
    "description": "Typed arrays are array-like objects from ECMAScript 6 API for handling binary data. JavaScript provides 12 Typed array types,\n\n      1. Int8Array: An array of 8-bit signed integers\n      2. Uint8Array: An array of 8-bit unsigned integers\n      3. Uint8ClampedArray: An array of 8-bit unsigned integers clamped to 0-255\n      4. Int16Array: An array of 16-bit signed integers\n      5. Uint16Array: An array of 16-bit unsigned integers\n      6. Int32Array: An array of 32-bit signed integers\n      7. Uint32Array: An array of 32-bit unsigned integers\n      8. BigInt64Array: An array of 64-bit signed BigInts\n      9. BigUint64Array: An array of 64-bit unsigned BigInts\n      10. Float16Array: An array of 16-bit floating point numbers\n      11. Float32Array: An array of 32-bit floating point numbers\n      12. Float64Array: An array of 64-bit floating point numbers\n\n      For example, you can create an array of 8-bit signed integers as below",
    "codeExamples": [
      "const a = new Int8Array();\n      // You can pre-allocate n bytes\n      const bytes = 1024;\n      const a = new Int8Array(bytes);"
    ],
    "tables": []
  },
  {
    "id": 322,
    "question": "What are the advantages of module loaders",
    "description": "The module loaders provides the below features,\n\n      1. Dynamic loading\n      2. State isolation\n      3. Global namespace isolation\n      4. Compilation hooks\n      5. Nested virtualization",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 323,
    "question": "What is collation",
    "description": "Collation is used for sorting a set of strings and searching within a set of strings. It is parameterized by locale and aware of Unicode. Let's take comparison and sorting features,\n\n      1. Comparison:\n\n      \n\n      2. Sorting:",
    "codeExamples": [
      "var list = [\"ä\", \"a\", \"z\"]; // In German,  \"ä\" sorts with \"a\" Whereas in Swedish, \"ä\" sorts after \"z\"\n      var l10nDE = new Intl.Collator(\"de\");\n      var l10nSV = new Intl.Collator(\"sv\");\n      console.log(l10nDE.compare(\"ä\", \"z\") === -1); // true\n      console.log(l10nSV.compare(\"ä\", \"z\") === +1); // true",
      "var list = [\"ä\", \"a\", \"z\"]; // In German,  \"ä\" sorts with \"a\" Whereas in Swedish, \"ä\" sorts after \"z\"\n      var l10nDE = new Intl.Collator(\"de\");\n      var l10nSV = new Intl.Collator(\"sv\");\n      console.log(list.sort(l10nDE.compare)); // [ \"a\", \"ä\", \"z\" ]\n      console.log(list.sort(l10nSV.compare)); // [ \"a\", \"z\", \"ä\" ]"
    ],
    "tables": []
  },
  {
    "id": 324,
    "question": "What is for...of statement",
    "description": "The for...of statement creates a loop iterating over iterable objects or elements such as built-in String, Array, Array-like objects (like arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. The basic usage of for...of statement on arrays would be as below,",
    "codeExamples": [
      "let arrayIterable = [10, 20, 30, 40, 50];\n\n      for (let value of arrayIterable) {\n        value++;\n        console.log(value); // 11 21 31 41 51\n      }"
    ],
    "tables": []
  },
  {
    "id": 325,
    "question": "What is the output of below spread operator array",
    "description": "The output of the array is ['J', 'o', 'h', 'n', ' ', 'R', 'e', 's', 'i', 'g']\n\n      Explanation: The string is an iterable type and the spread operator within an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.",
    "codeExamples": [
      "[...\"John Resig\"];"
    ],
    "tables": []
  },
  {
    "id": 326,
    "question": "Is PostMessage secure",
    "description": "Yes, postMessages can be considered very secure as long as the programmer/developer is careful about checking the origin and source of an arriving message. But if you try to send/receive a message without verifying its source will create cross-site scripting attacks.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 327,
    "question": "What are the problems with postmessage target origin as wildcard",
    "description": "The second argument of postMessage method specifies which origin is allowed to receive the message. If you use the wildcard “\\*” as an argument then any origin is allowed to receive the message. In this case, there is no way for the sender window to know if the target window is at the target origin when sending the message. If the target window has been navigated to another origin, the other origin would receive the data. Hence, this may lead to XSS vulnerabilities.",
    "codeExamples": [
      "targetWindow.postMessage(message, \"*\");"
    ],
    "tables": []
  },
  {
    "id": 328,
    "question": "How do you avoid receiving postMessages from attackers",
    "description": "Since the listener listens for any message, an attacker can trick the application by sending a message from the attacker’s origin, which gives an impression that the receiver received the message from the actual sender’s window. You can avoid this issue by validating the origin of the message on the receiver's end using the “message.origin” attribute.\n\n      For example, let's check the sender's origin [http://www.some-sender.com](http://www.some-sender.com) on receiver side [www.some-receiver.com](www.some-receiver.com),",
    "codeExamples": [
      "//Listener on http://www.some-receiver.com/\n      window.addEventListener(\"message\", function(message){\n          if(/^http://www\\.some-sender\\.com$/.test(message.origin)){\n               console.log('You received the data from valid sender', message.data);\n         }\n      });"
    ],
    "tables": []
  },
  {
    "id": 329,
    "question": "Can I avoid using postMessages completely",
    "description": "You cannot avoid using postMessages completely(or 100%). Even though your application doesn’t use postMessage considering the risks, a lot of third party scripts use postMessage to communicate with the third party service. So your application might be using postMessage without your knowledge.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 330,
    "question": "Is postMessages synchronous",
    "description": "The postMessages are synchronous in IE8 browser but they are asynchronous in IE9 and all other modern browsers (i.e, IE9+, Firefox, Chrome, Safari).Due to this asynchronous behaviour, we use a callback mechanism when the postMessage is returned.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 331,
    "question": "What paradigm is Javascript",
    "description": "JavaScript is a multi-paradigm language, supporting imperative/procedural programming, Object-Oriented Programming and functional programming. JavaScript supports Object-Oriented Programming with prototypical inheritance.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 332,
    "question": "What is the difference between internal and external javascript",
    "description": "Internal JavaScript: It is the source code within the script tag.\n      External JavaScript: The source code is stored in an external file(stored with .js extension) and referred with in the tag.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 333,
    "question": "Is JavaScript faster than server side script",
    "description": "Yes, JavaScript is faster than server side scripts. Because JavaScript is a client-side script it does not require any web server’s help for its computation or calculation. So JavaScript is always faster than any server-side script like ASP, PHP, etc.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 334,
    "question": "How do you get the status of a checkbox",
    "description": "You can apply the `checked` property on the selected checkbox in the DOM. If the value is `true` it means the checkbox is checked, otherwise it is unchecked. For example, the below HTML checkbox element can be access using javascript as below:\n\n      ```html\n      <input type=\"checkbox\" id=\"checkboxname\" value=\"Agree\" />\n      Agree the conditions\n      <br />\n      ```",
    "codeExamples": [
      "console.log(document.getElementById(‘checkboxname’).checked); // true or false"
    ],
    "tables": []
  },
  {
    "id": 335,
    "question": "What is the purpose of double tilde operator",
    "description": "The double tilde operator(~~) is known as double NOT bitwise operator. This operator is a slightly quicker substitute for Math.floor().",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 336,
    "question": "How do you convert character to ASCII code",
    "description": "You can use the `String.prototype.charCodeAt()` method to convert string characters to ASCII numbers. For example, let's find ASCII code for the first letter of 'ABC' string,\n\n      \n\n      Whereas `String.fromCharCode()` method converts numbers to equal ASCII characters.",
    "codeExamples": [
      "\"ABC\".charCodeAt(0); // returns 65",
      "String.fromCharCode(65, 66, 67); // returns 'ABC'"
    ],
    "tables": []
  },
  {
    "id": 337,
    "question": "What is ArrayBuffer",
    "description": "An ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can create it as below,\n\n      \n\n      To manipulate an ArrayBuffer, we need to use a “view” object.",
    "codeExamples": [
      "let buffer = new ArrayBuffer(16); // create a buffer of length 16\n      alert(buffer.byteLength); // 16",
      "//Create a DataView referring to the buffer\n      let view = new DataView(buffer);"
    ],
    "tables": []
  },
  {
    "id": 338,
    "question": "What is the output of below string expression",
    "description": "The output of the above expression is \"W\".\n      Explanation: The bracket notation with specific index on a string returns the character at a specific location. Hence, it returns the character \"W\" of the string. Since this is not supported in IE7 and below versions, you may need to use the .charAt() method to get the desired result.",
    "codeExamples": [
      "console.log(\"Welcome to JS world\"[0]);"
    ],
    "tables": []
  },
  {
    "id": 339,
    "question": "What is the purpose of Error object",
    "description": "The Error constructor creates an error object and the instances of error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions. The syntax of error object would be as below,\n\n      \n\n      You can throw user defined exceptions or errors using Error object in try...catch block as below,",
    "codeExamples": [
      "new Error([message[, fileName[, lineNumber]]])",
      "try {\n        if (withdraw > balance)\n          throw new Error(\"Oops! You don't have enough balance\");\n      } catch (e) {\n        console.log(e.name + \": \" + e.message);\n      }"
    ],
    "tables": []
  },
  {
    "id": 340,
    "question": "What is the purpose of EvalError object",
    "description": "The EvalError object indicates an error regarding the global `eval()` function. Even though this exception is not thrown by JavaScript anymore, the EvalError object remains for compatibility. The syntax of this expression would be as below,\n\n      \n\n      You can throw EvalError with in try...catch block as below,",
    "codeExamples": [
      "new EvalError([message[, fileName[, lineNumber]]])",
      "try {\n        throw new EvalError('Eval function error', 'someFile.js', 100);\n      } catch (e) {\n        console.log(e.message, e.name, e.fileName);              // \"Eval function error\", \"EvalError\", \"someFile.js\""
    ],
    "tables": []
  },
  {
    "id": 341,
    "question": "What are the list of cases error thrown from non-strict mode to strict mode",
    "description": "When you apply 'use strict'; syntax, some of the below cases will throw a SyntaxError before executing the script\n\n      1. When you use Octal syntax\n\n      \n\n      2. Using `with` statement\n      3. When you use delete operator on a variable name\n      4. Using eval or arguments as variable or function argument name\n      5. When you use newly reserved keywords\n      6. When you declare a function in a block and access it from outside of the block\n\n      \n\n      Hence, the errors from above cases are helpful to avoid errors in development/production environments.",
    "codeExamples": [
      "var n = 022;",
      "if (someCondition) {\n        function f() {}\n      }\n      f(); // ReferenceError: f is not defined"
    ],
    "tables": []
  },
  {
    "id": 342,
    "question": "Do all objects have prototypes",
    "description": "No. All objects have prototypes except two exceptions:\n      *  Object.prototype itself — This is the base object in the prototype chain, and its prototype is `null`.\n      *   Objects created with `Object.create(null)` — These are deliberately created with no prototype, so they don’t inherit from `Object.prototype`.\n\n      All other standard objects do have a prototype.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 343,
    "question": "What is the difference between a parameter and an argument",
    "description": "Parameter is the variable name of a function definition whereas an argument represents the value given to a function when it is invoked. Let's explain this with a simple function",
    "codeExamples": [
      "function myFunction(parameter1, parameter2, parameter3) {\n        console.log(arguments[0]); // \"argument1\"\n        console.log(arguments[1]); // \"argument2\"\n        console.log(arguments[2]); // \"argument3\"\n      }\n      myFunction(\"argument1\", \"argument2\", \"argument3\");"
    ],
    "tables": []
  },
  {
    "id": 344,
    "question": "What is the purpose of some method in arrays",
    "description": "The some() method is used to test whether at least one element in the array passes the test implemented by the provided function. The method returns a boolean value. Let's take an example to test for any odd elements,",
    "codeExamples": [
      "var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n      var odd = (element) => element % 2 !== 0;\n\n      console.log(array.some(odd)); // true (the odd element exists)"
    ],
    "tables": []
  },
  {
    "id": 345,
    "question": "How do you combine two or more arrays",
    "description": "The concat() method is used to join two or more arrays by returning a new array containing all the elements. The syntax would be as below,\n\n      \n\n      Let's take an example of array's concatenation with veggies and fruits arrays,",
    "codeExamples": [
      "array1.concat(array2, array3, ..., arrayX)",
      "var veggies = [\"Tomato\", \"Carrot\", \"Cabbage\"];\n      var fruits = [\"Apple\", \"Orange\", \"Pears\"];\n      var veggiesAndFruits = veggies.concat(fruits);\n      console.log(veggiesAndFruits); // Tomato, Carrot, Cabbage, Apple, Orange, Pears"
    ],
    "tables": []
  },
  {
    "id": 346,
    "question": "What is the difference between Shallow and Deep copy",
    "description": "There are two ways to copy an object,\n\n      Shallow Copy:\n      Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.\n\n      Example\n\n      \n\n      to create a duplicate\n\n      \n\n      if we change some property value in the duplicate one like this:\n\n      \n\n      The above statement will also change the name of `empDetails`, since we have a shallow copy. That means we're losing the original data as well.\n\n      Deep copy:\n      A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.\n\n      Example\n\n      \n\n      Create a deep copy by using the properties from the original object into new variable\n\n      \n\n      Now if you change `empDetailsDeepCopy.name`, it will only affect `empDetailsDeepCopy` & not `empDetails`",
    "codeExamples": [
      "var empDetails = {\n        name: \"John\",\n        age: 25,\n        expertise: \"Software Developer\",\n      };",
      "var empDetailsShallowCopy = empDetails; //Shallow copying!",
      "empDetailsShallowCopy.name = \"Johnson\";",
      "var empDetails = {\n        name: \"John\",\n        age: 25,\n        expertise: \"Software Developer\",\n      };",
      "var empDetailsDeepCopy = {\n        name: empDetails.name,\n        age: empDetails.age,\n        expertise: empDetails.expertise,\n      };"
    ],
    "tables": []
  },
  {
    "id": 347,
    "question": "How do you create specific number of copies of a string",
    "description": "The `repeat()` method is used to construct and return a new string which contains the specified number of copies of the string on which it was called, concatenated together. Remember that this method has been added to the ECMAScript 2015 specification.\n      Let's take an example of Hello string to repeat it 4 times,",
    "codeExamples": [
      "\"Hello\".repeat(4); // 'HelloHelloHelloHello'"
    ],
    "tables": []
  },
  {
    "id": 348,
    "question": "How do you return all matching strings against a regular expression",
    "description": "The `matchAll()` method can be used to return an iterator of all results matching a string against a regular expression. For example, the below example returns an array of matching string results against a regular expression,",
    "codeExamples": [
      "let regexp = /Hello(\\d?)/g;\n      let greeting = \"Hello1Hello2Hello3\";\n\n      let greetingList = [...greeting.matchAll(regexp)];\n\n      console.log(greetingList[0][0]); //Hello1\n      console.log(greetingList[1][0]); //Hello2\n      console.log(greetingList[2][0]); //Hello3"
    ],
    "tables": []
  },
  {
    "id": 349,
    "question": "How do you trim a string at the beginning or ending",
    "description": "The `trim` method of string prototype is used to trim on both sides of a string. But if you want to trim especially at the beginning or ending of the string then you can use `trimStart/trimLeft` and `trimEnd/trimRight` methods. Let's see an example of these methods on a greeting message,",
    "codeExamples": [
      "var greeting = \"   Hello, Goodmorning!   \";\n\n      console.log(greeting); // \"   Hello, Goodmorning!   \"\n      console.log(greeting.trimStart()); // \"Hello, Goodmorning!   \"\n      console.log(greeting.trimLeft()); // \"Hello, Goodmorning!   \"\n\n      console.log(greeting.trimEnd()); // \"   Hello, Goodmorning!\"\n      console.log(greeting.trimRight()); // \"   Hello, Goodmorning!\""
    ],
    "tables": []
  },
  {
    "id": 350,
    "question": "What is the output of below console statement with unary operator",
    "description": "Let's take console statement with unary operator as given below,\n\n      \n\n      The output of the above console log statement returns NaN. Because the element is prefixed by the unary operator and the JavaScript interpreter will try to convert that element into a number type. Since the conversion fails, the value of the statement results in NaN value.",
    "codeExamples": [
      "console.log(+\"Hello\"); // NaN"
    ],
    "tables": []
  },
  {
    "id": 351,
    "question": "Does javascript uses mixins",
    "description": "JavaScript does not have built-in support for mixins as a formal language feature. However, developers commonly implement mixins using various patterns to enable code reuse and composition.\n\n      A mixin is a way to add reusable functionality from one or more objects into a class or another object, without using classical inheritance. It promotes object composition by combining behaviors or properties from different sources into a single destination.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 352,
    "question": "Mixin Example using Object composition",
    "description": "",
    "codeExamples": [
      "// Define a mixin\n      const canEat = {\n        eat() {\n          console.log(\"Eating...\");\n        }\n      };\n\n      const canWalk = {\n        walk() {\n          console.log(\"Walking...\");\n        }\n      };\n\n      const canRead = {\n        read() {\n          console.log(\"Reading...\");\n        }\n      };\n\n      // Create a class\n      class Person {\n        constructor(name) {\n          this.name = name;\n        }\n      }\n\n      // Apply mixins\n      Object.assign(Person.prototype, canEat, canWalk, canRead);\n\n      // Use it\n      const person = new Person(\"Sudheer\");\n      person.eat();  // Output: Eating...\n      person.walk(); // Output: Walking...\n      person.read(); // Output: Reading..."
    ],
    "tables": []
  },
  {
    "id": 353,
    "question": "Benefits",
    "description": "- Avoids deep inheritance hierarchies\n      - Encourages composition over inheritance\n      - Promotes reusable and modular code\n  \n      Modern JavaScript favors mixin alternatives like composition, delegation, higher-order functions, and class mixins to promote reusable and modular code. Libraries like Lodash offer utilities for object composition, while frameworks like Vue.js provide built-in mixin features to promote reusable and modular code.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 354,
    "question": "What is a thunk function",
    "description": "A thunk is just a function which delays the evaluation of the value. It doesn’t take any arguments but gives the value whenever you invoke the thunk. i.e, It is used not to execute now but it will be sometime in the future. Let's take a synchronous example,",
    "codeExamples": [
      "const add = (x, y) => x + y;\n\n      const thunk = () => add(2, 3);\n\n      thunk(); // 5"
    ],
    "tables": []
  },
  {
    "id": 355,
    "question": "What are asynchronous thunks",
    "description": "The asynchronous thunks are useful to make network requests. Let's see an example of network requests,\n\n      \n\n      The `getData` function won't be called immediately but it will be invoked only when the data is available from API endpoint. The setTimeout function is also used to make our code asynchronous. The best real time example is redux state management library which uses the asynchronous thunks to delay the actions to dispatch.",
    "codeExamples": [
      "function fetchData(fn) {\n        fetch(\"https://jsonplaceholder.typicode.com/todos/1\")\n          .then((response) => response.json())\n          .then((json) => fn(json));\n      }\n\n      const asyncThunk = function () {\n        return fetchData(function getData(data) {\n          console.log(data);\n        });\n      };\n\n      asyncThunk();"
    ],
    "tables": []
  },
  {
    "id": 356,
    "question": "What is the output of below function calls",
    "description": "Code snippet:\n\n      \n\n      \n\n      Output:\n\n      The output is 40 and NaN. Remember that diameter is a regular function, whereas the value of perimeter is an arrow function. The `this` keyword of a regular function(i.e, diameter) refers to the surrounding scope which is a class(i.e, Shape object). Whereas this keyword of perimeter function refers to the surrounding scope which is a window object. Since there is no radius property on window objects it returns an undefined value and the multiple of number value returns NaN value.",
    "codeExamples": [
      "const circle = {\n        radius: 20,\n        diameter() {\n          return this.radius * 2;\n        },\n        perimeter: () => 2 * Math.PI * this.radius,\n      };",
      "console.log(circle.diameter());\n      console.log(circle.perimeter());"
    ],
    "tables": []
  },
  {
    "id": 357,
    "question": "How to remove all line breaks from a string",
    "description": "The easiest approach is using regular expressions to detect and replace newlines in the string. In this case, we use replace function along with string to replace with, which in our case is an empty string.\n\n      \n\n      In the above expression, g and m are for global and multiline flags.",
    "codeExamples": [
      "function remove_linebreaks( var message ) {\n          return message.replace( /[\\r\\n]+/gm, \"\" );\n      }"
    ],
    "tables": []
  },
  {
    "id": 358,
    "question": "What is the difference between reflow and repaint",
    "description": "A _repaint_ occurs when changes are made which affect the visibility of an element, but not its layout. Examples of this include outline, visibility, or background color. A _reflow_ involves changes that affect the layout of a portion of the page (or the whole page). Resizing the browser window, changing the font, content changing (such as user typing text), using JavaScript methods involving computed styles, adding or removing elements from the DOM, and changing an element's classes are a few of the things that can trigger reflow. Reflow of an element causes the subsequent reflow of all child and ancestor elements as well as any elements following it in the DOM.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 359,
    "question": "What happens with negating an array",
    "description": "Negating an array with `!` character will coerce the array into a boolean. Since Arrays are considered to be truthy So negating it will return `false`.",
    "codeExamples": [
      "console.log(![]); // false"
    ],
    "tables": []
  },
  {
    "id": 360,
    "question": "What happens if we add two arrays",
    "description": "If you add two arrays together, it will convert them both to strings and concatenate them. For example, the result of adding arrays would be as below,",
    "codeExamples": [
      "console.log([\"a\"] + [\"b\"]); // \"ab\"\n      console.log([] + []); // \"\"\n      console.log(![] + []); // \"false\", because ![] returns false."
    ],
    "tables": []
  },
  {
    "id": 361,
    "question": "What is the output of prepend additive operator on falsy values",
    "description": "If you prepend the additive(+) operator on falsy values(null, undefined, NaN, false, \"\"), the falsy value converts to a number value zero. Let's display them on browser console as below,",
    "codeExamples": [
      "console.log(+null); // 0\n      console.log(+undefined); // NaN\n      console.log(+false); // 0\n      console.log(+NaN); // NaN\n      console.log(+\"\"); // 0"
    ],
    "tables": []
  },
  {
    "id": 362,
    "question": "How do you create self string using special characters",
    "description": "The self string can be formed with the combination of `[]()!+` characters. You need to remember the below conventions to achieve this pattern.\n\n      1. Since Arrays are truthful values, negating the arrays will produce false: ![] === false\n      2. As per JavaScript coercion rules, the addition of arrays together will toString them: [] + [] === \"\"\n      3. Prepend an array with + operator will convert an array to false, the negation will make it true and finally converting the result will produce value '1': +(!(+[])) === 1\n\n      By applying the above rules, we can derive below conditions\n\n      \n\n      Now the character pattern would be created as below,",
    "codeExamples": [
      "(![] + [] === \"false\" + !+[]) === 1;",
      "s               e               l               f\n       ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^\n\n       (![] + [])[3] + (![] + [])[4] + (![] + [])[2] + (![] + [])[0]\n       ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^   ^^^^^^^^^^^^^\n      (![] + [])[+!+[]+!+[]+!+[]] +\n      (![] + [])[+!+[]+!+[]+!+[]+!+[]] +\n      (![] + [])[+!+[]+!+[]] +\n      (![] + [])[+[]]\n      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n      (![]+[])[+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+!+[]+!+[]]+(![]+[])[+[]]"
    ],
    "tables": []
  },
  {
    "id": 363,
    "question": "How do you remove falsy values from an array",
    "description": "You can apply the filter method on the array by passing Boolean as a parameter. This way it removes all falsy values(0, undefined, null, false and \"\") from the array.",
    "codeExamples": [
      "const myArray = [false, null, 1, 5, undefined];\n      myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);"
    ],
    "tables": []
  },
  {
    "id": 364,
    "question": "How do you get unique values of an array",
    "description": "You can get unique values of an array with the combination of `Set` and rest expression/spread(...) syntax.",
    "codeExamples": [
      "console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]"
    ],
    "tables": []
  },
  {
    "id": 365,
    "question": "What is destructuring aliases",
    "description": "Sometimes you would like to have a destructured variable with a different name than the property name. In that case, you'll use a `: newName` to specify a name for the variable. This process is called destructuring aliases.",
    "codeExamples": [
      "const obj = { x: 1 };\n      // Grabs obj.x as as { otherName }\n      const { x: otherName } = obj;"
    ],
    "tables": []
  },
  {
    "id": 366,
    "question": "How do you map the array values without using map method",
    "description": "You can map the array values without using the `map` method by just using the `from` method of Array. Let's map city names from Countries array,",
    "codeExamples": [
      "const countries = [\n        { name: \"India\", capital: \"Delhi\" },\n        { name: \"US\", capital: \"Washington\" },\n        { name: \"Russia\", capital: \"Moscow\" },\n        { name: \"Singapore\", capital: \"Singapore\" },\n        { name: \"China\", capital: \"Beijing\" },\n        { name: \"France\", capital: \"Paris\" },\n      ];\n\n      const cityNames = Array.from(countries, ({ capital }) => capital);\n      console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']"
    ],
    "tables": []
  },
  {
    "id": 367,
    "question": "How do you empty an array",
    "description": "You can empty an array quickly by setting the array length to zero.",
    "codeExamples": [
      "let cities = [\"Singapore\", \"Delhi\", \"London\"];\n      cities.length = 0; // cities becomes []"
    ],
    "tables": []
  },
  {
    "id": 368,
    "question": "How do you round numbers to certain decimals",
    "description": "You can round numbers to a certain number of decimals using `toFixed` method from native javascript.",
    "codeExamples": [
      "let pie = 3.141592653;\n      pie = pie.toFixed(3); // 3.142"
    ],
    "tables": []
  },
  {
    "id": 369,
    "question": "What is the easiest way to convert an array to an object",
    "description": "You can convert an array to an object with the same data using spread(...) operator.",
    "codeExamples": [
      "var fruits = [\"banana\", \"apple\", \"orange\", \"watermelon\"];\n      var fruitsObject = { ...fruits };\n      console.log(fruitsObject); // {0: \"banana\", 1: \"apple\", 2: \"orange\", 3: \"watermelon\"}"
    ],
    "tables": []
  },
  {
    "id": 370,
    "question": "How do you create an array with some data",
    "description": "You can create an array with some data or an array with the same values using `fill` method.",
    "codeExamples": [
      "var newArray = new Array(5).fill(\"0\");\n      console.log(newArray); // [\"0\", \"0\", \"0\", \"0\", \"0\"]"
    ],
    "tables": []
  },
  {
    "id": 371,
    "question": "What are the placeholders from console object",
    "description": "Below are the list of placeholders available from console object,\n\n      1. %o — It takes an object,\n      2. %s — It takes a string,\n      3. %d — It is used for a decimal or integer\n         These placeholders can be represented in the console.log as below",
    "codeExamples": [
      "const user = { name: \"John\", id: 1, city: \"Delhi\" };\n      console.log(\n        \"Hello %s, your details %o are available in the object form\",\n        \"John\",\n        user\n      ); // Hello John, your details {name: \"John\", id: 1, city: \"Delhi\"} are available in object"
    ],
    "tables": []
  },
  {
    "id": 372,
    "question": "Is it possible to add CSS to console messages",
    "description": "Yes, you can apply CSS styles to console messages similar to html text on the web page.\n\n      \n\n      The text will be displayed as below,\n      ![Screenshot](images/console-css.png)\n\n      Note: All CSS styles can be applied to console messages.",
    "codeExamples": [
      "console.log(\n        \"%c The text has blue color, with large font and red background\",\n        \"color: blue; font-size: x-large; background: red\"\n      );"
    ],
    "tables": []
  },
  {
    "id": 373,
    "question": "What is the purpose of dir method of console object",
    "description": "The `console.dir()` is used to display an interactive list of the properties of the specified JavaScript object as JSON.\n\n      \n\n      The user object displayed in JSON representation\n      ![Screenshot](images/console-dir.png)",
    "codeExamples": [
      "const user = { name: \"John\", id: 1, city: \"Delhi\" };\n      console.dir(user);"
    ],
    "tables": []
  },
  {
    "id": 374,
    "question": "Is it possible to debug HTML elements in console",
    "description": "Yes, it is possible to get and debug HTML elements in the console just like inspecting elements.\n\n      \n\n      It prints the HTML element in the console,\n\n      ![Screenshot](images/console-html.png)",
    "codeExamples": [
      "const element = document.getElementsByTagName(\"body\")[0];\n      console.log(element);"
    ],
    "tables": []
  },
  {
    "id": 375,
    "question": "How do you display data in a tabular format using console object",
    "description": "The `console.table()` is used to display data in the console in a tabular format to visualize complex arrays or objects.\n\n      ```js\n      const users = [\n        { name: \"John\", id: 1, city: \"Delhi\" },\n        { name: \"Max\", id: 2, city: \"London\" },\n        { name: \"Rod\", id: 3, city: \"Paris\" },\n      ];\n      console.table(users);\n      ```\n\n      The data visualized in a table format,\n\n      ![Screenshot](images/console-table.png)\n      Not: Remember that `console.table()` is not supported in IE.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 376,
    "question": "How do you verify that an argument is a Number or not",
    "description": "The combination of IsNaN and isFinite methods are used to confirm whether an argument is a number or not.",
    "codeExamples": [
      "function isNumber(n) {\n        return !isNaN(parseFloat(n)) && isFinite(n);\n      }"
    ],
    "tables": []
  },
  {
    "id": 377,
    "question": "How do you create copy to clipboard button",
    "description": "You need to select the content(using .select() method) of the input element and execute the copy command with execCommand (i.e, execCommand('copy')). You can also execute other system commands like cut and paste.",
    "codeExamples": [
      "document.querySelector(\"#copy-button\").onclick = function () {\n        // Select the content\n        document.querySelector(\"#copy-input\").select();\n        // Copy to the clipboard\n        document.execCommand(\"copy\");\n      };"
    ],
    "tables": []
  },
  {
    "id": 378,
    "question": "What is the shortcut to get timestamp",
    "description": "You can use `new Date().getTime()` to get the current timestamp. There is an alternative shortcut to get the value.",
    "codeExamples": [
      "console.log(+new Date());\n      console.log(Date.now());"
    ],
    "tables": []
  },
  {
    "id": 379,
    "question": "How do you flattening multi dimensional arrays",
    "description": "Flattening bi-dimensional arrays is trivial with Spread operator.\n\n      \n\n      But you can make it work with multi-dimensional arrays by recursive calls,\n\n      \n\n      Also you can use the `flat` method of Array.",
    "codeExamples": [
      "const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];\n      const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]",
      "function flattenMultiArray(arr) {\n        const flattened = [].concat(...arr);\n        return flattened.some((item) => Array.isArray(item))\n          ? flattenMultiArray(flattened)\n          : flattened;\n      }\n      const multiDimensionalArr = [\n        11,\n        [22, 33],\n        [44, [55, 66, [77, [88]], 99]],\n      ];\n      const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]",
      "const arr = [1, [2, 3], 4, 5, [6, 7]];\n      const fllattenArr = arr.flat(); // [1, 2, 3, 4, 5, 6, 7]\n\n      // And for multiDimensional arrays\n      const multiDimensionalArr = [\n        11,\n        [22, 33],\n        [44, [55, 66, [77, [88]], 99]],\n      ];\n      const oneStepFlat = multiDimensionalArr.flat(1); // [11, 22, 33, 44, [55, 66, [77, [88]], 99]]\n      const towStep = multiDimensionalArr.flat(2); // [11, 22, 33, 44, 55, 66, [77, [88]], 99]\n      const fullyFlatArray = multiDimensionalArr.flat(Infinity); // [11, 22, 33, 44, 55, 66, 77, 88, 99]"
    ],
    "tables": []
  },
  {
    "id": 380,
    "question": "What is the easiest multi condition checking",
    "description": "You can use `indexOf` to compare input with multiple values instead of checking each value as one condition.",
    "codeExamples": [
      "// Verbose approach\n      if (\n        input === \"first\" ||\n        input === 1 ||\n        input === \"second\" ||\n        input === 2\n      ) {\n        someFunction();\n      }\n      // Shortcut\n      if ([\"first\", 1, \"second\", 2].indexOf(input) !== -1) {\n        someFunction();\n      }"
    ],
    "tables": []
  },
  {
    "id": 381,
    "question": "How do you capture browser back button",
    "description": "The `beforeunload` event is triggered when the window, the document and its resources are about to be unloaded. This event is helpful to warn users about losing the current data and detect back button event.\n\n      \n\n      You can also use `popstate` event to detect the browser back button.\n      Note: The history entry has been activated using `history.pushState` method.\n\n      \n\n\n    In the preceeding code, When the box element clicked, its background color appears in blue color and changed to while color upon clicking the browser back button using `popstate` event handler. The `state` property of `popstate` contains the copy of history entry's state object.",
    "codeExamples": [
      "window.addEventListener(\"beforeunload\", () => {\n        console.log(\"Clicked browser back button\");\n      });",
      "window.addEventListener(\"popstate\", () => {\n        console.log(\"Clicked browser back button\");\n        box.style.backgroundColor = \"white\";\n      });\n\n      const box = document.getElementById(\"div\");\n\n      box.addEventListener(\"click\", () => {\n        box.style.backgroundColor = \"blue\";\n        window.history.pushState({}, null, null);\n      });"
    ],
    "tables": []
  },
  {
    "id": 382,
    "question": "How do you disable right click in the web page",
    "description": "The right click on the page can be disabled by returning false from the `oncontextmenu` attribute on the body element.\n\n     ```html\n     <body oncontextmenu=\"return false;\"></body>\n     ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 383,
    "question": "What are wrapper objects",
    "description": "Primitive Values like string,number and boolean don't have properties and methods but they are temporarily converted or coerced to an object(Wrapper object) when you try to perform actions on them. For example, if you apply toUpperCase() method on a primitive string value, it does not throw an error but returns uppercase of the string.\n\n     \n\n     i.e, Every primitive except null and undefined have Wrapper Objects and the list of wrapper objects are String,Number,Boolean,Symbol and BigInt.",
    "codeExamples": [
      "let name = \"john\";\n\n     console.log(name.toUpperCase()); // Behind the scenes treated as console.log(new String(name).toUpperCase());"
    ],
    "tables": []
  },
  {
    "id": 384,
    "question": "What is AJAX",
    "description": "AJAX stands for Asynchronous JavaScript and XML and it is a group of related technologies(HTML, CSS, JavaScript, XMLHttpRequest API etc) used to display data asynchronously. i.e. We can send data to the server and get data from the server without reloading the web page.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 385,
    "question": "What are the different ways to deal with Asynchronous Code",
    "description": "Below are the list of different ways to deal with Asynchronous code.\n\n     1. Callbacks\n     2. Promises\n     3. Async/await\n     4. Third-party libraries such as async.js,bluebird etc",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 386,
    "question": "How to cancel a fetch request",
    "description": "Until a few days back, One shortcoming of native promises is no direct way to cancel a fetch request. But the new `AbortController` from js specification allows you to use a signal to abort one or multiple fetch calls.\n     The basic flow of cancelling a fetch request would be as below,\n\n     1. Create an `AbortController` instance\n     2. Get the signal property of an instance and pass the signal as a fetch option for signal\n     3. Call the AbortController's abort property to cancel all fetches that use that signal\n        For example, passing the same signal to multiple fetch calls will cancel all requests with that signal,",
    "codeExamples": [
      "const controller = new AbortController();\n     const { signal } = controller;\n\n     fetch(\"http://localhost:8000\", { signal })\n       .then((response) => {\n         console.log(`Request 1 is complete!`);\n       })\n       .catch((e) => {\n         if (e.name === \"AbortError\") {\n           // We know it's been canceled!\n         }\n       });\n\n     fetch(\"http://localhost:8000\", { signal })\n       .then((response) => {\n         console.log(`Request 2 is complete!`);\n       })\n       .catch((e) => {\n         if (e.name === \"AbortError\") {\n           // We know it's been canceled!\n         }\n       });\n\n     // Wait 2 seconds to abort both requests\n     setTimeout(() => controller.abort(), 2000);"
    ],
    "tables": []
  },
  {
    "id": 387,
    "question": "What is web speech API",
    "description": "Web speech API is used to enable modern browsers recognize and synthesize speech(i.e, voice data into web apps). This API was introduced by W3C Community in the year 2012. It has two main parts:\n\n     1. SpeechRecognition (Asynchronous Speech Recognition or Speech-to-Text): It provides the ability to recognize voice context from an audio input and respond accordingly. This is accessed by the `SpeechRecognition` interface.\n        The example below shows how to use this API to get text from speech,\n\n     \n\n     In this API, browser is going to ask you for permission to use your microphone\n\n     2. SpeechSynthesis (Text-to-Speech): It provides the ability to recognize voice context from an audio input and respond. This is accessed by the `SpeechSynthesis` interface.\n        For example, the below code is used to get voice/speech from text,\n\n     \n\n     The above examples can be tested on chrome(33+) browser's developer console.\n     Note: This API is still a working draft and only available in Chrome and Firefox browsers(ofcourse Chrome only implemented the specification)",
    "codeExamples": [
      "window.SpeechRecognition =\n       window.webkitSpeechRecognition || window.SpeechRecognition; // webkitSpeechRecognition for Chrome and SpeechRecognition for FF\n     const recognition = new window.SpeechRecognition();\n     recognition.onresult = (event) => {\n       // SpeechRecognitionEvent type\n       const speechToText = event.results[0][0].transcript;\n       console.log(speechToText);\n     };\n     recognition.start();",
      "if (\"speechSynthesis\" in window) {\n       var speech = new SpeechSynthesisUtterance(\"Hello World!\");\n       speech.lang = \"en-US\";\n       window.speechSynthesis.speak(speech);\n     }"
    ],
    "tables": []
  },
  {
    "id": 388,
    "question": "What is minimum timeout throttling",
    "description": "Both browser and NodeJS javascript environments throttles with a minimum delay that is greater than 0ms. That means even though setting a delay of 0ms will not happen instantaneously.\n     Browsers: They have a minimum delay of 4ms. This throttle occurs when successive calls are triggered due to callback nesting(certain depth) or after a certain number of successive intervals.\n     Note: The older browsers have a minimum delay of 10ms.\n     Nodejs: They have a minimum delay of 1ms. This throttle happens when the delay is larger than 2147483647 or less than 1.\n     The best example to explain this timeout throttling behavior is the order of below code snippet.\n\n     \n\n     and the output would be in\n\n     ```cmd\n     Script loaded\n     My script is initialized\n     ```\n\n     If you don't use `setTimeout`, the order of logs will be sequential.\n\n     \n\n     and the output is,\n\n     ```cmd\n     My script is initialized\n     Script loaded\n     ```",
    "codeExamples": [
      "function runMeFirst() {\n       console.log(\"My script is initialized\");\n     }\n     setTimeout(runMeFirst, 0);\n     console.log(\"Script loaded\");",
      "function runMeFirst() {\n       console.log(\"My script is initialized\");\n     }\n     runMeFirst();\n     console.log(\"Script loaded\");"
    ],
    "tables": []
  },
  {
    "id": 389,
    "question": "How do you implement zero timeout in modern browsers",
    "description": "You can't use setTimeout(fn, 0) to execute the code immediately due to minimum delay of greater than 0ms. But you can use window.postMessage() to achieve this behavior.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 390,
    "question": "What are tasks in event loop",
    "description": "A task is any javascript code/program which is scheduled to be run by the standard mechanisms such as initially starting to run a program, run an event callback, or an interval or timeout being fired. All these tasks are scheduled on a task queue.\n     Below are the list of use cases to add tasks to the task queue,\n\n     1. When a new javascript program is executed directly from console or running by the `<script>` element, the task will be added to the task queue.\n     2. When an event fires, the event callback added to task queue\n     3. When a setTimeout or setInterval is reached, the corresponding callback added to task queue",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 391,
    "question": "What is microtask",
    "description": "A microtask is a type of JavaScript callback that is scheduled to run immediately after the currently executing script and before the next event loop tick. Microtasks are executed after the current task completes and before any new tasks (macrotasks) are run. This ensures a fast and predictable update cycle.\n\n     Common sources of microtasks stored in the microtask queue include:\n\n     1. Promises:\n        When a Promise is resolved or rejected, its `.then()`, `.catch()`, and `.finally()` callbacks are placed in the microtask queue.\n\n        \n\n      2. queueMicrotask():\n     \n         A method that explicitly schedules a function to be run in the microtask queue.\n\n         \n\n      3. MutationObserver callbacks:\n\n         Observers changes in the DOM and triggers a callback as a microtask.\n\n         \n\n      4. await:  \n         Await internally uses Promises, so the code after `await` is scheduled as a microtask.\n\n         \n     Note: All of these microtasks are processed in the same turn of the event loop.",
    "codeExamples": [
      "Promise.resolve().then(() => {\n         console.log('Microtask from a Promise');\n        });",
      "queueMicrotask(() => {\n             console.log('Microtask from  queueMicrotask');\n           });",
      "const observer = new MutationObserver(() => {\n              console.log('Microtask from MutationObserver');\n            })\n            observer.observe(document.body, {childList: true});",
      "async function asyncFunction() {\n            await null;\n            console.log('Microtask from Await'); // Schedule this code as microtask\n          }"
    ],
    "tables": []
  },
  {
    "id": 392,
    "question": "What are different event loops",
    "description": "In JavaScript, there are multiple event loops that can be used depending on the context of your application. The most common event loops are:\n\n     1. The Browser Event Loop\n     2. The Node.js Event Loop\n\n- Browser Event Loop: The Browser Event Loop is used in client-side JavaScript applications and is responsible for handling events that occur within the browser environment, such as user interactions (clicks, keypresses, etc.), HTTP requests, and other asynchronous actions.\n\n- The Node.js Event Loop is used in server-side JavaScript applications and is responsible for handling events that occur within the Node.js runtime environment, such as file I/O, network I/O, and other asynchronous actions.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 393,
    "question": "What is the purpose of queueMicrotask",
    "description": "The `queueMicrotask` function is used to schedule a microtask, which is a function that will be executed asynchronously in the microtask queue. The purpose of `queueMicrotask` is to ensure that a function is executed after the current task has finished, but before the browser performs any rendering or handles user events.\n\n     Example:\n\n     \n\n     By using queueMicrotask, you can ensure that certain tasks or callbacks are executed at the earliest opportunity during the JavaScript event loop, making it useful for performing work that needs to be done asynchronously but with higher priority than regular `setTimeout` or `setInterval` callbacks.",
    "codeExamples": [
      "console.log(\"Start\"); //1\n\n     queueMicrotask(() => {\n       console.log(\"Inside microtask\"); // 3\n     });\n\n     console.log(\"End\"); //2"
    ],
    "tables": []
  },
  {
    "id": 394,
    "question": "How do you use javascript libraries in typescript file",
    "description": "It is known that not all JavaScript libraries or frameworks have TypeScript declaration files. But if you still want to use libraries or frameworks in your TypeScript files without getting compilation errors, the only solution is `declare` keyword along with a variable declaration. For example, let's imagine you have a library called `customLibrary` that doesn’t have a TypeScript declaration and have a namespace called `customLibrary` in the global namespace. You can use this library in typescript code as below,\n\n     \n\n     In the runtime, typescript will provide the type to the `customLibrary` variable as `any` type. The another alternative without using declare keyword is below",
    "codeExamples": [
      "declare var customLibrary;",
      "var customLibrary: any;"
    ],
    "tables": []
  },

  {
    "id": 396,
    "question": "What is heap",
    "description": "Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime.\n     Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.\n\n     ![Screenshot](images/heap.png)",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 397,
    "question": "What is an event table",
    "description": "Event Table is a data structure that stores and keeps track of all the events which will be executed asynchronously like after some time interval or after the resolution of some API requests. i.e Whenever you call a setTimeout function or invoke async operation, it is added to the Event Table.\n     It doesn't not execute functions on it’s own. The main purpose of the event table is to keep track of events and send them to the Event Queue as shown in the below diagram.\n\n     ![Screenshot](images/event-table.png)",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 398,
    "question": "What is a microTask queue",
    "description": "Microtask Queue is the new queue where all the tasks initiated by promise objects get processed before the callback queue.\n     The microtasks queue are processed before the next rendering and painting jobs. But if these microtasks are running for a long time then it leads to visual degradation.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 399,
    "question": "What is the difference between shim and polyfill",
    "description": "A shim is a library that brings a new API to an older environment, using only the means of that environment. It isn't necessarily restricted to a web application. For example, es5-shim.js is used to emulate ES5 features on older browsers (mainly pre IE9).\n     Whereas polyfill is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively.\n     In a simple sentence, a polyfill is a shim for a browser API.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 400,
    "question": "How do you detect primitive or non primitive value type",
    "description": "In JavaScript, primitive types include boolean, string, number, BigInt, null, Symbol and undefined. Whereas non-primitive types include the Objects. But you can easily identify them with the below function,\n\n     \n\n     If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. But If the value is a non-primitive data type (an object), the Object constructor will give the same object.",
    "codeExamples": [
      "var myPrimitive = 30;\n     var myNonPrimitive = {};\n     function isPrimitive(val) {\n       return Object(val) !== val;\n     }\n\n     isPrimitive(myPrimitive);\n     isPrimitive(myNonPrimitive);"
    ],
    "tables": []
  },
  {
    "id": 401,
    "question": "What is babel",
    "description": "Babel is a JavaScript transpiler to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Some of the main features are listed below,\n\n     1. Transform syntax\n     2. Polyfill features that are missing in your target environment (using @babel/polyfill)\n     3. Source code transformations (or codemods)",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 402,
    "question": "Is Node.js completely single threaded",
    "description": "Node is a single thread, but some of the functions included in the Node.js standard library(e.g, fs module functions) are not single threaded. i.e, Their logic runs outside of the Node.js single thread to improve the speed and performance of a program.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 403,
    "question": "What are the common use cases of observables",
    "description": "Some of the most common use cases of observables are web sockets with push notifications, user input changes, repeating intervals, etc",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 404,
    "question": "What is RxJS",
    "description": "RxJS (Reactive Extensions for JavaScript) is a library for implementing reactive programming using observables that makes it easier to compose asynchronous or callback-based code. It also provides utility functions for creating and working with observables.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 405,
    "question": "What is the difference between Function constructor and function declaration",
    "description": "The functions which are created with `Function constructor` do not create closures to their creation contexts but they are always created in the global scope. i.e, the function can access its own local variables and global scope variables only. Whereas function declarations can access outer function variables(closures) too.\n\n     Let's see this difference with an example,\n\n     Function Constructor:\n\n     \n\n     Function declaration:",
    "codeExamples": [
      "var a = 100;\n     function createFunction() {\n       var a = 200;\n       return new Function(\"return a;\");\n     }\n     console.log(createFunction()()); // 100",
      "var a = 100;\n     function createFunction() {\n       var a = 200;\n       return function func() {\n         return a;\n       };\n     }\n     console.log(createFunction()()); // 200"
    ],
    "tables": []
  },
  {
    "id": 406,
    "question": "What is a Short circuit condition",
    "description": "Short circuit conditions are meant for condensed way of writing simple if statements. Let's demonstrate the scenario using an example. If you would like to login to a portal with an authentication condition, the expression would be as below,\n\n     \n\n     Since the javascript logical operators evaluated from left to right, the above expression can be simplified using && logical operator",
    "codeExamples": [
      "if (authenticate) {\n       loginToPorta();\n     }",
      "authenticate && loginToPorta();"
    ],
    "tables": []
  },
  {
    "id": 407,
    "question": "What is the easiest way to resize an array",
    "description": "The length property of an array is useful to resize or empty an array quickly. Let's apply length property on number array to resize the number of elements from 5 to 2,\n\n     \n\n     and the array can be emptied too",
    "codeExamples": [
      "var array = [1, 2, 3, 4, 5];\n     console.log(array.length); // 5\n\n     array.length = 2;\n     console.log(array.length); // 2\n     console.log(array); // [1,2]",
      "var array = [1, 2, 3, 4, 5];\n     array.length = 0;\n     console.log(array.length); // 0\n     console.log(array); // []"
    ],
    "tables": []
  },
  {
    "id": 408,
    "question": "What is an observable",
    "description": "An Observable is basically a function that can return a stream of values either synchronously or asynchronously to an observer over time. The consumer can get the value by calling `subscribe()` method.\n     Let's look at a simple example of an Observable\n\n     \n\n     ![Screenshot](images/observables.png)\n\n     Note: Observables are not part of the JavaScript language yet but they are being proposed to be added to the language",
    "codeExamples": [
      "import { Observable } from \"rxjs\";\n\n     const observable = new Observable((observer) => {\n       setTimeout(() => {\n         observer.next(\"Message from a Observable!\");\n       }, 3000);\n     });\n\n     observable.subscribe((value) => console.log(value));"
    ],
    "tables": []
  },
  {
    "id": 409,
    "question": "What is the difference between function and class declarations",
    "description": "The main difference between function declarations and class declarations is `hoisting`. The function declarations are hoisted but not class declarations.\n\n     Classes:\n\n     \n\n     Constructor Function:",
    "codeExamples": [
      "const user = new User(); // ReferenceError\n\n     class User {}",
      "const user = new User(); // No error\n\n     function User() {}"
    ],
    "tables": []
  },
  {
    "id": 410,
    "question": "What is an async function",
    "description": "An async function is a function declared with the `async` keyword which enables asynchronous, promise-based behavior to be written in a cleaner style by avoiding promise chains. These functions can contain zero or more `await` expressions.\n\n     Let's take a below async function example,\n\n     \n\n     It is basically syntax sugar over ES2015 promises and generators.",
    "codeExamples": [
      "async function logger() {\n       let data = await fetch(\"http://someapi.com/users\"); // pause until fetch returns\n       console.log(data);\n     }\n     logger();"
    ],
    "tables": []
  },
  {
    "id": 411,
    "question": "How do you prevent promises swallowing errors",
    "description": "While using asynchronous code, JavaScript’s ES6 promises can make your life a lot easier without having callback pyramids and error handling on every second line. But Promises have some pitfalls and the biggest one is swallowing errors by default.\n\n     Let's say you expect to print an error to the console for all the below cases,\n\n     \n\n     But there are many modern JavaScript environments that won't print any errors. You can fix this problem in different ways,\n\n     1. Add catch block at the end of each chain: You can add catch block to the end of each of your promise chains\n\n        \n\n        But it is quite difficult to type for each promise chain and verbose too.\n\n     2. Add done method: You can replace first solution's then and catch blocks with done method\n\n        \n\n        Let's say you want to fetch data using HTTP and later perform processing on the resulting data asynchronously. You can write `done` block as below,\n\n        \n\n        In future, if the processing library API changed to synchronous then you can remove `done` block as below,\n\n        \n\n        and then you forgot to add `done` block to `then` block leads to silent errors.\n\n     3. Extend ES6 Promises by Bluebird:\n        Bluebird extends the ES6 Promises API to avoid the issue in the second solution. This library has a “default” onRejection handler which will print all errors from rejected Promises to stderr. After installation, you can process unhandled rejections\n\n        \n\n        and discard a rejection, just handle it with an empty catch",
    "codeExamples": [
      "Promise.resolve(\"promised value\").then(function () {\n       throw new Error(\"error\");\n     });\n\n     Promise.reject(\"error value\").catch(function () {\n       throw new Error(\"error\");\n     });\n\n     new Promise(function (resolve, reject) {\n       throw new Error(\"error\");\n     });",
      "Promise.resolve(\"promised value\")\n          .then(function () {\n            throw new Error(\"error\");\n          })\n          .catch(function (error) {\n            console.error(error.stack);\n          });",
      "Promise.resolve(\"promised value\").done(function () {\n          throw new Error(\"error\");\n        });",
      "getDataFromHttp()\n          .then(function (result) {\n            return processDataAsync(result);\n          })\n          .done(function (processed) {\n            displayData(processed);\n          });",
      "getDataFromHttp().then(function (result) {\n          return displayData(processDataAsync(result));\n        });",
      "Promise.onPossiblyUnhandledRejection(function (error) {\n          throw error;\n        });",
      "Promise.reject(\"error value\").catch(function () {});"
    ],
    "tables": []
  },
  {
    "id": 412,
    "question": "What is deno",
    "description": "Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 JavaScript engine and the Rust programming language. It solves the inherent problems of Node.Js and has been officially released in May 2018. Unlike Node.JS, by default Deno executes the code in a sandbox, which means that runtime has no access to below areas:\n\n     1. The file system\n     2. The network\n     3. Execution of other scripts\n     4. The environment variables",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 413,
    "question": "How do you make an object iterable in javascript",
    "description": "By default, plain objects are not iterable. But you can make the object iterable by defining a `Symbol.iterator` property on it.\n\n     Let's demonstrate this with an example,\n\n     \n\n     The above process can be simplified using a generator function,",
    "codeExamples": [
      "const collection = {\n       one: 1,\n       two: 2,\n       three: 3,\n       [Symbol.iterator]() {\n         const values = Object.keys(this);\n         let i = 0;\n         return {\n           next: () => {\n             return {\n               value: this[values[i++]],\n               done: i > values.length,\n             };\n           },\n         };\n       },\n     };\n\n     const iterator = collection[Symbol.iterator]();\n\n     console.log(iterator.next()); // → {value: 1, done: false}\n     console.log(iterator.next()); // → {value: 2, done: false}\n     console.log(iterator.next()); // → {value: 3, done: false}\n     console.log(iterator.next()); // → {value: undefined, done: true}",
      "const collection = {\n       one: 1,\n       two: 2,\n       three: 3,\n       [Symbol.iterator]: function* () {\n         for (let key in this) {\n           yield this[key];\n         }\n       },\n     };\n     const iterator = collection[Symbol.iterator]();\n     console.log(iterator.next()); // {value: 1, done: false}\n     console.log(iterator.next()); // {value: 2, done: false}\n     console.log(iterator.next()); // {value: 3, done: false}\n     console.log(iterator.next()); // {value: undefined, done: true}"
    ],
    "tables": []
  },
  {
    "id": 414,
    "question": "What is a Proper Tail Call",
    "description": "First, we should know about tail call before talking about \"Proper Tail Call\". A tail call is a subroutine or function call performed as the final action of a calling function. Whereas Proper tail call(PTC) is a technique where the program or code will not create additional stack frames for a recursion when the function call is a tail call.\n\n     For example, the below classic or head recursion of factorial function relies on stack for each step. Each step need to be processed upto `n * factorial(n - 1)`\n\n     \n\n     But if you use Tail recursion functions, they keep passing all the necessary data it needs down the recursion without relying on the stack.\n\n     \n\n     The above pattern returns the same output as the first one. But the accumulator keeps track of total as an argument without using stack memory on recursive calls.",
    "codeExamples": [
      "function factorial(n) {\n       if (n === 0) {\n         return 1;\n       }\n       return n * factorial(n - 1);\n     }\n     console.log(factorial(5)); //120",
      "function factorial(n, acc = 1) {\n       if (n === 0) {\n         return acc;\n       }\n       return factorial(n - 1, n * acc);\n     }\n     console.log(factorial(5)); //120"
    ],
    "tables": []
  },
  {
    "id": 415,
    "question": "How do you check an object is a promise or not",
    "description": "If you don't know if a value is a promise or not, wrapping the value as `Promise.resolve(value)` which returns a promise\n\n     \n\n     Another way is to check for `.then()` handler type",
    "codeExamples": [
      "function isPromise(object) {\n       if (Promise && Promise.resolve) {\n         return Promise.resolve(object) == object;\n       } else {\n         throw \"Promise not supported in your environment\";\n       }\n     }\n\n     var i = 1;\n     var promise = new Promise(function (resolve, reject) {\n       resolve();\n     });\n\n     console.log(isPromise(i)); // false\n     console.log(isPromise(promise)); // true",
      "function isPromise(value) {\n       return Boolean(value && typeof value.then === \"function\");\n     }\n     var i = 1;\n     var promise = new Promise(function (resolve, reject) {\n       resolve();\n     });\n\n     console.log(isPromise(i)); // false\n     console.log(isPromise(promise)); // true"
    ],
    "tables": []
  },
  {
    "id": 416,
    "question": "How to detect if a function is called as constructor",
    "description": "You can use `new.target` pseudo-property to detect whether a function was called as a constructor(using the new operator) or as a regular function call.\n\n     1. If a constructor or function invoked using the new operator, new.target returns a reference to the constructor or function.\n     2. For function calls, new.target is undefined.",
    "codeExamples": [
      "function Myfunc() {\n       if (new.target) {\n         console.log(\"called with new\");\n       } else {\n         console.log(\"not called with new\");\n       }\n     }\n\n     new Myfunc(); // called with new\n     Myfunc(); // not called with new\n     Myfunc.call({}); // not called with new"
    ],
    "tables": []
  },
  {
    "id": 417,
    "question": "What are the differences between arguments object and rest parameter",
    "description": "There are three main differences between arguments object and rest parameters\n\n     1. The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.\n     2. The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.\n     3. The rest parameters are only the ones that haven’t been given a separate name, while the arguments object contains all arguments passed to the function",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 418,
    "question": "What are the differences between spread operator and rest parameter",
    "description": "Rest parameter collects all remaining elements into an array. Whereas Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. i.e, Rest parameter is opposite to the spread operator.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 419,
    "question": "What are the different kinds of generators",
    "description": "There are five kinds of generators,\n\n     1. Generator function declaration:\n\n        \n\n     2. Generator function expressions:\n\n        \n\n     3. Generator method definitions in object literals:\n\n        \n\n     4. Generator method definitions in class:\n\n        \n\n     5. Generator as a computed property:",
    "codeExamples": [
      "function* myGenFunc() {\n          yield 1;\n          yield 2;\n          yield 3;\n        }\n        const genObj = myGenFunc();",
      "const myGenFunc = function* () {\n          yield 1;\n          yield 2;\n          yield 3;\n        };\n        const genObj = myGenFunc();",
      "const myObj = {\n          *myGeneratorMethod() {\n            yield 1;\n            yield 2;\n            yield 3;\n          },\n        };\n        const genObj = myObj.myGeneratorMethod();",
      "class MyClass {\n          *myGeneratorMethod() {\n            yield 1;\n            yield 2;\n            yield 3;\n          }\n        }\n        const myObject = new MyClass();\n        const genObj = myObject.myGeneratorMethod();",
      "const SomeObj = {\n          *[Symbol.iterator]() {\n            yield 1;\n            yield 2;\n            yield 3;\n          },\n        };\n\n        console.log(Array.from(SomeObj)); // [ 1, 2, 3 ]"
    ],
    "tables": []
  },
  {
    "id": 420,
    "question": "What are the built-in iterables",
    "description": "Below are the list of built-in iterables in javascript,\n\n     1. Arrays and TypedArrays\n     2. Strings: Iterate over each character or Unicode code-points\n     3. Maps: iterate over its key-value pairs\n     4. Sets: iterates over their elements\n     5. arguments: An array-like special variable in functions\n     6. DOM collection such as NodeList",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 421,
    "question": "What are the differences between for...of and for...in statements",
    "description": "Both for...in and for...of statements iterate over js data structures. The only difference is over what they iterate:\n\n     1. for..in iterates over all enumerable property keys of an object\n     2. for..of iterates over the values of an iterable object.\n\n     Let's explain this difference with an example,\n\n     \n\n     Since for..in loop iterates over the keys of the object, the first loop logs 0, 1, 2 and newProp while iterating over the array object. The for..of loop iterates over the values of a arr data structure and logs a, b, c in the console.",
    "codeExamples": [
      "let arr = [\"a\", \"b\", \"c\"];\n\n     arr.newProp = \"newVlue\";\n\n     // key are the property keys\n     for (let key in arr) {\n       console.log(key); // 0, 1, 2 & newProp\n     }\n\n     // value are the property values\n     for (let value of arr) {\n       console.log(value); // a, b, c\n     }"
    ],
    "tables": []
  },
  {
    "id": 422,
    "question": "How do you define instance and non-instance properties",
    "description": "The Instance properties must be defined inside of class methods. For example, name and age properties defined inside constructor as below,\n\n     \n\n     But Static(class) and prototype data properties must be defined outside of the ClassBody declaration. Let's assign the age value for Person class as below,",
    "codeExamples": [
      "class Person {\n       constructor(name, age) {\n         this.name = name;\n         this.age = age;\n       }\n     }",
      "Person.staticAge = 30;\n     Person.prototype.prototypeAge = 40;"
    ],
    "tables": []
  },
  {
    "id": 423,
    "question": "What is the difference between isNaN and Number.isNaN?",
    "description": "1. isNaN: The global function `isNaN` converts the argument to a Number and returns true if the resulting value is NaN.\n     2. Number.isNaN: This method does not convert the argument. But it returns true when the type is a Number and value is NaN.\n\n     Let's see the difference with an example,",
    "codeExamples": [
      "isNaN(‘hello’);   // true\n     Number.isNaN('hello'); // false"
    ],
    "tables": []
  },
  {
    "id": 424,
    "question": "How to invoke an IIFE without any extra brackets?",
    "description": "Immediately Invoked Function Expressions(IIFE) requires a pair of parenthesis to wrap the function which contains set of statements.\n\n     ```js\n     (function (dt) {\n       console.log(dt.toLocaleTimeString());\n     })(new Date());\n     ```\n\n     Since both IIFE and void operator discard the result of an expression, you can avoid the extra brackets using `void operator` for IIFE as below,\n\n     ```js\n     void (function (dt) {\n       console.log(dt.toLocaleTimeString());\n     })(new Date());\n     ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 425,
    "question": "Is that possible to use expressions in switch cases?",
    "description": "You might have seen expressions used in switch condition but it is also possible to use for switch cases by assigning true value for the switch condition. Let's see the weather condition based on temperature as an example,\n\n     ```js\n     const weather = (function getWeather(temp) {\n       switch (true) {\n         case temp < 0:\n           return \"freezing\";\n         case temp < 10:\n           return \"cold\";\n         case temp < 24:\n           return \"cool\";\n         default:\n           return \"unknown\";\n       }\n     })(10);\n     ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 426,
    "question": "What is the easiest way to ignore promise errors?",
    "description": "The easiest and safest way to ignore promise errors is void that error. This approach is ESLint friendly too.\n\n     ```js\n     await promise.catch((e) => void e);\n     ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 427,
    "question": "How do style the console output using CSS?",
    "description": "You can add CSS styling to the console output using the CSS format content specifier %c. The console string message can be appended after the specifier and CSS style in another argument. Let's print the red color text using console.log and CSS specifier as below,\n\n     ```js\n     console.log(\"%cThis is a red text\", \"color:red\");\n     ```\n\n     It is also possible to add more styles for the content. For example, the font-size can be modified for the above text\n\n     ```js\n     console.log(\n       \"%cThis is a red text with bigger font\",\n       \"color:red; font-size:20px\"\n     );\n     ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 428,
    "question": "What is nullish coalescing operator (??)?",
    "description": "It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. This can be contrasted with the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.\n\n     ```js\n     console.log(null ?? true); // true\n     console.log(false ?? true); // false\n     console.log(undefined ?? true); // true\n     ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 429,
    "question": "How do you group and nest console output?",
    "description": "The `console.group()` can be used to group related log messages to be able to easily read the logs and use console.groupEnd()to close the group. Along with this, you can also nest groups which allows to output message in hierarchical manner.\n\n     For example, if you’re logging a user’s details:\n\n     ```js\n     console.group(\"User Details\");\n     console.log(\"name: Sudheer Jonna\");\n     console.log(\"job: Software Developer\");\n\n     // Nested Group\n     console.group(\"Address\");\n     console.log(\"Street: Commonwealth\");\n     console.log(\"City: Los Angeles\");\n     console.log(\"State: California\");\n\n     // Close nested group\n     console.groupEnd();\n\n     // Close outer group\n     console.groupEnd();\n     ```\n\n     You can also use `console.groupCollapsed()` instead of `console.group()` if you want the groups to be collapsed by default.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 430,
    "question": "What is the difference between dense and sparse arrays?",
    "description": "An array contains items at each index starting from first(0) to last(array.length - 1) is called as Dense array. Whereas if at least one item is missing at any index, the array is called as sparse.\n\n     Let's see the below two kind of arrays,\n\n     ```js\n     const avengers = [\"Ironman\", \"Hulk\", \"CaptainAmerica\"];\n     console.log(avengers[0]); // 'Ironman'\n     console.log(avengers[1]); // 'Hulk'\n     console.log(avengers[2]); // 'CaptainAmerica'\n     console.log(avengers.length); // 3\n\n     const justiceLeague = [\"Superman\", \"Aquaman\", , \"Batman\"];\n     console.log(justiceLeague[0]); // 'Superman'\n     console.log(justiceLeague[1]); // 'Aquaman'\n     console.log(justiceLeague[2]); // undefined\n     console.log(justiceLeague[3]); // 'Batman'\n     console.log(justiceLeague.length); // 4\n     ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 431,
    "question": "What are the different ways to create sparse arrays?",
    "description": "There are 4 different ways to create sparse arrays in JavaScript\n\n     1. Array literal: Omit a value when using the array literal\n        ```js\n        const justiceLeague = [\"Superman\", \"Aquaman\", , \"Batman\"];\n        console.log(justiceLeague); // ['Superman', 'Aquaman', empty ,'Batman']\n        ```\n     2. Array() constructor: Invoking Array(length) or new Array(length)\n        ```js\n        const array = Array(3);\n        console.log(array); // [empty, empty ,empty]\n        ```\n     3. Delete operator: Using delete array[index] operator on the array\n        ```js\n        const justiceLeague = [\"Superman\", \"Aquaman\", \"Batman\"];\n        delete justiceLeague[1];\n        console.log(justiceLeague); // ['Superman', empty, ,'Batman']\n        ```\n     4. Increase length property: Increasing length property of an array\n        ```js\n        const justiceLeague = [\"Superman\", \"Aquaman\", \"Batman\"];\n        justiceLeague.length = 5;\n        console.log(justiceLeague); // ['Superman', 'Aquaman', 'Batman', empty, empty]\n        ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 432,
    "question": "What is the difference between setTimeout, setImmediate and process.nextTick?",
    "description": "1. Set Timeout: setTimeout() is to schedule execution of a one-time callback after delay milliseconds.\n     2. Set Immediate: The setImmediate function is used to execute a function right after the current event loop finishes.\n     3. Process NextTick: If process.nextTick() is called in a given phase, all the callbacks passed to process.nextTick() will be resolved before the event loop continues. This will block the event loop and create I/O Starvation if process.nextTick() is called recursively.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 433,
    "question": "How do you reverse an array without modifying original array?",
    "description": "The `reverse()` method reverses the order of the elements in an array but it mutates the original array. Let's take a simple example to demonistrate this case,\n\n     \n\n     There are few solutions that won't mutate the original array. Let's take a look.\n\n     1. Using slice and reverse methods:\n        In this case, just invoke the `slice()` method on the array to create a shallow copy followed by `reverse()` method call on the copy.\n\n        \n\n     2. Using spread and reverse methods:\n        In this case, let's use the spread syntax (...) to create a copy of the array followed by `reverse()` method call on the copy.\n\n        \n\n     3. Using reduce and spread methods:\n        Here execute a reducer function on an array elements and append the accumulated array on right side using spread syntax\n\n        \n\n     4. Using reduceRight and spread methods:\n        Here execute a right reducer function(i.e. opposite direction of reduce method) on an array elements and append the accumulated array on left side using spread syntax\n\n        \n\n     5. Using reduceRight and push methods:\n        Here execute a right reducer function(i.e. opposite direction of reduce method) on an array elements and push the iterated value to the accumulator",
    "codeExamples": [
      "const originalArray = [1, 2, 3, 4, 5];\n     const newArray = originalArray.reverse();\n\n     console.log(newArray); // [ 5, 4, 3, 2, 1]\n     console.log(originalArray); // [ 5, 4, 3, 2, 1]",
      "const originalArray = [1, 2, 3, 4, 5];\n        const newArray = originalArray.slice().reverse(); //Slice an array gives a new copy\n\n        console.log(originalArray); // [1, 2, 3, 4, 5]\n        console.log(newArray); // [ 5, 4, 3, 2, 1]",
      "const originalArray = [1, 2, 3, 4, 5];\n        const newArray = [...originalArray].reverse();\n\n        console.log(originalArray); // [1, 2, 3, 4, 5]\n        console.log(newArray); // [ 5, 4, 3, 2, 1]",
      "const originalArray = [1, 2, 3, 4, 5];\n        const newArray = originalArray.reduce((accumulator, value) => {\n          return [value, ...accumulator];\n        }, []);\n\n        console.log(originalArray); // [1, 2, 3, 4, 5]\n        console.log(newArray); // [ 5, 4, 3, 2, 1]",
      "const originalArray = [1, 2, 3, 4, 5];\n        const newArray = originalArray.reduceRight((accumulator, value) => {\n          return [...accumulator, value];\n        }, []);\n\n        console.log(originalArray); // [1, 2, 3, 4, 5]\n        console.log(newArray); // [ 5, 4, 3, 2, 1]",
      "const originalArray = [1, 2, 3, 4, 5];\n        const newArray = originalArray.reduceRight((accumulator, value) => {\n          accumulator.push(value);\n          return accumulator;\n        }, []);\n\n        console.log(originalArray); // [1, 2, 3, 4, 5]\n        console.log(newArray); // [ 5, 4, 3, 2, 1]"
    ],
    "tables": []
  },
  {
    "id": 434,
    "question": "How do you create custom HTML element?",
    "description": "The creation of custom HTML elements involves two main steps,\n\n     1. Define your custom HTML element: First you need to define some custom class by extending HTMLElement class.\n        After that define your component properties (styles,text etc) using `connectedCallback` method.\n        Note: The browser exposes a function called `customElements.define` inorder to reuse the element.\n        \n     2. Use custom element just like other HTML element: Declare your custom element as a HTML tag.",
    "codeExamples": [
      "class CustomElement extends HTMLElement {\n          connectedCallback() {\n            this.innerHTML = \"This is a custom element\";\n          }\n        }\n        customElements.define(\"custom-element\", CustomElement);",
      "<body>\n             <custom-element>\n        </body>"
    ],
    "tables": []
  },
  {
    "id": 435,
    "question": "What is global execution context?",
    "description": "The global execution context is the default or first execution context that is created by the JavaScript engine before any code is executed(i.e, when the file first loads in the browser). All the global code that is not inside a function or object will be executed inside this global execution context. Since JS engine is single threaded there will be only one global environment and there will be only one global execution context.\n\n     For example, the below code other than code inside any function or object is executed inside the global execution context.",
    "codeExamples": [
      "var x = 10;\n\n     function A() {\n       console.log(\"Start function A\");\n\n       function B() {\n         console.log(\"In function B\");\n       }\n\n       B();\n     }\n\n     A();\n\n     console.log(\"GlobalContext\");"
    ],
    "tables": []
  },
  {
    "id": 436,
    "question": "What is function execution context?",
    "description": "Whenever a function is invoked, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the Global Execution Context (GEC) to evaluate and execute the code within that function.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 437,
    "question": "What is debouncing?",
    "description": "Debouncing is a programming technique used to limit how often a function is executed. Specifically, it ensures that a function is only triggered after a certain amount of time has passed since it was last invoked. This prevents unnecessary or excessive function calls, which can help optimize performance and reduce unnecessary CPU usage or API requests.\n\n    For example, when a user types in a search box, you typically want to wait until they’ve finished typing before fetching suggestions. Without debouncing, an API call would be triggered on every keystroke, potentially causing performance issues. With debouncing, the function call is postponed until the user stops typing for a specified period (e.g., 300ms). If the user types again before this time elapses, the timer resets.\n\n    Typical use cases for debouncing include:\n\n    *   Search box suggestions (wait until typing pauses before fetching results)\n    *   Auto-saving text fields (save only after the user stops typing)\n    *   Preventing double-clicks on buttons\n    *   Handling window resize or scroll events efficiently\n\n    Example Debounce Function:\n\n    JavaScript\n\n    ```css\n    function debounce(func, timeout = 500) {\n      let timer;\n      return function (...args) {\n        clearTimeout(timer);\n        timer = setTimeout(() => {\n          func.apply(this, args);\n        }, timeout);\n      };\n    }\n    ```\n\n    Usage Example:\n\n    JavaScript\n\n    ```css\n    function fetchResults() {\n      console.log(\"Fetching input suggestions\");\n    }\n    const processChange = debounce(fetchResults, 300);\n\n    // Attach to input element\n    <input type=\"text\" onkeyup=\"processChange()\" />\n\n    // Attach to button\n    <button onclick=\"processChange()\">Click me</button>\n\n    // Attach to window event\n    window.addEventListener(\"scroll\", processChange);\n    ```\n\n    How it works:  \n    When `processChange` is invoked (e.g., by typing or clicking), any pending execution is canceled, and the function is scheduled to run after the specified delay. If another event occurs before the delay is up, the timer resets, and the function will only run after events have stopped for the delay duration.\n\n    Debouncing is an essential tool for improving user experience and application performance, especially when dealing with events that can fire rapidly and repeatedly.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 438,
    "question": "What is throttling?",
    "description": "Throttling is a programming technique used to control the rate at which a function is executed. When an event is triggered continuously—such as during window resizing, scrolling, or mouse movement—throttling ensures that the associated event handler is not called more often than a specified interval. This helps improve performance by reducing the number of expensive function calls and preventing performance bottlenecks.\n\n      Common use cases:\n\n      *   Window resize events\n      *   Scroll events\n      *   Mouse movement or drag events\n      *   API rate limiting\n\n      How does throttling work?  \n      Throttling will execute the function at most once every specified time interval, ignoring additional calls until the interval has passed.\n\n      Example: Throttle Implementation and Usage\n\n      JavaScript\n\n      ```css\n      // Simple throttle function: allows 'func' to run at most once every 'limit' ms\n      function throttle(func, limit) {\n        let inThrottle = false;\n        return function(...args) {\n          if (!inThrottle) {\n            func.apply(this, args);\n            inThrottle = true;\n            setTimeout(() => (inThrottle = false), limit);\n          }\n        };\n      }\n\n      // Usage: throttling a scroll event handler\n      function handleScrollAnimation() {\n        console.log('Scroll event triggered');\n      }\n\n      window.addEventListener(\n        \"scroll\",\n        throttle(handleScrollAnimation, 100) // Will run at most once every 100ms\n      );\n      ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 439,
    "question": "What is optional chaining?",
    "description": "According to MDN official docs, the optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.\n\n     The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.\n\n     ```js\n     const adventurer = {\n       name: \"Alice\",\n       cat: {\n         name: \"Dinah\",\n       },\n     };\n\n     const dogName = adventurer.dog?.name;\n     console.log(dogName);\n     // expected output: undefined\n\n     console.log(adventurer.someNonExistentMethod?.());\n     // expected output: undefined\n     ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 440,
    "question": "What is an environment record?",
    "description": "According to ECMAScript specification 262 (9.1):\n\n     > [Environment Record](https://262.ecma-international.org/12.0/sec-environment-records) is a specification type used to define the association of Identifiers to specific variables and functions, based upon the lexical nesting structure of ECMAScript code.\n\n     Usually an Environment Record is associated with some specific syntactic structure of ECMAScript code such as a FunctionDeclaration, a BlockStatement, or a Catch clause of a TryStatement.\n\n     Each time such code is evaluated, a new Environment Record is created to record the identifier bindings that are created by that code.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 441,
    "question": "How to verify if a variable is an array?",
    "description": "It is possible to check if a variable is an array instance using 3 different ways,\n\n     1. Array.isArray() method:\n\n        The `Array.isArray(value)` utility function is used to determine whether value is an array or not. This function returns a true boolean value if the variable is an array and a false value if it is not.\n\n        \n\n     2. instanceof operator:\n\n        The instanceof operator is used to check the type of an array at run time. It returns true if the type of a variable is an Array other false for other type.\n\n        \n\n     3. Checking constructor type:\n\n        The constructor property of the variable is used to determine whether the variable Array type or not.",
    "codeExamples": [
      "const numbers = [1, 2, 3];\n        const user = { name: \"John\" };\n        Array.isArray(numbers); // true\n        Array.isArray(user); //false",
      "const numbers = [1, 2, 3];\n        const user = { name: \"John\" };\n        console.log(numbers instanceof Array); // true\n        console.log(user instanceof Array); // false",
      "const numbers = [1, 2, 3];\n        const user = { name: \"John\" };\n        console.log(numbers.constructor === Array); // true\n        console.log(user.constructor === Array); // false"
    ],
    "tables": []
  },
  {
    "id": 442,
    "question": "What is pass by value and pass by reference?",
    "description": "Pass-by-value creates a new space in memory and makes a copy of a value. Primitives such as string, number, boolean etc will actually create a new copy. Hence, updating one value doesn't impact the other value. i.e, The values are independent of each other.\n\n     \n\n     In the above code snippet, the value of `a` is assigned to `b` and the variable `b` has been incremented. Since there is a new space created for variable `b`, any update on this variable doesn't impact the variable `a`.\n\n     Pass by reference doesn't create a new space in memory but the new variable adopts a memory address of an initial variable. Non-primitives such as objects, arrays and functions gets the reference of the initiable variable. i.e, updating one value will impact the other variable.\n\n     \n\n     In the above code snippet, updating the `age` property of one object will impact the other property due to the same reference.",
    "codeExamples": [
      "let a = 5;\n     let b = a;\n\n     b++;\n     console.log(a, b); //5, 6",
      "let user1 = {\n       name: \"John\",\n       age: 27,\n     };\n     let user2 = user1;\n     user2.age = 30;\n\n     console.log(user1.age, user2.age); // 30, 30"
    ],
    "tables": []
  },

  {
    "id": 444,
    "question": "How do you create your own bind method using either call or apply method?",
    "description": "The custom bind function needs to be created on Function prototype inorder to use it as other builtin functions. This custom function should return a function similar to original bind method and the implementation of inner function needs to use apply method call.\n\n     The function which is going to bind using custom `myOwnBind` method act as the attached function(`boundTargetFunction`) and argument as the object for `apply` method call.\n\n     ```js\n     Function.prototype.myOwnBind = function (whoIsCallingMe) {\n       if (typeof this !== \"function\") {\n         throw new Error(this + \"cannot be bound as it's not callable\");\n       }\n       const boundTargetFunction = this;\n       return function () {\n         boundTargetFunction.apply(whoIsCallingMe, arguments);\n       };\n     };\n     ```",
    "codeExamples": [],
    "tables": []
  },
  
  {
    "id": 446,
    "question": "What is referential transparency?",
    "description": "An expression in javascript that can be replaced by its value without affecting the behaviour of the program is called referential transparency. Pure functions are referentially transparent.",
    "codeExamples": [
      "const add = (x, y) => x + y;\nconst multiplyBy2 = (x) => x * 2;\n\n//Now add (2, 3) can be replaced by 5.\n\nmultiplyBy2(add(2, 3));"
    ],
    "tables": []
  },
  {
    "id": 447,
    "question": "What are the possible side-effects in javascript?",
    "description": "A side effect is the modification of the state through the invocation of a function or expression. These side effects make our function impure by default. Below are some side effects which make function impure,\n\n- Making an HTTP request. Asynchronous functions such as fetch and promise are impure.\n- DOM manipulations\n- Mutating the input data\n- Printing to a screen or console: For example, console.log() and alert()\n- Fetching the current time\n- Math.random() calls: Modifies the internal state of Math object",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 448,
    "question": "What are compose and pipe functions?",
    "description": "The \"compose\" and \"pipe\" are two techniques commonly used in functional programming to simplify complex operations and make code more readable. They are not native to JavaScript and higher-order functions. the `compose()` applies right to left any number of functions to the output of the previous function.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 449,
    "question": "What is module pattern?",
    "description": "Module pattern is a designed pattern used to wrap a set of variables and functions together in a single scope returned as an object. JavaScript doesn't have access specifiers similar to other languages(Java, Python, etc) to provide private scope. It uses IIFE (Immediately invoked function expression) to allow for private scopes. i.e., a closure that protect variables and methods.\n\n     The module pattern looks like below,\n\n     \n\n     Let's see an example of a module pattern for an employee with private and public access,\n\n     \n\n     Note: It mimic the concepts of classes with private variables and methods.",
    "codeExamples": [
      "(function () {\n       // Private variables or functions goes here.\n\n       return {\n         // Return public variables or functions here.\n       };\n     })();",
      "const createEmployee = (function () {\n       // Private\n       const name = \"John\";\n       const department = \"Sales\";\n       const getEmployeeName = () => name;\n       const getDepartmentName = () => department;\n\n       // Public\n       return {\n         name,\n         department,\n         getName: () => getEmployeeName(),\n         getDepartment: () => getDepartmentName(),\n       };\n     })();\n\n     console.log(createEmployee.name);\n     console.log(createEmployee.department);\n     console.log(createEmployee.getName());\n     console.log(createEmployee.getDepartment());"
    ],
    "tables": []
  },
  {
    "id": 450,
    "question": "What is Function Composition?",
    "description": "It is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result.",
    "codeExamples": [
      "//example\n     const double = (x) => x * 2;\n     const square = (x) => x * x;\n\n     var output1 = double(2);\n     var output2 = square(output1);\n     console.log(output2);\n\n     var output_final = square(double(2));\n     console.log(output_final);"
    ],
    "tables": []
  },
  {
    "id": 451,
    "question": "How to use await outside of async function prior to ES2022?",
    "description": "Prior to ES2022, if you attempted to use an await outside of an async function resulted in a SyntaxError.\n\n     \n\n     But you can fix this issue with an alternative IIFE (Immediately Invoked Function Expression) to get access to the feature.\n\n     \n\n     In ES2022, you can write top-level await without writing any hacks.",
    "codeExamples": [
      "await Promise.resolve(console.log(\"Hello await\")); // SyntaxError: await is only valid in async function",
      "(async function () {\n       await Promise.resolve(console.log(\"Hello await\")); // Hello await\n     })();",
      "await Promise.resolve(console.log(\"Hello await\")); //Hello await"
    ],
    "tables": []
  },
  {
    "id": 452,
    "question": "What is the purpose of the this keyword in JavaScript?",
    "description": "The `this` keyword in JavaScript refers to the object that is executing the current function. Its value is determined by how a function is called, not where it is defined.  `this` is essential for writing object-oriented and event-driven code, as it allows methods to interact with the data of the object they belong to.\n\n\n  Example 1: this in a Global Context\n\n  \n\n  - In a global context, this refers to the global object (e.g., window in a browser).\n\n  Example 2: this in a Function\n\n  \n\n  - In a regular function, this refers to the global object(window in browser and global in nodejs) for non-strict mode.  In strict mode, it's value is undefined.\n\n  Example 3: this in a Method\n\n  \n\n  - In a method, this refers to the object that owns the method (person in the case).\n\n  Example 4: this in an Event Handler\n\n  \n\n  - In an event handler, this refers to the element that triggered the event (the button in this case).\n\n  Example 5: `this` with Arrow Functions\n\n  \n  - Arrow functions do not have their own `this` binding; they inherit it from their surrounding (lexical) context.\n\n  Example 6: this in Constructor Functions / Classes\n    \n  \n   - When used with new, this refers to the newly created object.",
    "codeExamples": [
      "console.log(this);",
      "function displayThis() {\n    console.log(this);\n  }\n\n  displayThis();",
      "const person = {\n    name: \"John\",\n    greet: function () {\n      console.log(\"Hello, \" + this.name);\n    },\n  };\n\n  person.greet();",
      "document.getElementById(\"myButton\").addEventListener(\"click\", function () {\n            console.log(this);\n   });",
      "const obj = {\n          age: 42,\n          regular: function() { console.log(this.age); },\n          arrow: () => { console.log(this.age); }\n        };\n        obj.regular(); // 42 (this refers to obj)\n        obj.arrow();   // undefined (this refers to the outer scope, not obj)",
      "function Person(name) {\n      this.name = name;\n    }\n    \n    const p1 = new Person('Sudheer');\n    console.log(p1.name); // Sudheer"
    ],
    "tables": []
  },
  {
    "id": 453,
    "question": "What are the uses of closures?",
    "description": "Closures are a powerful feature in programming languages like JavaScript. They allow functions to retain access to variables from their containing (enclosing) scope even after the outer function has finished executing. This means that a function defined within another function can access variables from the outer function, even if the outer function has already returned.\n     Here are some common use cases of closures:\n\n- Data Privacy: Closures can be used to create private variables and methods. By defining variables within a function's scope and returning inner functions that have access to those variables, you can create a form of encapsulation, limiting access to certain data or functionality.\n\n- Function Factories: Closures are often used to create functions with pre-set parameters. This is useful when you need to create multiple functions with similar behavior but different configurations.\n\n- Callback Functions: Closures are frequently used in asynchronous programming, such as handling event listeners or AJAX requests. The inner function captures variables from the outer scope and can access them when the callback is invoked.\n\n- Memoization: Closures can be used for memoization, a technique to optimize performance by caching the results of expensive function calls. The inner function can remember the results of previous calls and return the cached result if the same input is provided again.\n\n- iterators and Generators: Closures can be used to create iterators and generators, which are essential for working with collections of data in modern JavaScript.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 454,
    "question": "What are the phases of execution context?",
    "description": "The execution context in JavaScript is a data structure that stores the information necessary for executing a piece of code. It includes the code itself, the values of the variables used in the code, and the scope chain. The scope chain is a list of objects that are used to resolve variable names.\n\nThe execution context has two phases:\n\n- Creation phase: In this phase, the JavaScript engine creates the execution context and sets up the script's environment. This includes creating the variable object and the scope chain.\n- Execution phase: In this phase, the JavaScript engine executes the code in the execution context. This includes evaluating expressions, assigning values to variables, and calling functions.\n\nThe execution context is created when a function is called. The function's code is then executed in the execution context. When the function returns, the execution context is destroyed.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 455,
    "question": "What are the possible reasons for memory leaks?",
    "description": "Memory leaks can lead to poor performance, slow loading times and even crashes in web applications. Some of the common causes of memory leaks are listed below,\n\n     1. The execessive usage of global variables or omitting the `var` keyword in local scope.\n     2. Forgetting to clear the timers set up by `setTimeout` or `setInterval`.\n     3. Closures retain references to variables from their parent scope, which leads to variables might not garbage collected even they are no longer used.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 456,
    "question": "What are the optimization techniques of V8 engine?",
    "description": "V8 engine uses the below optimization techniques.\n\n     1. Inline expansion: It is a compiler optimization by replacing the function calls with the corresponding function blocks.\n     2. Copy elision: This is a compiler optimization method to prevent expensive extra objects from being duplicated or copied.\n     3. Inline caching: It is a runtime optimization technique where it caches the execution of older tasks those can be lookup while executing the same task in the future.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 457,
    "question": "What are the examples of built-in higher order functions?",
    "description": "There are several built-in higher order functions exists on arrays, strings, DOM and promise methods in javascript. These higher order functions provides significant level of abstraction. The list of functions on these categories are listed below,\n\n     1. arrays: map, filter, reduce, sort, forEach, some etc.\n     2. DOM: The DOM method `element.addEventListener(type, handler)` also accepts the function handler as a second argument.\n     3. Strings: replace() method.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 458,
    "question": "What are the benefits higher order functions?",
    "description": "The main benefits of higher order functions are:\n     1. Abstraction\n     2. Reusability\n     3. Immutability\n     4. Modularity",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 459,
    "question": "How do you create polyfills for map, filter and reduce methods?",
    "description": "The polyfills for array methods such as map, filter and reduce methods can be created using array prototype.\n\n1.  map:\n\n    The built-in `Array.map` method syntax will be helpful to write polyfill. The map method takes the callback function as an argument and that callback function can have below three arguments passed into it.\n\n    i. Current value\n    ii. Index of current value(optional)\n    iii. array(optional)\n\n    The syntax would like below,\n\n    ```js\n    let newArray = arr.map(callback(currentValue[, index, arr) {\n       // return new array after executing the code\n    })\n    ```\n\n    Let's build our map polyfill based on the above syntax,\n\n    ```js\n    Array.prototype.myMap = function (cb) {\n      let newArr = [];\n      for (let i = 0; i < this.length; i++) {\n        newArr.push(cb(this[i], i, this));\n      }\n      return newArr;\n    };\n\n    const nums = [1, 2, 3, 4, 5];\n    const multiplyByTwo = nums.myMap((x) => x * 2);\n    console.log(multiplyByTwo); // [2, 4, 6, 8, 10]\n    ```\n\n    In the above code, custom method name 'myMap' has been used to avoid conflicts with built-in method.\n\n2.  filter:\n    Similar to map method, `Array.filter` method takes callback function as an argument and the callback function can have three agurguments passed into it.\n\n        i. Current value\n        ii. Index of current value(optional)\n        iii. array(optional)\n\n    The syntax looks like below,\n\n    ```js\n    let newArray = arr.filter(callback(currentValue[, index, arr) {\n      // return new array whose elements satisfy the callback conditions\n    })\n    ```\n\n    Let's build our filter polyfill based on the above syntax,\n\n    ```js\n    Array.prototype.myFilter = function (cb) {\n      let newArr = [];\n      for (let i = 0; i < this.length; i++) {\n        if (cb(this[i], i, this)) {\n          newArr.push(this[i]);\n        }\n      }\n      return newArr;\n    };\n\n    const nums = [1, 2, 3, 4, 5, 6];\n    const evenNums = nums.myFilter((x) => x % 2);\n    console.log(evenNums); // [2, 4, 6]\n    ```\n\n3.  reduce:\n\n          The built-in `Array.reduce` method syntax will be helpful to write our own polyfill. The reduce method takes the callback function as first argument and the initial value as second argument.\n\n          The callback function can have four arguments passed into it.\n          i. Accumulator\n          ii. Current value\n          iii. Index of current value(optional)\n          iv. array(optional)\n\n        The syntax would like below,\n\n        ```js\n        arr.reduce(callback((acc, curr, i, arr) => {}), initValue);\n        ```\n        Let's build our reduce polyfill based on the above syntax,\n\n        ```js\n        Array.prototype.myReduce = function(cb, initialValue) {\n            let accumulator = initialValue;\n            for(let i=0; i< this.length; i++) {\n                accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];\n            }\n            return accumulator;\n        }\n          const nums = [1, 2, 3, 4, 5, 6];\n          const sum = nums.myReduce((acc, curr, i, arr) => {\n            return acc += curr\n          }, 0);\n          console.log(sum); // 21\n        ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 460,
    "question": "What is the difference between map and forEach functions?",
    "description": "Both map and forEach functions are used to iterate over an arrays but there are some differences in their functionality.\n\n    1. Returning values: The `map` method returns a new array with transformed elements whereas `forEach` method returns `undefined` eventhough both of them are doing the same job.\n\n    \n\n    2. Chaining methods: The `map` method is chainable. i.e, It can be attached with `reduce`, `filter`, `sort` and other methods as well. Whereas `forEach` cannot be attached with any other methods because it returns `undefined` value.\n\n    \n\n    3. Mutation: The `map` method doesn't mutate the original array by returning new array. Whereas `forEach` method also doesn't mutate the original array but it's callback is allowed to mutate the original array.\n\n    Note: Both these methods existed since ES5 onwards.",
    "codeExamples": [
      "const arr = [1, 2, 3, 4, 5];\n      arr.map(x => x * x); // [1, 4, 9, 16, 25]\n      arr.forEach(x => x * x); //\n\n      The `forEach()` method in JavaScript always returns undefined. This is because forEach() is used to iterate over arrays and perform side effects on each element, rather than returning a `new array or transforming the original array`",
      "const arr = [1, 2, 3, 4, 5];\n    arr.map((x) => x * x).reduce((total, cur) => total + cur); // 55\n    arr.forEach((x) => x * x).reduce((total, cur) => total + cur); //Uncaught TypeError: Cannot read properties of undefine(reading 'reduce')"
    ],
    "tables": []
  },
  {
    "id": 461,
    "question": "Give an example of statements affected by automatic semicolon insertion?",
    "description": "The javascript parser will automatically add a semicolon while parsing the source code. For example, the below common statements affected by Automatic Semicolon Insertion(ASI).\n\n     1. An empty statement\n     2. var statement\n     3. An expression statement\n     4. do-while statement\n     5. continue statement\n     6. break statement\n     7. return statement\n     8. throw statement",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 462,
    "question": "What are the event phases of a browser?",
    "description": "There are 3 phases in the lifecycle of an event propagation in JavaScript,\n\n     1. Capturing phase: This phase goes down gradually from the top of the DOM tree to the target element when a nested element clicked. Before the click event reaching the final destination element, the click event of each parent's element must be triggered.\n\n     2. Target phase: This is the phase where the event originally occurred reached the target element .\n\n     3. Bubbling phase: This is reverse of the capturing phase. In this pase, the event bubbles up from the target element through it's parent element, an ancestor and goes all the way to the global window object.\n\n     The pictorial representation of these 3 event phases in DOM looks like below,\n\n     ![Screenshot](images/event-flow.png)",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 463,
    "question": "What are the real world use cases of proxy?",
    "description": "Proxies are not used in regular day to day JavaScript work but they enabled many exciting programming patterns. Some of the real world use cases are listed below,\n\n     1. Vue3 used proxy concept to implement reactive state\n     2. SolidJS implemented reactive stores\n     3. Immerjs built upon proxy to track updates to immutable updates\n     4. ZenStack improved Prisma ORM for access control layer",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 464,
    "question": "What are hidden classes?",
    "description": "Since JavaScript is a dynamic programming language, you can add or remove properties and methods from objects on the fly at runtime. This nature of JavaScript increases the dynamic dictionary lookups(because objects implemented as HashTables in memory) for retrieving a property on an object.\n\n     Let's consider the following example to see how the additional properties `age` and `gender` added at runtime.\n\n     \n\n     As a result, this behavior leads to lower JavaScript performance compared to the contiguous buffer method used in non-dynamic languages. The V8 engine provided a solution named hidden classes to optimize the access time when retrieving a property on an object. This optimization is achieved by sharing hidden classes among objects created in a similar fashion. These hidden classes are attached to each and every object to track its shape.\n\n     When V8 engine sees the constructor function(e.g, Person) is declared, it creates a hidden class (let's say Class01) without any offsets. Once the first property assignment statement (`this.name = name`) is executed, V8 engine will create a new hidden class (let's say Class02), inheriting all properties from the previous hidden class (Class01), and assign the property to offset 0. This process enables compiler to skip dictionary lookup when you try to retrieve the same property(i.e, name). Instead, V8 will directly point to Class02. The same procedure happens when you add new properties to the object.\n\n     For example, adding `age` and `gender` properties to `Person` constructor leads to transition of hidden classes(Class02 -> Class03 -> Class04). If you create a second object(Person2) based on the same Person object, both Class01 and Class02 hidden classes are going to be shared. However, the hidden classes Class03 and Class04 cannot be shared because second object has been modified with a different order of properties assignment.\n\n     Since both the objects(person1 and person2) do not share the hidden classes, now V8 engine cannot use Inline Caching technique for the faster access of properties.",
    "codeExamples": [
      "function Person(name) {\n       this.name = name;\n     }\n\n     var person1 = new Person(\"John\");\n     var person2 = new Person(\"Randy\");\n\n     person1.age = 40;\n     person1.gender = \"Male\";\n\n     person2.gender = \"Female\";\n     person2.age = 50;"
    ],
    "tables": []
  },
  {
    "id": 465,
    "question": "What is inline caching?",
    "description": "Inline caching is an optimization technique based on the observation that repeated calls to same function tends to occur on same type of objects. The V8 compiler stores a cache of the type of objects that were passed as a parameter in recent method calls. Upon next time when same function is called, compiler can directly search for the type in cache.\n\nLet's consider an example where the compiler stores the shape type in cache for repeated calls in the loop.\n\n```js\nlet shape = { width: 30, height: 20 }; // Compiler store the type in cache as { width: <int>, height: <int>} after repeated calls\n\nfunction area(obj) {\n  //Calculate area\n}\nfor (let i = 0; i < 100; i++) {\n  area(shape);\n}\n```\n\nAfter few successful calls of the same area method to its same hidden class, V8 engine omits the hidden class lookup and simply adds the offset of the property to the object pointer itself. As a result, it increases the execution speed.\n\nThere are mainly 3 types of inline caching possible:\n\n1. Monomorphic: This is a optimized caching technique in which there can be always same type of objects passed.\n2. Polymorphic: This ia slightly optimized caching technique in which limited number of different types of objects can be passed.\n3. Megamorphic: It is an unoptimized caching in which any number of different objects can be passed.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 466,
    "question": "What are the different ways to execute external scripts?",
    "description": "There are three different ways to execute external scripts,\n\n     1. async: The script is downloaded in parallel to parsing the page, and executed as soon as it is available even before parsing completes. The parsing of the page is going to be interuppted once the script is downloaded completely and then the script is executed. Thereafter, the parsing of the remaining page will continue.\n\n        The syntax for async usage is as shown below,\n\n        ```html\n        <script src=\"demo.js\" async></script>\n        ```\n\n     2. defer: The script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.\n\n        The syntax for defer usage is as shown below,\n\n        ```html\n        <script src=\"demo.js\" defer></script>\n        ```\n\n     3. Neither async or defer: The script is downloaded and executed immediately by blocking parsing of the page until the script execution is completed.\n\n     Note: You should only use either async or defer attribute if the `src` attribute is present.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 467,
    "question": "What is Lexical Scope?",
    "description": "Lexical scope is the ability for a function scope to access variables from the parent scope.\n\n     ```js\n     <script>\n             function x(){\n               var a=10;\n               function y(){\n                   console.log(a); // will print a , because of lexical scope, it will first look 'a' in\n               //its local memory space and then in its parent functions memory space\n               }\n               y();\n           }\n           x();\n     </script>\n     ```",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 468,
    "question": "How to detect system dark mode in javascript?",
    "description": "The combination of `Window.matchMedia()` utility method along with media query is used to check if the user has selected a dark color scheme in their operating system settings or not. The CSS media query `prefers-color-scheme` needs to be passed to identify system color theme.\n\n     The following javascript code describes the usage,\n\n     \n\n     You can also watch changes to system color scheme using `addEventListener`,\n\n     \n\n     Note: The matchMedia method returns MediaQueryList object stores information from a media query.",
    "codeExamples": [
      "const hasDarkColorScheme = () =>\n       window.matchMedia &&\n       window.matchMedia(\"(prefers-color-scheme: dark)\").matches;",
      "window\n       .matchMedia(\"(prefers-color-scheme: dark)\")\n       .addEventListener(\"change\", (event) => {\n         const theme = event.matches ? \"dark\" : \"light\";\n       });"
    ],
    "tables": []
  },
  {
    "id": 469,
    "question": "What is the purpose of requestAnimationFrame method?",
    "description": "The requestAnimationFrame() method in JavaScript is used to schedule a function to be called before the next repaint of the browser window, allowing you to create smooth, efficient animations. It's primarily used for animations and visual updates, making it an essential tool for improving performance when you're animating elements on the web.",
    "codeExamples": [
      "const element = document.getElementById(\"myElement\");\nfunction animate() {\n  let currentPosition = parseInt(window.getComputedStyle(element).left, 10);\n\n  // Move the element 2px per frame\n  currentPosition += 2;\n  element.style.left = currentPosition + \"px\";\n  // If the element hasn't moved off-screen, request the next frame\n  if (currentPosition < window.innerWidth) {\n    requestAnimationFrame(animate);\n  }\n}\n// Start the animation\nrequestAnimationFrame(animate);"
    ],
    "tables": []
  },
  {
    "id": 470,
    "question": "What is the difference between substring and substr methods?",
    "description": "Both `substring` and `substr` are used to extract parts of a string, but there are subtle differences between the substring() and substr() methods in terms of syntax and behavior.\n\n     1. `substring(start, end)`\n         - Parameters:\n             - `start`: The index to start extracting (inclusive).\n             - `end`: The index to stop extracting (exclusive).\n         - Behavior:\n             - If `start > end`, it swaps the arguments.\n             - Negative values are treated as `0`.\n\n         \n     2. `substr(start, length)` _(Deprecated)_\n\n         - Parameters:\n           - `start`: The index to start extracting.\n           - `length`: The number of characters to extract.\n         - Behavior:\n           - If `start` is negative, it counts from the end of the string.\n           - If `length` is omitted, it extracts to the end of the string.\n\n         \n         Note: substr() is considered a legacy feature in ECMAScript, so it is best to avoid using it if possible.",
    "codeExamples": [
      "let str = \"Hello World\";\n          console.log(str.substring(0, 5));   // \"Hello\"\n          console.log(str.substring(5, 0));   // \"Hello\" (swapped)\n          console.log(str.substring(-3, 4));  // \"Hell\" (negative = 0)",
      "let str = \"Hello World\"; console.log(str.substr(0, 5)); // \"Hello\" \n         console.log(str.substr(-5, 3)); // \"Wor\" (starts from 'W')`"
    ],
    "tables": []
  },
   {
    "id": 471,
    "question": "How to find the number of parameters expected by a function?",
    "description": "The function's object has a length property which tells you how many formal parameters expected by a function. This is a static value defined by the function, not the number of arguments the function is called with(arguments.length). The basic usage of length propery is,\n\n\n\nBut there are few important rules which needs to be noted while using length property.\n\n1. Default values: Only the parameters which exists before a default value are considered.\n   \n2. Rest params: The rest parameters are excluded with in length property.\n   \n3. Destructuring patterns: Each destructuring pattern counted as a single parameter.\n\n   \n\nNote: The Function constructor is itself a function object and it has a length property of 1.",
    "codeExamples": [
      "function multiply(x, y) {\n  return x * y;\n}\n\nfunction sum(a, b, c) {\n  return a + b + c;\n}\n\nconsole.log(multiply.length); //2\nconsole.log(sum.length); //3",
      "function sum(a, b = 2, c = 3) {\n     return a + b + c;\n   }\n   console.log(sum.length); // 1",
      "function sum(a, b, ...moreArgs) {\n     let total = a + b;\n     for (const arg of moreArgs) {\n       total += arg;\n     }\n     return total;\n   }\n   console.log(sum.length); // 2",
      "function func([a, b], { x, y }) {\n     console.log(a + b, x, y);\n   }\n\n   console.log(func.length); // 2"
    ],
    "tables": []
  },
  {
    "id": 472,
    "question": "What is globalThis, and what is the importance of it?",
    "description": "Nowadays JavaScript language is used in a wide variety of environments and each environment has its own object model. Due to this fact, there are different ways(syntax) to access the global object.\n\n     1. In web browser, the global object is accessible via `window`, `self`, or `frames`.\n     2. In Node environment, you have to use `global`.\n     3. In Web workers, the global object is available through `self`.\n\nThe `globalThis` property provides a standard way of accessing the global object without writing various code snippet to support multiple environments. For example, the global object retuned from multiple environments as shown below,",
    "codeExamples": [
      "//1. browser environment\nconsole.log(globalThis); // => Window {...}\n\n//2. node.js environment\nconsole.log(globalThis); // => Object [global] {...}\n\n//3. web worker environment\nconsole.log(globalThis); // => DedicatedWorkerGlobalScope {...}"
    ],
    "tables": []
  },
  {
    "id": 473,
    "question": "What are the array mutation methods?",
    "description": "JavaScript array methods can be categorized into two groups:\n1. Mutating methods: These are the methods that directly modify the original array.\n1. Non-mutating methods: These methods return a new array without altering the original one.\n\nThere are 9 methods in total that mutate the arrays,\n\n1.  push: Adds one or more elements to the end of the array and returns the new length.\n2.  pop: Removes the last element from the array and returns that element.\n3.  unshift: Adds one or more elements to the beginning of the array and returns the new length..\n4.  shift: Removes the first element from the array and returns that element.\n5.  splice: Adds or removes elements from the array at a specific index position.\n6.  sort: Sorts the elements of the array in-place based on a given sorting criteria.\n7.  reverse: Reverses the order of elements in the given array.\n8.  fill: Fills all elements of the array with a specific value.\n9.  copyWithIn: Copies a sequence of elements within the array to a specified target index in the same array.",
    "codeExamples": [],
    "tables": []
  },
  {
    "id": 474,
    "question": "What is module scope in JavaScript?",
    "description": "Module scope is a feature introduced with ES6 (ES2015) modules that creates a scope specific to a module file, isolating variables and functions declared within it from the global scope and other modules. Variables and functions declared in a module are private by default and can only be accessed by other modules if they are explicitly exported.\n\nKey characteristics of module scope:\n\n1.  Variables declared in a module are scoped to that module only.\n2.  Each module has its own top-level scope\n3.  Variables and functions need to be explicitly exported to be used in other modules\n4.  The global scope cannot access module variables unless they are explicitly exported and imported\n5.  Modules are always executed in strict mode\n\n\n\nCommon use cases and benefits:\n\n- Encapsulation of module-specific code\n- Prevention of global scope pollution\n- Better code organization and maintenance\n- Explicit dependency management\n- Protection of private implementation details",
    "codeExamples": [
      "// moduleA.js\n\n// This variable is PRIVATE to moduleA. It's like a tool inside a closed box.\nconst privateVariable = \"I am private\";\n\n// This variable is PUBLIC because it's exported. Others can use it when they import moduleA.\nexport const publicVariable = \"I am public\";\n\n// PUBLIC function because it's exported. But it can still access privateVariable inside moduleA.\nexport function publicFunction() {\n  console.log(privateVariable); // ✅ This works because we're inside the same module.\n  return \"Hello from publicFunction!\";\n}\n\n// moduleB.js\n\n// Importing PUBLIC items from moduleA.\nimport { publicVariable, publicFunction } from \"./moduleA.js\";\n\nconsole.log(publicVariable); // ✅ \"I am public\" - Works because it's exported.\nconsole.log(publicFunction()); // ✅ \"Hello from publicFunction!\" - Works as well.\n\n// ❌ This will cause an ERROR because privateVariable was NOT exported from moduleA.\n// console.log(privateVariable);   // ❌ ReferenceError: privateVariable is not defined"
    ],
    "tables": []
  },
  {
    "id": 475,
    "question": "What are shadowing and illegal shadowing?",
    "description": "Both shadowing and illegal shadowing refer to how variable names can \"hide\" or override others within nested scopes.\n\n     Shadowing occurs when a variable declared within a certain scope (like a function or block) has the same name as a variable declared in an outer scope. The inner variable shadows the outer one — meaning, the inner variable takes precedence in its own scope.\n\n     Let's take an example where the inner `a` inside `func()` shadows the outer variable `a`.\n\n      \n\n     Illegal shadowing in JavaScript refers to a syntax error that happens when you try to declare a block-scoped variable (`let` or `const`) with the same name as a variable declared using `var` in the same or an overlapping scope. \n\n     For example, if you declare both block-scoped variable and function scoped variable using the same name inside a function causes an illegal shadowing.\n\n      \n    \n      As an another example, if you declare a variable with `let` or `const` in an outer scope, and then try to redeclare it with `var` inside a nested block, JavaScript throws an error — even though `var` is supposed to be function-scoped. Since the var appears in a block, it ends up trying to overwrite the `let` in the outer scope, which causes a conflict.",
    "codeExamples": [
      "let a = 10;\n\n      function func() {\n        let a = 20; // Shadows the outer 'a'\n        console.log(a); // 20\n      }\n\n      func();\n      console.log(a); // 10",
      "function test() {\n        var a = 10;\n        let a = 20; // SyntaxError: Identifier 'a' has already been declared\n      }",
      "let a = 10;\n      {\n        var a = 20; // SyntaxError: Identifier 'a' has already been declared\n        console.log(a);\n      }"
    ],
    "tables": []
  },

];

export const sampleQuizQuestions: QuizQuestion[] =  [
	{
		id: 1,
		title: "1. What's the output?",
		code:
			'function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = "Lydia";\n  let age = 21;\n}\n\nsayHi();',
		options: [
			{
				correct: false,
				text: "`Lydia` and `undefined`"
			},
			{
				correct: false,
				text: "`Lydia` and `ReferenceError`"
			},
			{
				correct: false,
				text: "`ReferenceError` and `21`"
			},
			{
				correct: true,
				text: "`undefined` and `ReferenceError`"
			}
		],
		explanation:
			"Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.\n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`."
	},
	{
		id: 2,
		title: "2. What's the output?",
		code:
			"for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
		options: [
			{
				correct: false,
				text: "`0 1 2` and `0 1 2`"
			},
			{
				correct: false,
				text: "`0 1 2` and `3 3 3`"
			},
			{
				correct: true,
				text: "`3 3 3` and `0 1 2`"
			}
		],
		explanation:
			"Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.\n\nIn the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop."
	},
	{
		id: 3,
		title: "3. What's the output?",
		code:
			"const shape = {\n  radius: 10,\n  diameter() {\n    return this.radius * 2;\n  },\n  perimeter: () => 2 * Math.PI * this.radius\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());",
		options: [
			{
				correct: false,
				text: "`20` and `62.83185307179586`"
			},
			{
				correct: true,
				text: "`20` and `NaN`"
			},
			{
				correct: false,
				text: "`20` and `63`"
			},
			{
				correct: false,
				text: "`NaN` and `63`"
			}
		],
		explanation:
			"Note that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function.\n\nWith arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn't refer to the shape object, but to its surrounding scope (window for example).\n\nThere is no value `radius` on that object, which returns `undefined`."
	},
	{
		id: 4,
		title: "4. What's the output?",
		code: '+true;\n!"Lydia";',
		options: [
			{
				correct: true,
				text: "`1` and `false`"
			},
			{
				correct: false,
				text: "`false` and `NaN`"
			},
			{
				correct: false,
				text: "`false` and `false`"
			}
		],
		explanation:
			"The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.\n\nThe string `'Lydia'` is a truthy value. What we're actually asking, is \"is this truthy value falsy?\". This returns `false`."
	},
	{
		id: 5,
		title: "5. Which one is true?",
		code:
			'const bird = {\n  size: "small"\n};\n\nconst mouse = {\n  name: "Mickey",\n  small: true\n};',
		options: [
			{
				correct: true,
				text: "`mouse.bird.size` is not valid"
			},
			{
				correct: false,
				text: "`mouse[bird.size]` is not valid"
			},
			{
				correct: false,
				text: '`mouse[bird["size"]]` is not valid'
			},
			{
				correct: false,
				text: "All of them are valid"
			}
		],
		explanation:
			'In JavaScript, all object keys are strings (unless it\'s a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.\n\n`mouse[bird.size]`: First it evaluates `bird.size`, which is `"small"`. `mouse["small"]` returns `true`\n\nHowever, with dot notation, this doesn\'t happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we\'re actually asking `undefined.size`. This isn\'t valid, and will throw an error similar to `Cannot read property "size" of undefined`.'
	},
	{
		id: 6,
		title: "6. What's the output?",
		code:
			'let c = { greeting: "Hey!" };\nlet d;\n\nd = c;\nc.greeting = "Hello";\nconsole.log(d.greeting);',
		options: [
			{
				correct: true,
				text: "`Hello`"
			},
			{
				correct: false,
				text: "`Hey!`"
			},
			{
				correct: false,
				text: "`undefined`"
			},
			{
				correct: false,
				text: "`ReferenceError`"
			},
			{
				correct: false,
				text: "`TypeError`"
			}
		],
		explanation:
			'In JavaScript, all objects interact by _reference_ when setting them equal to each other.\n\nFirst, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.\n\n<img src="https://i.imgur.com/ko5k0fs.png" width="200">\n\nWhen you change one object, you change all of them.'
	},
	{
		id: 7,
		title: "7. What's the output?",
		code:
			"let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);",
		options: [
			{
				correct: false,
				text: "`true` `false` `true`"
			},
			{
				correct: false,
				text: "`false` `false` `true`"
			},
			{
				correct: true,
				text: "`true` `false` `false`"
			},
			{
				correct: false,
				text: "`false` `true` `true`"
			}
		],
		explanation:
			"`new Number()` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.\n\nWhen we use the `==` operator, it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.\n\nHowever, when we use the `===` operator, both value _and_ type should be the same. It's not: `new Number()` is not a number, it's an **object**. Both return `false.`"
	},
	{
		id: 8,
		title: "8. What's the output?",
		code:
			'class Chameleon {\n  static colorChange(newColor) {\n    this.newColor = newColor;\n    return this.newColor;\n  }\n\n  constructor({ newColor = "green" } = {}) {\n    this.newColor = newColor;\n  }\n}\n\nconst freddie = new Chameleon({ newColor: "purple" });\nconsole.log(freddie.colorChange("orange"));',
		options: [
			{
				correct: false,
				text: "`orange`"
			},
			{
				correct: false,
				text: "`purple`"
			},
			{
				correct: false,
				text: "`green`"
			},
			{
				correct: true,
				text: "`TypeError`"
			}
		],
		explanation:
			"The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since `freddie` is a child, the function is not passed down, and not available on the `freddie` instance: a `TypeError` is thrown."
	},
	{
		id: 9,
		title: "9. What's the output?",
		code: "let greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);",
		options: [
			{
				correct: true,
				text: "`{}`"
			},
			{
				correct: false,
				text: "`ReferenceError: greetign is not defined`"
			},
			{
				correct: false,
				text: "`undefined`"
			}
		],
		explanation:
			'It logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as `global.greetign = {}` (or `window.greetign = {}` in a browser).\n\nIn order to avoid this, we can use `"use strict"`. This makes sure that you have declared a variable before setting it equal to anything.'
	},
	{
		id: 10,
		title: "10. What happens when we do this?",
		code:
			'function bark() {\n  console.log("Woof!");\n}\n\nbark.animal = "dog";',
		options: [
			{
				correct: true,
				text: "Nothing, this is totally fine!"
			},
			{
				correct: false,
				text: "`SyntaxError`. You cannot add properties to a function this way."
			},
			{
				correct: false,
				text: '`"Woof"` gets logged.'
			},
			{
				correct: false,
				text: "`ReferenceError`"
			}
		],
		explanation:
			"This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)\n\nA function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable."
	},
	{
		id: 11,
		title: "11. What's the output?",
		code:
			'function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst member = new Person("Lydia", "Hallie");\nPerson.getFullName = function() {\n  return `${this.firstName} ${this.lastName}`;\n};\n\nconsole.log(member.getFullName());',
		options: [
			{
				correct: true,
				text: "`TypeError`"
			},
			{
				correct: false,
				text: "`SyntaxError`"
			},
			{
				correct: false,
				text: "`Lydia Hallie`"
			},
			{
				correct: false,
				text: "`undefined` `undefined`"
			}
		],
		explanation:
			"You can't add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, you have to use the prototype instead. So in this case,\n\n```js\nPerson.prototype.getFullName = function() {\n  return `${this.firstName} ${this.lastName}`;\n};\n```\n\nwould have made `member.getFullName()` work. Why is this beneficial? Say that we added this method to the constructor itself. Maybe not every `Person` instance needed this method. This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!"
	},
	{
		id: 12,
		title: "12. What's the output?",
		code:
			'function Person(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n}\n\nconst lydia = new Person("Lydia", "Hallie");\nconst sarah = Person("Sarah", "Smith");\n\nconsole.log(lydia);\nconsole.log(sarah);',
		options: [
			{
				correct: true,
				text:
					'`Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`'
			},
			{
				correct: false,
				text:
					'`Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`'
			},
			{
				correct: false,
				text: '`Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`'
			},
			{
				correct: false,
				text:
					'`Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`'
			}
		],
		explanation:
			"For `sarah`, we didn't use the `new` keyword. When using `new`, it refers to the new empty object we create. However, if you don't add `new` it refers to the **global object**!\n\nWe said that `this.firstName` equals `\"Sarah\"` and `this.lastName` equals `\"Smith\"`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function."
	},
	{
		id: 13,
		title: "13. What are the three phases of event propagation?",
		code: "",
		options: [
			{
				correct: false,
				text: "Target > Capturing > Bubbling"
			},
			{
				correct: false,
				text: "Bubbling > Target > Capturing"
			},
			{
				correct: false,
				text: "Target > Bubbling > Capturing"
			},
			{
				correct: true,
				text: "Capturing > Target > Bubbling"
			}
		],
		explanation:
			'During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.\n\n<img src="https://i.imgur.com/N18oRgd.png" width="200">'
	},
	{
		id: 14,
		title: "14. All object have prototypes.",
		code: "",
		options: [
			{
				correct: false,
				text: "true"
			},
			{
				correct: true,
				text: "false"
			}
		],
		explanation:
			"All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the `new` keyword. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you."
	},
	{
		id: 15,
		title: "15. What's the output?",
		code: 'function sum(a, b) {\n  return a + b;\n}\n\nsum(1, "2");',
		options: [
			{
				correct: false,
				text: "`NaN`"
			},
			{
				correct: false,
				text: "`TypeError`"
			},
			{
				correct: true,
				text: '`"12"`'
			},
			{
				correct: false,
				text: "`3`"
			}
		],
		explanation:
			'JavaScript is a **dynamically typed language**: we don\'t specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.\n\nIn this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`\'2\'`), the number is treated as a string. We can concatenate strings like `"Hello" + "World"`, so what\'s happening here is `"1" + "2"` which returns `"12"`.'
	},
	{
		id: 16,
		title: "16. What's the output?",
		code:
			"let number = 0;\nconsole.log(number++);\nconsole.log(++number);\nconsole.log(number);",
		options: [
			{
				correct: false,
				text: "`1` `1` `2`"
			},
			{
				correct: false,
				text: "`1` `2` `2`"
			},
			{
				correct: true,
				text: "`0` `2` `2`"
			},
			{
				correct: false,
				text: "`0` `1` `2`"
			}
		],
		explanation:
			"The **postfix** unary operator `++`:\n\n1. Returns the value (this returns `0`)\n2. Increments the value (number is now `1`)\n\nThe **prefix** unary operator `++`:\n\n1. Increments the value (number is now `2`)\n2. Returns the value (this returns `2`)\n\nThis returns `0 2 2`."
	},
	{
		id: 17,
		title: "17. What's the output?",
		code:
			'function getPersonInfo(one, two, three) {\n  console.log(one);\n  console.log(two);\n  console.log(three);\n}\n\nconst person = "Lydia";\nconst age = 21;\n\ngetPersonInfo`${person} is ${age} years old`;',
		options: [
			{
				correct: false,
				text: '`"Lydia"` `21` `["", " is ", " years old"]`'
			},
			{
				correct: true,
				text: '`["", " is ", " years old"]` `"Lydia"` `21`'
			},
			{
				correct: false,
				text: '`"Lydia"` `["", " is ", " years old"]` `21`'
			}
		],
		explanation:
			"If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!"
	},
	{
		id: 18,
		title: "18. What's the output?",
		code:
			'function checkAge(data) {\n  if (data === { age: 18 }) {\n    console.log("You are an adult!");\n  } else if (data == { age: 18 }) {\n    console.log("You are still an adult.");\n  } else {\n    console.log(`Hmm.. You don\'t have an age I guess`);\n  }\n}\n\ncheckAge({ age: 18 });',
		options: [
			{
				correct: false,
				text: "`You are an adult!`"
			},
			{
				correct: false,
				text: "`You are still an adult.`"
			},
			{
				correct: true,
				text: "`Hmm.. You don't have an age I guess`"
			}
		],
		explanation:
			"When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.\n\nThe two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.\n\nThis is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`."
	},
	{
		id: 19,
		title: "19. What's the output?",
		code:
			"function getAge(...args) {\n  console.log(typeof args);\n}\n\ngetAge(21);",
		options: [
			{
				correct: false,
				text: '`"number"`'
			},
			{
				correct: false,
				text: '`"array"`'
			},
			{
				correct: true,
				text: '`"object"`'
			},
			{
				correct: false,
				text: '`"NaN"`'
			}
		],
		explanation:
			'The rest parameter (`...args`.) lets us "collect" all remaining arguments into an array. An array is an object, so `typeof args` returns `"object"`'
	},
	{
		id: 20,
		title: "20. What's the output?",
		code:
			'function getAge() {\n  "use strict";\n  age = 21;\n  console.log(age);\n}\n\ngetAge();',
		options: [
			{
				correct: false,
				text: "`21`"
			},
			{
				correct: false,
				text: "`undefined`"
			},
			{
				correct: true,
				text: "`ReferenceError`"
			},
			{
				correct: false,
				text: "`TypeError`"
			}
		],
		explanation:
			'With `"use strict"`, you can make sure that you don\'t accidentally declare global variables. We never declared the variable `age`, and since we use `"use strict"`, it will throw a reference error. If we didn\'t use `"use strict"`, it would have worked, since the property `age` would have gotten added to the global object.'
	},
	{
		id: 21,
		title: "21. What's value of `sum`?",
		code: 'const sum = eval("10*10+5");',
		options: [
			{
				correct: true,
				text: "`105`"
			},
			{
				correct: false,
				text: '`"105"`'
			},
			{
				correct: false,
				text: "`TypeError`"
			},
			{
				correct: false,
				text: '`"10*10+5"`'
			}
		],
		explanation:
			"`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`."
	},
	{
		id: 22,
		title: "22. How long is cool_secret accessible?",
		code: 'sessionStorage.setItem("cool_secret", 123);',
		options: [
			{
				correct: false,
				text: "Forever, the data doesn't get lost."
			},
			{
				correct: true,
				text: "When the user closes the tab."
			},
			{
				correct: false,
				text: "When the user closes the entire browser, not only the tab."
			},
			{
				correct: false,
				text: "When the user shuts off their computer."
			}
		],
		explanation:
			"The data stored in `sessionStorage` is removed after closing the _tab_.\n\nIf you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked."
	},
	{
		id: 23,
		title: "23. What's the output?",
		code: "var num = 8;\nvar num = 10;\n\nconsole.log(num);",
		options: [
			{
				correct: false,
				text: "`8`"
			},
			{
				correct: true,
				text: "`10`"
			},
			{
				correct: false,
				text: "`SyntaxError`"
			},
			{
				correct: false,
				text: "`ReferenceError`"
			}
		],
		explanation:
			"With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.\n\nYou cannot do this with `let` or `const` since they're block-scoped."
	},
	{
		id: 24,
		title: "24. What's the output?",
		code:
			'const obj = { 1: "a", 2: "b", 3: "c" };\nconst set = new Set([1, 2, 3, 4, 5]);\n\nobj.hasOwnProperty("1");\nobj.hasOwnProperty(1);\nset.has("1");\nset.has(1);',
		options: [
			{
				correct: false,
				text: "`false` `true` `false` `true`"
			},
			{
				correct: false,
				text: "`false` `true` `true` `true`"
			},
			{
				correct: true,
				text: "`true` `true` `false` `true`"
			},
			{
				correct: false,
				text: "`true` `true` `true` `true`"
			}
		],
		explanation:
			"All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.\n\nIt doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`."
	},
	{
		id: 25,
		title: "25. What's the output?",
		code: 'const obj = { a: "one", b: "two", a: "three" };\nconsole.log(obj);',
		options: [
			{
				correct: false,
				text: '`{ a: "one", b: "two" }`'
			},
			{
				correct: false,
				text: '`{ b: "two", a: "three" }`'
			},
			{
				correct: true,
				text: '`{ a: "three", b: "two" }`'
			},
			{
				correct: false,
				text: "`SyntaxError`"
			}
		],
		explanation:
			"If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value."
	},
	{
		id: 26,
		title:
			'26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.',
		code: "",
		options: [
			{
				correct: true,
				text: "true"
			},
			{
				correct: false,
				text: "false"
			},
			{
				correct: false,
				text: "it depends"
			}
		],
		explanation:
			"The base execution context is the global execution context: it's what's accessible everywhere in your code."
	},
	{
		id: 27,
		title: "27. What's the output?",
		code:
			"for (let i = 1; i < 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}",
		options: [
			{
				correct: false,
				text: "`1` `2`"
			},
			{
				correct: false,
				text: "`1` `2` `3`"
			},
			{
				correct: true,
				text: "`1` `2` `4`"
			},
			{
				correct: false,
				text: "`1` `3` `4`"
			}
		],
		explanation:
			"The `continue` statement skips an iteration if a certain condition returns `true`."
	},
	{
		id: 28,
		title: "28. What's the output?",
		code:
			'String.prototype.giveLydiaPizza = () => {\n  return "Just give Lydia pizza already!";\n};\n\nconst name = "Lydia";\n\nname.giveLydiaPizza();',
		options: [
			{
				correct: true,
				text: '`"Just give Lydia pizza already!"`'
			},
			{
				correct: false,
				text: "`TypeError: not a function`"
			},
			{
				correct: false,
				text: "`SyntaxError`"
			},
			{
				correct: false,
				text: "`undefined`"
			}
		],
		explanation:
			"`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!"
	},
	{
		id: 29,
		title: "29. What's the output?",
		code:
			'const a = {};\nconst b = { key: "b" };\nconst c = { key: "c" };\n\na[b] = 123;\na[c] = 456;\n\nconsole.log(a[b]);',
		options: [
			{
				correct: false,
				text: "`123`"
			},
			{
				correct: true,
				text: "`456`"
			},
			{
				correct: false,
				text: "`undefined`"
			},
			{
				correct: false,
				text: "`ReferenceError`"
			}
		],
		explanation:
			'Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.\n\nHowever, when we stringify an object, it becomes `"[object Object]"`. So what we are saying here, is that `a["object Object"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["object Object"] = 456`.\n\nThen, we log `a[b]`, which is actually `a["object Object"]`. We just set that to `456`, so it returns `456`.'
	},
	{
		id: 30,
		title: "30. What's the output?",
		code:
			'const foo = () => console.log("First");\nconst bar = () => setTimeout(() => console.log("Second"));\nconst baz = () => console.log("Third");\n\nbar();\nfoo();\nbaz();',
		options: [
			{
				correct: false,
				text: "`First` `Second` `Third`"
			},
			{
				correct: true,
				text: "`First` `Third` `Second`"
			},
			{
				correct: false,
				text: "`Second` `First` `Third`"
			},
			{
				correct: false,
				text: "`Second` `Third` `First`"
			}
		],
		explanation:
			'We have a `setTimeout` function and invoked it first. Yet, it was logged last.\n\nThis is because in browsers, we don\'t just have the runtime engine, we also have something called a `WebAPI`. The `WebAPI` gives us the `setTimeout` function to start with, and for example the DOM.\n\nAfter the _callback_ is pushed to the WebAPI, the `setTimeout` function itself (but not the callback!) is popped off the stack.\n\n<img src="https://i.imgur.com/X5wsHOg.png" width="200">\n\nNow, `foo` gets invoked, and `"First"` is being logged.\n\n<img src="https://i.imgur.com/Pvc0dGq.png" width="200">\n\n`foo` is popped off the stack, and `baz` gets invoked. `"Third"` gets logged.\n\n<img src="https://i.imgur.com/WhA2bCP.png" width="200">\n\nThe WebAPI can\'t just add stuff to the stack whenever it\'s ready. Instead, it pushes the callback function to something called the _queue_.\n\n<img src="https://i.imgur.com/NSnDZmU.png" width="200">\n\nThis is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.\n\n<img src="https://i.imgur.com/uyiScAI.png" width="200">\n\n`bar` gets invoked, `"Second"` gets logged, and it\'s popped off the stack.'
	},
	{
		id: 31,
		title: "31. What is the event.target when clicking the button?",
		code:
			"<div onclick=\"console.log('first div')\">\n  <div onclick=\"console.log('second div')\">\n    <button onclick=\"console.log('button')\">\n      Click!\n    </button>\n  </div>\n</div>",
		options: [
			{
				correct: false,
				text: "Outer `div`"
			},
			{
				correct: false,
				text: "Inner `div`"
			},
			{
				correct: true,
				text: "`button`"
			},
			{
				correct: false,
				text: "An array of all nested elements."
			}
		],
		explanation:
			"The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`"
	},
	{
		id: 32,
		title: "32. When you click the paragraph, what's the logged output?",
		code:
			"<div onclick=\"console.log('div')\">\n  <p onclick=\"console.log('p')\">\n    Click here!\n  </p>\n</div>",
		options: [
			{
				correct: true,
				text: "`p` `div`"
			},
			{
				correct: false,
				text: "`div` `p`"
			},
			{
				correct: false,
				text: "`p`"
			},
			{
				correct: false,
				text: "`div`"
			}
		],
		explanation:
			"If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards."
	},
	{
		id: 33,
		title: "33. What's the output?",
		code:
			'const person = { name: "Lydia" };\n\nfunction sayHi(age) {\n  return `${this.name} is ${age}`;\n}\n\nconsole.log(sayHi.call(person, 21));\nconsole.log(sayHi.bind(person, 21));',
		options: [
			{
				correct: false,
				text: "`undefined is 21` `Lydia is 21`"
			},
			{
				correct: false,
				text: "`function` `function`"
			},
			{
				correct: false,
				text: "`Lydia is 21` `Lydia is 21`"
			},
			{
				correct: true,
				text: "`Lydia is 21` `function`"
			}
		],
		explanation:
			"With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!\n\n`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately."
	},
	{
		id: 34,
		title: "34. What's the output?",
		code:
			"function sayHi() {\n  return (() => 0)();\n}\n\nconsole.log(typeof sayHi());",
		options: [
			{
				correct: false,
				text: '`"object"`'
			},
			{
				correct: true,
				text: '`"number"`'
			},
			{
				correct: false,
				text: '`"function"`'
			},
			{
				correct: false,
				text: '`"undefined"`'
			}
		],
		explanation:
			'The `sayHi` function returns the returned value of the immediately invoked function (IIFE). This function returned `0`, which is type `"number"`.\n\nFYI: there are only 7 built-in types: `null`, `undefined`, `boolean`, `number`, `string`, `object`, and `symbol`. `"function"` is not a type, since functions are objects, it\'s of type `"object"`.'
	},
	{
		id: 35,
		title: "35. Which of these values are falsy?",
		code: '0;\nnew Number(0);\n("");\n(" ");\nnew Boolean(false);\nundefined;',
		options: [
			{
				correct: true,
				text: "`0`, `''`, `undefined`"
			},
			{
				correct: false,
				text: "`0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`"
			},
			{
				correct: false,
				text: "`0`, `''`, `new Boolean(false)`, `undefined`"
			},
			{
				correct: false,
				text: "All of them are falsy"
			}
		],
		explanation:
			"There are only six falsy values:\n\n- `undefined`\n- `null`\n- `NaN`\n- `0`\n- `''` (empty string)\n- `false`\n\nFunction constructors, like `new Number` and `new Boolean` are truthy."
	},
	{
		id: 36,
		title: "36. What's the output?",
		code: "console.log(typeof typeof 1);",
		options: [
			{
				correct: false,
				text: '`"number"`'
			},
			{
				correct: true,
				text: '`"string"`'
			},
			{
				correct: false,
				text: '`"object"`'
			},
			{
				correct: false,
				text: '`"undefined"`'
			}
		],
		explanation:
			'`typeof 1` returns `"number"`.\n`typeof "number"` returns `"string"`'
	},
	{
		id: 37,
		title: "37. What's the output?",
		code:
			"const numbers = [1, 2, 3];\nnumbers[10] = 11;\nconsole.log(numbers);",
		options: [
			{
				correct: false,
				text: "`[1, 2, 3, 7 x null, 11]`"
			},
			{
				correct: false,
				text: "`[1, 2, 3, 11]`"
			},
			{
				correct: true,
				text: "`[1, 2, 3, 7 x empty, 11]`"
			},
			{
				correct: false,
				text: "`SyntaxError`"
			}
		],
		explanation:
			'When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:\n\n`[1, 2, 3, 7 x empty, 11]`\n\ndepending on where you run it (it\'s different for every browser, node, etc.)'
	},
	{
		id: 38,
		title: "38. What's the output?",
		code:
			"(() => {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();",
		options: [
			{
				correct: true,
				text: "`1` `undefined` `2`"
			},
			{
				correct: false,
				text: "`undefined` `undefined` `undefined`"
			},
			{
				correct: false,
				text: "`1` `1` `2`"
			},
			{
				correct: false,
				text: "`1` `undefined` `undefined`"
			}
		],
		explanation:
			"The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.\n\nLater, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.\n\nOutside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`."
	},
	{
		id: 39,
		title: "39. Everything in JavaScript is either a...",
		code: "",
		options: [
			{
				correct: true,
				text: "primitive or object"
			},
			{
				correct: false,
				text: "function or object"
			},
			{
				correct: false,
				text: "trick question! only objects"
			},
			{
				correct: false,
				text: "number or object"
			}
		],
		explanation:
			"JavaScript only has primitive types and objects.\n\nPrimitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.\n\nWhat differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the object using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour."
	},
	{
		id: 40,
		title: "40. What's the output?",
		code:
			"[[0, 1], [2, 3]].reduce(\n  (acc, cur) => {\n    return acc.concat(cur);\n  },\n  [1, 2]\n);",
		options: [
			{
				correct: false,
				text: "`[0, 1, 2, 3, 1, 2]`"
			},
			{
				correct: false,
				text: "`[6, 1, 2]`"
			},
			{
				correct: true,
				text: "`[1, 2, 0, 1, 2, 3]`"
			},
			{
				correct: false,
				text: "`[1, 2, 6]`"
			}
		],
		explanation:
			"`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.\n\nThen, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`"
	},
	{
		id: 41,
		title: "41. What's the output?",
		code: '!!null;\n!!"";\n!!1;',
		options: [
			{
				correct: false,
				text: "`false` `true` `false`"
			},
			{
				correct: true,
				text: "`false` `false` `true`"
			},
			{
				correct: false,
				text: "`false` `true` `true`"
			},
			{
				correct: false,
				text: "`true` `true` `false`"
			}
		],
		explanation:
			'`null` is falsy. `!null` returns `true`. `!true` returns `false`.\n\n`""` is falsy. `!""` returns `true`. `!true` returns `false`.\n\n`1` is truthy. `!1` returns `false`. `!false` returns `true`.'
	},
	{
		id: 42,
		title: "42. What does the `setInterval` method return in the browser?",
		code: 'setInterval(() => console.log("Hi"), 1000);',
		options: [
			{
				correct: true,
				text: "a unique id"
			},
			{
				correct: false,
				text: "the amount of milliseconds specified"
			},
			{
				correct: false,
				text: "the passed function"
			},
			{
				correct: false,
				text: "`undefined`"
			}
		],
		explanation:
			"It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function."
	},
	{
		id: 43,
		title: "43. What does this return?",
		code: '[..."Lydia"];',
		options: [
			{
				correct: true,
				text: '`["L", "y", "d", "i", "a"]`'
			},
			{
				correct: false,
				text: '`["Lydia"]`'
			},
			{
				correct: false,
				text: '`[[], "Lydia"]`'
			},
			{
				correct: false,
				text: '`[["L", "y", "d", "i", "a"]]`'
			}
		],
		explanation:
			"A string is an iterable. The spread operator maps every character of an iterable to one element."
	},
	{
		id: 44,
		title: "44. What's the output?",
		code:
			"function* generator(i) {\n  yield i;\n  yield i * 2;\n}\n\nconst gen = generator(10);\n\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);",
		options: [
			{
				correct: false,
				text: "`[0, 10], [10, 20]`"
			},
			{
				correct: false,
				text: "`20, 20`"
			},
			{
				correct: true,
				text: "`10, 20`"
			},
			{
				correct: false,
				text: "`0, 10 and 10, 20`"
			}
		],
		explanation:
			'Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.\n\nFirst, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now "paused", and `10` gets logged.\n\nThen, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.'
	},
	{
		id: 45,
		title: "45. What does this return?",
		code:
			'const firstPromise = new Promise((res, rej) => {\n  setTimeout(res, 500, "one");\n});\n\nconst secondPromise = new Promise((res, rej) => {\n  setTimeout(res, 100, "two");\n});\n\nPromise.race([firstPromise, secondPromise]).then(res => console.log(res));',
		options: [
			{
				correct: false,
				text: '`"one"`'
			},
			{
				correct: true,
				text: '`"two"`'
			},
			{
				correct: false,
				text: '`"two" "one"`'
			},
			{
				correct: false,
				text: '`"one" "two"`'
			}
		],
		explanation:
			"When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged."
	},
	{
		id: 46,
		title: "46. What's the output?",
		code:
			'let person = { name: "Lydia" };\nconst members = [person];\nperson = null;\n\nconsole.log(members);',
		options: [
			{
				correct: false,
				text: "`null`"
			},
			{
				correct: false,
				text: "`[null]`"
			},
			{
				correct: false,
				text: "`[{}]`"
			},
			{
				correct: true,
				text: '`[{ name: "Lydia" }]`'
			}
		],
		explanation:
			'First, we declare a variable `person` with the value of an object that has a `name` property.\n\n<img src="https://i.imgur.com/TML1MbS.png" width="200">\n\nThen, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don\'t have the _same_ reference!)\n\n<img src="https://i.imgur.com/FSG5K3F.png" width="300">\n\nThen, we set the variable `person` equal to `null`.\n\n<img src="https://i.imgur.com/sYjcsMT.png" width="300">\n\nWe are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged.'
	},
	{
		id: 47,
		title: "47. What's the output?",
		code:
			'const person = {\n  name: "Lydia",\n  age: 21\n};\n\nfor (const item in person) {\n  console.log(item);\n}',
		options: [
			{
				correct: false,
				text: '`{ name: "Lydia" }, { age: 21 }`'
			},
			{
				correct: true,
				text: '`"name", "age"`'
			},
			{
				correct: false,
				text: '`"Lydia", 21`'
			},
			{
				correct: false,
				text: '`["name", "Lydia"], ["age", 21]`'
			}
		],
		explanation:
			"With a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged."
	},
	{
		id: 48,
		title: "48. What's the output?",
		code: 'console.log(3 + 4 + "5");',
		options: [
			{
				correct: false,
				text: '`"345"`'
			},
			{
				correct: true,
				text: '`"75"`'
			},
			{
				correct: false,
				text: "`12`"
			},
			{
				correct: false,
				text: '`"12"`'
			}
		],
		explanation:
			'Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.\n\n`3 + 4` gets evaluated first. This results in the number `7`.\n\n`7 + \'5\'` results in `"75"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `"7" + "5"` results in `"75"`.'
	},
	{
		id: 49,
		title: "49. What's the value of `num`?",
		code: 'const num = parseInt("7*6", 10);',
		options: [
			{
				correct: false,
				text: "`42`"
			},
			{
				correct: false,
				text: '`"42"`'
			},
			{
				correct: true,
				text: "`7`"
			},
			{
				correct: false,
				text: "`NaN`"
			}
		],
		explanation:
			'Only the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn\'t a valid number in the radix, it stops parsing and ignores the following characters.\n\n`*` is not a valid number. It only parses `"7"` into the decimal `7`. `num` now holds the value of `7`.'
	},
	{
		id: 50,
		title: "50. What's the output`?",
		code:
			'[1, 2, 3].map(num => {\n  if (typeof num === "number") return;\n  return num * 2;\n});',
		options: [
			{
				correct: false,
				text: "`[]`"
			},
			{
				correct: false,
				text: "`[null, null, null]`"
			},
			{
				correct: true,
				text: "`[undefined, undefined, undefined]`"
			},
			{
				correct: false,
				text: "`[ 3 x empty ]`"
			}
		],
		explanation:
			'When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === "number"` returns `true`. The map function creates a new array and inserts the values returned from the function.\n\nHowever, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.'
	},
	{
		id: 51,
		title: "51. What's the output?",
		code:
			'function getInfo(member, year) {\n  member.name = "Lydia";\n  year = "1998";\n}\n\nconst person = { name: "Sarah" };\nconst birthYear = "1997";\n\ngetInfo(person, birthYear);\n\nconsole.log(person, birthYear);',
		options: [
			{
				correct: true,
				text: '`{ name: "Lydia" }, "1997"`'
			},
			{
				correct: false,
				text: '`{ name: "Sarah" }, "1998"`'
			},
			{
				correct: false,
				text: '`{ name: "Lydia" }, "1998"`'
			},
			{
				correct: false,
				text: '`{ name: "Sarah" }, "1997"`'
			}
		],
		explanation:
			'Arguments are passed by _value_, unless their value is an object, then they\'re passed by _reference_. `birthYear` is passed by value, since it\'s a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).\n\nThe variable `birthYear` has a reference to the value `"1997"`. The argument `year` also has a reference to the value `"1997"`, but it\'s not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `"1998"`, we are only updating the value of `year`. `birthYear` is still equal to `"1997"`.\n\nThe value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`\'s `name` property is now equal to the value `"Lydia"`'
	},
	{
		id: 52,
		title: "52. What's the output?",
		code:
			'function greeting() {\n  throw "Hello world!";\n}\n\nfunction sayHi() {\n  try {\n    const data = greeting();\n    console.log("It worked!", data);\n  } catch (e) {\n    console.log("Oh no an error:", e);\n  }\n}\n\nsayHi();',
		options: [
			{
				correct: false,
				text: "`It worked! Hello world!`"
			},
			{
				correct: false,
				text: "`Oh no an error: undefined`"
			},
			{
				correct: false,
				text: "`SyntaxError: can only throw Error objects`"
			},
			{
				correct: true,
				text: "`Oh no an error: Hello world!`"
			}
		],
		explanation:
			"With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a <b>string</b>, a <b>number</b>, a <b>boolean</b> or an <b>object</b>. In this case, our exception is the string `'Hello world'`.\n\nWith the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world'`."
	},
	{
		id: 53,
		title: "53. What's the output?",
		code:
			'function Car() {\n  this.make = "Lamborghini";\n  return { make: "Maserati" };\n}\n\nconst myCar = new Car();\nconsole.log(myCar.make);',
		options: [
			{
				correct: false,
				text: '`"Lamborghini"`'
			},
			{
				correct: true,
				text: '`"Maserati"`'
			},
			{
				correct: false,
				text: "`ReferenceError`"
			},
			{
				correct: false,
				text: "`TypeError`"
			}
		],
		explanation:
			'When you return a property, the value of the property is equal to the _returned_ value, not the value set in the constructor function. We return the string `"Maserati"`, so `myCar.make` is equal to `"Maserati"`.'
	},
	{
		id: 54,
		title: "54. What's the output?",
		code:
			"(() => {\n  let x = (y = 10);\n})();\n\nconsole.log(typeof x);\nconsole.log(typeof y);",
		options: [
			{
				correct: true,
				text: '`"undefined", "number"`'
			},
			{
				correct: false,
				text: '`"number", "number"`'
			},
			{
				correct: false,
				text: '`"object", "number"`'
			},
			{
				correct: false,
				text: '`"number", "undefined"`'
			}
		],
		explanation:
			'`let x = y = 10;` is actually shorthand for:\n\n```javascript\ny = 10;\nlet x = y;\n```\n\nWhen we set `y` equal to `10`, we actually add a property `y` to the global object (`window` in browser, `global` in Node). In a browser, `window.y` is now equal to `10`.\n\nThen, we declare a variable `x` with the value of `y`, which is `10`. Variables declared with the `let` keyword are _block scoped_, they are only defined within the block they\'re declared in; the immediately-invoked function (IIFE) in this case. When we use the `typeof` operator, the operand `x` is not defined: we are trying to access `x` outside of the block it\'s declared in. This means that `x` is not defined. Values who haven\'t been assigned a value or declared are of type `"undefined"`. `console.log(typeof x)` returns `"undefined"`.\n\nHowever, we created a global variable `y` when setting `y` equal to `10`. This value is accessible anywhere in our code. `y` is defined, and holds a value of type `"number"`. `console.log(typeof y)` returns `"number"`.'
	},
	{
		id: 55,
		title: "55. What's the output?",
		code:
			'class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nDog.prototype.bark = function() {\n  console.log(`Woof I am ${this.name}`);\n};\n\nconst pet = new Dog("Mara");\n\npet.bark();\n\ndelete Dog.prototype.bark;\n\npet.bark();',
		options: [
			{
				correct: true,
				text: '`"Woof I am Mara"`, `TypeError`'
			},
			{
				correct: false,
				text: '`"Woof I am Mara"`, `"Woof I am Mara"`'
			},
			{
				correct: false,
				text: '`"Woof I am Mara"`, `undefined`'
			},
			{
				correct: false,
				text: "`TypeError`, `TypeError`"
			}
		],
		explanation:
			"We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.\n\nWhen we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`."
	},
	{
		id: 56,
		title: "56. What's the output?",
		code: "const set = new Set([1, 1, 2, 3, 4]);\n\nconsole.log(set);",
		options: [
			{
				correct: false,
				text: "`[1, 1, 2, 3, 4]`"
			},
			{
				correct: false,
				text: "`[1, 2, 3, 4]`"
			},
			{
				correct: false,
				text: "`{1, 1, 2, 3, 4}`"
			},
			{
				correct: true,
				text: "`{1, 2, 3, 4}`"
			}
		],
		explanation:
			"The `Set` object is a collection of _unique_ values: a value can only occur once in a set.\n\nWe passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`."
	},
	{
		id: 57,
		title: "57. What's the output?",
		code: "// counter.js\nlet counter = 10;\nexport default counter;",
		options: [
			{
				correct: false,
				text: "`10`"
			},
			{
				correct: false,
				text: "`11`"
			},
			{
				correct: true,
				text: "`Error`"
			},
			{
				correct: false,
				text: "`NaN`"
			}
		],
		explanation:
			"An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.\n\nWhen we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified."
	},
	{
		id: 58,
		title: "58. What's the output?",
		code:
			'const name = "Lydia";\nage = 21;\n\nconsole.log(delete name);\nconsole.log(delete age);',
		options: [
			{
				correct: true,
				text: "`false`, `true`"
			},
			{
				correct: false,
				text: '`"Lydia"`, `21`'
			},
			{
				correct: false,
				text: "`true`, `true`"
			},
			{
				correct: false,
				text: "`undefined`, `undefined`"
			}
		],
		explanation:
			"The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.\n\nThe `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`."
	},
	{
		id: 59,
		title: "59. What's the output?",
		code:
			"const numbers = [1, 2, 3, 4, 5];\nconst [y] = numbers;\n\nconsole.log(y);",
		options: [
			{
				correct: false,
				text: "`[[1, 2, 3, 4, 5]]`"
			},
			{
				correct: false,
				text: "`[1, 2, 3, 4, 5]`"
			},
			{
				correct: true,
				text: "`1`"
			},
			{
				correct: false,
				text: "`[1]`"
			}
		],
		explanation:
			'We can unpack values from arrays or properties from objects through destructuring. For example:\n\n```javascript\n[a, b] = [1, 2];\n```\n\n<img src="https://i.imgur.com/ADFpVop.png" width="200">\n\nThe value of `a` is now `1`, and the value of `b` is now `2`. What we actually did in the question, is:\n\n```javascript\n[y] = [1, 2, 3, 4, 5];\n```\n\n<img src="https://i.imgur.com/NzGkMNk.png" width="200">\n\nThis means that the value of `y` is equal to the first value in the array, which is the number `1`. When we log `y`, `1` is returned.'
	},
	{
		id: 60,
		title: "60. What's the output?",
		code:
			'const user = { name: "Lydia", age: 21 };\nconst admin = { admin: true, ...user };\n\nconsole.log(admin);',
		options: [
			{
				correct: false,
				text: '`{ admin: true, user: { name: "Lydia", age: 21 } }`'
			},
			{
				correct: true,
				text: '`{ admin: true, name: "Lydia", age: 21 }`'
			},
			{
				correct: false,
				text: '`{ admin: true, user: ["Lydia", 21] }`'
			},
			{
				correct: false,
				text: "`{ admin: true }`"
			}
		],
		explanation:
			'It\'s possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: "Lydia", age: 21 }`.'
	},
	{
		id: 61,
		title: "61. What's the output?",
		code:
			'const person = { name: "Lydia" };\n\nObject.defineProperty(person, "age", { value: 21 });\n\nconsole.log(person);\nconsole.log(Object.keys(person));',
		options: [
			{
				correct: false,
				text: '`{ name: "Lydia", age: 21 }`, `["name", "age"]`'
			},
			{
				correct: true,
				text: '`{ name: "Lydia", age: 21 }`, `["name"]`'
			},
			{
				correct: false,
				text: '`{ name: "Lydia"}`, `["name", "age"]`'
			},
			{
				correct: false,
				text: '`{ name: "Lydia"}`, `["age"]`'
			}
		],
		explanation:
			'With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `"name"`.\n\nProperties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you\'re adding to an object.'
	},
	{
		id: 62,
		title: "62. What's the output?",
		code:
			'const settings = {\n  username: "lydiahallie",\n  level: 19,\n  health: 90\n};\n\nconst data = JSON.stringify(settings, ["level", "health"]);\nconsole.log(data);',
		options: [
			{
				correct: true,
				text: '`"{"level":19, "health":90}"`'
			},
			{
				correct: false,
				text: '`"{"username": "lydiahallie"}"`'
			},
			{
				correct: false,
				text: '`"["level", "health"]"`'
			},
			{
				correct: false,
				text: '`"{"username": "lydiahallie", "level":19, "health":90}"`'
			}
		],
		explanation:
			'The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.\n\nIf the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `"level"` and `"health"` are included, `"username"` is excluded. `data` is now equal to `"{"level":19, "health":90}"`.\n\nIf the replacer is a _function_, this function gets called on every property in the object you\'re stringifying. The value returned from this function will be the value of the property when it\'s added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.'
	},
	{
		id: 63,
		title: "63. What's the output?",
		code:
			"let num = 10;\n\nconst increaseNumber = () => num++;\nconst increasePassedNumber = number => number++;\n\nconst num1 = increaseNumber();\nconst num2 = increasePassedNumber(num1);\n\nconsole.log(num1);\nconsole.log(num2);",
		options: [
			{
				correct: true,
				text: "`10`, `10`"
			},
			{
				correct: false,
				text: "`10`, `11`"
			},
			{
				correct: false,
				text: "`11`, `11`"
			},
			{
				correct: false,
				text: "`11`, `12`"
			}
		],
		explanation:
			"The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.\n\n`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`. Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`."
	},
	{
		id: 64,
		title: "64. What's the output?",
		code:
			"const value = { number: 10 };\n\nconst multiply = (x = { ...value }) => {\n  console.log((x.number *= 2));\n};\n\nmultiply();\nmultiply();\nmultiply(value);\nmultiply(value);",
		options: [
			{
				correct: false,
				text: "`20`, `40`, `80`, `160`"
			},
			{
				correct: false,
				text: "`20`, `40`, `20`, `40`"
			},
			{
				correct: true,
				text: "`20`, `20`, `20`, `40`"
			},
			{
				correct: false,
				text: "`NaN`, `NaN`, `20`, `40`"
			}
		],
		explanation:
			'In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `"undefined"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.\n\nThe default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.\n\nThe third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`. \n\nThe fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`.'
	},
	{
		id: 65,
		title: "65. What's the output?",
		code: "[1, 2, 3, 4].reduce((x, y) => console.log(x, y));",
		options: [
			{
				correct: false,
				text: "`1` `2` and `3` `3` and `6` `4`"
			},
			{
				correct: false,
				text: "`1` `2` and `2` `3` and `3` `4`"
			},
			{
				correct: false,
				text:
					"`1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`"
			},
			{
				correct: true,
				text: "`1` `2` and `undefined` `3` and `undefined` `4`"
			}
		],
		explanation:
			"The first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value. \n\nIn this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.\n\nThe value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.\n\nOn the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator and current value: `1` and `2` get logged.  \n\nIf you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged. \n\nOn the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged."
	},
	{
		id: 66,
		title:
			"66. With which constructor can we successfully extend the `Dog` class?",
		code:
			"class Dog {\n  constructor(name) {\n    this.name = name;\n  }\n};\n\nclass Labrador extends Dog {\n  // 1 \n  constructor(name, size) {\n    this.size = size;\n  }\n  // 2\n  constructor(name, size) {\n    super(name);\n    this.size = size;\n  }\n  // 3\n  constructor(size) {\n    super(name);\n    this.size = size;\n  }\n  // 4 \n  constructor(name, size) {\n    this.name = name;\n    this.size = size;\n  }\n\n};",
		options: [
			{
				correct: false,
				text: "1"
			},
			{
				correct: true,
				text: "2"
			},
			{
				correct: false,
				text: "3"
			},
			{
				correct: false,
				text: "4"
			}
		],
		explanation:
			"In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.\n\nWith the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`. \n\nThe `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly  using constructor 2."
	},
	{
		id: 67,
		title: "67. What's the output?",
		code:
			"// index.js\nconsole.log('running index.js');\nimport { sum } from './sum.js';\nconsole.log(sum(1, 2));\n\n// sum.js\nconsole.log('running sum.js');\nexport const sum = (a, b) => a + b;",
		options: [
			{
				correct: false,
				text: "`running index.js`, `running sum.js`, `3`"
			},
			{
				correct: true,
				text: "`running sum.js`, `running index.js`, `3`"
			},
			{
				correct: false,
				text: "`running sum.js`, `3`, `running index.js`"
			},
			{
				correct: false,
				text: "`running index.js`, `undefined`, `running sum.js`"
			}
		],
		explanation:
			"With the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, the code in the file which imports the module gets executed _after_.\n\nThis is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we would have used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console."
	},
	{
		id: 68,
		title: "68. What's the output?",
		code:
			"console.log(Number(2) === Number(2))\nconsole.log(Boolean(false) === Boolean(false))\nconsole.log(Symbol('foo') === Symbol('foo'))",
		options: [
			{
				correct: true,
				text: "`true`, `true`, `false`"
			},
			{
				correct: false,
				text: "`false`, `true`, `false`"
			},
			{
				correct: false,
				text: "`true`, `false`, `true`"
			},
			{
				correct: false,
				text: "`true`, `true`, `true`"
			}
		],
		explanation:
			"Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`."
	},
	{
		id: 69,
		title: "69. What's the output?",
		code:
			'const name = "Lydia Hallie"\nconsole.log(name.padStart(13))\nconsole.log(name.padStart(2))',
		options: [
			{
				correct: false,
				text: '`"Lydia Hallie"`, `"Lydia Hallie"`'
			},
			{
				correct: false,
				text:
					'`"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)'
			},
			{
				correct: true,
				text:
					'`" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)'
			},
			{
				correct: false,
				text: '`"Lydia Hallie"`, `"Lyd"`,'
			}
		],
		explanation:
			'With the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `"Lydia Hallie"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.\n\nIf the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.'
	},
	{
		id: 70,
		title: "70. What's the output?",
		code: 'console.log("🥑" + "💻");',
		options: [
			{
				correct: true,
				text: '`"🥑💻"`'
			},
			{
				correct: false,
				text: "`257548`"
			},
			{
				correct: false,
				text: "A string containing their code points"
			},
			{
				correct: false,
				text: "Error"
			}
		],
		explanation:
			'With the `+` operator, you can concatenate strings. In this case, we are concatenating the string `"🥑"` with the string `"💻"`, resulting in `"🥑💻"`.'
	},
	{
		id: 71,
		title:
			"71. How can we log the values that are commented out after the console.log statement?",
		code:
			'function* startGame() {\n  const answer = yield "Do you love JavaScript?";\n  if (answer !== "Yes") {\n    return "Oh wow... Guess we\'re gone here";\n  }\n  return "JavaScript loves you back ❤️";\n}\n\nconst game = startGame();\nconsole.log(/* 1 */); // Do you love JavaScript?\nconsole.log(/* 2 */); // JavaScript loves you back ❤️',
		options: [
			{
				correct: false,
				text: '`game.next("Yes").value` and `game.next().value`'
			},
			{
				correct: false,
				text: '`game.next.value("Yes")` and `game.next.value()`'
			},
			{
				correct: true,
				text: '`game.next().value` and `game.next("Yes").value`'
			},
			{
				correct: false,
				text: '`game.next.value()` and `game.next.value("Yes")`'
			}
		],
		explanation:
			'A generator function "pauses" its execution when it sees the `yield` keyword. First, we have to let the function yield the string "Do you love JavaScript?", which can be done by calling `game.next().value`.\n\nEvery line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_\n\nWhen we call `game.next("Yes").value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `"Yes"` in this case. The value of the variable `answer` is now equal to `"Yes"`. The condition of the if-statement returns `false`, and `JavaScript loves you back ❤️` gets logged.'
	},
	{
		id: 72,
		title: "72. What's the output?",
		code: "console.log(String.raw`Hello\\nworld`);",
		options: [
			{
				correct: false,
				text: "`Hello world!`"
			},
			{
				correct: false,
				text: "`Hello` <br />&nbsp; &nbsp; &nbsp;`world`"
			},
			{
				correct: true,
				text: "`Hello\\nworld`"
			},
			{
				correct: false,
				text: "`Hello\\n` <br /> &nbsp; &nbsp; &nbsp;`world`"
			}
		],
		explanation:
			'`String.raw` returns a string where the escapes (`\\n`, `\\v`, `\\t` etc.) are ignored! Backslashes can be an issue since you could end up with something like:\n\n`` const path = `C:\\Documents\\Projects\\table.html` ``\n\nWhich would result in:\n\n`"C:DocumentsProjects able.html"`\n\nWith `String.raw`, it would simply ignore the escape and print:\n\n`C:\\Documents\\Projects\\table.html`\n\nIn this case, the string is `Hello\\nworld`, which gets logged.'
	},
	{
		id: 73,
		title: "73. What's the output?",
		code:
			'async function getData() {\n  return await Promise.resolve("I made it!");\n}\n\nconst data = getData();\nconsole.log(data);',
		options: [
			{
				correct: false,
				text: '`"I made it!"`'
			},
			{
				correct: false,
				text: '`Promise {<resolved>: "I made it!"}`'
			},
			{
				correct: true,
				text: "`Promise {<pending>}`"
			},
			{
				correct: false,
				text: "`undefined`"
			}
		],
		explanation:
			'An async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.\n\nIf we wanted to get access to the resolved value `"I made it"`, we could have used the `.then()` method on `data`:\n\n`data.then(res => console.log(res))`\n\nThis would\'ve logged `"I made it!"`'
	},
	{
		id: 74,
		title: "74. What's the output?",
		code:
			'function addToList(item, list) {\n  return list.push(item);\n}\n\nconst result = addToList("apple", ["banana"]);\nconsole.log(result);',
		options: [
			{
				correct: false,
				text: "`['apple', 'banana']`"
			},
			{
				correct: true,
				text: "`2`"
			},
			{
				correct: false,
				text: "`true`"
			},
			{
				correct: false,
				text: "`undefined`"
			}
		],
		explanation:
			'The `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `"banana"`) and had a length of `1`. After adding the string `"apple"` to the array, the array contains two elements, and has a length of `2`. This gets returned from the `addToList` function.\n\nThe `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it.'
	},
	{
		id: 75,
		title: "75. What's the output?",
		code:
			"const box = { x: 10, y: 20 };\n\nObject.freeze(box);\n\nconst shape = box;\nshape.x = 100;\n\nconsole.log(shape);",
		options: [
			{
				correct: false,
				text: "`{ x: 100, y: 20 }`"
			},
			{
				correct: true,
				text: "`{ x: 10, y: 20 }`"
			},
			{
				correct: false,
				text: "`{ x: 100 }`"
			},
			{
				correct: false,
				text: "`ReferenceError`"
			}
		],
		explanation:
			"`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).\n\nWhen we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` returns true, since the variable `shape` has a reference to a frozen object.\n\nSince `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged."
	},
	{
		id: 76,
		title: "76. What's the output?",
		code: 'const { name: myName } = { name: "Lydia" };\n\nconsole.log(name);',
		options: [
			{
				correct: false,
				text: '`"Lydia"`'
			},
			{
				correct: false,
				text: '`"myName"`'
			},
			{
				correct: false,
				text: "`undefined`"
			},
			{
				correct: true,
				text: "`ReferenceError`"
			}
		],
		explanation:
			'When we unpack the property `name` from the object on the right-hand side, we assign its value `"Lydia"` to a variable with the name `myName`.\n\nWith `{ name: myName }`, we tell JavaScript that we want to create a new variable called `myName` with the value of the `name` property on the right-hand side.\n\nSince we try to log `name`, a variable that is not defined, a ReferenceError gets thrown.'
	},
	{
		id: 77,
		title: "77. Is this a pure function?",
		code: "function sum(a, b) {\n  return a + b;\n}",
		options: [
			{
				correct: true,
				text: "Yes"
			},
			{
				correct: false,
				text: "No"
			}
		],
		explanation:
			"A pure function is a function that _always_ returns the same result, if the same arguments are passed.\n\nThe `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function."
	},
	{
		id: 78,
		title: "78. What is the output?",
		code:
			"const add = () => {\n  const cache = {};\n  return num => {\n    if (num in cache) {\n      return `From cache! ${cache[num]}`;\n    } else {\n      const result = num + 10;\n      cache[num] = result;\n      return `Calculated! ${result}`;\n    }\n  };\n};\n\nconst addFunction = add();\nconsole.log(addFunction(10));\nconsole.log(addFunction(10));\nconsole.log(addFunction(5 * 2));",
		options: [
			{
				correct: false,
				text: "`Calculated! 20` `Calculated! 20` `Calculated! 20`"
			},
			{
				correct: false,
				text: "`Calculated! 20` `From cache! 20` `Calculated! 20`"
			},
			{
				correct: true,
				text: "`Calculated! 20` `From cache! 20` `From cache! 20`"
			},
			{
				correct: false,
				text: "`Calculated! 20` `From cache! 20` `Error`"
			}
		],
		explanation:
			"The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.\n\nIf we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards.\n\nWe call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.\n\nThe second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.\n\nThe third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged."
	},
	{
		id: 79,
		title: "79. What is the output?",
		code:
			'const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]\n\nfor (let item in myLifeSummedUp) {\n  console.log(item)\n}\n\nfor (let item of myLifeSummedUp) {\n  console.log(item)\n}',
		options: [
			{
				correct: true,
				text: '`0` `1` `2` `3` and `"☕"` ` "💻"` `"🍷"` `"🍫"`'
			},
			{
				correct: false,
				text: '`"☕"` ` "💻"` `"🍷"` `"🍫"` and `"☕"` ` "💻"` `"🍷"` `"🍫"`'
			},
			{
				correct: false,
				text: '`"☕"` ` "💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`'
			},
			{
				correct: false,
				text: '`0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`'
			}
		],
		explanation:
			'With a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the "keys" of array elements, which are actually their indexes. You could see an array as:\n\n`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`\n\nWhere the keys are the enumerable properties. `0` `1` `2` `3` get logged.\n\nWith a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable "item" is equal to the element it\'s currently iterating over, `"☕"` ` "💻"` `"🍷"` `"🍫"` get logged.'
	},
	{
		id: 80,
		title: "80. What is the output?",
		code: "const list = [1 + 2, 1 * 2, 1 / 2]\nconsole.log(list)",
		options: [
			{
				correct: false,
				text: '`["1 + 2", "1 * 2", "1 / 2"]`'
			},
			{
				correct: false,
				text: '`["12", 2, 0.5]`'
			},
			{
				correct: true,
				text: "`[3, 2, 0.5]`"
			},
			{
				correct: false,
				text: "`[1, 1, 1]`"
			}
		],
		explanation:
			"Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.\n\nThe element will be equal to the returned value.  `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`."
	},
	{
		id: 81,
		title: "81. What is the output?",
		code:
			"function sayHi(name) {\n  return `Hi there, ${name}`\n}\n\nconsole.log(sayHi())",
		options: [
			{
				correct: false,
				text: "`Hi there, `"
			},
			{
				correct: true,
				text: "`Hi there, undefined`"
			},
			{
				correct: false,
				text: "`Hi there, null`"
			},
			{
				correct: false,
				text: "`ReferenceError`"
			}
		],
		explanation:
			"By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.\n\nIn ES6, we can overwrite this default `undefined` value with default parameters. For example:\n\n`function sayHi(name = \"Lydia\") { ... }`\n\nIn this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`"
	},
	{
		id: 82,
		title: "82. What is the output?",
		code:
			'var status = "😎"\n\nsetTimeout(() => {\n  const status = "😍"\n\n  const data = {\n    status: "🥑",\n    getStatus() {\n      return this.status\n    }\n  }\n\n  console.log(data.getStatus())\n  console.log(data.getStatus.call(this))\n}, 0)',
		options: [
			{
				correct: false,
				text: '`"🥑"` and `"😍"`'
			},
			{
				correct: true,
				text: '`"🥑"` and `"😎"`'
			},
			{
				correct: false,
				text: '`"😍"` and `"😎"`'
			},
			{
				correct: false,
				text: '`"😎"` and `"😎"`'
			}
		],
		explanation:
			'The value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `"🥑"`.\n\nWith the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `"😎"`. When logging `this.status`, `"😎"` gets logged.'
	},
	{
		id: 83,
		title: "83. What is the output?",
		code:
			'const person = {\n  name: "Lydia",\n  age: 21\n}\n\nlet city = person.city\ncity = "Amsterdam"\n\nconsole.log(person)',
		options: [
			{
				correct: true,
				text: '`{ name: "Lydia", age: 21 }`'
			},
			{
				correct: false,
				text: '`{ name: "Lydia", age: 21, city: "Amsterdam" }`'
			},
			{
				correct: false,
				text: '`{ name: "Lydia", age: 21, city: undefined }`'
			},
			{
				correct: false,
				text: '`"Amsterdam"`'
			}
		],
		explanation:
			'We set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`. \n\nNote that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.\n\nThen, we set `city` equal to the string `"Amsterdam"`. This doesn\'t change the person object: there is no reference to that object.\n\nWhen logging the `person` object, the unmodified object gets returned.'
	},
	{
		id: 84,
		title: "84. What is the output?",
		code:
			'function checkAge(age) {\n  if (age < 18) {\n    const message = "Sorry, you\'re too young."\n  } else {\n    const message = "Yay! You\'re old enough!"\n  }\n\n  return message\n}\n\nconsole.log(checkAge(21))',
		options: [
			{
				correct: false,
				text: '`"Sorry, you\'re too young."`'
			},
			{
				correct: false,
				text: '`"Yay! You\'re old enough!"`'
			},
			{
				correct: true,
				text: "`ReferenceError`"
			},
			{
				correct: false,
				text: "`undefined`"
			}
		],
		explanation:
			"Variables with the `const` and `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown."
	},
	{
		id: 85,
		title: "85. What kind of information would get logged?",
		code:
			"fetch('https://www.website.com/api/user/1')\n  .then(res => res.json())\n  .then(res => console.log(res))",
		options: [
			{
				correct: false,
				text: "The result of the `fetch` method."
			},
			{
				correct: false,
				text: "The result of the second invocation of the `fetch` method."
			},
			{
				correct: true,
				text: "The result of the callback in the previous `.then()`."
			},
			{
				correct: false,
				text: "It would always be undefined."
			}
		],
		explanation:
			"The value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler."
	},
	{
		id: 86,
		title:
			"86. Which option is a way to set `hasName` equal to `true`, provided you cannot pass `true` as an argument?",
		code: "function getName(name) {\n  const hasName = //\n}",
		options: [
			{
				correct: true,
				text: "`!!name`"
			},
			{
				correct: false,
				text: "`name`"
			},
			{
				correct: false,
				text: "`new Boolean(name)`"
			},
			{
				correct: false,
				text: "`name.length`"
			}
		],
		explanation:
			"With `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.\n\nBy setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.\n\n`new Boolean(true)` returns an object wrapper, not the boolean value itself.\n\n`name.length` returns the length of the passed argument, not whether it's `true`."
	},
	{
		id: 87,
		title: "87. What's the output?",
		code: 'console.log("I want pizza"[0])',
		options: [
			{
				correct: false,
				text: '`"""`'
			},
			{
				correct: true,
				text: '`"I"`'
			},
			{
				correct: false,
				text: "`SyntaxError`"
			},
			{
				correct: false,
				text: "`undefined`"
			}
		],
		explanation:
			"In order to get an character on a specific index in a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case we want to get the element which index is 0, the character `\"I'`, which gets logged.\n\nNote that this method is not supported in IE7 and below. In that case, use `.charAt()`"
	},
	{
		id: 88,
		title: "88. What's the output?",
		code:
			"function sum(num1, num2 = num1) {\n  console.log(num1 + num2)\n}\n\nsum(10)",
		options: [
			{
				correct: false,
				text: "`NaN`"
			},
			{
				correct: true,
				text: "`20`"
			},
			{
				correct: false,
				text: "`ReferenceError`"
			},
			{
				correct: false,
				text: "`undefined`"
			}
		],
		explanation:
			"You can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`.  `num1 + num2` returns `20`.\n\nIf you're trying to set a default parameter's value equal to a parameter which is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error."
	},
	{
		id: 89,
		title: "89. What's the output?",
		code:
			'// module.js \nexport default () => "Hello world"\nexport const name = "Lydia"\n\n// index.js \nimport * as data from "./module"\n\nconsole.log(data)',
		options: [
			{
				correct: true,
				text: '`{ default: function default(), name: "Lydia" }`'
			},
			{
				correct: false,
				text: "`{ default: function default() }`"
			},
			{
				correct: false,
				text: '`{ default: "Hello world", name: "Lydia" }`'
			},
			{
				correct: false,
				text: "Global object of `module.js`"
			}
		],
		explanation:
			'With the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function which returns the string `"Hello World"`, and the named export is a variable called `name` which has the value of the string `"Lydia"`. \n\nThe `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values.'
	},
	{
		id: 90,
		title: "90. What's the output?",
		code:
			'class Person {\n  constructor(name) {\n    this.name = name\n  }\n}\n\nconst member = new Person("John")\nconsole.log(typeof member)',
		options: [
			{
				correct: false,
				text: '`"class"`'
			},
			{
				correct: false,
				text: '`"function"`'
			},
			{
				correct: true,
				text: '`"object"`'
			},
			{
				correct: false,
				text: '`"string"`'
			}
		],
		explanation:
			'Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:\n\n```javascript\nfunction Person() {\n  this.name = name\n}\n```\n\nCalling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`.'
	},
	{
		id: 91,
		title: "91. What's the output?",
		code: "let newList = [1, 2, 3].push(4)\n\nconsole.log(newList.push(5))",
		options: [
			{
				correct: false,
				text: "`[1, 2, 3, 4, 5]`"
			},
			{
				correct: false,
				text: "`[1, 2, 3, 5]`"
			},
			{
				correct: false,
				text: "`[1, 2, 3, 4]`"
			},
			{
				correct: true,
				text: "`Error`"
			}
		],
		explanation:
			"The `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`. \n\nThen, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown."
	},
	{
		id: 92,
		title: "92. What's the output?",
		code:
			'function giveLydiaPizza() {\n  return "Here is pizza!"\n}\n\nconst giveLydiaChocolate = () => "Here\'s chocolate... now go hit the gym already."\n\nconsole.log(giveLydiaPizza.prototype)\nconsole.log(giveLydiaChocolate.prototype)',
		options: [
			{
				correct: false,
				text: "`{ constructor: ...}` `{ constructor: ...}`"
			},
			{
				correct: false,
				text: "`{}` `{ constructor: ...}`"
			},
			{
				correct: false,
				text: "`{ constructor: ...}` `{}`"
			},
			{
				correct: true,
				text: "`{ constructor: ...}` `undefined`"
			}
		],
		explanation:
			"Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`."
	},
	{
		id: 93,
		title: "93. What's the output?",
		code:
			'const person = {\n  name: "Lydia",\n  age: 21\n}\n\nfor (const [x, y] of Object.entries(person)) {\n  console.log(x, y)\n}',
		options: [
			{
				correct: true,
				text: "`name` `Lydia` and `age` `21`"
			},
			{
				correct: false,
				text: '`["name", "Lydia"]` and `["age", 21]`'
			},
			{
				correct: false,
				text: '`["name", "age"]` and `undefined`'
			},
			{
				correct: false,
				text: "`Error`"
			}
		],
		explanation:
			'`Object.entries(person)` returns an array of nested arrays, containing the keys and objects:\n\n`[ [ \'name\', \'Lydia\' ], [ \'age\', 21 ] ]` \n\nUsing the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray. \n\nThe first subarray is `[ "name", "Lydia" ]`, with `x` equal to `"name"`, and `y` equal to `"Lydia"`, which get logged.\nThe second subarray is `[ "age", 21 ]`, with `x` equal to `"age"`, and `y` equal to `21`, which get logged.'
	},
	{
		id: 94,
		title: "94. What's the output?",
		code:
			'function getItems(fruitList, ...args, favoriteFruit) {\n  return [...fruitList, ...args, favoriteFruit]\n}\n\ngetItems(["banana", "apple"], "pear", "orange")',
		options: [
			{
				correct: false,
				text: '`["banana", "apple", "pear", "orange"]`'
			},
			{
				correct: false,
				text: '`[["banana", "apple"], "pear", "orange"]`'
			},
			{
				correct: false,
				text: '`["banana", "apple", ["pear"], "orange"]`'
			},
			{
				correct: true,
				text: "`SyntaxError`"
			}
		],
		explanation:
			"`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error. \n\n```javascript\nfunction getItems(fruitList, favoriteFruit, ...args) {\n  return [...fruitList, ...args, favoriteFruit]\n}\n\ngetItems([\"banana\", \"apple\"], \"pear\", \"orange\")\n```\n\nThe above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`"
	},
	{
		id: 95,
		title: "95. What's the output?",
		code:
			"function nums(a, b) {\n  if\n  (a > b)\n  console.log('a is bigger')\n  else \n  console.log('b is bigger')\n  return \n  a + b\n}\n\nconsole.log(nums(4, 2))\nconsole.log(nums(1, 2))",
		options: [
			{
				correct: false,
				text: "`a is bigger`, `6` and `b is bigger`, `3`"
			},
			{
				correct: true,
				text: "`a is bigger`, `undefined` and `b is bigger`, `undefined`"
			},
			{
				correct: false,
				text: "`undefined` and `undefined`"
			},
			{
				correct: false,
				text: "`SyntaxError`"
			}
		],
		explanation:
			"In JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc. \n\nHere, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:\n\n```javascript\n  return;\n  a + b\n```\n\nThis means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!"
	},
	{
		id: 96,
		title: "96. What's the output?",
		code:
			'class Person {\n  constructor() {\n    this.name = "Lydia"\n  }\n}\n\nPerson = class AnotherPerson {\n  constructor() {\n    this.name = "Sarah"\n  }\n}\n\nconst member = new Person()\nconsole.log(member.name)',
		options: [
			{
				correct: false,
				text: '`"Lydia"`'
			},
			{
				correct: true,
				text: '`"Sarah"`'
			},
			{
				correct: false,
				text: "`Error: cannot redeclare Person`"
			},
			{
				correct: false,
				text: "`SyntaxError`"
			}
		],
		explanation:
			'We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `"Sarah"`.'
	},
	{
		id: 97,
		title: "97. What's the output?",
		code:
			"const info = {\n  [Symbol('a')]: 'b'\n}\n\nconsole.log(info)\nconsole.log(Object.keys(info))",
		options: [
			{
				correct: false,
				text: "`{Symbol('a'): 'b'}` and `[\"{Symbol('a')\"]`"
			},
			{
				correct: false,
				text: "`{}` and `[]`"
			},
			{
				correct: false,
				text: '`{ a: "b" }` and `["a"]`'
			},
			{
				correct: true,
				text: "`{Symbol('a'): 'b'}` and `[]`"
			}
		],
		explanation:
			'A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won\'t be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.\n\nThis is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also "hide" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).'
	},
	{
		id: 98,
		title: "98. What's the output?",
		code:
			'const getList = ([x, ...y]) => [x, y]\nconst getUser = user => { name: user.name, age: user.age }\n\nconst list = [1, 2, 3, 4]\nconst user = { name: "Lydia", age: 21 }\n\nconsole.log(getList(list))\nconsole.log(getUser(user))',
		options: [
			{
				correct: true,
				text: "`[1, [2, 3, 4]]` and `undefined`"
			},
			{
				correct: false,
				text: '`[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`'
			},
			{
				correct: false,
				text: '`[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`'
			},
			{
				correct: false,
				text: '`Error` and `{ name: "Lydia", age: 21 }`'
			}
		],
		explanation:
			'The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:\n\n `[x, ...y] = [1, 2, 3, 4]`\n\n With the rest parameter `...y`, we put all "remaining" arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.\n\n The `getUser` function receives an object. With arrow functions, we don\'t _have_ to write curly brackets if we just return one value. However, if you want to return an _object_ from an arrow function, you have to write it between parentheses, otherwise no value gets returned! The following function would have returned an object:\n\n```const getUser = user => ({ name: user.name, age: user.age })```\n\nSince no value gets returned in this case, the function returns `undefined`.'
	},
	{
		id: 99,
		title: "99. What's the output?",
		code: 'const name = "Lydia"\n\nconsole.log(name())',
		options: [
			{
				correct: false,
				text: "`SyntaxError`"
			},
			{
				correct: false,
				text: "`ReferenceError`"
			},
			{
				correct: true,
				text: "`TypeError`"
			},
			{
				correct: false,
				text: "`undefined`"
			}
		],
		explanation:
			"The variable `name` holds the value of a string, which is not a function, thus cannot invoke. \n\nTypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!\n\nSyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`. \nReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access."
	},
	{
		id: 100,
		title: "100. What's the value of output?",
		code:
			"// 🎉✨ This is my 100th question! ✨🎉\n\nconst output = `${[] && 'Im'}possible!\nYou should${'' && `n't`} see a therapist after so much JavaScript lol`",
		options: [
			{
				correct: false,
				text:
					"`possible! You should see a therapist after so much JavaScript lol`"
			},
			{
				correct: true,
				text:
					"`Impossible! You should see a therapist after so much JavaScript lol`"
			},
			{
				correct: false,
				text:
					"`possible! You shouldn't see a therapist after so much JavaScript lol`"
			},
			{
				correct: false,
				text:
					"`Impossible! You shouldn't see a therapist after so much JavaScript lol`"
			}
		],
		explanation:
			"`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `\"Im'` gets returned.\n\n`\"\"` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned."
	},
	{
		id: 101,
		title: "101. What's the value of output?",
		code:
			'const one = (false || {} || null)\nconst two = (null || false || "")\nconst three = ([] || 0 || true)\n\nconsole.log(one, two, three)',
		options: [
			{
				correct: false,
				text: "`false` `null` `[]`"
			},
			{
				correct: false,
				text: '`null` `""` `true`'
			},
			{
				correct: true,
				text: '`{}` `""` `[]`'
			},
			{
				correct: false,
				text: "`null` `null` `true`"
			}
		],
		explanation:
			'With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.\n\n`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.\n\n`(null || false || "")`: all operands are falsy values. This means that the past operand, `""` gets returned. `two` is equal to `""`.\n\n`([] || 0 || "")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.'
	},
	{
		id: 102,
		title: "102. What's the value of output?",
		code:
			"const myPromise = () => Promise.resolve('I have resolved!')\n\nfunction firstFunction() {\n  myPromise().then(res => console.log(res))\n  console.log('second')\n}\n\nasync function secondFunction() {\n  console.log(await myPromise())\n  console.log('second')\n}\n\nfirstFunction()\nsecondFunction()",
		options: [
			{
				correct: false,
				text: "`I have resolved!`, `second` and `I have resolved!`, `second`"
			},
			{
				correct: false,
				text: "`second`, `I have resolved!` and `second`, `I have resolved!`"
			},
			{
				correct: false,
				text: "`I have resolved!`, `second` and `second`, `I have resolved!`"
			},
			{
				correct: true,
				text: "`second`, `I have resolved!` and `I have resolved!`, `second`"
			}
		],
		explanation:
			"With a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._\n\nWe can get this value with both `.then` and the `await` keyword in an `async` function. Although we can get a promise's value with both `.then` and `await`, they work a bit differently. \n\nIn the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty. \n\nWith the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved before moving to the next line.\n\nThis means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged."
	},
	{
		id: 103,
		title: "103. What's the value of output?",
		code:
			'const set = new Set()\n\nset.add(1)\nset.add("Lydia")\nset.add({ name: "Lydia" })\n\nfor (let item of set) {\n  console.log(item + 2)\n}',
		options: [
			{
				correct: false,
				text: "`3`, `NaN`, `NaN`"
			},
			{
				correct: false,
				text: "`3`, `7`, `NaN`"
			},
			{
				correct: true,
				text: "`3`, `Lydia2`, `[object Object]2`"
			},
			{
				correct: false,
				text: '`"12"`, `Lydia2`, `[object Object]2`'
			}
		],
		explanation:
			'The `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string. \n\nThe first one is `1`, which is a numerical value. `1 + 2` returns the number 3.\n\nHowever, the second one is a string `"Lydia"`. `"Lydia"` is a string and `2` is a number: `2` gets coerced into a string. `"Lydia"` and `"2"` get concatenated, which results in the string `"Lydia2"`. \n\n`{ name: "Lydia" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `"[object Object]"`. `"[object Object]"` concatenated with `"2"` becomes `"[object Object]2"`.'
	},
	{
		id: 104,
		title: "104. What's its value?",
		code: "Promise.resolve(5)",
		options: [
			{
				correct: false,
				text: "`5`"
			},
			{
				correct: false,
				text: "`Promise {<pending>: 5}`"
			},
			{
				correct: true,
				text: "`Promise {<resolved>: 5}`"
			},
			{
				correct: false,
				text: "`Error`"
			}
		],
		explanation:
			"We can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value. If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.\n\nIn this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`."
	},
	{
		id: 105,
		title: "105. What's its value?",
		code:
			'function compareMembers(person1, person2 = person) {\n  if (person1 !== person2) {\n    console.log("Not the same!")\n  } else {\n    console.log("They are the same!")\n  }\n}\n\nconst person = { name: "Lydia" }\n\ncompareMembers(person)',
		options: [
			{
				correct: false,
				text: "`Not the same!`"
			},
			{
				correct: true,
				text: "`They are the same!`"
			},
			{
				correct: false,
				text: "`ReferenceError`"
			},
			{
				correct: false,
				text: "`SyntaxError`"
			}
		],
		explanation:
			"Objects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references. \n\nWe set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.\n\nThis means that both values have a reference to the same spot in memory, thus they are equal.\n\nThe code block in the `else` statement gets run, and `They are the same!` gets logged."
	},
	{
		id: 106,
		title: "106. What's its value?",
		code:
			'const colorConfig = {\n  red: true,\n  blue: false,\n  green: true,\n  black: true,\n  yellow: false,\n}\n\nconst colors = ["pink", "red", "blue"]\n\nconsole.log(colorConfig.colors[1])',
		options: [
			{
				correct: false,
				text: "`true`"
			},
			{
				correct: false,
				text: "`false`"
			},
			{
				correct: false,
				text: "`undefined`"
			},
			{
				correct: true,
				text: "`TypeError`"
			}
		],
		explanation:
			"In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig[\"colors\"]`). \n\nWith dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no property called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.\n\nJavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object."
	},
	{
		id: 107,
		title: "107. What's its value?",
		code: "console.log('❤️' === '❤️')",
		options: [
			{
				correct: true,
				text: "`true`"
			},
			{
				correct: false,
				text: "`false`"
			}
		],
		explanation:
			'Under the hood, emojis are unicodes. The unicodes for the heart emoji is `"U+2764 U+FE0F"`. These are always the same for the same emojis, so we\'re comparing two equal strings to each other, which returns true.'
	},
	{
		id: 108,
		title: "108. Which of these methods modifies the original array?",
		code:
			"const emojis = ['✨', '🥑', '😍']\n\nemojis.map(x => x + '✨')\nemojis.filter(x => x !== '🥑')\nemojis.find(x => x !== '🥑')\nemojis.reduce((acc, cur) => acc + '✨')\nemojis.slice(1, 2, '✨') \nemojis.splice(1, 2, '✨')",
		options: [
			{
				correct: false,
				text: "`All of them`"
			},
			{
				correct: false,
				text: "`map` `reduce` `slice` `splice`"
			},
			{
				correct: false,
				text: "`map` `slice` `splice`"
			},
			{
				correct: true,
				text: "`splice`"
			}
		],
		explanation:
			"With `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` and `'😍'`) and added the ✨ emoji instead. \n\n`map`, `filter` and `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value."
	},
	{
		id: 109,
		title: "109. What's the output?",
		code:
			"const food = ['🍕', '🍫', '🥑', '🍔']\nconst info = { favoriteFood: food[0] }\n\ninfo.favoriteFood = '🍝'\n\nconsole.log(food)",
		options: [
			{
				correct: true,
				text: "`['🍕', '🍫', '🥑', '🍔']`"
			},
			{
				correct: false,
				text: "`['🍝', '🍫', '🥑', '🍔']`"
			},
			{
				correct: false,
				text: "`['🍝', '🍕', '🍫', '🥑', '🍔']`"
			},
			{
				correct: false,
				text: "`ReferenceError`"
			}
		],
		explanation:
			"We set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'🍕'`. A string is a primitive data type. In JavaScript, primitive data types act by reference \n\nIn JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'🍕'`). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more)\n\nThen, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['🍕', '🍫', '🥑', '🍔']`."
	},
	{
		id: 110,
		title: "110. What does this method do?",
		code: "JSON.parse()",
		options: [
			{
				correct: true,
				text: "Parses JSON to a JavaScript value"
			},
			{
				correct: false,
				text: "Parses a JavaScript object to JSON"
			},
			{
				correct: false,
				text: "Parses any JavaScript value to JSON"
			},
			{
				correct: false,
				text: "Parses JSON to a JavaScript object only"
			}
		],
		explanation:
			"With the `JSON.parse()` method, we can parse JSON string to a JavaScript value. \n\n```javascript\n// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonNumber = JSON.stringify(4) // '4'\nJSON.parse(jsonNumber) // 4\n\n// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'\nJSON.parse(jsonArray) // [1, 2, 3]\n\n// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:\nconst jsonArray = JSON.stringify({ name: \"Lydia\" }) // '{\"name\":\"Lydia\"}'\nJSON.parse(jsonArray) // { name: 'Lydia' }\n```"
	},
	{
		id: 111,
		title: "111. What's the output?",
		code:
			"let name = 'Lydia'\n\nfunction getName() {\n  console.log(name)\n  let name = 'Sarah'\n}\n\ngetName()",
		options: [
			{
				correct: false,
				text: "Lydia"
			},
			{
				correct: false,
				text: "Sarah"
			},
			{
				correct: false,
				text: "`undefined`"
			},
			{
				correct: true,
				text: "`ReferenceError`"
			}
		],
		explanation:
			"Each function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we're trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, and with the value of `'Sarah'`. \n\nVariables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get <i>initialized</i>. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`. \n\nIf we wouldn't have declared the `name` variable within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`. \n\n```javascript\nlet name = 'Lydia'\n\nfunction getName() {\n  console.log(name)\n}\n\ngetName() // Lydia\n```"
	},
	{
		id: 112,
		title: "112. What's the output?",
		code:
			"function* generatorOne() {\n  yield ['a', 'b', 'c'];\n}\n\nfunction* generatorTwo() {\n  yield* ['a', 'b', 'c'];\n}\n\nconst one = generatorOne()\nconst two = generatorTwo()\n\nconsole.log(one.next().value)\nconsole.log(two.next().value)",
		options: [
			{
				correct: false,
				text: "`a` and `a`"
			},
			{
				correct: false,
				text: "`a` and `undefined`"
			},
			{
				correct: true,
				text: "`['a', 'b', 'c']` and `a`"
			},
			{
				correct: false,
				text: "`a` and `['a', 'b', 'c']`"
			}
		],
		explanation:
			"With the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array).\n\nIn `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`.\n\n```javascript\nconsole.log(one.next().value) // ['a', 'b', 'c']\nconsole.log(one.next().value) // undefined\n```\n\nIn `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned. \n\n```javascript\nconsole.log(two.next().value) // 'a'\nconsole.log(two.next().value) // 'b'\nconsole.log(two.next().value) // 'c'\nconsole.log(two.next().value) // undefined\n```"
	},
	{
		id: 113,
		title: "113. What's the output?",
		code: "console.log(`${(x => x)('I love')} to program`)",
		options: [
			{
				correct: true,
				text: "`I love to program`"
			},
			{
				correct: false,
				text: "`undefined to program`"
			},
			{
				correct: false,
				text: "`${(x => x)('I love') to program`"
			},
			{
				correct: false,
				text: "`TypeError`"
			}
		],
		explanation:
			"Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`."
	},
	{
		id: 114,
		title: "114. What will happen?",
		code:
			"let config = {\n  alert: setInterval(() => {\n    console.log('Alert!')\n  }, 1000)\n}\n\nconfig = null",
		options: [
			{
				correct: false,
				text: "The `setInterval` callback won't be invoked"
			},
			{
				correct: false,
				text: "The `setInterval` callback gets invoked once"
			},
			{
				correct: true,
				text: "The `setInterval` callback will still be called every second"
			},
			{
				correct: false,
				text: "We never invoked `config.alert()`, config is `null`"
			}
		],
		explanation:
			"Normally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object. As long as there is a reference, the object won't get garbage collected. Since it's not garbage collected, the `setInterval` callback function will still get invoked every 1000ms (1s)."
	},
	{
		id: 115,
		title: "115. Which method(s) will return the value `'Hello world!'`?",
		code:
			"const myMap = new Map()\nconst myFunc = () => 'greeting'\n\nmyMap.set(myFunc, 'Hello world!')\n\n//1\nmyMap.get('greeting')\n//2\nmyMap.get(myFunc)\n//3\nmyMap.get(() => 'greeting')",
		options: [
			{
				correct: false,
				text: "1"
			},
			{
				correct: true,
				text: "2"
			},
			{
				correct: false,
				text: "2 and 3"
			},
			{
				correct: false,
				text: "All of them"
			}
		],
		explanation:
			"When adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`. \n\n1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`.\n3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interact by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory."
	},
	{
		id: 116,
		title: "116. What's the output?",
		code:
			'const person = {\n  name: "Lydia",\n  age: 21\n}\n\nconst changeAge = (x = { ...person }) => x.age += 1\nconst changeAgeAndName = (x = { ...person }) => {\n  x.age += 1\n  x.name = "Sarah"\n}\n\nchangeAge(person)\nchangeAgeAndName()\n\nconsole.log(person)',
		options: [
			{
				correct: false,
				text: '`{name: "Sarah", age: 22}`'
			},
			{
				correct: false,
				text: '`{name: "Sarah", age: 23}`'
			},
			{
				correct: true,
				text: '`{name: "Lydia", age: 22}`'
			},
			{
				correct: false,
				text: '`{name: "Lydia", age: 23}`'
			}
		],
		explanation:
			'Both the `changeAge` and `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object. \n\nFirst, we invoke the `changeAge` function and pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: "Lydia", age: 22 }`.\n\nThen, we invoke the `changeAgeAndName` function, however we don\'t pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it\'s a new object, it doesn\'t affect the values of the properties on the `person` object. `person` is still equal to `{ name: "Lydia", age: 22 }`.'
	},
	{
		id: 117,
		title: "117. Which of the following options will return `6`?",
		code: "function sumValues(x, y, z) {\n\treturn x + y + z;\n}",
		options: [
			{
				correct: false,
				text: "`sumValues([...1, 2, 3])`"
			},
			{
				correct: false,
				text: "`sumValues([...[1, 2, 3]])`"
			},
			{
				correct: true,
				text: "`sumValues(...[1, 2, 3])`"
			},
			{
				correct: false,
				text: "`sumValues([1, 2, 3])`"
			}
		],
		explanation:
			"With the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` and `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function."
	},
	{
		id: 118,
		title: "118. What's the output?",
		code:
			'let num = 1;\nconst list = ["🥳", "🤠", "🥰", "🤪"];\n\nconsole.log(list[(num += 1)]);',
		options: [
			{
				correct: false,
				text: "`🤠`"
			},
			{
				correct: true,
				text: "`🥰`"
			},
			{
				correct: false,
				text: "`SyntaxError`"
			},
			{
				correct: false,
				text: "`ReferenceError`"
			}
		],
		explanation:
			"With the `+=` operand, we're incrementing the value of `num` by `1`. `num` had the initial value `1`, so `1 + 1` is `2`. The item on the second index in the `list` array is 🥰, `console.log(list[2])` prints 🥰."
	},
	{
		id: 119,
		title: "119. What's the output?",
		code:
			'const person = {\n\tfirstName: "Lydia",\n\tlastName: "Hallie",\n\tpet: {\n\t\tname: "Mara",\n\t\tbreed: "Dutch Tulip Hound"\n\t},\n\tgetFullName() {\n\t\treturn `${this.firstName} ${this.lastName}`;\n\t}\n};\n\nconsole.log(person.pet?.name);\nconsole.log(person.pet?.family?.name);\nconsole.log(person.getFullName?.());\nconsole.log(member.getLastName?.());',
		options: [
			{
				correct: false,
				text: "`undefined` `undefined` `undefined` `undefined`"
			},
			{
				correct: true,
				text: "`Mara` `undefined` `Lydia Hallie` `undefined`"
			},
			{
				correct: false,
				text: "`Mara` `null` `Lydia Hallie` `null`"
			},
			{
				correct: false,
				text: "`null` `ReferenceError` `null` `ReferenceError`"
			}
		],
		explanation:
			"With the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits and returns `undefined`.\n\n`person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, and returns `Mara`.\n`person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`.\n`person.getFullName?.()`: `person` has a property named `getFullName`: `person.getFullName()` is not nullish and can get invoked, which returns `Lydia Hallie`.\n`member.getLastName?.()`: `member` is not defined: `member.getLastName()` is nullish. The expression returns `undefined`."
	},
	{
		id: 120,
		title: "120. What's the output?",
		code:
			'const groceries = ["banana", "apple", "peanuts"];\n\nif (groceries.indexOf("banana")) {\n\tconsole.log("We have to buy bananas!");\n} else {\n\tconsole.log(`We don\'t have to buy bananas!`);\n}',
		options: [
			{
				correct: false,
				text: "We have to buy bananas!"
			},
			{
				correct: true,
				text: "We don't have to buy bananas"
			},
			{
				correct: false,
				text: "`undefined`"
			},
			{
				correct: false,
				text: "`1`"
			}
		],
		explanation:
			'We passed the condition `groceries.indexOf("banana")` to the if-statement. `groceries.indexOf("banana")` returns `0`, which is a falsy value. Since the condition in the if-statement is falsy, the code in the `else` block runs, and `We don\'t have to buy bananas!` gets logged.'
	},
	{
		id: 121,
		title: "121. What's the output?",
		code:
			"const config = {\n\tlanguages: [],\n\tset language(lang) {\n\t\treturn this.languages.push(lang);\n\t}\n};\n\nconsole.log(config.language);",
		options: [
			{
				correct: false,
				text: "`function language(lang) { this.languages.push(lang }`"
			},
			{
				correct: false,
				text: "`0`"
			},
			{
				correct: false,
				text: "`[]`"
			},
			{
				correct: true,
				text: "`undefined`"
			}
		],
		explanation:
			"The `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned."
	},
	{
		id: 122,
		title: "122. What's the output?",
		code:
			'const name = "Lydia Hallie";\n\nconsole.log(!typeof name === "object");\nconsole.log(!typeof name === "string");',
		options: [
			{
				correct: false,
				text: "`false` `true`"
			},
			{
				correct: false,
				text: "`true` `false`"
			},
			{
				correct: true,
				text: "`false` `false`"
			},
			{
				correct: false,
				text: "`true` `true`"
			}
		],
		explanation:
			'`typeof name` returns `"string"`. The string `"string"` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === "object"` and `false === "string"` both return`false`.\n\n(If we wanted to check whether the type was (un)equal to a certain type, we should\'ve written `!==` instead of `!typeof`)'
	},
	{
		id: 123,
		title: "123. What's the output?",
		code:
			"const add = x => y => z => {\n\tconsole.log(x, y, z);\n\treturn x + y + z;\n};\n\nadd(4)(5)(6);",
		options: [
			{
				correct: true,
				text: "`4` `5` `6`"
			},
			{
				correct: false,
				text: "`6` `5` `4`"
			},
			{
				correct: false,
				text: "`4` `function` `function`"
			},
			{
				correct: false,
				text: "`undefined` `undefined` `6`"
			}
		],
		explanation:
			"The `add` function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument `x` with the value of `4`. We invoke the second function, which receives an argument `y` with the value `5`. Then we invoke the third function, which receives an argument `z` with the value `6`. When we're trying to access the value `x`, `y` and `z` within the last arrow function, the JS engine goes up the scope chain in order to find the values for `x` and `y` accordingly. This returns `4` `5` `6`."
	},
	{
		id: 124,
		title: "124. What's the output?",
		code:
			"async function* range(start, end) {\n\tfor (let i = start; i <= end; i++) {\n\t\tyield Promise.resolve(i);\n\t}\n}\n\n(async () => {\n\tconst gen = range(1, 3);\n\tfor await (const item of gen) {\n\t\tconsole.log(item);\n\t}\n})();",
		options: [
			{
				correct: false,
				text: "`Promise {1}` `Promise {2}` `Promise {3}`"
			},
			{
				correct: false,
				text:
					"`Promise {<pending>}` `Promise {<pending>}` `Promise {<pending>}`"
			},
			{
				correct: true,
				text: "`1` `2` `3`"
			},
			{
				correct: false,
				text: "`undefined` `undefined` `undefined`"
			}
		],
		explanation:
			"The generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the variable `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the variable `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promsie, the resolved _values_ of the promises get returned: `1`, `2`, then `3`."
	},
	{
		id: 125,
		title: "125. What's the output?",
		code:
			"const myFunc = ({ x, y, z }) => {\n\tconsole.log(x, y, z);\n};\n\nmyFunc(1, 2, 3);",
		options: [
			{
				correct: false,
				text: "`1` `2` `3`"
			},
			{
				correct: false,
				text: "`{1: 1}` `{2: 2}` `{3: 3}`"
			},
			{
				correct: false,
				text: "`{ 1: undefined }` `undefined` `undefined`"
			},
			{
				correct: true,
				text: "`undefined` `undefined` `undefined`"
			}
		],
		explanation:
			"`myFunc` expects an object with properties `x`, `y` and `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` and `z` ({x: 1, y: 2, z: 3}), `x`, `y` and `z` have their default value of `undefined`."
	},
	{
		id: 126,
		title: "126. What's the output?",
		code:
			"function getFine(speed, amount) {\n  const formattedSpeed = new Intl.NumberFormat({\n    'en-US',\n    { style: 'unit', unit: 'mile-per-hour' }\n  }).format(speed)\n\n  const formattedAmount = new Intl.NumberFormat({\n    'en-US',\n    { style: 'currency', currency: 'USD' }\n  }).format(amount)\n\n  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`\n}\n\nconsole.log(getFine(130, 300))",
		options: [
			{
				correct: false,
				text: "The driver drove 130 and has to pay 300"
			},
			{
				correct: true,
				text: "The driver drove 130 mph and has to pay \\$300.00"
			},
			{
				correct: false,
				text: "The driver drove undefined and has to pay undefined"
			},
			{
				correct: false,
				text: "The driver drove 130.00 and has to pay 300.00"
			}
		],
		explanation:
			"With the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currentcy` in `USD` results in `$300.00`."
	},
	{
		id: 127,
		title: "127. What's the output?",
		code:
			'const spookyItems = ["👻", "🎃", "🕸"];\n({ item: spookyItems[3] } = { item: "💀" });\n\nconsole.log(spookyItems);',
		options: [
			{
				correct: false,
				text: '`["👻", "🎃", "🕸"]`'
			},
			{
				correct: true,
				text: '`["👻", "🎃", "🕸", "💀"]`'
			},
			{
				correct: false,
				text: '`["👻", "🎃", "🕸", { item: "💀" }]`'
			},
			{
				correct: false,
				text: '`["👻", "🎃", "🕸", "[object Object]"]`'
			}
		],
		explanation:
			'By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we\'re assigning the value "💀" to `spookyItems[3]`. This means that we\'re modifying the `spookyItems` array, we\'re adding the "💀" to it. When logging `spookyItems`, `["👻", "🎃", "🕸", "💀"]` gets logged.'
	},
	{
		id: 128,
		title: "128. What's the output?",
		code:
			'const name = "Lydia Hallie";\nconst age = 21;\n\nconsole.log(Number.isNaN(name));\nconsole.log(Number.isNaN(age));\n\nconsole.log(isNaN(name));\nconsole.log(isNaN(age));',
		options: [
			{
				correct: false,
				text: "`true` `false` `true` `false`"
			},
			{
				correct: false,
				text: "`true` `false` `false` `false`"
			},
			{
				correct: true,
				text: "`false` `false` `true` `false`"
			},
			{
				correct: false,
				text: "`false` `true` `false` `true`"
			}
		],
		explanation:
			"With the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ and equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`.\n\nWith the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`."
	},
	{
		id: 129,
		title: "129. What's the output?",
		code:
			'const randomValue = 21;\n\nfunction getInfo() {\n\tconsole.log(typeof randomValue);\n\tconst randomValue = "Lydia Hallie";\n}\n\ngetInfo();',
		options: [
			{
				correct: false,
				text: '`"number"`'
			},
			{
				correct: false,
				text: '`"string"`'
			},
			{
				correct: false,
				text: "`undefined`"
			},
			{
				correct: true,
				text: "`ReferenceError`"
			}
		],
		explanation:
			"Variables declared with the `const` keyword are not referencable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the variable `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the variable `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the variable `randomValue` in the `getInfo` function."
	},
	{
		id: 130,
		title: "130. What's the output?",
		code:
			'const myPromise = Promise.resolve("Woah some cool data");\n\n(async () => {\n\ttry {\n\t\tconsole.log(await myPromise);\n\t} catch {\n\t\tthrow new Error(`Oops didn\'t work`);\n\t} finally {\n\t\tconsole.log("Oh finally!");\n\t}\n})();',
		options: [
			{
				correct: false,
				text: "`Woah some cool data`"
			},
			{
				correct: false,
				text: "`Oh finally!`"
			},
			{
				correct: true,
				text: "`Woah some cool data` `Oh finally!`"
			},
			{
				correct: false,
				text: "`Oops didn't work` `Oh finally!`"
			}
		],
		explanation:
			'In the `try` block, we\'re logging the awaited value of the `myPromise` variable: `"Woah some cool data"`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn\'t run. The code in the `finally` block _always_ runs, `"Oh finally!"` gets logged.'
	},
	{
		id: 131,
		title: "131. What's the output?",
		code:
			'const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];\n\nconsole.log(emojis.flat(1));',
		options: [
			{
				correct: false,
				text: "`['🥑', ['✨', '✨', ['🍕', '🍕']]]`"
			},
			{
				correct: true,
				text: "`['🥑', '✨', '✨', ['🍕', '🍕']]`"
			},
			{
				correct: false,
				text: "`['🥑', ['✨', '✨', '🍕', '🍕']]`"
			},
			{
				correct: false,
				text: "`['🥑', '✨', '✨', '🍕', '🍕']`"
			}
		],
		explanation:
			"With the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['🥑']` and `['✨', '✨', ['🍕', '🍕']]` in this case. Concatenating these two arrays results in `['🥑', '✨', '✨', ['🍕', '🍕']]`."
	},
	{
		id: 132,
		title: "<a name=20191224></a>132. What's the output?",
		code:
			"class Counter {\n\tconstructor() {\n\t\tthis.count = 0;\n\t}\n\n\tincrement() {\n\t\tthis.count++;\n\t}\n}\n\nconst counterOne = new Counter();\ncounterOne.increment();\ncounterOne.increment();\n\nconst counterTwo = counterOne;\ncounterTwo.increment();\n\nconsole.log(counterOne.count);",
		options: [
			{
				correct: false,
				text: "`0`"
			},
			{
				correct: false,
				text: "`1`"
			},
			{
				correct: false,
				text: "`2`"
			},
			{
				correct: true,
				text: "`3`"
			}
		],
		explanation:
			'`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, and an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`.\n\n<img src="https://i.imgur.com/KxLlTm9.png" width="400">\n\nThen, we create a new variable `counterTwo`, and set it equal to `counterOne`. Since objects interact by reference, we\'re just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`.\n\nWe invoke the `counterTwo.increment()`, which sets the `count` to `3`. Then, we log the count on `counterOne`, which logs `3`.\n\n<img src="https://i.imgur.com/BNBHXmc.png" width="400">'
	},
	{
		id: 133,
		title: "133. What's the output?",
		code:
			'const myPromise = Promise.resolve(Promise.resolve("Promise!"));\n\nfunction funcOne() {\n\tmyPromise.then(res => res).then(res => console.log(res));\n\tsetTimeout(() => console.log("Timeout!", 0));\n\tconsole.log("Last line!");\n}\n\nasync function funcTwo() {\n\tconst res = await myPromise;\n\tconsole.log(await res);\n\tsetTimeout(() => console.log("Timeout!", 0));\n\tconsole.log("Last line!");\n}\n\nfuncOne();\nfuncTwo();',
		options: [
			{
				correct: false,
				text: "`Promise! Last line! Promise! Last line! Last line! Promise!`"
			},
			{
				correct: false,
				text: "`Last line! Timeout! Promise! Last line! Timeout! Promise!`"
			},
			{
				correct: false,
				text: "`Promise! Last line! Last line! Promise! Timeout! Timeout!`"
			},
			{
				correct: true,
				text: "`Last line! Promise! Promise! Last line! Timeout! Timeout!`"
			}
		],
		explanation:
			"First, we invoke `funcOne`. On the first line of `funcOne`, we call the `myPromise` promise, which is an _asynchronous_ operation. While the engine is busy completing the promise, it keeps on running the function `funcOne`. The next line is the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. (see my article on the event loop here.)\n\nBoth the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the `setTimeout` callback. This means that `Last line!` gets logged first, since this is not an asynchonous operation. This is the last line of `funcOne`, the promise resolved, and `Promise!` gets logged. However, since we're invoking `funcTwo()`, the call stack isn't empty, and the callback of the `setTimeout` function cannot get added to the callstack yet.\n\nIn `funcTwo` we're, first _awaiting_ the myPromise promise. With the `await` keyword, we pause the execution of the function until the promise has resolved (or rejected). Then, we log the awaited value of `res` (since the promise itself returns a promise). This logs `Promise!`.\n\nThe next line is the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API.\n\nWe get to the last line of `funcTwo`, which logs `Last line!` to the console. Now, since `funcTwo` popped off the call stack, the call stack is empty. The callbacks waiting in the queue (`() => console.log(\"Timeout!\")` from `funcOne`, and `() => console.log(\"Timeout!\")` from `funcTwo`) get added to the call stack one by one. The first callback logs `Timeout!`, and gets popped off the stack. Then, the second callback logs `Timeout!`, and gets popped off the stack. This logs `Last line! Promise! Promise! Last line! Timeout! Timeout!`"
	},
	{
		id: 134,
		title: "134. How can we invoke `sum` in `index.js` from `sum.js?`",
		code:
			'// sum.js\nexport default function sum(x) {\n\treturn x + x;\n}\n\n// index.js\nimport * as sum from "./sum";',
		options: [
			{
				correct: false,
				text: "`sum(4)`"
			},
			{
				correct: false,
				text: "`sum.sum(4)`"
			},
			{
				correct: true,
				text: "`sum.default(4)`"
			},
			{
				correct: false,
				text: "Default aren't imported with `*`, only named exports"
			}
		],
		explanation:
			'With the asterisk `*`, we import all exported values from that file, both default and named. If we had the following file:\n\n```javascript\n// info.js\nexport const name = "Lydia";\nexport const age = 21;\nexport default "I love JavaScript";\n\n// index.js\nimport * as info from "./info";\nconsole.log(info);\n```\n\nThe following would get logged:\n\n```javascript\n{\n  default: "I love JavaScript",\n  name: "Lydia",\n  age: 21\n}\n```\n\nFor the `sum` example, it means that the imported value `sum` looks like this:\n\n```javascript\n{ default: function sum(x) { return x + x } }\n```\n\nWe can invoke this function, by calling `sum.default`'
	},
	{
		id: 135,
		title: "135. What's the output?",
		code:
			'const handler = {\n\tset: () => console.log("Added a new property!"),\n\tget: () => console.log("Accessed a property!")\n};\n\nconst person = new Proxy({}, handler);\n\nperson.name = "Lydia";\nperson.name;',
		options: [
			{
				correct: false,
				text: "`Added a new property!`"
			},
			{
				correct: false,
				text: "`Accessed a property!`"
			},
			{
				correct: true,
				text: "`Added a new property!` `Accessed a property!`"
			},
			{
				correct: false,
				text: "Nothing gets logged"
			}
		],
		explanation:
			'With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In tis case, we pass the `handler` object which contained to properties: `set` and `get`. `set` gets invoked whenever we _set_ property values, `get` gets invoked whenever we _get_ (access) property values.\n\nThe first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked.\n\nFirst, we added a new property `name` to the proxy object (`person.name = "Lydia"`). `set` gets invoked, and logs `"Added a new property!"`.\n\nThen, we access a property value on the proxy object, the `get` property on the handler object got invoked. `"Accessed a property!"` gets logged.'
	},
	{
		id: 136,
		title: "136. Which of the following will modify the `person` object?",
		code: 'const person = { name: "Lydia Hallie" };\n\nObject.seal(person);',
		options: [
			{
				correct: true,
				text: '`person.name = "Evan Bacon"`'
			},
			{
				correct: false,
				text: "`person.age = 21`"
			},
			{
				correct: false,
				text: "`delete person.name`"
			},
			{
				correct: false,
				text: "`Object.assign(person, { age: 21 })`"
			}
		],
		explanation:
			"With `Object.seal` we can prevent new properies from being _added_, or existing properties to be _removed_.\n\nHowever, you can still modify the value of existing properties."
	},
	{
		id: 137,
		title: "137. Which of the following will modify the `person` object?",
		code:
			'const person = {\n\tname: "Lydia Hallie",\n\taddress: {\n\t\tstreet: "100 Main St"\n\t}\n};\n\nObject.freeze(person);',
		options: [
			{
				correct: false,
				text: '`person.name = "Evan Bacon"`'
			},
			{
				correct: false,
				text: "`delete person.address`"
			},
			{
				correct: true,
				text: '`person.address.street = "101 Main St"`'
			},
			{
				correct: false,
				text: '`person.pet = { name: "Mara" }`'
			}
		],
		explanation:
			"The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.\n\nHowever, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified."
	},
	{
		id: 138,
		title: "138. What's the output?",
		code:
			"const add = x => x + x;\n\nfunction myFunc(num = 2, value = add(num)) {\n\tconsole.log(num, value);\n}\n\nmyFunc();\nmyFunc(3);",
		options: [
			{
				correct: true,
				text: "`2` `4` and `3` `6`"
			},
			{
				correct: false,
				text: "`2` `NaN` and `3` `NaN`"
			},
			{
				correct: false,
				text: "`2` `Error` and `3` `6`"
			},
			{
				correct: false,
				text: "`2` `4` and `3` `Error`"
			}
		],
		explanation:
			"First, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` and `value` got their default values: num is `2`, and `value` the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`.\n\nThen, we invoked `myFunc(3)` and passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`."
	},
	{
		id: 139,
		title: "139. What's the output?",
		code:
			"class Counter {\n  #number = 10\n\n  increment() {\n    this.#number++\n  }\n\n  getNum() {\n    return this.#number\n  }\n}\n\nconst counter = new Counter()\ncounter.increment()\n\nconsole.log(counter.#number)",
		options: [
			{
				correct: false,
				text: "`10`"
			},
			{
				correct: false,
				text: "`11`"
			},
			{
				correct: false,
				text: "`undefined`"
			},
			{
				correct: true,
				text: "`SyntaxError`"
			}
		],
		explanation:
			"In ES2020, we can add private variables in classes by using the `#`. We cannot access these variables outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot acccess it outside the `Counter` class!"
	},
	{
		id: 140,
		title: "140. What's the output?",
		code:
			'const teams = [\n\t{ name: "Team 1", members: ["Paul", "Lisa"] },\n\t{ name: "Team 2", members: ["Laura", "Tim"] }\n];\n\nfunction* getMembers(members) {\n\tfor (let i = 0; i < members.length; i++) {\n\t\tyield members[i];\n\t}\n}\n\nfunction* getTeams(teams) {\n\tfor (let i = 0; i < teams.length; i++) {\n\t\t// ✨ SOMETHING IS MISSING HERE ✨\n\t}\n}\n\nconst obj = getTeams(teams);\nobj.next(); // { value: "Paul", done: false }\nobj.next(); // { value: "Lisa", done: false }',
		options: [
			{
				correct: false,
				text: "`yield getMembers(teams[i].members)`"
			},
			{
				correct: true,
				text: "`yield* getMembers(teams[i].members)`"
			},
			{
				correct: false,
				text: "`return getMembers(teams[i].members)`"
			},
			{
				correct: false,
				text: "`return yield getMembers(teams[i].members)`"
			}
		],
		explanation:
			"In order to iterate over the `members` in each element in the `teams` array, we need to pass `teams[i].members` to the `getMembers` generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use `yield*`.\n\nIf we would've written `yield`, `return yield`, or `return`, the entire generator function would've gotten returned the first time we called the `next` method."
	},
	{
		id: 141,
		title: "141. What's the output?",
		code:
			'const person = {\n\tname: "Lydia Hallie",\n\thobbies: ["coding"]\n};\n\nfunction addHobby(hobby, hobbies = person.hobbies) {\n\thobbies.push(hobby);\n\treturn hobbies;\n}\n\naddHobby("running", []);\naddHobby("dancing");\naddHobby("baking", person.hobbies);\n\nconsole.log(person.hobbies);',
		options: [
			{
				correct: false,
				text: '`["coding"]`'
			},
			{
				correct: false,
				text: '`["coding", "dancing"]`'
			},
			{
				correct: true,
				text: '`["coding", "dancing", "baking"]`'
			},
			{
				correct: false,
				text: '`["coding", "running", "dancing", "baking"]`'
			}
		],
		explanation:
			'The `addHobby` function receives two arguments, `hobby` and `hobbies` with the default value of the `hobbies` array on the `person` object.\n\nFirst, we invoke the `addHobby` function, and pass `"running"` as the value for `hobby` and an empty array as the value for `hobbies`. Since we pass an empty array as the value for `y`, `"running"` gets added to this empty array.\n\nThen, we invoke the `addHobby` function, and pass `"dancing"` as the value for `hobby`. We didn\'t pass a value for `hobbies`, so it gets the default value, the `hobbies` property on the `person` object. We push the hobby `dancing` to the `person.hobbies` array.\n\nLast, we invoke the `addHobby` function, and pass `"bdaking"` as the value for `hobby`, and the `person.hobbies` array as the value for `hobbies`. We push the hobby `baking` to the `person.hobbies` array.\n\nAfter pushing `dancing` and `baking`, the value of `person.hobbies` is `["coding", "dancing", "baking"]`'
	},
	{
		id: 142,
		title: "142. What's the output?",
		code:
			'class Bird {\n\tconstructor() {\n\t\tconsole.log("I\'m a bird. 🦢");\n\t}\n}\n\nclass Flamingo extends Bird {\n\tconstructor() {\n\t\tconsole.log("I\'m pink. 🌸");\n\t\tsuper();\n\t}\n}\n\nconst pet = new Flamingo();',
		options: [
			{
				correct: false,
				text: "`I'm pink. 🌸`"
			},
			{
				correct: true,
				text: "`I'm pink. 🌸` `I'm a bird. 🦢`"
			},
			{
				correct: false,
				text: "`I'm a bird. 🦢` `I'm pink. 🌸`"
			},
			{
				correct: false,
				text: "Nothing, we didn't call any method"
			}
		],
		explanation:
			'We create the variable `pet` which is an instance of the `Flamingo` class. When we instantiate this instance, the `constructor` on `Flamingo` gets called. First, `"I\'m pink. 🌸"` gets logged, after which we call `super()`. `super()` calls the constructor of the parent class, `Bird`. THe constructor in `Bird` gets called, and logs `"I\'m a bird. 🦢"`.'
	},
	{
		id: 143,
		title: "143. Which of the options result(s) in an error?",
		code:
			'const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];\n\n/* 1 */ emojis.push("🦌");\n/* 2 */ emojis.splice(0, 2);\n/* 3 */ emojis = [...emojis, "🥂"];\n/* 4 */ emojis.length = 0;',
		options: [
			{
				correct: false,
				text: "1"
			},
			{
				correct: false,
				text: "1 and 2"
			},
			{
				correct: false,
				text: "3 and 4"
			},
			{
				correct: true,
				text: "3"
			}
		],
		explanation:
			"The `const` keyword simply means we cannot _redeclare_ the value of that variable, it's _read-only_. However, the value itself isn't immutable. The propeties on the `emojis` array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0."
	},
	{
		id: 144,
		title:
			'144. What do we need to add to the `person` object to get `["Lydia Hallie", 21]` as the output of `[...person]`?',
		code:
			'const person = {\n  name: "Lydia Hallie",\n  age: 21\n}\n\n[...person] // ["Lydia Hallie", 21]',
		options: [
			{
				correct: false,
				text: "Nothing, object are iterable by default"
			},
			{
				correct: false,
				text: "`*[Symbol.iterator]() { for (let x in this) yield* this[x] }`"
			},
			{
				correct: true,
				text: "`*[Symbol.iterator]() { yield* Object.values(this) }`"
			},
			{
				correct: false,
				text: "`*[Symbol.iterator]() { for (let x in this) yield this }`"
			}
		],
		explanation:
			'Objects aren\'t iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol `[Symbol.iterator]`, which has to return a generator object, for example by making it a generator function `*[Symbol.iterator]() {}`. This generator function has to yield the `Object.values` of the `person` object if we want it to return the array `["Lydia Hallie", 21]`: `yield* Object.values(this)`.'
	}
];

