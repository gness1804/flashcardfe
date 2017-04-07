const answers = {
  aria: {
    id: 1,
    question: 'What is ARIA? How does it aid in accessibility?',
    main: 'According to MDN: "Accessibility in Web development means enabling as many people as possible to use Web sites, even when those people’s abilities are limited in some way."',
    firstPoint: 'Aria stands for Accessible Rich Internet Application.',
    secondPoint: 'One method of increasing access to web content is via semantic HTML. Elements such as <nav>, <button>, <header>, and <aside> help screen readers know what a part of a page is and what it is doing.',
    thirdPoint: 'For images, always use alt tags. These convey to screen readers what an image is for those who cannot see the image themselves. Be verbose--the better the description is, the more the user will get out of the image! Example: <img src="mountain.jpg" alt="The snowy mountain surrounded by a violet sunset." />',
    fourthPoint: 'Use ARIA roles to define the purpose of an element. Each element can only have one ARIA role at a time.',
    firstLinkName: 'MDN Docs on Accessibility',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
  },
  attr: {
    id: 2,
    question: 'What are data attributes good for?',
    main: 'data-* attributes allow us to add information to regular HTML elements.',
    firstPoint: `Syntax:
    	<article
      id="cats"
      data-columns="4"
      data-parent="animals">
...
</article>`,
    firstLinkName: 'CSS Tricks: Attribute Selectors',
    firstLinkURL: 'https://css-tricks.com/almanac/selectors/a/attribute/',
    secondLinkName: 'MDN: Using Data Attributes',
    secondLinkURL: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes',
  },
  boxModel: {
    id: 3,
    question: 'What is the box model?',
    main: 'CSS makes each element on a page a rectangular box. This determines how browsers handle things like margins, borders, and padding. By default, browsers "stack" elements from the upper left corner of the page.',
    firstLinkName: 'MDN Docs on Box Model',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model',
    image: require('../images/box-model.png'),
  },
  inlineBlock: {
    id: 4,
    question: 'What is the difference between inline, inline-block, and block elements?',
    main: 'Block elements take up the full width available, and thus multiple block elements "stack" on top of each other by default. Inline and inline-block elements stack next to each other, as they do not take up the available width. Inline-block is the same as inline except that the former can have a height and width.',
    firstLinkName: 'Stack Overflow post on inline versus inline-block',
    firstLinkURL: 'https://stackoverflow.com/questions/8969381/what-is-the-difference-between-display-inline-and-display-inline-block',
  },
  zIndex: {
    id: 5,
    question: 'What is the z-index? How is it used?',
    main: 'The z-index refers to the order in which elements are stacked on top of each other (the z axis being the 3d plane coming out of the page). Higher z-indexed elements occlude lower z-indexed elements.',
    firstLinkName: 'MDN Docs on z-index',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/CSS/z-index',
  },
  positioning: {
    id: 6,
    question: 'What is the difference between a relative, fixed, absolute and statically positioned element?',
    main: 'There are four types of CSS positioning detailed below:',
    firstPoint: 'Relative: element stays within the normal page flow and thus preserves its space on the page.',
    secondPoint: 'Absolute: element is removed from the normal page flow. Other elements thus take its space.',
    thirdPoint: 'Fixed: like absolute positioning, but positioned relative to the viewport, which means its perceived place on the page will remain constant when the user scrolls. An example might be a "sticky" header that is always visible even when the user scrolls down.',
    fourthPoint: 'Static: the default positioning for an element. Like relative, except that directional properties do not affect the element.',
    firstLinkName: 'MDN Docs on CSS Positioning',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position',
  },
  mediaQueries: {
    id: 7,
    question: 'What are Media Queries?',
    main: 'A feature that adjusts CSS styling based on the size of the view (usually screen size). For instance, media queries enable the developer to create separate styles for desktop and mobile.',
    firstPoint: 'Media queries rely on breakpoints, or specifications of when the styling should change based on size (usually in pixels). So one breakpoint might be for 800px, which means that when the view width is more (or less) than this, then the styling will change accordingly.',
  },
  applyStyles: {
    id: 8,
    question: 'Explain the 3 main ways to apply CSS styles to a Web page.',
    main: 'Inline styling, embedded styling, and external (or stylesheet) styling.',
    firstPoint: 'Inline: use very sparingly. This is done by inserting a "style" attribute inside an HTML element.',
    secondPoint: 'Embedded: insert a `<style>` tag in the head of an HTML document and write the styles directly there.',
    thirdPoint: 'External: The CSS is in an external .css file and linked in the HTML document with `<link>` tags.',
    fourthPoint: 'External styling is best because it allows developers to keep the styling separate from the HTML. This helps with readability and maintainability.',
  },
  floatChallenge: {
    id: 9,
    question: 'If you have two elements inside of an outer containing element, one with float: left, and the other with float: right, how can you ensure that the containing element expands around the floated elements and does not collapse?',
    main: 'You can use overflow: auto and clearfix.',
    firstPoint: 'on the containing element => overflow: auto;',
    secondPoint: `using a clearfix:
    .clearfix:after {
      content: ".";
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
    }
    `,
  },
  preProcessor: {
    id: 10,
    question: 'What are the positives and negatives of using a CSS pre-processor?',
    main: 'Pre-processors allow the dev to do a lot of neat things, but they come at the cost of configuration and maintenance issues.',
    firstPoint: 'Pros: ability to nest, access to variables and mixins, use of mathematical operations, and ability to join multiple files into one file.',
    secondPoint: 'Cons: difficulty tracking file size, problems with maintenance and updating, and difficulties debugging.',
  },
  pseudoClass: {
    id: 11,
    question: 'What is a pseudo class? What are they used for?',
    main: 'CSS pseudo classes are similar to classes, but not explicitly defined in the markup.',
    firstPoint: 'They are used to add effects to a selected HTML element, such as link colors, hover actions, etc.',
    secondPoint: 'Syntax: selector:pseudo-class. (p:hover; a:visited).',
  },
  pseudoElement: {
    id: 12,
    question: 'What are pseudo-elements and how are they made?',
    main: 'Pseudo elements are used to add special effects to some selectors, such as making the first letter of a word bolder and larger than the other letters.',
    firstPoint: 'They are made by using a double colon (::) followed by the name of the pseudo element.',
    secondPoint: 'They can only be applied to block level elements.',
    thirdPoint: 'Examples: (::first_line, ::first_letter, ::before, ::after)',
  },
  newFeatures: {
    id: 13,
    question: 'What are some of the new features of CSS3?',
    main: 'Web fonts, rounded corners, border images, box shadows, transform property, multi-column layout.',
  },
  shorthand: {
    id: 14,
    question: 'Why and how are shorthand properties used?',
    main: 'They are used to improve page load times, reduce file size, and make CSS easier to write and read by humans.',
    secondPoint: `They are done by listing the property values on a single line:
      body {
          border: 1px solid #000;
      }`,
  },
  hideContent: {
    id: 15,
    question: 'What are the different ways to visually hide content (while ideally still making it accessible to screen readers)?',
    main: 'There are several ways to hide content, ranging from the CSS display property to using creative indentation and positioning. Note: not all of these make the content available to screen readers.',
    firstPoint: 'display:none. Probably the most obvious and intuitive. However, this makes the content unavailable to screen readers.',
    secondPoint: 'text-indent: -1000px. This will allow the content to be visible off screen and thus accessible to screen readers.',
    thirdPoint: 'clip: rect(1px, 1px, 1px, 1px). Clips content that will not fit in a 1px area. Available to screen readers.',
    fourthPoint: 'position:absolute; left:-10000px; overflow:hidden;. Absolutely position element off screen. Available to screen readers.',
  },
  paradigms: {
    id: 16,
    question: 'What are the 2 most important paradigms of JS? Why?',
    main: 'OOP (Object Oriented Programming) and Functional Programming',
    firstPoint: 'OOP overview: supports prototypal inheritance; uses objects without classes in the classical sense.',
    secondPoint: 'Functional Programming overview: avoids shared state & mutable data; uses pure functions.',
    thirdPoint: 'OOP pros: Easy to interpret and read; more flexible than classical paradigms.',
    fourthPoint: 'OOP cons: Objects and behaviors are typically tied together on the same entity, which may be accessed by any number of functions.',
    fifthPoint: 'Functional Programming pros: can refactor with very little code change; more simplified and easier to revise and reuse.',
    sixthPoint: 'Functional Programming cons: steep learning curve and greater general familiarity with OOP.',
  },
  inheritance: {
    id: 17,
    question: 'What is the difference between prototypal and class inheritance?',
    main: 'In a nutshell: class inheritance stems from the classical programming languages (i.e. Java), while prototypal inheritance is tied to objects and is much more flexible.',
    firstPoint: 'Class inheritance overview: instances inherit from classes (like a blueprint), and create sub-class relationships with hierarchical class taxonomies and tight coupling.',
    secondPoint: 'Prototypal inheritance overview: instances inherit directly from other objects, not strict classes.',
    firstLinkName: 'Read up on the three types of prototypal inheritance: delegation, concatenative, and functional.',
    firstLinkURL: 'https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9',
  },
  dataTypes: {
    id: 18,
    question: 'What are the six main data types in JS?',
    main: 'String, number, object, null, undefined, boolean.',
    firstPoint: 'JS does not distinguish between whole numbers (integers) and decimals or fractions, unlike many other languages.',
    secondPoint: 'Arrays, functions, and objects are considered objects.',
    thirdPoint: 'undefined versus null: undefined is when a variable is referenced that does not have a value; null is an assigned value, or the intentional assignment of a var to a value of nothing.',
    fourthPoint: 'JS also does not distinguish between a string and a single character, unlike languages such as Java.',
    fifthPoint: 'Boolean can have two values: true or false.',
    firstLinkName: 'MDN docs on JS data types.',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
  },
  objects: {
    id: 19,
    question: 'Why are functions and arrays considered objects in JS?',
    main: 'JS was written to be an object oriented language. All objects in JS, broadly defined, inherit from Object.prototype, while arrays inherit from Array.prototype and functions from Function.prototype, which in turn inherit from Object.Prototype. This structure has shaped the language and its emphasis on prototypal inheritance as a core data architecture.',
  },
  varLetConst: {
    id: 20,
    question: 'Describe the difference between var, let, and const.',
    main: 'In a nutshell: let and const are new ES6 replacements for var; the former two are block scoped while the latter is function scoped.',
    firstPoint: 'const: immutable; cannot be reassigned. Block scoped.',
    secondPoint: 'let: same as const except that it can be reassigned. Use when you know you will reassign a variable, such as within a loop.',
    thirdPoint: 'var: the old standard variable notation. It is function scoped and can be reassigned. Many would argue that there are little or no use cases for var in ES6+.',
  },
  callback: {
    id: 21,
    question: 'What is a callback?',
    main: 'A callback is a function that is passed to another function as a parameter. It is passed as an argument, not as an executed function.',
    firstPoint: 'Common use cases for callbacks include event listeners, asynchronous tasks, and setTimeout/setInterval methods.',
    secondPoint: 'If you stop and think about it, you are probably using callbacks often without even realizing it!',
  },
  delegation: {
    id: 22,
    question: 'What is event bubbling/delegation? Can you give an example?',
    main: 'In JS, an event received by an element (like a "click" event listener) is registered not only on that element but also on its parents and descendants. According to the jQuery docs: "Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future."',
    firstPoint: 'Event delegation is often used for dynamically created elements (like buttons created in a div that appears on the page only when the user enters in some data). Because the parent (or grandparent) element originally existed, event propagation can be used to "bubble" the click event down to the dynamically created child.',
    secondPoint: `
    Example from the jQuery docs:
      // Attach a delegated event handler
      $( "#list" ).on( "click", "a", function( event ) {
      event.preventDefault();
      console.log( $( this ).text() );
      });
    `,
    firstLinkName: 'More Info from jQuery Docs',
    firstLinkURL: 'https://learn.jquery.com/events/event-delegation/',
  },
  closure: {
    id: 23,
    question: 'What is a closure?',
    main: 'A closure is when a function has access to data (variables or other functions) at a higher level within its scope.',
    firstLinkName: 'Explanation from JavaScript is Sexy',
    firstLinkURL: 'http://javascriptissexy.com/understand-javascript-closures-with-ease/',
    secondLinkName: 'MDN page on closures',
    secondLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
  },
  promises: {
    id: 24,
    question: 'What are promises, and why use them?',
    main: 'A promise is a wrapper for an asynchronous (async) task, such as making an API call. Promises return two results, one for a successful operation and the second for failure.',
    firstPoint: 'Promises enable the programmer to more effectively handle async operations by means of specifying what happens depending on the result of the operation. With promises, some of the frustration of async timing is eliminated.',
    secondPoint: 'Promises use two main methods: .then() and .catch(). The first can take arguments representing a successful and an unsuccessful result, while the second only takes an argument for an unsuccessful result (for instance, if an API call fails.)',
    firstLinkName: 'You\'re Missing the Point of Promises',
    firstLinkURL: 'https://gist.github.com/domenic/3889970',
    secondLinkName: 'What\'s the Point of Promises?',
    secondLinkURL: 'http://www.telerik.com/blogs/what-is-the-point-of-promises',
  },
  es6: {
    id: 25,
    question: 'Name and describe some new features of ES6.',
    main: 'Key features: template literals, arrow functions, default parameters, destructuring, promises, let and const.',
    firstPoint: 'For interviews, be able to say what each of these is, what advantages each offers over ES5, and which one is your favorite and why.',
    firstLinkName: 'You Don\'t Know JS: ES6 & Beyond (full online book)',
    firstLinkURL: 'https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond',
    secondLinkName: 'Learn ES2015 (guide from Babel)',
    secondLinkURL: 'https://babeljs.io/learn-es2015/',
  },
  bindCallApply: {
    id: 26,
    question: 'What are Apply, Call and Bind methods? Why are they an essential part of JS?',
    main: 'All these methods are used to bind the value of "this" to a function, as well as to pass in optional additional arguments.',
    firstPoint: 'The *Bind()* method is used primarily to call a function with the *this* value set explicitly.',
    secondPoint: 'The *Call()* method is very similar to *Bind()*, except that the former calls the function automatically.',
    thirdPoint: '*Apply* allows us to execute a function with an array of parameters, such that each parameter is passed to the function individually when the function executes. Apply is great for **variadic** functions, which take a varying number of arguments, not a set number like most functions.',
    firstLinkName: 'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
    firstLinkURL: 'http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/',
  },
  dataBinding: {
    id: 27,
    question: 'What is two-way data binding and one-way data flow? How are they different?',
    main: 'In **two-way data binding**, UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it, while in **one-way data flow**, the model is the single source of truth. Changes in the UI trigger messages that signal user intent to the model. Only the model has the access to change the app’s state. The effect is that data always flows in a single direction, which makes it easier to understand.',
    firstPoint: 'Two-way data binding is particularly important in AngularJS.',
  },
  shimming: {
    id: 28,
    question: 'What is console shimming?',
    main: 'A workaround when a browser has no or incomplete console support. Since the console is so critical for JS debugging, it\'s necessary to have access to one in a browser. Console shimming typically involves creating a dummy console and/or fallback functions for cases when browsers\' native consoles are insufficient.',
    firstLinkName: 'More details here',
    firstLinkURL: 'https://github.com/kayahr/console-shim',
  },
  storage: {
    id: 29,
    question: 'Describe the difference between a cookie, sessionStorage and localStorage.',
    main: 'Cookies are a mechanism for storing data involving the server, while localStorage and sessionStorage are browser-based.',
    firstPoint: 'Before HTML5 was introduced, the primary mechanism for storing information in the browser was cookies. Cookies are Not able to hold a lot of data (a limit of 4095 bytes); sent to the server every time you request a page from that domain; and not considered secure. Cookies are vulnerable to cross-site request forgery (CSRF).',
    secondPoint: 'ML5 introduced a storage object to help users store data in the browser. The storage object has two different types localStorage and sessionStorage and both types share the same methods. Both types of storage involve key/value pairs.',
    thirdPoint: 'To protect the user, the data stored in localStorage and sessionStorage is shared only under the same origin policy - meaning that it is stored in the browser but only accessible to pages with the same domain as that which stored it.',
    fourthPoint: 'What is the difference between localStorage and sessionStorage? **Session Storage**: does not persist outside of the users session - useful for semi-private user information or rapidly changing data. **Local Storage**: persists across tabs and is useful for data that should be stored offline.',
    firstLinkName: 'Turing Lesson on storage types',
    firstLinkURL: 'https://github.com/turingschool/lesson_plans/blob/3ee469be5fdc94c926a88ca510106848b0339731/ruby_04-apis_and_scalability/client_side_storage.markdown',
  },
  equality: {
    id: 30,
    question: 'What is the difference between == and ===?',
    main: 'The == is a loose or "Abstract" equality, which compares two value for equality, *after* converting both values to a common type. (Example: 2 == "2" is true). The === is a strict Equality Comparison, which compares two values for equality including type (no type conversion). ( 2 === "2" is false).',
    firstLinkName: 'MDN Docs on Equality Comparison',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness',
  },
  hog: {
    id: 31,
    question: 'What value is returned from the following statement? "i\'m a lasagna hog".split("").reverse().join("");',
    main: 'goh angasal a m\'i',
  },
  cors: {
    id: 32,
    question: 'What does CORS stand for and what issue does it address?',
    main: 'CORS stands for Cross-Origin Resource Sharing. It is a mechanism in modern browsers to prevent unauthorized access to web content.',
    firstPoint: 'CORS adds a header to an HTTP response that looks like: Access-Control-Allow-Origin: http://www.example.com. This prevents domains outside of example.com from accessing this site\'s resources.',
    firstLinkName: 'MDN Docs on CORS',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS',
    secondLinkName: 'Turing Lesson on CORS',
    secondLinkURL: 'http://frontend.turing.io/lessons/cors.html',
  },
  useStrict: {
    id: 33,
    question: 'What is "use strict";? what are the advantages and disadvantages to using it?',
    main: '"use strict" activates JavaScript\'s "strict mode". Strict mode catches errors that normal mode does not, adds some security improvements, and makes other changes to how code is run.',
    firstPoint: 'Perhaps the most common use of strict mode is error catching. For example, in strict mode, an error is thrown if the user accidentally creates a global variable. Strict mode also catches problems such as attempting to assign to a non-writable property and assignment to a getter-only property. Strict mode also does not permit creating duplicate properties (keys) in an object.',
    firstLinkName: 'For other uses of strict mode, see this MDN article.',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode',
  },
  ajax: {
    id: 34,
    question: 'What is AJAX and why is it useful?',
    main: 'AJAX stands for Asynchronous JavaScript And XML. It is essentially just the process of using the XMLHttpRequest() object to request data, and then putting it onto the DOM with JS and HTML.',
    firstPoint: 'AJAX allows asynchronous data processes to occur on a web page or in an app, such that the app can fetch or post data without refreshing the page and only the relevant part of a page can be updated when an external data request is made.',
    firstLinkName: 'W3 Schools Intro to AJAX',
    firstLinkURL: 'https://www.w3schools.com/xml/ajax_intro.asp',
    secondLinkName: 'MDN Docs on AJAX',
    secondLinkURL: 'https://developer.mozilla.org/en-US/docs/AJAX',
  },
  functions: {
    id: 35,
    question: 'What is a function declaration versus function expression?',
    main: 'A function declaration is simply instantiating a function, like function foo () { console.log(\'foobar\') }. A function expression, by contrast, is a function that is either set equal to a variable (expresses a relationship) or an IIFE (Immediately Invoked Function Expression). Example: var foo = function(){ console.log(\'foobar\')} .',
    firstPoint: 'What is the difference between them? Declarations are hoisted, while expressions are not. (See question on hoisting in the JavaScript Advanced section.) Another difference is that function declarations must be named, while function expressions can be anonymous.',
  },
  hoisting: {
    id: 36,
    question: 'What is hoisting, and why does it matter?',
    main: 'Hoisting is JavaScript\'s behavior of putting declarations into memory before actually executing code. What this means is that one can write a var declaration below a function using that variable, and the code will still run because the var declaration is put into memory before the function is executed. Similarly, functions can be declared below where they are called, and hoisting works the same way (function expressions, however, are not hoisted, meaning that they must be instantiated before they are referenced).',
    secondPoint: `
    Example:
    catName("Chloe");
    function catName(name) { console.log("My cat's name is " + name); }
    /* The result of the code above is: "My cat's name is Chloe" */
    `,
    firstLinkName: 'MDN Docs on Hoisting',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting',
  },
  iife: {
    id: 37,
    question: 'What are Immediately Invoked Function Expressions (IIFEs)?',
    main: 'IIFEs are functions that are called immediately once they are created. By contrast, a regular function must be called separately, via a function call like `getData()`.',
    firstPoint: `
      An example of an IIFE:
      (function getData(){
        console.log('I will get the data as soon as the JS engine reads me!')
      })():
    `,
    secondPoint: 'IIFEs are often used to protect data from the global scope. They can also be useful if one wants to execute code when the page loads and doesn\'t want to bother with something like a `load` event listener or adding an additional line of code to call a previously created function.',
  },
}

export default answers
