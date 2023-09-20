var dropdownToggle = document.querySelector(".dropdown-toggle");
var dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", function () {
  dropdownMenu.classList.toggle("active");
});

var content = document.querySelector("#content");

var boldBtn = document.querySelector("#bold-btn");
var underlineBtn = document.querySelector("#underline-btn");
var italicBtn = document.querySelector("#italic-btn");
var colorBtn = document.querySelector("#color-btn");

boldBtn.addEventListener("click", function () {
  document.execCommand("bold", false, null);
});

underlineBtn.addEventListener("click", function () {
  document.execCommand("underline", false, null);
});

italicBtn.addEventListener("click", function () {
  document.execCommand("italic", false, null);
});

colorBtn.addEventListener("input", function () {
  document.execCommand("foreColor", false, colorBtn.value);
});

var words = document.getElementById("word-count");
var characters = document.getElementById("characters-count");

function count() {
  var text = content.innerText;
  var countWords = text.trim().split(/\s+/).length;
  var countCharacters = text.replace(/\s/g, "").length;

  words.textContent = countWords;
  characters.textContent = countCharacters;
}
content.addEventListener("input", count);

var newBtn = document.querySelector("#new-btn");
var pdfBtn = document.querySelector("#pdf-btn");
var txtBtn = document.querySelector("#txt-btn");
var fileName = document.querySelector("#filename-input");

newBtn.addEventListener("click", function () {
  content.innerHTML = "";

  count();
});

pdfBtn.addEventListener("click", function () {
  html2pdf(content).save(fileNameInput.value);
});
