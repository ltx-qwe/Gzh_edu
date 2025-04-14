     // 图片加载动画效果
     document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.image-item img');
        
        images.forEach((img, index) => {
            setTimeout(() => {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
            }, index * 200);
        });
    });
    
    // 时间轴滚动效果
    window.addEventListener('scroll', function() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach(item => {
            const position = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (position < screenPosition) {
                item.classList.add('show');
            }
        });
    });
    // 平滑滚动到各部分
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });