

window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('generateBtn');
    let delay = 1000;
    if (el) {
        el.addEventListener('click', function () {
            const body = document.getElementsByTagName("body");
            body[0].style.backgroundImage = "url('open-cookie.jpg')";
            setTimeout(function(){
                const fortune = generateFortune();
                document.getElementById('fortune').innerText = fortune;
            }, delay);
            delay = 0;
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
