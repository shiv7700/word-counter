const result = document.querySelector(".result");
// const textArea = document.querySelector("textarea");
const bold = document.querySelector(".bold");
const option = document.querySelector(".option");

// buttons
const rest = document.querySelector(".rest");
const words = document.querySelector(".words");
const italic = document.querySelector(".italic");
const underline = document.querySelector(".underline");
const font = document.querySelector(".font");

function isEmpty() {}

rest.addEventListener("click", () => {
  textArea.value = "";
  result.innerHTML = "";
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
});

italic.addEventListener("click", () => {
  textArea.style.fontStyle = "italic";
});

underline.addEventListener("click", () => {
  textArea.style.textDecorationLine = "underline";
});

font.addEventListener("click", () => {
  let selectedIndex = option.selectedIndex;
  textArea.style.fontSize = option[selectedIndex].value;
});
