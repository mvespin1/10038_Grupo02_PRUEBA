//EJEMPLO DE GET STARTED 
$(document).ready(function() {
    var imagenes = ['./assets/img/imagen1.jpg', './assets/img/imagen2.jpg', './assets/img/imagen3.jpg', './assets/img/imagen4.jpg'];
    var indice = 0;
  
    $('#boton').click(function() {
      indice = (indice + 1) % imagenes.length;
      var nuevaImagen = imagenes[indice];
      $('#imagen').attr('src', nuevaImagen);
    });
});
//EJEMPLO DE Syntax
$(document).ready(function() {
    var changeColor = true;
    var defaultColor = $('body').css('background-color');

    function randomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    function changeBackgroundColor() {
      if (changeColor) {
        var color = randomColor();
        $('body').css('background-color', color);
      }
    }

    $('.theme-button').click(function() {
      changeBackgroundColor();
    });

    $('.disable-button').click(function() {
      changeColor = false;
    });

    $('.restore-button').click(function() {
      changeColor = true;
      $('body').css('background-color', defaultColor);
    });
  });

