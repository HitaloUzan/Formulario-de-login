const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
  });

  function checkInputs() {
    const usernameValue = username.value;
    const passwordValue = password.value;}

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório.");
      } else {
        setSuccessFor(username);
      }

      if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatória.");
      } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
      } else {
        setSuccessFor(password);}

        const formControls = form.querySelectorAll(".form-control");

        const formIsValid = [...formControls].every((formControl) => {
            return formControl.className === "form-control success";
          });
        
          if (formIsValid) {
            console.log("O formulário está 100% válido!");
          }
