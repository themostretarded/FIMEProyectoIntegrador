$(()=>{
    $("#agregar").click(() => {
        $("#contenido").append("<div class=\"w3-card\"><p>w3-card</p></div>")
      });
})
/*Funciones para la barra normal*/
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}