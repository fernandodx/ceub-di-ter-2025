window.onload = function() {
    const form = document.getElementById('subscription-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
      let body = '';
  
      for (let [key, value] of formData.entries()) {
        body += `${key}: ${value}\n`;
      }
  
      const email = "seuemail@gmail.com"; // substitua pelo seu e-mail
      const subject = "Inscrição no Evento";
  
      // Monta o link mailto
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
      // Abre o cliente de e-mail
      window.location.href = mailtoLink;
    });
  };
  