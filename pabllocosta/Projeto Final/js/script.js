document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const previewBtn = document.getElementById("previewBtn");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede recarregar a página

    const data = new FormData(form);
    let mensagem = "";

    data.forEach((valor, chave) => {
      mensagem += chave + ": " + valor + "\n";
    });

    const destinatario = "pablloleviev@gmail.com";
    const assunto = encodeURIComponent("Contato pelo Portfólio");
    const corpo = encodeURIComponent(mensagem);

    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
  });

  previewBtn.addEventListener("click", function () {
    const data = new FormData(form);
    let preview = "";

    data.forEach((valor, chave) => {
      preview += chave + ": " + valor + "\n";
    });

    alert("Pré-visualização da mensagem:\n\n" + preview);
  });
});
