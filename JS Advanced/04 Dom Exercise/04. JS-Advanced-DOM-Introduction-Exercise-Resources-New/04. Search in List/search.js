function search() {
   const elements = Array.from(document.querySelectorAll("ul li"));

   const input = document.getElementById("searchText").value
   let isFound = true
   
   let matches = 0;
   elements.forEach((element) => {
      if (input == "") {
         isFound = false
         return
      }
      
      if (element.innerHTML.includes(input)) {
         element.style.fontWeight = "bold";
         element.style.textDecoration = "underline";
         matches++
      }  else {
         element.style.fontWeight = "normal";
         element.style.textDecoration = "";
      }

   });
   if (isFound) {
      document.getElementById("result").textContent = `${matches} matches found`
   } else {
      document.getElementById("result").textContent = "Enter text to search!"
   }

}
