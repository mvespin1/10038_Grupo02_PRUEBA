$('.carousel').carousel({
	interval: 3000,
	pause: "hover"
})
//PARTE DE XML jordan
//--------------------------------------------------------------------
    // Función para insertar el código y ejecutarlo dentro del div
    function insertCode() {
      var code = `
        <div class="card">
          <div class="card-body bg-dark">
            <pre>
              <code class="text-muted">
&lt;note&gt;
  &lt;Para&gt;<span class="text-primary">Mikaela</span>&lt;/Para&gt;
  &lt;De&gt;<span class="text-success">Jordan</span>&lt;/De&gt;
  &lt;Dato&gt;<span class="text-danger">Recordatorio</span>&lt;/Dato&gt;
  &lt;body&gt;<span class="text-warning">Pronto sera su cumpleaños!!</span>&lt;/body&gt;
&lt;/note&gt;
              </code>
            </pre>
          </div>
        </div>
      `;
      $('#codeExecution').html(code);
    }

    // Ejecuta la función para insertar y mostrar el código
    insertCode();

//--------------------------------------------------------------------
    function insertCode1(){
    	var code1= `
<div class="card">
<div class="card-body bg-dark">
  <pre>
    <code class="text-muted">
&lt;bookstore&gt;

  &lt;book category="<span class="attribute">cooking</span>"&gt;
    &lt;title lang="<span class="attribute">en</span>"&gt;<span class="tag">Everyday Italian</span>&lt;/title&gt;
    &lt;author&gt;<span class="tag">Giada De Laurentiis</span>&lt;/author&gt;
    &lt;year&gt;<span class="tag">2005</span>&lt;/year&gt;
    &lt;price&gt;<span class="tag">30.00</span>&lt;/price&gt;
  &lt;/book&gt;

  &lt;book category="<span class="attribute">children</span>"&gt;
    &lt;title lang="<span class="attribute">en</span>"&gt;<span class="tag">Harry Potter</span>&lt;/title&gt;
    &lt;author&gt;<span class="tag">J K. Rowling</span>&lt;/author&gt;
    &lt;year&gt;<span class="tag">2005</span>&lt;/year&gt;
    &lt;price&gt;<span class="tag">29.99</span>&lt;/price&gt;
  &lt;/book&gt;

  &lt;book category="<span class="attribute">web</span>"&gt;
    &lt;title lang="<span class="attribute">en</span>"&gt;<span class="tag">XQuery Kick Start</span>&lt;/title&gt;
    &lt;author&gt;<span class="tag">James McGovern</span>&lt;/author&gt;
    &lt;author&gt;<span class="tag">Per Bothner</span>&lt;/author&gt;
    &lt;author&gt;<span class="tag">Kurt Cagle</span>&lt;/author&gt;
    &lt;author&gt;<span class="tag">James Linn</span>&lt;/author&gt;
    &lt;author&gt;<span class="tag">Vaidyanathan Nagarajan</span>&lt;/author&gt;
    &lt;year&gt;<span class="tag">2003</span>&lt;/year&gt;
    &lt;price&gt;<span class="tag">49.99</span>&lt;/price&gt;
  &lt;/book&gt;

  &lt;book category="<span class="attribute">web</span>" cover="<span class="attribute">paperback</span>"&gt;
    &lt;title lang="<span class="attribute">en</span>"&gt;<span class="tag">Learning XML</span>&lt;/title&gt;
    &lt;author&gt;<span class="tag">Erik T. Ray</span>&lt;/author&gt;
    &lt;year&gt;<span class="tag">2003</span>&lt;/year&gt;
    &lt;price&gt;<span class="tag">39.95</span>&lt;/price&gt;
  &lt;/book&gt;
&lt;/bookstore&gt;
    </code>
  </pre>
</div>
</div>
`;
 $('#codeEjecucion1').html(code1);
    }

    // Ejecuta la función para insertar y mostrar el código
    insertCode1();
//--------------------------------------------------------------------
//code3
 function insertCode2(){
      var code2= `
     <div class="card">
    <div class="card-body bg-dark">
      
        <pre>
          <code>
            &lt;root&gt;
              &lt;child&gt;
                &lt;subchild&gt;.....&lt;/subchild&gt;
              &lt;/child&gt;
            &lt;/root&gt;
          </code>
        </pre>
      
    </div>
  </div>
`;
 $('#codeEjecucion2').html(code2);
    }

    // Ejecuta la función para insertar y mostrar el código
    insertCode2();

