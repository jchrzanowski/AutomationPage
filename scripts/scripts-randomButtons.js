document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('button-container');
    const buttonClasses = ['button1', 'button2', 'button3', 'button4', 'button5'];
    const buttonTitles = ['Button A', 'Button B', 'Button C', 'Button D', 'Button E', 'Button F', 'Button G', 'Button H', 'Button I', 'Button J'];

    for (let i = 0; i < 10; i++) {
        const button = document.createElement('button');

        // Randomize button class
        const randomClassIndex = Math.floor(Math.random() * buttonClasses.length);
        button.classList.add(buttonClasses[randomClassIndex]);

        // Randomize button title
        const randomTitleIndex = Math.floor(Math.random() * buttonTitles.length);
        button.textContent = buttonTitles[randomTitleIndex];

        // Set random position
        const randomX = Math.random() * (window.innerWidth - 100); // subtracting button width for better fitting
        const randomY = Math.random() * (window.innerHeight - 50); // subtracting button height for better fitting
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;

        container.appendChild(button);
    }
});
