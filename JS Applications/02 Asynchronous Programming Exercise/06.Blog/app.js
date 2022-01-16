function attachEvents() {
    
    const loadBtn = document.getElementById("btnLoadPosts");
    const viewBtn = document.getElementById("btnViewPost");
    let selectOption = document.getElementById("posts");

    loadBtn.addEventListener("click", makePostRequest);
    viewBtn.addEventListener("click", displayComments);

    async function displayComments() {

        viewBtn.disabled = true;
        const selectedId = document.getElementById("posts").value;

        const [post, comments] = await Promise.all([getPostId(selectedId), getCommentsfromPostId(selectedId)])
        /*
         PromiseAll - изпълнява заявките независимо една от друга, ако го направим по отделно с await, заявките се 
         изпълняват отделно и отнема повече време, с PromiseAll се изпълняват едновременно и става по-бързо.
         Използва се като в Promise.all() подадем списък/лист от промиси
         Promise.all([promise, promise, promise])
         */


        //const post = await getPostId(selectedId);
       // const comments = await getCommentsfromPostId(selectedId);

        let postTitle = document.getElementById("post-title");
        postTitle.textContent = post.title;
        document.getElementById("post-body").textContent = post.body;

        let commentsDetails = document.getElementById("post-comments");
        commentsDetails.replaceChildren(); // изчиства полето

        comments.forEach(comment => {
            let liElement = document.createElement("li");
            liElement.textContent = comment.text;
            commentsDetails.appendChild(liElement);
        })
        
    }


    async function makePostRequest() {

        const url = `http://localhost:3030/jsonstore/blog/posts`
        const response = await fetch(url);
        const data = await response.json();
        selectOption.textContent = ""
        loadBtn.disabled = true;

        Object.values(data).forEach(post => {
            let newOption = document.createElement('option');
            newOption.textContent = post.title
            newOption.value = post.id

            selectOption.appendChild(newOption);
        });
    }

    async function getPostId(postId) {
        const url = `http://localhost:3030/jsonstore/blog/posts/` + postId;
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }

    async function getCommentsfromPostId(postId) {
        const url = `http://localhost:3030/jsonstore/blog/comments`
        const response = await fetch(url);
        const data = await response.json();

        const comments = Object.values(data).filter(comment => comment.postId == postId);

        return comments;
    }
}

attachEvents();
