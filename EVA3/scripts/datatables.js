$(document).ready(function () {
    // Inicializa la tabla como ya lo tenías
    var tabla = $('#tablaUsuarios').DataTable({
        ajax: {
            url: 'https://jsonplaceholder.typicode.com/users',
            dataSrc: ''
        },
        columns: [
            { name: 'ID', data: 'id' },
            { name: 'Nombre', data: 'name' },
            { name: 'Usuario', data: 'username' },
            { name: 'Email', data: 'email' },
            { name: 'Sitio Web', data: 'website' }
        ],
        language: {
            "emptyTable": "No hay datos disponibles",
            "info": "Mostrando _START_ al _END_ de _TOTAL_ datos",
            "infoEmpty": "Mostrando 0 al 0 de 0 datos",
            "infoFiltered": "(filtrando de un total de _MAX_ datos)",
            "thousands": ".",
            "lengthMenu": "Mostrar _MENU_ registros por p&aacute;gina",
            "loadingRecords": "Cargando...",
            "search": "B&uacute;squeda:",
            "zeroRecords": "No se han encontrado resultados",
            "paginate": {
                "first": "Primero",
                "last": "&Uacute;ltimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        }
    });

    $('#cargarDatos').on('click', function () {
        const tipo = $('#tipoDatos').val(); 
        let url = `https://jsonplaceholder.typicode.com/${tipo}`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {
                // Adaptar los datos a las columnas fijas de tu tabla
                const datosAdaptados = data.map(item => ({
                    id: item.id,
                    name: item.name || item.title || '',
                    username: item.username || '',
                    email: item.email || '',
                    website: item.website || ''
                }));

                tabla.clear().rows.add(datosAdaptados).draw();
            }
        });
    });
});

