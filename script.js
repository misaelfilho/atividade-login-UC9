function fazerLogin(event) {
  event.preventDefault();

  var email = document.getElementById("campo-email").value;
  var senha = document.getElementById("senha").value;

  if (email === "admin@admin.com" && senha === "admin") {
    alert("Login bem-sucedido!");
      window.location.href = "bemvindos.html"
  } else {
    alert("Email ou senha inválidos!");
    document.getElementById("campo-email").value = "";
    document.getElementById("senha").value = "";
  }
}