window.onload = function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede o envio padrão

        const formData = new FormData(form);
        let message = "";

        // Monta a mensagem com cada par chave-valor
        formData.forEach((value, key) => {
            message += `${key.toUpperCase()}: ${value}\n`;
        });

        // Codifica para usar no mailto
        const encodedMessage = encodeURIComponent(message);
        const subject = encodeURIComponent("Contact Form - Portfolio");

        const email = "ali.brito@sempreceub.com";

        // Monta a URL mailto
        const mailtoURL = `mailto:${email}?subject=${subject}&body=${encodedMessage}`;

        // Abre o cliente de e-mail
        window.location.href = mailtoURL;
    });
};
