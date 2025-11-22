// Linha de teste (vamos remover depois que funcionar)
alert("O JavaScript carregou!"); 

// Seleciona o formulário (apenas uma vez!)
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    const formData = new FormData(form);
    
    // Captura os valores
    const nome = formData.get('name');
    const email = formData.get('email');
    const wpp = formData.get('phone');
    const interesse = formData.get('interest');
    const mensagem = formData.get('message');

    // Monta o texto do e-mail
    const corpoEmail = `
Olá, meu nome é ${nome}.
E-mail: ${email}
WhatsApp: ${wpp}
Tenho interesse em: ${interesse}

Minha mensagem:
${mensagem}
    `;

    // Cria o link mailto
    const assunto = encodeURIComponent("Contato via Portfólio - " + nome);
    const corpoCodificado = encodeURIComponent(corpoEmail);
    const destino = "filipovesrd@gmail.com"; // Seu e-mail

    // Abre o cliente de e-mail
    window.location.href = `mailto:${destino}?subject=${assunto}&body=${corpoCodificado}`;
});