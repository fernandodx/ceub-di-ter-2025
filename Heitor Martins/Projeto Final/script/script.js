document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona o formulário dentro da div com id 'subscription-form'
    const form = document.querySelector('#subscription-form form');

    // Adiciona o ouvinte de evento para o envio do formulário
    form.addEventListener('submit', function(event) {
        // 1. Previne o comportamento padrão (recarregar a página)
        event.preventDefault();

        // 2. Extrair os dados dos campos
        // Como os inputs não têm IDs, usamos querySelector com atributos específicos do seu HTML
        const nome = form.querySelector('input[placeholder="Digite seu nome"]').value;
        const email = form.querySelector('input[placeholder="Digite seu e-mail"]').value;
        const whatsapp = form.querySelector('input[placeholder="Digite seu WhatsApp"]').value;
        const interesse = form.querySelector('select[name="interest"]').value;
        const mensagem = form.querySelector('textarea[name="message"]').value;

        // Verifica se o interesse foi selecionado (opcional, mas recomendado)
        const interesseFormatado = interesse ? interesse : "Não selecionado";

        // 3. Montar a mensagem organizada
        // Utilizamos quebras de linha (\n) para formatar o corpo do e-mail
        const corpoEmail = `
Nome: ${nome}
E-mail: ${email}
WhatsApp: ${whatsapp}
Interesse: ${interesseFormatado}
Mensagem: 
${mensagem}
        `;

        // 4. Configurar o Mailto
        const destinatario = "seu-email@gmail.com"; // SUBSTITUA PELO SEU E-MAIL REAL
        const assunto = encodeURIComponent("Novo contato via Portfólio: " + nome);
        const corpoCodificado = encodeURIComponent(corpoEmail);

        // Monta a URL final
        const mailtoLink = `mailto:${destinatario}?subject=${assunto}&body=${corpoCodificado}`;

        // 5. Abrir o cliente de e-mail
        window.location.href = mailtoLink;
    });
});