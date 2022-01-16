function solve() {

   const btn = document.getElementById("searchBtn");
   btn.addEventListener("click", findMatches)

   function findMatches() {

      let inputField = document.getElementById("searchField");
      let input = inputField.value.toLowerCase();

      const tableInfo = Array.from(document.querySelectorAll("tbody tr"));

   for (let row of tableInfo) {
      const textRow = row.textContent.toLowerCase();

      if (textRow.includes(input)) {
         row.classList.add("select");

      } else {
         row.classList.remove("select");
      }
   }
   inputField.value = ""
}

}
