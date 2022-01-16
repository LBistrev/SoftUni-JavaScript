function search() {
    const arr = document.querySelectorAll("ul li")
    
    
    const input = document.getElementById("searchText").value

    for (let item of Array.from(arr)) {
        if (item.textContent.includes(input)) {
            
        }
    }
}