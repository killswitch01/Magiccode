document.getElementById("noBtn").addEventListener("mouseover", function() {
    const btn = this;
    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
