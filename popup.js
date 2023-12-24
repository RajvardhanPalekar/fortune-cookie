// popup.js

window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('generateBtn');
    if (el) {
        el.addEventListener('click', function () {
            const fortune = generateFortune();
            document.getElementById('fortune').innerText = fortune;
        });
    }

});


function generateFortune() {
    const fortunes = [
        "You are destined for greatness!",
        "Good things come to those who wait.",
        "Believe in yourself and all that you are.",
        "The best way to predict the future is to create it."
        // Add more fortunes as needed
    ];
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}
