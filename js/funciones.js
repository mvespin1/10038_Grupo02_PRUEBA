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

//EVENTOS JQUERY

//EJEMPLO 1 
$(document).ready(function(){
  $("#boton1").click(function(){
    $(this).addClass("rojo");
  });

  $("#boton2").click(function(){
    $(this).addClass("azul");
  });

  $("#boton3").click(function(){
    $(this).addClass("verde");
  });
});

//EJEMPLO 2
$(document).ready(function(){
  $("#boton4").dblclick(function(){
    $(this).addClass("verde");
  });

  $("#boton5").dblclick(function(){
    $(this).addClass("rojo");
  });

  $("#boton6").dblclick(function(){
    $(this).addClass("azul");
  });
});

//EJEMPLO 3
$(document).ready(function(){
  $("#elemento").mouseenter(function(){
      $(this).addClass("resaltado");
  });
});

//EJEMPLO 4
$(document).ready(function(){                     
  $("#elemento2").mouseleave(function(){
      $(this).addClass("resaltado2");
  });
});

//EJEMPLO 5
$(document).ready(function(){
  $("#elemento3").mousedown(function(){
      $(this).addClass("resaltado3");
  });
                            
  $("#elemento3").mouseup(function(){
      $(this).removeClass("resaltado3");
  });
});

//EJEMPLO 6
$(document).ready(function(){
  $("#elemento4").mouseup(function(){
    $(this).addClass("resaltado4");
  });
});

//EJEMPLO 7
$(document).ready(function(){
  $("#elemento5").hover(function(){
    $(this).addClass("resaltado5");
  }, function(){
    $(this).removeClass("resaltado5");
  });
});

//EJEMPLO 8
$(document).ready(function(){
  $("#input1, #input2").focus(function(){
    $(this).addClass("resaltado6");
  });

});

//EJEMPLO 9
$(document).ready(function(){
  $("#input3, #input4").blur(function(){
      $(this).addClass("resaltado7");
  });                       
});

//EJEMPLO 10
$(document).ready(function(){
  $("#p1, #p2, #p3").on("click", function(){
    $(this).addClass("resaltado8");
    $(this).css("background-color", "yellow");
    $(this).css("border", "2px solid black");
  });

  $("#p1, #p2, #p3").on("mouseleave", function(){
    $(this).removeClass("resaltado8");
    $(this).css("background-color", "white");
    $(this).css("border", "none");
  });
});
//-------------------------------------------------------
//FUNCIONES INICIO
//--------------------------------------------------------

$(document).ready(function(){
  $("#inicio1, #inicio2, #inicio3").click(function(){
    $(this).hide();
  });
  $("#mostrarParrafosInicio").click(function() {
                $("#inicio1, #inicio2, #inicio3").show();
            });
});

//--------------------------------------------------------   
//FUNCIONES SELECTORES
//--------------------------------------------------------
$(document).ready(function(){
  $("#botonselec1").click(function(){
    $("p").hide();
  });
  $("#mostrarParrafosSelectores").click(function() {
                $("p").show();
            });
});

$(document).ready(function(){
  $("#botonselec2").click(function(){
    $("#test1, #test2").hide();
  });
  $("#mostrarselec1").click(function() {
                $("#test1, #test2").show();
            });
});

$(document).ready(function() {
  $("#botonselec3").on("click", function() {
    $("#test1\\.1:even, #test2\\.1:even").css("color", "blue");
  });

  $("#mostrarselec2").on("click", function() {
    $("#test1\\.1:even, #test2\\.1:even").css("color", "");
  });
});

$(document).ready(function(){
  $("#botonselec4").click(function(){
    $(".test3").hide();
  });
  $("#mostrarselec3").click(function() {
                $(".test3").show();
            });
});


//--------------------------------------------------------
