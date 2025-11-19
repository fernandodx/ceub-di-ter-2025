document.addEventListener("DOMContentLoaded", () => {
    
    // Tema
    const themeBtn = document.getElementById("theme-toggle");
    const icon = themeBtn.querySelector("i");
    const body = document.body;

    themeBtn.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        if(body.classList.contains("light-mode")){
            icon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
        } else {
            icon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
        }
    });

    // Formulário
    const form = document.getElementById("contato-form");
    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const telefone = document.getElementById("telefone").value;
            const interesse = document.getElementById("interesse").value;
            const mensagem = document.getElementById("mensagem").value;

            const meuEmail = "borgesarthur409@gmail.com"; 
            const assunto = encodeURIComponent(`Contato: ${interesse} - ${nome}`);
            const corpoTexto = `Nome: ${nome}\nE-mail: ${email}\nZap: ${telefone}\nInteresse: ${interesse}\n\n${mensagem}`;
            const corpo = encodeURIComponent(corpoTexto);

            window.location.href = `mailto:${meuEmail}?subject=${assunto}&body=${corpo}`;
        });
    }
});