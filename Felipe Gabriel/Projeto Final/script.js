window.onload = () => {
    const form = document.querySelector("form");
    const interesse = document.querySelector("select[name='interest']");
    const mensagem = document.querySelector("textarea[name='message']");
    const botao = document.querySelector(".btn");

    botao.addEventListener("click", function (event) {
        event.preventDefault(); // impede o envio padrão

        const campos = form.querySelectorAll("input");

        const dados = {
            nome: campos[0].value,
            email: campos[1].value,
            telefone: campos[2].value,
            interesse: interesse.value,
            mensagem: mensagem.value
        };

        // monta o texto do corpo do email
        let corpo = `
Nome: ${dados.nome}
E-mail: ${dados.email}
Telefone: ${dados.telefone}
Interesse: ${dados.interesse}
Mensagem:
${dados.mensagem}
        `;

        // codifica para o mailto
        corpo = encodeURIComponent(corpo);

        const mailto = `mailto:Felipe0102007@gmail.com?subject=Contato%20via%20site&body=${corpo}`;

        window.location.href = mailto; // abre o cliente de e-mail
    });
};