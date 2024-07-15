document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === 'admin') {
                alert('success');
            } else {
                alert('Invalid login or password');
            }
        });
    }

    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const imageContainer1 = document.getElementById('imageContainer');
    const imageContainer2 = document.getElementById('imageContainer2');

    if (button1 && imageContainer1) {
        button1.addEventListener('click', () => {
            if (imageContainer1.classList.contains('hidden')) {
                imageContainer1.classList.remove('hidden');
                imageContainer2.classList.add('hidden');
            } else {
                imageContainer1.classList.add('hidden');
            }
        });
    }

    if (button2 && imageContainer2) {
        button2.addEventListener('click', () => {
            if (imageContainer2.classList.contains('hidden')) {
                imageContainer2.classList.remove('hidden');
                imageContainer1.classList.add('hidden');
            } else {
                imageContainer2.classList.add('hidden');
            }
        });
    }

    if (button3) {
        button3.addEventListener('click', (event) => {
            event.preventDefault(); // Zapobiegamy domyślnej akcji przycisku (przekierowania)
            window.open(button3.href, '_blank');
        });
    }
});



