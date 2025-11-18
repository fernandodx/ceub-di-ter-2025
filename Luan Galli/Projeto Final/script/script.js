document.addEventListener("DOMContentLoaded", function () {
    // ----------------------
    // Rolagem suave para os links da navegação
    // ----------------------
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // Verifica se o link é interno (começa com #)
            const href = this.getAttribute("href");
            
            if (href.startsWith("#")) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Cálculo do topo menos a altura do header (aprox 60px)
                    const offsetPosition = targetElement.offsetTop - 60;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});