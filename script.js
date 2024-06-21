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
