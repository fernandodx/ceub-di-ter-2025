const RECIPIENT_EMAIL = 'leandrobernardesqsc@gmail.com'; // Seu e-mail

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = formData.get('name') || ''; 
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const interest = formData.get('interest') || '';
    const message = formData.get('message') || '';

    const subject = `Novo Contato via Portfólio - Interesse: ${interest || 'Geral'}`;

    let body = `Olá, Leandro!\n\nVocê recebeu uma nova mensagem através do seu portfólio.\n\n`;
    body += `Detalhes do Contato:\n`;
    body += `------------------------\n`;
    body += `Nome: ${name}\n`;
    body += `E-mail: ${email}\n`;
    body += `WhatsApp: ${phone}\n`;
    body += `Interesse: ${interest || 'Não Selecionado'}\n\n`;
    body += `Mensagem:\n`;
    body += `${message}\n`;
    body += `------------------------\n`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoLink;
});