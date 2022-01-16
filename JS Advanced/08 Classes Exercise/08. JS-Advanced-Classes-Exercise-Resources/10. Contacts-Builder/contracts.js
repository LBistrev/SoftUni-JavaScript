class Contact {
    constructor(firstname, lastname, phone, email) {
        this.firstname = firstname
        this.lastname = lastname
        this.phone = phone
        this.email = email
        this.online = false
    }
    get online() {
        return this._online
    }

    set online(value) {
        if (this.titleDiv && value == false) {
            this.titleDiv.classList.remove("online");

        } else {
            this.titleDiv.classList.add("online")
        }
        this._online = value
    }
    render(id) {

        const article = document.createElement("article");
        this.titleDiv = document.createElement("div");
        this.titleDiv.classList.add("title");
        this.titleButton = document.createElement("button")
        this.titleButton.innerHTML = "&#8505"
        this.titleDiv.innerHTML = `${this.firstname} ${this.lastname}`;
        this.titleDiv.appendChild(this.titleButton)

        
        if (this._online) {
            this.titleDiv.classList.add("online")
        }

        this.inforDiv = document.createElement("div");

        this.inforDiv.classList.add("info");
        this.inforDiv.style.display = "none";
        this.inforDiv.innerHTML = `<span>&${this.phone}</span><span>&#9993; ${this.email}</span>`

        this.titleButton.addEventListener("click", () => {
            this.inforDiv.style.display = this.inforDiv.style.display == "none" ? "block" : "none"
        })

        article.appendChild(this.titleDiv);
        article.appendChild(this.inforDiv);

        document.getElementById(id.appendChild(article));

    }
}
