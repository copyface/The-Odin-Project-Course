const unorderedList = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

function buttonClicked(event) {
  event.preventDefault();

  const list = document.createElement("li");
  const span = document.createElement("span");
  const bttn = document.createElement("button");

  let value = input.value;

  span.textContent = value;
  bttn.textContent = "DELETE";

  bttn.addEventListener("click", () => {
    list.remove();
  });

  list.appendChild(span);
  list.appendChild(bttn);

  unorderedList.appendChild(list);
  input.value = "";
}

button.addEventListener("click", buttonClicked);

button.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    buttonClicked();
  }
});
