document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    
    // Проверьте, есть ли уже сохраненная тема в localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        themeIcon.classList.toggle('fa-sun', currentTheme === 'dark');
        themeIcon.classList.toggle('fa-moon', currentTheme === 'light');
    }

    themeToggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        
        // Обновите иконку в зависимости от текущего режима
        themeIcon.classList.toggle('fa-sun', isDarkMode);
        themeIcon.classList.toggle('fa-moon', !isDarkMode);
        
        // Сохраните выбранную тему в localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});

