// 页面滚动动画
document.addEventListener('DOMContentLoaded', function() {
    // 观察器配置
    const observerOptions = {
        threshold: 0.1
    };
    
    // 观察器回调
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    };
    
    // 创建观察器
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // 观察所有需要动画的元素
    document.querySelectorAll('.content-section, .timeline-item, .history-card, .column').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
        
        el.classList.add('animated');
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
    
    // 了解更多按钮功能
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});
 // 平滑滚动到锚点
 document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});