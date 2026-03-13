input = document.getElementById("email");
button = document.getElementById("checkEmail");
p = document.getElementById("message");

function checkEmail() {
  email = document.getElementById("email").value;
  error = document.getElementById("message");

  if (email.includes("@")) {
    error.innerText = "Email is Valid";
    error.style.color = "green";
    error.style.fontWeight = "bolder";
  } else {
    error.innerText = "Please enter a valid email address";
    error.style.color = "red";
    error.style.fontWeight = "bold";
  }
}
