document.addEventListener('DOMContentLoaded', () => {
    const reasons = document.querySelectorAll('.reason');

    // Add a click event to each reason
    reasons.forEach(reason => {
        reason.addEventListener('click', () => {
            alert(`Yeah, Asher, we all know: ${reason.textContent}!`);
        });
    });

    // Function to create and animate a falling banana
    function createBanana() {
        banana.style.zIndex = 6;
        const banana = document.createElement('img');
        banana.src = "banana.png"; // Make sure banana.png is in the same folder as index.html
        banana.classList.add('banana');

        // Set a random position across the screen
        banana.style.position = 'absolute';
        banana.style.left = Math.random() * window.innerWidth + 'px';
        banana.style.top = '-100px'; // Start slightly above the screen
        banana.style.width = '50px';

        document.body.appendChild(banana);

        // Animate the banana falling
        let fallSpeed = Math.random() * 5 + 2; // Random fall speed

        function fall() {
            let currentTop = parseInt(banana.style.top) || 0;
            if (currentTop < window.innerHeight) {
                banana.style.top = currentTop + fallSpeed + 'px';
                requestAnimationFrame(fall);
            } else {
                banana.remove(); // Remove the banana when it hits the bottom
            }
        }

        requestAnimationFrame(fall);
    }

    // Drop bananas every second
    setInterval(createBanana, 50);
});
