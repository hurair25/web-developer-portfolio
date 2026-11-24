function checkForm(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var result = document.getElementById("result");

  if (name === "" || email === "" || message === "") {
    result.textContent = "Please fill in all fields.";
    result.style.color = "red";
  } else {
    result.textContent = "Thank you, " + name + "! Your message was sent.";
    result.style.color = "green";
  }
}