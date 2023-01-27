const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let username = document.querySelector('#username').value
  let email = document.querySelector('#email').value;
  let tel = document.querySelector('#tel').value;
  console.log(username, email, tel);

});




let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");




form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Este campo es obligatorio")
  engine(email, 1, "Este campo es obligatorio");
  engine(tel, 2, "Este campo es obligatorio");
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


  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";
    alert("Gracias por Completar el Formulario");

  }
};

const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click', function()  {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
});

