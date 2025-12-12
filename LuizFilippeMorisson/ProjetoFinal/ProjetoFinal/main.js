document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // coletar campos
        const name = (document.getElementById('name') || {}).value || '';
        const email = (document.getElementById('email') || {}).value || '';
        const phone = (document.getElementById('phone') || {}).value || '';
        const interest = (document.getElementById('interest') || {}).value || '';
        const message = (document.getElementById('message') || {}).value || '';

        // montar assunto e corpo
        const recipient = 'luiz.morisson@sempreceub.com'; // <-- substitua pelo seu e-mail real
        const subject = `Contato via portfólio: ${name || '(sem nome)'} - ${interest || 'Sem interesse especificado'}`;
        const bodyLines = [
            `Nome: ${name}`,
            `E-mail: ${email}`,
            `WhatsApp: ${phone}`,
            `Interesse: ${interest}`,
            '',
            'Mensagem:',
            `${message}`
        ];
        const body = bodyLines.join('\n');

        // abrir cliente de e-mail via mailto:
        const mailto = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    });

    // preencher ano no footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});