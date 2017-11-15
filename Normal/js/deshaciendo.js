$(() => {

    $("#quitar").click(() => {
        elimar = document.getElementById('numero').value;
        console.log(elimar);
        selimar = elimar.toString();
        console.log(selimar)
    
        $("#" + "contenido" + selimar).remove();
    });
})
