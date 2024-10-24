const inputEmail = document.getElementById('email-input');
const error = document.getElementById('error');
const button = document.getElementById('button');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
button.addEventListener('click', function () {
    const email = inputEmail.value;
    if (email === "") {
        error.style.display = "block";
        error.classList.remove("warning");
        void error.offsetWidth;
        error.classList.add("warning");
        console.log('empty');
    } else {
        if (!emailPattern.test(email)) {
            error.style.display = "block";
            error.innerHTML = "Please enter a valid email address";
            error.classList.remove("warning");
            void error.offsetWidth ;
            error.classList.add("warning");
        } else {
            error.style.display = "none";
            error.innerHTML = "";
        }
    }
});