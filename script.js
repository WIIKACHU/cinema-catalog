const themeButton = document.getElementById('theme-btn');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});
