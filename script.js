
function alerta() {
  alert ("Gracias por Completar el Formulario");
}

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");




form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});


//  =  igual transformar  /  == comparar   /  === comparar segun valor funciona en IF

let engine = (id, serial, message) => {

  // y = &  /  o = ||
  // if (condicion1 & condicion =="8" || ) {
  //     //code q sucedera   
  // }else{
  //   //code q sucedera
  // }

  if (id.value.trim() === "") {

    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid orange";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";

  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};


// enviar(CloseEvent){

//   window.location("google.com");
// }