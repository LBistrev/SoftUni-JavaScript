function getArticleGenerator(articles) {
   const arrText = articles;
   let input = document.getElementById("content")

   return () => {
       if (arrText.length > 0) {
           const article = document.createElement("article");
           article.textContent = arrText.shift();
           input.appendChild(article);
       }
   }
}
