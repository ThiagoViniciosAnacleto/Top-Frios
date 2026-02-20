/**
 * Project: Top Frios - Queijos e Cia
 * Author: Thiago Anacleto
 * Year: 2026
 * License: MIT
 * Description: Custom JavaScript for Top Frios Landing Page.
 */
document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. CONTROLE DA NAVBAR NO SCROLL
    // ==========================================
    const navbar = document.querySelector(".navbar"); 
    const scrollThreshold = 60; 

    if (navbar) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add("navbar-fixed-custom");
                document.body.style.paddingTop = navbar.offsetHeight + 'px';
            } else {
                navbar.classList.remove("navbar-fixed-custom");
                document.body.style.paddingTop = '0';
            }
        });
    }

    // ==========================================
    // 2. MODAL DE ZOOM DOS PRODUTOS (LIGHTBOX)
    // ==========================================
    const modalZoom = document.getElementById('modalZoom');
    
    if (modalZoom) {
        modalZoom.addEventListener('show.bs.modal', function (event) {
            const wrapperClicado = event.relatedTarget;
            
            const srcImagem = wrapperClicado.getAttribute('data-imagem');
            const titulo = wrapperClicado.getAttribute('data-titulo');
            
            document.getElementById('imagemModalSrc').src = srcImagem;
            document.getElementById('tituloModal').textContent = titulo;
        });
    }

});