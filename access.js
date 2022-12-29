let str1Element = document.getElementById("strOne");
let str2Element = document.getElementById("strTwo");
const form = document.getElementById("form");
const submitButtonElement = document.getElementById("submit");
const displayElement = document.querySelector(".output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const string1 = str1Element.value;
  const string2 = str2Element.value;
  displayElement.innerHTML = isomorphicStrings(string1, string2);
});

submitButtonElement.addEventListener("click", () => {
  const string1 = str1Element.value;
  const string2 = str2Element.value;
  displayElement.innerHTML = isomorphicStrings(string1, string2);
});
