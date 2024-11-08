document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input');
    const generateButton = document.getElementById('generate-button');
    const copyButton = document.getElementById('copy-button');

    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

    generateButton.addEventListener('click', generatePassword);
    copyButton.addEventListener('click', copyPassword);

    function generatePassword() {
        let newPassword = '';
        for (let i = 0; i < 15; i++) {
            newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        passwordInput.value = newPassword;
    }

    function copyPassword() {
        navigator.clipboard.writeText(passwordInput.value)
           .then(() => {
                alert('Contraseña copiada al portapapeles');
            })
           .catch(err => {
                console.error('Could not copy text: ', err);
            });
    }
});