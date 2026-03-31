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
    let isSticky = false; // Cria uma variável de controle

    if (navbar) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > scrollThreshold && !isSticky) {
                // Só executa se passou do limite E ainda não está fixo
                navbar.classList.add("navbar-fixed-custom");
                document.body.style.paddingTop = navbar.offsetHeight + 'px';
                isSticky = true;
            } else if (window.scrollY <= scrollThreshold && isSticky) {
                // Só executa se voltou ao topo E está fixo
                navbar.classList.remove("navbar-fixed-custom");
                document.body.style.paddingTop = '0';
                isSticky = false;
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

        /* =========================================
    EFEITOS DE SCROLL REVEAL (Aparecer ao rolar)
    ========================================= */
    
    // Verifica se a biblioteca foi carregada corretamente no HTML
    if (typeof ScrollReveal !== 'undefined') {
        
        // Configuração padrão premium (Suave, vem de baixo para cima)
        const revealPremium = {
            distance: '50px',
            duration: 1000,
            easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)', // Curva suave idêntica ao CSS
            opacity: 0,
            interval: 150 // O segredo: se tiver vários, eles aparecem um após o outro
        };

        // 1. Anima os Divisores Elegantes (Os losangos)
        ScrollReveal().reveal('.elegant-divider', { 
            ...revealPremium, 
            origin: 'bottom',
            distance: '30px'
        });

        // 2. Anima os Títulos das Seções (Vitrine, Avaliações, Loja)
        ScrollReveal().reveal('.section-header, .vitrine-divisor, .loja-header', { 
            ...revealPremium, 
            origin: 'bottom',
            delay: 100
        });

        // 3. O Efeito UAU: Anima os cartões de produtos um por um (Cascata)
        ScrollReveal().reveal('.produto-card', { 
            ...revealPremium, 
            origin: 'bottom',
            interval: 200 // Demora 200ms entre um cartão e outro
        });

        // 4. Anima as Avaliações também em Cascata
        ScrollReveal().reveal('.review-card', { 
            ...revealPremium, 
            origin: 'bottom',
            interval: 200 
        });

        // 5. Anima a seção da Loja (A foto vem da esquerda, o texto da direita)
        ScrollReveal().reveal('.loja-col-esquerda', { 
            ...revealPremium, 
            origin: 'left', // A foto da loja desliza da esquerda
            distance: '80px'
        });

        ScrollReveal().reveal('.loja-col-direita', { 
            ...revealPremium, 
            origin: 'right', // Os contatos deslizam da direita
            distance: '80px',
            delay: 200
        });
    } else {
        console.warn("ScrollReveal.js não foi carregado. As animações de rolagem não serão exibidas.");
    }

});