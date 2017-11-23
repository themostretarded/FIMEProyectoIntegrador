var conteo = 0;
var veces = 0;
var filas = 0;
var arr_mesas = [];
var r = "0";

//$(() => {
    //agrega las mesas y las separa por filas
    $("#agregar").click(() => {

        if (conteo == 0) {
            $("#contenedor").append("<div class=\"w3-row\" id=\"contenido" + filas + "\"></div>");
            filas = filas + 1;
        }
        if (veces == 1) {
            $("#guardando").append("<button id=\"btnguardar\" class=\"w3-btn w3-block w3-teal w3-animate-opacity\">Guardar</button>");
        }

        $("#contenido" + r).append("<div id=\" "+ veces +" \" class=\"mesaSelected w3-col m3 l2\" ><div class=\"w3-card w3-center w3-pale-green w3-animate-zoom w3-tooltip\" id=" + veces + "><p><img src=\"./media/icono/table.png\" alt=\"MesaQueMasApluada\" class=\"mesas\"><div><span>Estado</span><span class=\"w3-text w3-tag w3-animate-opacity\">De click para cambiar el estado<span></div></p><p>Numero:" + veces + "</p></div></div>");
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

    $( "#contenedor" ).on('click', 'div.mesaSelected>div.w3-card', function() {
        console.log(this.id)
        $(this).toggleClass("w3-pale-green w3-pale-red");
    });

    //quita mesas por medio de su id
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

    //guardar en json al dar click en boton
    $("#btnguardar").click(()=>{
        var json = JSON.stringify( arr_mesas );
        console.log(json);
    })

    /*cambia el estado de las mesas
    $("div.w3-card").click(() => {
        $(this).removeClass("w3-pale-green").addClass("w3-pale-red");
    });
    */
    
      

//});

/*Funciones para la barra normal*/
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}