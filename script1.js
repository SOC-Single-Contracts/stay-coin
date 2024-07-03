

i18next
  .use(i18nextHttpBackend)  // Loads translations from your server
  .use(i18nextBrowserLanguageDetector)  // Detects user language
  .init({
    fallbackLng: 'en',  // Default language
    debug: true,  // Enable debug mode for console logs
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'  // Path to language files
    },
    load: 'languageOnly'
  }, function(err, t) {
    if (err) {
      console.error("Error loading i18next resources", err);
      return;
    }
    console.log("Initialization completed, translating content.");
    translateContent();  // Translate initial content
  });

function updateContent() {
  document.getElementById('language-dropdown').addEventListener('change', function(e) {
    console.log("Language change detected:", e.target.value);
    changeLanguage(e.target.value);  // Update language on change
  });
}

function translateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function(elem) {
    console.log("Translating element:", elem.getAttribute('data-i18n'));
    elem.innerHTML = i18next.t(elem.getAttribute('data-i18n'));  // Update text based on current language
  });
}

function changeLanguage(newLang) {
  i18next.changeLanguage(newLang, () => {
    console.log("Language changed to:", newLang);
    translateContent();  // Re-translate the content when language is changed
  });
}

function calculateTimeLeft() {
    const difference = +new Date('2024-12-31T00:00:00') - +new Date();
    if (difference <= 0) {
        return null;
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

function updateTimer() {
    const timeLeft = calculateTimeLeft();
    const timerElement = document.getElementById('timer');
    if (timeLeft) {
        timerElement.innerHTML = Object.entries(timeLeft).map(([key, value]) => {
            return `<div>${value} <span>${key}</span></div>`;
        }).join('');
    } else {
        timerElement.innerHTML = "<span>Time's up!</span>";
    }
}

setInterval(updateTimer, 1000);

function updateProgress() {
    const solanaAmount = parseInt(document.getElementById('solanaInput').value || 0);
    const staycoinAmount = parseInt(document.getElementById('staycoinInput').value || 0);
    const newProgress = Math.min(100, 60 + solanaAmount + staycoinAmount);
    document.getElementById('progress').style.width = `${newProgress}%`;
    document.getElementById('progress-text').innerText = `${newProgress}%`;
}

document.getElementById('solanaInput').addEventListener('change', updateProgress);
document.getElementById('staycoinInput').addEventListener('change', updateProgress);

function buyNow() {
    alert('Purchase initiated!');
}

