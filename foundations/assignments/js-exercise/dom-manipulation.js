const body = document.querySelector("body");
const redParagraph = document.createElement("p");
const blueHeading = document.createElement("h3");
const div = document.createElement("div");
const heading1 = document.createElement("h1");
const paragraph = document.createElement("p");

redParagraph.classList.add("red");
blueHeading.classList.add("blue");
div.classList.add("container");

redParagraph.style.color = "red";
blueHeading.style.color = "blue";
div.setAttribute("style", "background-color: pink; border: 1px solid black;");

redParagraph.textContent = "Hey, Im red!";
blueHeading.textContent = "I'm a blue h3!";
heading1.textContent = "I'm a div";
paragraph.textContent = "ME TOO";

body.appendChild(redParagraph);
body.appendChild(blueHeading);
div.appendChild(heading1);
div.appendChild(paragraph);
body.appendChild(div);

// the JavaScript file
// const btn1 = document.querySelector("#btn1");
// btn1.onclick = () => alert("Hello World");
//
const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

// btn.addEventListener("click", function (e) {
//   console.log(e);
// });
// btn.addEventListener("click", function (e) {
//   console.log(e.target);
// });
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
