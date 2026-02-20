/**
 * Project: Top Frios - Queijos e Cia
 * Author: Thiago Anacleto
 * Year: 2026
 * License: MIT
 * Description: Custom styles for Top Frios Landing Page.
 */

<script>
        document.addEventListener("DOMContentLoaded", function() {
            const navbar = document.getElementById("mainNav");
            const scrollThreshold = 60; // Ponto onde a barra vai grudar (igual ao SO)

            window.addEventListener("scroll", function() {
                if (window.scrollY > scrollThreshold) {
                    // Gruda a barra
                    navbar.classList.add("navbar-fixed-custom");
                    // Adiciona padding no body para a tela não dar um "pulo" brusco
                    document.body.style.paddingTop = navbar.offsetHeight + 'px';
                } else {
                    // Solta a barra e volta ao normal no topo
                    navbar.classList.remove("navbar-fixed-custom");
                    document.body.style.paddingTop = '0';
                }
            });
        });
    </script>
</body>
</html>