function solve() {

  const btn = document.getElementById("formatItBtn");

  let textArea = document.getElementById("input").value;

  let result = document.getElementById("output");

  let splittedText = textArea.split(".");
  let formattetText = "";

  let counter = 0;

  splittedText.forEach((el) => {
    counter++;

    if (counter == 3) {

    }

    formattetText += `<p>${el}.</p>`;
    console.log(formattetText)
  })

  result.innerHTML = formattetText;

}

for (let i = 0; i < splittedText.length; i += 3) {
  let arr = [];
  for (let y = 0; y < 3; y++) {
    if (splittedText[i+y]) {
      arr.push(splittedText[i+y]);
    }
  }
  let paragraph = arr.join('. ') + ".";
  output.innerHTML += `<p>${paragraph}</p>`;
}
