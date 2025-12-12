
// mailto.js - collects form data and opens mail client via mailto:
window.addEventListener('load', function(){
  const form = document.querySelector('form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const pairs = [];
    for(const [key, value] of data.entries()){
      pairs.push(key + ': ' + value);
    }
    const body = pairs.join('\n');
    const subject = 'Contato via Portfólio - ' + (data.get('nome') || 'Sem nome');
    const to = 'borgesarthur409@email.com';
    const mailto = 'mailto:' + encodeURIComponent(to) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    // open mail client
    window.location.href = mailto;
  });
});
