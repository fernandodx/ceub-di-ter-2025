// Smooth scrolling para links de navegação
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar animação de entrada aos elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.card, .actor-card, .info-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Adicionar funcionalidade ao indicador de scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: document.querySelector('.main-content').offsetTop - 80,
                behavior: 'smooth'
            });
        });
    }
    
    // Efeito de parallax no banner
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const banner = document.querySelector('.banner');
        if (banner) {
            banner.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    console.log('Página Peaky Blinders carregada com sucesso!');
});