// output div
const result = document.querySelector(".result");
// const textArea = document.querySelector("textarea");
// const option = document.querySelector(".option");

// buttons
const rest = document.querySelector(".rest");
const words = document.querySelector(".words");
const italic = document.querySelector(".italic");
const underline = document.querySelector(".underline");
const font = document.querySelector(".font");
const bold = document.querySelector(".bold");

rest.addEventListener("click", () => {
  const textArea = document.querySelector("textarea");
  textArea.value = "";
  textArea.style.fontWeight = "lighter";
  textArea.style.fontStyle = "normal";
  textArea.style.textDecorationLine = "none";
  textArea.style.fontSize = "";
  result.innerHTML = "<h2> everything is rest </h2>";
});

bold.addEventListener("click", () => {
  const textArea = document.querySelector("textarea");
  if (textArea.style.fontWeight === "") {
    textArea.style.fontWeight = "bold";
  } else if (textArea.style.fontWeight === "bold") {
    textArea.style.fontWeight = "lighter";
  } else if (textArea.style.fontWeight === "lighter") {
    textArea.style.fontWeight = "bold";
  }
});

words.addEventListener("click", () => {
  const textArea = document.querySelector("textarea");
  let data = textArea.value;
  const res = data.split(" ");
  result.innerHTML = `<h2> words : ${res.length} & characters : ${data.length} </h2>`;
  if (data === "") result.innerHTML = `<h2> There is no text </h2>`;
});

italic.addEventListener("click", () => {
  const textArea = document.querySelector("textarea");
  console.log(textArea.style.fontStyle);
  if (textArea.style.fontStyle === "") {
    textArea.style.fontStyle = "italic";
  } else if (textArea.style.fontStyle === "italic") {
    textArea.style.fontStyle = "normal";
  } else if (textArea.style.fontStyle === "normal") {
    textArea.style.fontStyle = "italic";
  }
});

underline.addEventListener("click", () => {
  const textArea = document.querySelector("textarea");
  console.log(textArea.style.textDecorationLine);
  if (textArea.style.textDecorationLine === "") {
    textArea.style.textDecorationLine = "underline";
  } else if (textArea.style.textDecorationLine === "underline") {
    textArea.style.textDecorationLine = "none";
  } else if ((textArea.style.textDecorationLine = "none")) {
    textArea.style.textDecorationLine = "underline";
  }
});

font.addEventListener("click", () => {
  const textArea = document.querySelector("textarea");
  const option = document.querySelector(".option");
  let selectedIndex = option.selectedIndex;
  textArea.style.fontSize = option[selectedIndex].value;
});
