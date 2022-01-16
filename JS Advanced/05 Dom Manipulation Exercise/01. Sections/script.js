function create(words) {
   
   const content = document.getElementById('content');

   for (let word of words) {

      // create div
   let newDiv = document.createElement('div');

   // create paragraph p
   let paragraph = document.createElement('p');

   // set p content
   paragraph.textContent = word

   // configure p to be hidden (display: none)
   paragraph.style.display = "none";

   // add <p> to <div>
   newDiv.appendChild(paragraph);

   // add div to page
   content.appendChild(newDiv);

   // configure <div> eventListener
   newDiv.addEventListener("click", onClick);

   }

   function onClick(ev) {
      ev.target.firstChild.style.display = ""
   }
  // firstChild == children[0]
}
