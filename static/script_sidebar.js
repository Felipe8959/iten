//Alterar sidebar ao rolar a página
window.onscroll = function() {
    var navbar = document.getElementById('sidebar');
    if (window.pageYOffset > 0) {
        navbar.classList.remove('bg-body-tertiary');
        navbar.classList.add('bg-body-tertiary-opaque');
    } else {
        navbar.classList.remove('bg-body-tertiary-opaque');
        navbar.classList.add('bg-body-tertiary');
    }
}

$(document).ready(function(){
    $(".d-flex").on('submit',function(event) {
        event.preventDefault(); // Evita o recarregamento da página

        var query = $('#search').val(); // Captura o valor do campo de pesquisa

        // Redireciona para a rota '/servicos' com a consulta de pesquisa como um parâmetro de URL
        window.location.href = '/servicos?query=' + encodeURIComponent(query);
    });
});



$(document).ready(function() {
    // Obtém a consulta de pesquisa do URL
    var urlParams = new URLSearchParams(window.location.search);
    var query = urlParams.get('query');

    // Se houver uma consulta de pesquisa, realiza a busca
    if(query !== null) {
        $.get("/buscar", {query: query}, function(data) {
            console.log(data);

            // Adiciona cabeçalho de texto "Resultado para 'busca'"
            $("#search-results").empty().append($("<h2>").text("Resultados para " + query + " em nosso escopo:"));

            // Cria a tabela e adiciona cabeçalhos de coluna
            var table = $("<table>").addClass("table");
            var thead = $("<thead>");
            var headerRow = $("<tr>");
            headerRow.append($("<th>").text("Produto"));
            headerRow.append($("<th>").text("Ensaio"));
            headerRow.append($("<th>").text("Norma"));
            thead.append(headerRow);
            table.append(thead);

            // Adiciona os dados a tabela
            var tbody = $("<tbody>");
            for(var i = 0; i < data.length; i++) {
                var row = $("<tr>");
                row.append($("<td>").text(data[i].produto));
                row.append($("<td>").text(data[i].ensaio));
                row.append($("<td>").text(data[i].norma));
                tbody.append(row);
            }
            table.append(tbody);

            // Insere a tabela no contêiner de resultados de pesquisa
            $("#search-results").append(table);
        });
    }
});




// Ao clicar no menu, a barra fica sólida
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    var navbar = document.querySelector('#sidebar');
    navbar.classList.toggle('nav-solid');
});
