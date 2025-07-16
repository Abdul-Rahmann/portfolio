document.addEventListener("DOMContentLoaded", () => {
    // Update CopyRight Year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Dark Mode Toggle
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});