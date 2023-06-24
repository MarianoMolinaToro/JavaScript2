const image = document.getElementById("interactive-image");

image.addEventListener("click", function() {
    if (image.classList.contains("highlight")) {
        image.classList.remove("highlight");
    } else {
        image.classList.add("highlight");
    }
});

/**  section2 */

function verificarSuma() {
    var input1 = parseInt(document.getElementById("input1").value) || 0;
    var input2 = parseInt(document.getElementById("input2").value) || 0;
    var input3 = parseInt(document.getElementById("input3").value) || 0;
    var suma = input1 + input2 + input3;
    
    if (input1 !== 0 && input2 === 0 && input3 === 0) {
      document.getElementById("resultado-section2").innerHTML = "Llevas " + input1 + " sticker(s).";
    } else if (input1 === 0 && input2 !== 0 && input3 === 0) {
      document.getElementById("resultado-section2").innerHTML = "Llevas " + input2 + " sticker(s).";
    } else if (input1 === 0 && input2 === 0 && input3 !== 0) {
      document.getElementById("resultado-section2").innerHTML = "Llevas " + input3 + " sticker(s).";
    } else if (suma <= 10) {
      document.getElementById("resultado-section2").innerHTML = "Llevas " + suma + " sticker(s).";
    } else {
      document.getElementById("resultado-section2").innerHTML = "Llevas demasiados stickers.";
    }
  }
  

  /**  section 3 */

  function verificarPassword() {
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;
    var select3 = document.getElementById("select3").value;
    
    if (select1 === "9" && select2 === "1" && select3 === "1") {
      document.getElementById("resultado-section3").innerHTML = "Password 1 correcto";
    } else if (select1 === "7" && select2 === "1" && select3 === "4") {
      document.getElementById("resultado-section3").innerHTML = "Password 2 correcto";
    } else {
      document.getElementById("resultado-section3").innerHTML = "Password incorrecto";
    }
  }