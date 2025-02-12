// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', () => {
    const reasons = document.querySelectorAll('.reason');

    // Add a click event to each reason
    reasons.forEach(reason => {
        reason.addEventListener('click', () => {
            alert(`Yeah, Asher, we all know: ${reason.textContent}!`);
        });
    });
});
