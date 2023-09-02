const form = document.getElementById("sign-up")
const pass = document.getElementById("pass");
const conPass = document.getElementById("conpass");
const errorMsg = document.getElementById("error-msg");
const inputs = document.getElementsByTagName("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (pass.value.toUpperCase() !== conPass.value.toUpperCase()) {
        pass.classList.add("error");
        conPass.classList.add("error");
        errorMsg.classList.add("error-msg");
        for(let i=0; i<inputs.length;i++){
            inputs[i].blur();
        }
    } else {
        form.submit();
    }
});