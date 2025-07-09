$(document).ready(function(){
    $('#tablaPosts').DataTable({
        ajax:{
            url:'https://jsonplaceholder.typicode.com/posts',
            dataSrc:''
        },
        columns:[
            {name:'ID Usuario',data:'userId'},
            {name:'ID',data:'id'},
            {name:'T&iacute;tulo',data:'title'}
        ],
        language:{
            "emptyTable":     "No hay datos disponibles",
            "info":           "Mostrando _START_ al _END_ de _TOTAL_ datos",
            "infoEmpty":      "Mostrando 0 al 0 de 0 datos",
            "infoFiltered":   "(filtrando de un total de _MAX_ datos)",
            "thousands":      ".",
            "lengthMenu":     "Mostrar _MENU_ registros por p&aacute;gina",
            "loadingRecords": "Cargando...",
            "search":         "B&uacute;squeda:",
            "zeroRecords":    "No se han encontrado resultados",
            "paginate": {
                "first":      "Primero",
                "last":       "&Uacute;ltimo",
                "next":       "Siguiente",
                "previous":   "Anterior"
            }
        }
    });
});