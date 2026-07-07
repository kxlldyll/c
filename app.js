// Smooth scrolling + Modal
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cElite GTA Services initialized', 'color:#00f0ff; font-size:14px;');

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

function showModal(title) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(e) {
    if (e.target.id === 'modal') closeModal();
};
