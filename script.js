document.addEventListener('DOMContentLoaded', () => {
    const reasons = document.querySelectorAll('.reason');
    reasons.forEach(reason => {
        reason.addEventListener('click', () => {
            alert(`Yeah, Asher, we all know: ${reason.textContent}!`);
        });
    });
});
