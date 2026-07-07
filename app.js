function showModal(title) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(e) {
    const modal = document.getElementById('modal');
    if (e.target === modal) closeModal();
}
