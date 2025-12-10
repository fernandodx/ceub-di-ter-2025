var ola = "Hello World"
console.log(ola);
window.onload = function(){
    const form = document.getElementById('contact-form');

    form.addEventListener ('submit', function(event) {
       //Impedir que envio o formulario de forma padrão
        event.preventDefault();

        //Pega os conteudos do Form e concatena 
        const formData = new FormData(form);

        let corpoDaMensagem = '';

        for(const [chave,valor] of formData.entries()){
            corpoDaMensagem += `${chave}: ${valor}\n`;
        }

        //Escape de Caracteres 

        const assunto = 'Contato Recebido do Portifólio';
        const corpoCodificado = encodeURIComponent(corpoDaMensagem);
        const assuntoCodificado = encodeURIComponent(assunto);

        // Gerando o mailto
        const linkMailto = `mailto:gabrielfoletto12@gmail.com?subject=${assuntoCodificado}&body=${corpoCodificado}`;
        
        window.location.href = linkMailto;
        
    });
}