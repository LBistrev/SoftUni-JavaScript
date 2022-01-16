function toggle() {

    const btn = document.querySelector(".button");

    const text = document.getElementById("extra");

    btn.textContent = btn.textContent == "More" ? "Less" : "More";
    text.style.display = text.style.display == "none" || text.style.display == "" ? text.style.display = "block" : text.style.display = "none";

}
