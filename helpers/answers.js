const answers = {
  aria: {
    main: 'Accessibility in Web development means enabling as many people as possible to use Web sites, even when those people’s abilities are limited in some way.',
    firstPoint: 'Aria stands for Accessible Rich Internet Application',
    secondPoint: 'Semantic HTML: Use elements such as <nav>, <button>, <header>, <aside> that help clarify what part of html page someone is focused on.',
    thirdPoint: 'Alt Tags: Use on images. Be verbose. <img src="mountain.jpg" alt="The cascade mountains at sunset in January" />',
    fourthPoint: 'ARIA Roles: Define the purpose of an element. Each element can only have one ARIA role at a time',
  },
  attr: {
    main: 'data-* attributes allow us to store extra information on standard, semantic HTML elements.',
    firstPoint: `Syntax:
    	<article
      id="electriccars"
      data-columns="3"
      data-index-number="12314"
      data-parent="cars">
...
</article>`,
    firstLinkName: 'CSS Tricks: Attribute Selectors',
    firstLinkURL: 'https://css-tricks.com/almanac/selectors/a/attribute/',
    secondLinkName: 'MDN: Using Data Attributes',
    secondLinkURL: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes',
  },
  boxModel: {
    main: 'Each element is a rectangular box. CSS leverages “the box model” to control layout and design. An HTML element is comprised of its content and the margins, borders, padding surrounding it. Boxes are “stacked” in the order they appear in your HTML. You can stack them horizontally, vertically, and in the z-plane.',
    image: require('../images/box-model.png'),
  },
  inlineBlock: {
    main: '**Block** elements take up the full width available with a line break before and after it. `<h1>, <p>, <li>, and <div>, while  **Inline** elements one take up as much width as necessary, cannot accept width and height values and do not force line breaks. `<a>, <span>`',
    firstPoint: 'What about **inline-block** versus **inline**? They are basically the same except that inline-block elements can take a width and a height, while inline elements cannot.',
    firstLinkName: 'Stack Overflow post on inline versus inline-block',
    firstLinkURL: 'https://stackoverflow.com/questions/8969381/what-is-the-difference-between-display-inline-and-display-inline-block',
  },
  zIndex: {
    main: 'The z-index specifies the stacking order of positioned elements. Lowest z-index will be on the bottom and highest on the top',
    firstPoint: 'It can take the following values: **Auto**: Sets stack order equal to its parents; **Number**: Orders the stack order; **Initial**: Sets to default value of 0; and **Inherit**: Inherits from its parent element.',
  },
  positioning: {
    main: 'There are four types of CSS positioning detailed below:',
    firstPoint: 'Relative: A relatively positioned element preserves its space. The adjacent elements aren’t repositioned to occupy the reserved space for this element. However, the offsets of this element don’t occupy space. They’re completely ignored from the other elements, and hence that may causes elements to overlap each other.',
    secondPoint: 'Absolute: An absolutely positioned element is completely removed from the normal flow. The adjacent sibling elements occupy its space.',
    thirdPoint: 'Fixed: A fixed positioned element (subcategory of the absolute positioning) is positioned relative to the viewport. It will stick in place despite any scrolling or resizing of the viewport',
    fourthPoint: 'Static: HTML elements are positioned static by default. Static positioned elements are not affected by the top, bottom, left, and right properties.',
    firstLinkName: 'MDN Docs on CSS Positioning',
    firstLinkURL: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position',
  },
  mediaQueries: {
    main: 'A CSS3 Module that allows content rendering to adapt to conditions such as screen resolutions.',
    firstPoint: 'Used in *Adaptive Page Layouts*: An adaptive layout uses CSS media queries to detect the width of the browser and make layout adjustments accordingly. Unlike liquid layouts, adaptive layouts use fixed units like pixels to define widths. They behave like a series of static layouts defined by specific media queries.',
    secondPoint: '*Responsive Page Layouts* are best: A true responsive page layout combines the best parts of a liquid layout and an adaptive layout to create the best experience for your users as they move between devices and screen sizes. By using both relative units and media queries, a responsive site allows us to transition through screen sizes seamlessly and effortlessly.',
  },
  applyStyles: {
    main: 'Inline styling, embedded styling, and external (or stylesheet) styling.',
    firstPoint: 'Inline: use very sparingly. Done by inserting a "style" attribute inside an HTML element.',
    secondPoint: 'Embedded: insert a `<style>` tag in head of HTML document and write the styles directly there.',
    thirdPoint: 'External: CSS is in an external .css file and linked in HTML document with `<link>` tags.',
    fourthPoint: 'External styling is best because it allows developers to keep the styling separate from the HTML. This helps with readability and maintainability.',
  },
  floatChallenge: {
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
    main: 'Pre-processors allow the dev to do a lot of neat things, but they came at the cost of configuration and maintance issues.',
    firstPoint: 'pros: ability to nest, define variables and mixins, use of mathematical operations, ability to join multiple files into one file',
    secondPoint: 'cons: difficulty tracking file size, maintenance and updating, difficulties debugging',
  },
  pseudoClass: {
    main: 'CSS pseudo classes are similar to classes, but not explicitly defined in the markup.',
    firstPoint: 'They are used for addition effects on a selected HTML element, such as link colors, hover actions, etc.',
    secondPoint: 'Syntax: selector:pseudo-class. (a:link, a:visited)',
  },
  pseudoElement: {
    main: 'Pseudo elements are used to add special effects to some selectors, such as making the first letter of a word bold and larger than the other letters.',
    firstPoint: 'They are made by using a double colon (::) followed by the name of the pseudo element.',
    secondPoint: 'They can only be applied to block level elements.',
    thirdPoint: 'Examples: (::first_line, ::first_letter, ::before, ::after)',
  },
  newFeatures: {
    main: 'Web fonts, rounded corners, border images, box shadows, transform property, multi-column layout.',
  },
  shorthand: {
    main: 'They are used to improve page load times, reduce file size, and make CSS easier to write and read by humans.',
    secondPoint: `They are accomplished by listing the property values on a single line:
      body {
          background: #00ff00 url("smiley.gif") no-repeat fixed center;
      }`,
  },
  hideContent: {
    main: 'There are several ways to hide content, ranging from the CSS display property to using creative indentation and positioning. Note: not all of these make the content available to screen readers.',
    firstPoint: 'display:none. Probably the most obvious and intuitive. However, this makes the content unavailable to screen readers.',
    secondPoint: 'text-indent: -1000px This will allow the content to be visible off screen and thus accessible to screen readers.',
    thirdPoint: 'clip: rect(1px, 1px, 1px, 1px) Clips content that will not fit in a 1px area. Available to screen readers.',
    fourthPoint: 'position:absolute; left:-10000px; overflow:hidden; : Absolutely position element off screen. Available to screen readers.',
  },
  paradigms: {
    main: 'OOP (Object Oriented Programming) and Functional Programming',
    firstPoint: 'OOP overview: Supports prototypal inheritance; Objects without classes in the classical sense',
    secondPoint: 'Functional Programming overview: Avoids shared state & mutable data; uses pure functions',
    thirdPoint: 'OOP pros: Easy to interpret and read; more flexible than classical paradigms.',
    fourthPoint: 'OOP cons: Objects and behaviors are typically tied together on the same entity, which may be accessed randomly by any number of functions. ==> race conditions and competition for resources.',
    fifthPoint: 'Functional Programming pros: can refactor with very little code change; More simplified and easier to recompose and reuse.',
    sixthPoint: 'Functional Programming cons: Over exploitation can reduce readability through abstraction; steep learning curve.',
  },
  inheritance: {
    main: 'In a nutshell: class inheritance stems from the classical programming languages (i.e. Java), while prototypal inheritance is tied to objects and is much more flexible.',
    firstPoint: 'Class inheritance overview: instances inherit from classes (like a blueprint), and create sub-class relationships: hierarchical class taxonomies. Creates tight coupling/hierarchies.',
    secondPoint: 'Prototypal inheritance overview: Instances inherit directly from other objects, not strict classes; May be composed from many different objects, allowing for easy selective inheritance.',
    firstLinkName: 'Read up on the three types of prototypal inheritance: delegation, concatenative, and functional.',
    firstLinkURL: 'https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9',
  },
  dataTypes: {
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
    main: 'JS was written to be an object oriented language. All objects in JS, broadly defined, inherit from Object.prototype, while arrays inherit from Array.prototype and functions from Function.prototype, which in turn inherit from Object.Prototype. This structure has shaped the language and its emphasis on prototypal inheritance as a core data architecture.',
  },
  varLetConst: {
    main: 'In a nutshell: let and const are new ES6 replacements for var; the former two are block scoped while the latter is function scoped.',
    firstPoint: 'const: immutable; cannot be reassigned. Block scoped',
    secondPoint: 'let: same as const except that it can be reassigned. Use when you know you will reassign a variable, such as within a loop.',
    thirdPoint: 'var: the old standard variable notation. It is function scoped and can be reassigned.',
  },
  callback: {
    main: 'A callback is a function that is passed to another function as a parameter. It is passed as an argument, not as an executed function.',
    firstPoint: 'Common use cases for callbacks include event listeners; asynchronous tasks; and setTimeout/setInterval methods.',
    secondPoint: 'If you stop and think about it, you are probably often using callbacks without even realizing it!',
  },
  delegation: {
    main: 'In JS, an event received by an element (like a "click" event listener) does not stop with that one element. It moves to other elements like the parent, and other ancestors of the element. Event delegation allows us to attach a single event listener to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.',
    firstPoint: 'This uses event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. For instance, when you click on an li (like a button), the click event registers on the entire ul (the list of buttons.)',
    secondPoint: 'Event delegation is often used for dynamically created elements (like buttons created in a div that appears on the page only when the user enters in some data). Because the parent (or grandparent) element originally existed, event propagation can be used to "bubble" the click event down to the dynamically created child.',
    thirdPoint: `
    Example of using event delegation (The second, selector parameter tells the handler to listen for the specified event, and when it hears it, checks to see if the triggering element for that event matches the second parameter):
      // Attach a delegated event handler
      $( "#list" ).on( "click", "a", function( event ) {
      event.preventDefault();
      console.log( $( this ).text() );
      });
    `,
  },
}

export default answers
