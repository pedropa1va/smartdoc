// File: /smartdoc-landing/src/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById('subscribe-form');
    const languageSelector = document.getElementById('language-selector');

    subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Thank you for subscribing with ${email}!`);
        subscribeForm.reset();
    });

    languageSelector.addEventListener('change', function() {
        const selectedLanguage = languageSelector.value;
        loadLanguage(selectedLanguage);
    });

    function loadLanguage(lang) {
        fetch(`./locales/${lang}.json`)
            .then(response => response.json())
            .then(translations => {
                document.getElementById('app-title').innerText = translations.appTitle;
                document.getElementById('benefits').innerText = translations.benefits;
                document.getElementById('cta').innerText = translations.callToAction;
                document.getElementById('download-android').innerText = translations.downloadAndroid;
                document.getElementById('download-ios').innerText = translations.downloadIOS;
            })
            .catch(error => console.error('Error loading language:', error));
    }
});