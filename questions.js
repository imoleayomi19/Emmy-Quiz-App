let questions = [
  {
    numb: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language that allows you to implement complex features on web pages",
    options: [
      "JavaScript is a programming language that allows you to implement complex features on web pages",
      "JavaScript is a cascading style sheets",
      "JavaScript is a means Hyper text makeup language",
      "None of the above",
    ],
  },
  {
    numb: 2,
    question: "Which of this is not data types in JavaScript?",
    answer: "Execution",
    options: ["String", "Number", "Boolean", "Execution"],
  },
  // {
  //   numb: 3,
  //   question: "Which of this statement is not correct?",
  //   answer: "None of the above",
  //   options: [
  //     "var: Function-scoped, can be redeclared.",
  //     "let: Block-scoped, cannot be redeclared.",
  //     "const: Block-scoped, cannot be reassigned.",
  //     "None of the above",
  //   ],
  // },
  // {
  //   numb: 4,
  //   question: "What is hoisting in JavaScript?",
  //   answer:
  //     "Hoisting is a behavior where variable and function declarations are moved to the top of their scope before execution.",
  //   options: [
  //     "Hoisting let you pass data to child components",
  //     "Hoisting is a behavior where variable and function declarations are moved to the top of their scope before execution",
  //     "It let you adds child values to state",
  //     "None of the above",
  //   ],
  // },
  // {
  //   numb: 5,
  //   question: "Which of the following statement is correct",
  //   answer: "All of the above",
  //   options: [
  //     "== compares values only (type coercion)",
  //     "=== compares both value and type",
  //     "&& can be used to conditionally render a React component?",
  //     "All of the above",
  //   ],
  // },
  // {
  //   numb: 6,
  //   question: "How can you detect the client's browser name?",
  //   answer: "navigator.appName",
  //   options: [
  //     "client.navName",
  //     "navigator.appName",
  //     "browser.name",
  //     "None of the above",
  //   ],
  // },
  // {
  //   numb: 7,
  //   question: "How do you create a function in JavaScript?",
  //   answer: "function myFunction()",
  //   options: [
  //     "function:myFunction()",
  //     "function = myFunction",
  //     "function myFunction()",
  //     "All of the above",
  //   ],
  // },
  // {
  //   numb: 8,
  //   question: "Inside which HTML element do we put the JavaScript?",
  //   answer: "script",
  //   options: ["scripting", "js", "script", "span"],
  // },
  // {
  //   numb: 9,
  //   question: "Where is the correct place to insert a JavaScript?",
  //   answer: "Both the <head> section and the <body> section are correct",
  //   options: [
  //     "The <body> section",
  //     "The <head> section",
  //     "Both the <head> section and the <body> section are correct",
  //     "None of the above",
  //   ],
  // },
  // {
  //   numb: 10,
  //   question: "The external JavaScript file must contain the <script> tag.",
  //   answer: "False",
  //   options: ["False", "True", "Null", "None of the above"],
  // },
  // {
  //   numb: 11,
  //   question: "How do you write 'Hello World' in an alert box?",
  //   answer: "alert('Hello World')",
  //   options: [
  //     "alert('Hello World')",
  //     "alertBox('Hello World')",
  //     "msgBox('Hello World')",
  //     "msg('Hello World')",
  //   ],
  // },
  // {
  //   numb: 12,
  //   question: "How do you create a function in JavaScript?",
  //   answer: "function myFunction()",
  //   options: [
  //     "function:myFunction()",
  //     "function = myFunction",
  //     "function myFunction()",
  //     "All of the above",
  //   ],
  // },
  // {
  //   numb: 13,
  //   question: "Which of the following is NOT a rule for React Hooks?",
  //   answer: "Hooks can be called in Class or Function components",
  //   options: [
  //     "Hooks can only be called at the top level of component",
  //     "Hooks can be called in Class or Function components",
  //     "Hooks cannot be conditional",
  //     "Hooks can only be called inside React Function components",
  //   ],
  // },
  // {
  //   numb: 14,
  //   question:
  //     "Why should you avoid copying the values of props into a component's state?",
  //   answer:
  //     "Because that would create two instances of the same state that could become out of sync",
  //   options: [
  //     "Because you should never mutate state",
  //     "Because that would create two instances of the same state that could become out of sync",
  //     "Because you want to allow data to flow back up to the parent",
  //     "Because props values cannot be stored in state",
  //   ],
  // },
  // {
  //   numb: 15,
  //   question: "What is the children prop?",
  //   answer: "A property that let you nest components in other components",
  //   options: [
  //     "A property that let you pass data to child components",
  //     "A property that let you nest components in other components",
  //     "A property that adds child values to state",
  //     "A property that let you set an object as property",
  //   ],
  // },
  // {
  //   numb: 16,
  //   question:
  //     "How can you optimize performance for a function component that always renders the same way?",
  //   answer: "Wrap it in  the React.memo higher-order component",
  //   options: [
  //     "Use the useReducer Hook",
  //     "Wrap it in  the React.memo higher-order component",
  //     "Use the useMemo Hook",
  //     "Use the shouldComponentUpdate lifecycle method",
  //   ],
  // },
  // {
  //   numb: 17,
  //   question: "What is the correct syntax to import a Component from React?",
  //   answer: "import { Component} from 'react",
  //   options: [
  //     "import React.Component from 'react'",
  //     "import component from 'react",
  //     "import [Component] from 'react",
  //     "import { Component} from 'react",
  //   ],
  // },
  // {
  //   numb: 18,
  //   question:
  //     "React separates the user interface into components. How are components combinded to create a user interface?",
  //   answer: "By nesting components",
  //   options: [
  //     "With code splitting",
  //     "By nesting components",
  //     "By putting them in a folder structure",
  //     "With webpack",
  //   ],
  // },
  // {
  //   numb: 19,
  //   question: "What does HTML stand for?",
  //   answer: "Hyper Text Markup Language",
  //   options: [
  //     "Hyper Text Markup Language",
  //     "Hyperlinks and Text Markup Language",
  //     "Home Tool Markup Language",
  //     "Nan",
  //   ],
  // },
  // {
  //   numb: 20,
  //   question: "What is the correct HTML element for inserting a line break?",
  //   answer: "br",
  //   options: ["ib", "break", "br", "NaN"],
  // },
  // {
  //   numb: 21,
  //   question: "Which character is used to indicate an end tag?",
  //   answer: "/",
  //   options: ["*", "/", "<", ">"],
  // },
  // {
  //   numb: 22,
  //   question: "How can you detect the client's browser name?",
  //   answer: "navigator.appName",
  //   options: [
  //     "client.navName",
  //     "navigator.appName",
  //     "browser.name",
  //     "None of the above",
  //   ],
  // },
  // {
  //   numb: 23,
  //   question: "Which event occurs when the user clicks on an HTML element?",
  //   answer: "onclick",
  //   options: ["onmouseclick", "onchange", "onmouseover", "onclick"],
  // },
  // {
  //   numb: 24,
  //   question: "How do you declare a JavaScript variable?",
  //   answer: "var carName",
  //   options: ["variable carName", "v carName", "var carName", "Undefined"],
  // },
  // {
  //   numb: 25,
  //   question: "Which operator is used to assign a value to a variable?",
  //   answer: "=",
  //   options: ["*", "-", "x", "="],
  // },
  // {
  //   numb: 26,
  //   question: "What will the following code return: Boolean(10 > 9)",
  //   answer: "true",
  //   options: ["true", "false", "Nan", "Undefined"],
  // },
  // {
  //   numb: 27,
  //   question: "Is JavaScript case-sensitive?",
  //   answer: "Yes",
  //   options: ["No", "Yes", "Nan", "Undefined"],
  // },
  // {
  //   numb: 28,
  //   question: "What is the correct command to create a new React project?",
  //   answer: "npx create-react-app myReactApp",
  //   options: [
  //     "npm create-react-app",
  //     "npx create-react-app myReactApp",
  //     "npm create-react-app myReactApp",
  //     "npx create-react-app",
  //   ],
  // },
  // {
  //   numb: 29,
  //   question:
  //     "What command is used to start the React local development server?",
  //   answer: "npm start",
  //   options: ["npm start", "npm run dev", "npm build", "npm server"],
  // },
  // {
  //   numb: 30,
  //   question:
  //     "What is the default local host port that a React development server uses?",
  //   answer: "3000",
  //   options: ["5000", "3000", "8080", "3500"],
  // },
  // {
  //   numb: 31,
  //   question: "To develop and run React code, Node.js is required.",
  //   answer: "True",
  //   options: ["False", "True", "NaN", "Undefined"],
  // },
  // {
  //   numb: 32,
  //   question: "Which keyword creates a constant in JavaScript?",
  //   answer: "const",
  //   options: ["var", "let", "variable", "const"],
  // },
  // {
  //   numb: 33,
  //   question: "A copy of the 'real' DOM that is kept in memory is called what?",
  //   answer: "Virtual DOM",
  //   options: ["Shadow DOM", "DOM", "React DOM", "Virtual DOM"],
  // },
  // {
  //   numb: 34,
  //   question: "React component names must begin with an uppercase letter.",
  //   answer: "True",
  //   options: ["True", "False", "NaN", "None of the above"],
  // },
  // {
  //   numb: 35,
  //   question:
  //     "Which operator can be used to conditionally render a React component?",
  //   answer: "&&",
  //   options: ["::", "||", "??", "&&"],
  // },
  // {
  //   numb: 36,
  //   question:
  //     "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
  //   answer: "key",
  //   options: ["index", "id", "key", "data"],
  // },
  // {
  //   numb: 37,
  //   question: "What tool does React use to compile JSX?",
  //   answer: "Babel",
  //   options: ["ReactDOM", "React Router", "Babel", "JSX Compiler"],
  // },
  // {
  //   numb: 38,
  //   question: "What is a common use case for ref?",
  //   answer: "To directly access a DOM node",
  //   options: [
  //     "To refer to a function",
  //     "To refer to another Javascript file",
  //     "To bind the function",
  //     "To directly access a DOM node",
  //   ],
  // },
  // {
  //   numb: 39,
  //   question: "React can only render elements in the root document element.",
  //   answer: "False",
  //   options: ["False", "True", "NaN", "Undefined"],
  // },
  // {
  //   numb: 40,
  //   question: "How do you round the number 7.25, to the nearest integer",
  //   answer: "Math.round(7.25)",
  //   options: ["rnd(7.25)", "round(7.25)", "Math.round(7.25)", "Math.rnd(7.25)"],
  // },
  // {
  //   numb: 41,
  //   question: "How do you find the number with the highest value of x and y?",
  //   answer: "Math.max(x, y)",
  //   options: ["Math.ceil(x, y)", "ceil(x, y)", "top(x, y)", "Math.max(x, y)"],
  // },
  // {
  //   numb: 42,
  //   question: "JavaScript is the same as Java.",
  //   answer: "False",
  //   options: ["False", "True", "Null", "I don't know"],
  // },
  // {
  //   numb: 43,
  //   question: "How does a FOR loop start?",
  //   answer: "for (i = 0; i <= 5; i++)",
  //   options: [
  //     "for i = 1 to 3",
  //     "for (i <= 5; i++)",
  //     "for (i = 0; i <= 5; i++)",
  //     "for (i <= 5)",
  //   ],
  // },
  // {
  //   numb: 44,
  //   question: "How can you add a comment in a JavaScript?",
  //   answer: "//This is a comment",
  //   options: [
  //     "'This is a comment",
  //     "!--This is a comment--",
  //     "//This is a comment",
  //     "Null",
  //   ],
  // },
  // {
  //   numb: 45,
  //   question: "What is the correct way to write a JavaScript array?",
  //   answer: "var names = ['James','Tayo','Anna']",
  //   options: [
  //     "var names = 1 = ('James'), 2 = ('Tayo'), 3 = ('Anna')",
  //     "var names = ['James','Tayo', 'Anna']",
  //     "var names = 'James','Tayo','Anna'",
  //     "var names = (1:'James, 2:'Tayo', 3:'Anna')",
  //   ],
  // },
  // {
  //   numb: 46,
  //   question: "How to insert a comment that has more than one line?",
  //   answer: "/*This comment has more than one line*/",
  //   options: [
  //     "!--This comment has more than one line",
  //     "//This comment has more than one line//",
  //     "/*This comment has more than one line*/",
  //     "Undefined",
  //   ],
  // },
  // {
  //   numb: 47,
  //   question: "How does a WHILE loop start?",
  //   answer: "while (i <= 10)",
  //   options: [
  //     "while (i <= 10; i++)",
  //     "while (i <= 10)",
  //     "while i = 1 to 10",
  //     "All of the above",
  //   ],
  // },
  // {
  //   numb: 48,
  //   question:
  //     "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
  //   answer: "if(i != 5)",
  //   options: ["if(1 <> 5)", "if(i != 5)", "if i =! 5 then", "if i <> 5"],
  // },
  // {
  //   numb: 49,
  //   question: "How to write an IF statement in JavaScript?",
  //   answer: "if(i == 5)",
  //   options: ["if(i == 5)", "if i = 5", "if i = 5 then", "if 1 == 5 then"],
  // },
  // {
  //   numb: 50,
  //   question: "How do you call a function named 'myFunction'?",
  //   answer: "myFunction",
  //   options: [
  //     "call function myFunction",
  //     "call myFunction",
  //     "myFunction",
  //     "Null",
  //   ],
  // },
];
