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


const formulario = document.getElementById("form-contato");


if (formulario) {
    formulario.addEventListener("submit", function (event) {
        // Impede que a página recarregue (padrão do HTML)
        event.preventDefault();

        // 3. Captura os dados dos campos
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // 4. Monta o corpo do e-mail
        // O comando encodeURIComponent garante que espaços e acentos não quebrem o link
        const assunto = encodeURIComponent("Contato via Portfólio: " + nome);
        const corpoEmail = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`);

        // 5. Cria o link mailto dinâmico
        // Substituí pelo teu e-mail que estava no HTML
        const mailtoLink = `mailto:luan.galli@sempreceub.com?subject=${assunto}&body=${corpoEmail}`;

        // 6. Abre o cliente de e-mail
        window.location.href = mailtoLink;
    });
}