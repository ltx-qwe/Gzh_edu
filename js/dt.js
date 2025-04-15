// This file is intentionally left nearly empty since the original HTML
// didn't contain any significant JavaScript functionality.
// We're just including it to maintain the structure and for future expansion.

document.addEventListener('DOMContentLoaded', function() {
    // You could add functionality here if needed in the future
    console.log('Page loaded');
    
    // Example: Add active class to current nav item
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
     
// 仅保留标题动画逻辑
const title = document.getElementById('dynamic-title');
    
// 页面加载后触发动画
setTimeout(() => {
    title
.classList.add('animate');
}, 300);

// 移除其他所有动态效果代码
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#f1c40f';
            link.style.fontWeight = 'bold';
        }
    });
});