document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'zh';
    switchLanguage(savedLang);
});
