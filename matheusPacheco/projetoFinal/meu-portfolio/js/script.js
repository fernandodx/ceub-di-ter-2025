
window.onload = function() {
    const form = document.getElementById('form-contato');

    form.addEventListener('submit', function(event) {
        
        event.preventDefault();

        
        const formData = new FormData(form);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const mensagem = formData.get('mensagem');

       
        const corpoEmail = `Olá, meu nome é ${nome}.%0D%0A` +
                           `Meu e-mail para contato é: ${email}.%0D%0A%0D%0A` +
                           `Mensagem:%0D%0A${mensagem}`;

        
        const emailDestino = "seu-email@gmail.com";
        const assunto = encodeURIComponent("Contato via Portfólio");
        const corpoCodificado = encodeURIComponent(corpoEmail);

        
        const mailtoLink = `mailto:${emailDestino}?subject=${assunto}&body=${encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`)}`;

        window.location.href = mailtoLink;
    });
};