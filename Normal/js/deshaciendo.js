$(() => {

    $(".enviarid").click(() => {        
        var elimar = $("#numero").val();
        console.log(elimar);
        selimar = elimar.toString();
        $("#" + "contenido" + selimar).remove();
    });
})
