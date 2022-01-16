function solve() {
  let text = document.getElementById("text").value.toLowerCase();
  const splittedText = text.split(", ");

  const secondParameter = document.getElementById("naming-convention").value
  const result = document.getElementById("result");

  let resultString = "";

  if (secondParameter == "Pascal Case") {
    for (let i = 0; i < splittedText.length; i++) {
      resultString += splittedText[i][0].toUpperCase() + splittedText[i].slice(1, splittedText[i].length).toLowerCase();
    }

  } else if (secondParameter == "Camel Case") {

    for (let i = 1; i < splittedText.length; i++) {
      resultString += splittedText[i][0].toUpperCase() + splittedText[i].slice(1, splittedText[i].length).toLowerCase()
    }

  } else {
    result.textContent = "Error!";
    return
  }
  result.textContent = resultString;

}
