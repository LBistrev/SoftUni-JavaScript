function addItem() {

    const menu = document.getElementById("menu");
   // console.log(menu)

    const inputText = document.getElementById("newItemText");
    //console.log(inputText)

    const inputValue = document.getElementById("newItemValue");
    const newOption = document.createElement("option")

    newOption.textContent = inputText.value;
    newOption.value = inputValue.value

    menu.appendChild(newOption);

    inputText.value = "";
    inputValue.value = "";
    
}
