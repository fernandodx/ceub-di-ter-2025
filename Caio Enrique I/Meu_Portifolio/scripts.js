async function submitForm(e) {
    e.preventDefault();
  
    // Campos
    const name = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("mensagem").value.trim();
    const statusMsg = document.querySelector(".status-msg");
  
    // --- VALIDAÇÃO ---
    if (!name || !email || !message) {
      statusMsg.textContent = "Preencha todos os campos antes de enviar.";
      statusMsg.style.color = "#f87171"; // vermelho suave
      return;
    }
  
    // Validação de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      statusMsg.textContent = "Digite um email válido.";
      statusMsg.style.color = "#f87171";
      return;
    }
  
    // --- MENSAGEM DE PROCESSO ---
    statusMsg.textContent = "Abrindo e-mail...";
    statusMsg.style.color = "#cbd5e1";
  
    // --- MONTA O MAILTO ---
    const subject = encodeURIComponent("Contato via Portfólio");
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
    );
  
    const mailtoLink = `mailto:caioenriqueinacioalmeida@gmail.com?subject=${subject}&body=${body}`;
  
    // --- EXECUÇÃO ---
    try {
      window.location.href = mailtoLink;
  
      // Feedback visual
      setTimeout(() => {
        statusMsg.textContent = "Seu aplicativo de email foi aberto!";
        statusMsg.style.color = "#10b981"; // verde elegante
      }, 500);
  
    } catch (error) {
      console.error("Erro ao tentar abrir o email:", error);
      statusMsg.textContent = "Erro ao abrir o aplicativo de email.";
      statusMsg.style.color = "#f87171";
    }
  }
  