//--------------------------------------------------------------------
//code4
 function insertCode3(){
      var code3= `
 <div class="card">
    
      <div class="card-body bg-dark">
        <pre>
          <code>
            &lt;?xml version="1.0" encoding="UTF-8"?&gt;
            &lt;note&gt;
              &lt;to&gt;Tove&lt;/to&gt;
              &lt;from&gt;Jani&lt;/from&gt;
              &lt;heading&gt;Reminder&lt;/heading&gt;
              &lt;body&gt;Don't forget me this weekend!&lt;/body&gt;
            &lt;/note&gt;
          </code>
        </pre>
      </div>
    </div>
`;
 $('#codeEjecucion3').html(code3);
    }

    // Ejecuta la función para insertar y mostrar el código
    insertCode3();

//--------------------------------------------------------------------
//code5
 function insertCode4(){
      var code4= `

    <div class="card">
      <div class="card-body bg-dark">
        <pre>
          <code>
            &lt;?xml version="1.0" encoding="UTF-8"?&gt;
          </code>
        </pre>
      </div>
    </div>
`;
 $('#codeEjecucion4').html(code4);
    }

    // Ejecuta la función para insertar y mostrar el código
    insertCode4();

//--------------------------------------------------------------------

//code6
 function insertCode5(){
      var code5= `
 <div class="card">
      <div class="card-body bg-dark">
        <pre>
          <code>
            &lt;b&gt;&lt;i&gt;This text is bold and italic&lt;/i&gt;&lt;/b&gt;
          </code>
        </pre>
      </div>
    </div>
`;
 $('#codeEjecucion5').html(code5);
    }

    // Ejecuta la función para insertar y mostrar el código
    insertCode5();

//--------------------------------------------------------------------

//code7
 function insertCode6(){
      var code6= `
<div class="card">
      <div class="card-body bg-dark">
        <pre>
          <code>
            &lt;note date="12/11/2007"&gt;
              &lt;to&gt;Tove&lt;/to&gt;
              &lt;from&gt;Jani&lt;/from&gt;
            &lt;/note&gt;
          </code>
        </pre>
      </div>
    </div>
`;
 $('#codeEjecucion6').html(code6);
    }

    // Ejecuta la función para insertar y mostrar el código
    insertCode6();

//--------------------------------------------------------------------

//code8
 function insertCode7(){
      var code7= `

<div class="card">
  <div class="card-body bg-dark">
    <pre>
<code>
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    document.getElementById("demo").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "filename", true);
xhttp.send();
</code>
    </pre>
  </div>
</div>
`;
 $('#codeEjecucion7').html(code7);
    }

    // Ejecuta la función para insertar y mostrar el código
    insertCode7();

//--------------------------------------------------------------------



//llamado del xml
       document.getElementById("CargarDatosxml").addEventListener("click", CargarDatosxml);

function CargarDatosxml() {
  var xhttpxml = new XMLHttpRequest();

  xhttpxml.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      cargarXML(this);
    }
  };

  xhttpxml.open("GET", "./Libros1.xml", true);
  xhttpxml.send();
}

function cargarXML(xml) {
  var docXML = xml.responseXML;
  var tablaxml = "<tr><th>Titulo</th><th>Autor</th><th>Precio</th></tr>";
  var mostrarxml = docXML.getElementsByTagName("book1");

  for (var i = 0; i < mostrarxml.length; i++) {
    tablaxml += "<tr><td>";
    tablaxml += mostrarxml[i].getElementsByTagName("title1")[0].textContent;
    tablaxml += "</td><td>"; // Se corrigió el cierre de la etiqueta <td>
    tablaxml += mostrarxml[i].getElementsByTagName("author1")[0].textContent;
    tablaxml += "</td><td>"; // Se corrigió el cierre de la etiqueta <td>
    tablaxml += mostrarxml[i].getElementsByTagName("price1")[0].textContent;
    tablaxml += "</td></tr>";
  }

  document.getElementById("demoxml").innerHTML = tablaxml;
}

//--------------------------------------------------------------------------

function loadXMLDoc2() {
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demodemo1").innerHTML =
      this.responseText;
    }
  };
  xhttp2.open("GET", "infodemo.txt", true);
  xhttp2.send();
}
 //FIN DE XML
