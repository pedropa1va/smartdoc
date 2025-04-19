// i18n.js

const languageSelector = document.getElementById('language-selector');
const textElements = document.querySelectorAll('[data-i18n]');

let currentLanguage = 'en';

const loadLanguage = (language) => {
    fetch(`./locales/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            textElements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                element.textContent = translations[key] || key;
            });
        });
};

languageSelector.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    loadLanguage(currentLanguage);
});

// Load default language
loadLanguage(currentLanguage);