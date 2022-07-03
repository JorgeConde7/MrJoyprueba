$(document).ready(function () {
    listarCliente();
    listarEmpleado();
    

});

var listarCliente=function () {
    $('#tablaCliente').DataTable({
        responsive: true,
        autoWidth: false,
        "ajax": {
            type: "GET",
            url: "http://localhost:8080/rest-v1/listar-proveedores",
            dataType: "json",
            dataSrc: ""
        },
        
        "columns": [
            {data: "nombreProveedor"}, {data: "nombreContacto"}, {data: "ruc"}, {data: "telefono"},
            {
                "defaultContent": "<div class='text-center'>" +
                    "<div class='acciones'>" +
                    "<a class=\"btn btn-warning\" style='padding: 0 10px'><i class=\"ion-edit\"></i> </a>" +
                    "<a class=\"btn btn-danger\" style='padding: 0 10px'><i class=\"ion-trash-a\"></i> </a>" +
                    "</div>" +
                    "</div>"
            }
        ],
        "language": idioma_espanol
    });
}

var listarEmpleado=function () {
    $('#tablaEmpleado').DataTable({
        
        "language": idioma_espanol
    });
}


var idioma_espanol={
    "lengthMenu": "Mostrar _MENU_ registros",
    "zeroRecords": "No se encontraron resultados",
    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sSearch": "Buscar:",
    "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
    },
    "sProcessing": "Procesando...",
}
