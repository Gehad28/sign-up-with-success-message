let form = document.querySelector("form");
let errorMessage = document.getElementById("error-message");
let input = document.getElementById("input");
let signUp = document.getElementById("sign-up");
let success = document.getElementById("success");
let btn = document.getElementById("dismiss-btn");

form.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!data.email || !emailPattern.test(data.email)){
        errorMessage.style.display = "block";
        input.classList.add("error");
    }
    else{
        signUp.style.display = "none";
        success.style.display = "flex";
    }
});

btn.addEventListener("click", e => {
    signUp.style.display = "flex";
    input.value = "";
    input.classList.remove("error");
    errorMessage.style.display = "none";
    success.style.display = "none";
})