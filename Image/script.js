// console.log("hello world");
/**
 * * string
 * * number
 * * boolean
 * * array
 * * object
 * * undefined
 * * null
 *
 * ? Primitive Datatypes
 *  -> String, Number, undefined, boolean
 *
 */
// const hello = 'hello' + "world"
// const hello = 'hello' + 23; // hello23
// const hello = '23' + '23'
// const hello = 23 + '23'
// const y = "Good Mornig"

// const x = 'Hello, world';
// console.log(x.lastIndexOf('o'))
// console.log(x.indexOf('o')) // linear search
// console.log(x.includes('Hello'))
// console.log(x.concat(y))
// console.log(x.charAt(4))
// console.log(x.charCodeAt(4)) // => a => , Enter => 13
// ? RETURN BOOLEAN TYPES
// console.log(x.endsWith('rld')) => true
// console.log(x.endsWith('d',12))
// console.log(x.startsWith('h')) // JS -> CASE SENSITIVE
// console.log(x.startsWith('o',4))
// console.log(x.endsWith('o',5))
// console.log(x.length)
// console.log(x.includes('llo'))
// console.log(x.)
const imgArray = [
  "/img/1.2.png",
  "/img/1.3.png",
  "/img/1.4.png",
  "/img/2.jpg",
  "/img/3.jpg",
];
const myButton = document.getElementsByClassName("btn")[0]; //HtmlCollection
const image = document.getElementsByClassName("img")[0];
const originalImg = image.src;
let count = 0;
const myFunction = () => {
  if (count === imgArray.length) {
    image.src = originalImg;
    count = 0;
    return;
  }
  image.src = imgArray[count];
  count += 1;
};
myButton.addEventListener("click", myFunction);
