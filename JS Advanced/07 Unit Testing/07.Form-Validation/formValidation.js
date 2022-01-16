function validate() {
    const usernameRegex = /([a-z0-9]{3,20})/;
    const passwordRegex = /([\w]{5,15})/;
    const emailRegex = /(^[\w]+@[\w]+\.[\w]+$)/;

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const checkBoxBtn = document.getElementById("company"); 

    let isValidInput = true;
    let isChecked = false;

    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener("click", () => {
        if (!usernameRegex.test(usernameInput.value)) {
            isValidInput = false;
            usernameInput.style.borderColor = "red"
        } else {
            usernameInput.style.border = "none"
        }
        if (!emailRegex.test(emailInput.value)) {
            isValidInput = false;
            emailInput.style.borderColor = "red"
        } else {
            emailInput.style.border = "none"
        }
        if (!passwordRegex.test(passwordInput.value)) {
            isValidInput = false;
            passwordInput.style.borderColor = "red"
        } else {
            passwordInput.style.border = "none"
        }
        if (passwordInput.value != confirmPasswordInput.value) {
            isValidInput = false;
        }
    })

        
    checkBoxBtn.addEventListener("change", (e) => {
        const companyField = document.getElementById("companyInfo")
        if (e.target.checked) {
            isChecked = true;
            companyField.style.display = "block";
            const compnayNumber = document.getElementById("companyNumber");
            if (1000 <= compnayNumber.value > 9999) {
                compnayNumber.style.borderColer = "red";
            } else {
                compnayNumber.style.border = "none";
            }
        } else {
            companyField.style.display = "none";
        }
    })
}
