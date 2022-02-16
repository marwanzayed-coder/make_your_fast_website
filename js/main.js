let divider = document.getElementById("divider"),
  nav = document.getElementById("nav");

divider.onclick = function () {
  divider.classList.toggle("open");
  if (divider.classList.contains("open") === true) {
    nav.style.cssText = "z-index: 55555; opacity: 1; visibility: visible;";
  } else {
    nav.style.cssText = "z-index: -5; opacity: 0; visibility: hidden;";
  }
};

let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let massage = document.getElementById("massage");

function signIn() {
  if (
    inputName.value === window.localStorage.getItem("User Name") &&
    inputPassword.value === window.localStorage.getItem("Password")
  ) {
    massage.innerText = "Login succeeded";
    massage.classList.add("good");
  } else {
    massage.innerHTML =
      "Sorry, there is no account with this name, try creating a new account from <a href='sign-up.html'>here</a>";
    massage.classList.add("bad");
  }
}

function signUp() {
  window.localStorage.setItem("User Name", inputName.value);
  window.localStorage.setItem("Email", inputEmail.value);
  window.localStorage.setItem("Password", inputPassword.value);
  massage.innerText = "Subscription succeeded";
  massage.classList.add("good");
}
