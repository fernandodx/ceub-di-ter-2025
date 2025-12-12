// Seleciona o formulário pelo ID
const form = document.getElementById('contact-form');

// Adiciona um "ouvinte" para quando o botão de enviar for clicado
form.addEventListener('submit', function(event) {
    // 1. Impede o envio padrão (que recarregaria a página)
    event.preventDefault();

    // 2. Captura os dados dos campos
    // O FormData pega todos os inputs que têm o atributo 'name'
    const formData = new FormData(form);
    
    const nome = formData.get('name') || 'Não informado';
    const email = formData.get('email') || 'Não informado'; 
    const whatsapp = formData.get('phone') || 'Não informado'; 
    const interesse = formData.get('interest') || 'Não selecionado';
    const mensagem = formData.get('message') || '';

    // 3. Monta o corpo do e-mail
    const emailDestino = 'mirandazx024@gmail.com'; 
    const assunto = `Contato do Site: ${interesse}`;
    
    // Cria a mensagem formatada com quebras de linha (%0D%0A é o código para enter em URLs)
    const corpoEmail = `
    Olá, Miguel!
    
    Recebi um novo contato através do portfólio:
    
    Nome: ${nome}
    E-mail: ${email}
    WhatsApp: ${whatsapp}
    Interesse: ${interesse}
    
    Mensagem:
    ${mensagem}
    `;

    // 4. Abre o cliente de e-mail
    // encodeURIComponent garante que espaços e acentos não quebrem o link
    window.location.href = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;
});