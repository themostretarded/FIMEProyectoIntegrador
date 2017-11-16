var conteo = 0;
var veces = 0;
var filas = 0;
var arr_mesas = [];
var r = "0";

$(() => {
    $("#agregar").click(() => {

        if (conteo == 0) {
            $("#contenedor").append("<div class=\"w3-row\" id=\"contenido" + filas + "\"></div>");
            filas = filas + 1;
        }

        $("#" + "contenido" + r).append("<div class=\"w3-col m3 l2\"><div class=\"w3-card w3-center w3-pale-green w3-animate-zoom w3-tooltip\" id=" + veces + "><p><img src=\"./media/icono/table.png\" alt=\"MesaQueMasApluada\" class=\"mesas\"><div><span>Estado</span><span class=\"w3-text w3-tag w3-animate-opacity\">De click para cambiar el estado<span></div></p><p>Numero:" + veces + "</p></div></div>");
        conteo = conteo + 1;
        if (conteo == 6) {
            conteo = 0;
            r = filas.toString()
        }
        veces = veces + 1;
        var obj_mesa = { id: veces, isOcupado: false };
        arr_mesas.push(obj_mesa);
        console.log('json_mesas:');
        console.log(arr_mesas);
    });

    $(".enviarid").click(() => {
        var elimar = $("#numero").val();
        console.log(elimar);
        arr_mesas.splice( - 1, 1);
        console.log("voy a eliminar el elemento con el id : "+ elimar);
        console.log(arr_mesas);
        selimar = elimar.toString();
        $("#" + selimar).parent().remove();
    });
    
})
/*Funciones para la barra normal*/
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}