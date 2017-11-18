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
        if(veces == 1){
            $("#guardando").append("<button class=\"w3-btn w3-block w3-teal w3-animate-opacity\">Guardar</button>");
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
        for (var indice in arr_mesas) {
            var id = arr_mesas[indice].id;
            if (elimar == id) {
                /*Logre buscar y eliminar por medio del id del objeto
                console.log("---encontre el numero: " + id + " en el indice: " + indice + "y yo quiero borrar el numero: " + elimar);*/
                arr_mesas.splice(indice, 1);
            }
        }
        console.log("voy a eliminar el elemento con el id : " + elimar);
        console.log(arr_mesas);
        selimar = elimar.toString();
        $("#" + selimar).parent().remove();
    });
    
    $("div.w3-card").click(() => {
        $("div").removeClass( "w3-pale-green" );
    });

})
/*Funciones para la barra normal*/
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}