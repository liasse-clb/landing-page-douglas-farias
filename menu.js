document.addEventListener('DOMContentLoaded', function() {
    const menuCheckbox = document.getElementById('label-check');
    const nav = document.querySelector('nav');

    // Evento para abrir/fechar o menu ao clicar no botão
    menuCheckbox.addEventListener('change', function() {
        if (this.checked) {
            nav.classList.add('nav-open');
        } else {
            nav.classList.remove('nav-open');
        }
    });

    // Evento global para detectar cliques fora do menu
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuToggle = document.querySelector('.menu-togle').contains(event.target);

        if (!isClickInsideNav && !isClickOnMenuToggle && menuCheckbox.checked) {
            menuCheckbox.checked = false;  // Desmarcar o checkbox para fechar o menu
            nav.classList.remove('nav-open');
        }
    });
});
