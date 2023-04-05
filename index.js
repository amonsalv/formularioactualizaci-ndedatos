// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
 
 
 /*activar el validate form bootstrap
 (function () {
   'use strict'
   const forms = document.querySelectorAll('.requires-validation')
   Array.from(forms)
     .forEach(function (form) {
       form.addEventListener('submit', function (event) {
         if (!form.checkValidity()) {
           event.preventDefault()
           event.stopPropagation()
         }
   
         form.classList.add('was-validated')
       }, false)
     })
   })()
 



/*console.log("works");

const formulario = document.querySelector("")

function aceptar() {
    var opcion = document.formulario.condiciones; //acceso al botón
    if (opcion.checked == true) { //botón seleccionado
       alert("El Formulario ha sido enviado")
       }
    else {  //botón no seleccionado
       alert("El formulario no ha podido enviarse. \n Debe aceptar las condiciones para poder enviar el formulario");
       return false; //el formulario no se envia
       }
    }
 
      <form action="checkfinal" name="formulario" class="p-5 mt-3 mr-6 ml-6 needs-validation" novalidate
        ">
 
 /** Validar el formulario antes de mostrar la notificacion */

