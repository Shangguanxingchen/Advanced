import fn from './fn.js';
import logo from './images/logo.png';
import indexCss from './css/css.css';

const myName = "郑浩";
const btn = document.querySelector("button");
btn.onclick = function() {
    console.log(`开课吧 - ${myName}`);
};
console.log(fn);
console.log(logo);
