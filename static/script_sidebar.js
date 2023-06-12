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