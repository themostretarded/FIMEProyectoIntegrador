$(()=>{
    $("#agregar").click(() => {
        $("#contenido").append("vamanas")
      });
})
/*Funciones para la barra normal*/
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}