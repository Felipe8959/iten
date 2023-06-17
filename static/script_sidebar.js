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


//Filtragem de busca:
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let searchValue = document.querySelector('#search').value;
    window.location.href = 'servicos.html?search=' + encodeURIComponent(searchValue);
  });

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


$(document).ready(function(){
    let searchParams = new URLSearchParams(window.location.search);
    let query = searchParams.get('search');
    if (query) {
        query = query.toLowerCase();
        query = removeAccents(query);
        query = query.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        $('.card').each(function(){
            let cardText = $(this).text().toLowerCase();
            cardText = removeAccents(cardText);
            cardText = cardText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
            if (!cardText.includes(query)){
                $(this).hide();
            }
        });
    }
});


// Ao clicar no menu, a barra fica sólida
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    var navbar = document.querySelector('#sidebar');
    navbar.classList.toggle('nav-solid');
});
