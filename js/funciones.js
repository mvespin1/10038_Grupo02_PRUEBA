//EJEMPLO DE GET STARTED CON MICROSOFT
$(document).ready(function() {
    var imagenes = ['./assets/img/imagen1.jpg', './assets/img/imagen2.jpg', './assets/img/imagen3.jpg', './assets/img/imagen4.jpg'];
    var indice = 0;
  
    $('#boton').click(function() {
      indice = (indice + 1) % imagenes.length;
      var nuevaImagen = imagenes[indice];
      $('#imagen').attr('src', nuevaImagen);
    });
});


