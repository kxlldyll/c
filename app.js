// You can add interactivity here later
console.log("GTA V Modding Services - Loaded");

// Example: Button click feedback
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transition = 'all 0.2s';
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 150);
  });
});
