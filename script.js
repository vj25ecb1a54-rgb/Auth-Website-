document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const toRegisterBtn = document.getElementById('to-register');
    const toLoginBtn = document.getElementById('to-login');
    const successBanner = document.getElementById('success-banner');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numericRegex = /^[0-9]+$/; 
    const nameRegex = /^[A-Za-z\s]+$/;

    toRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetForms();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    toLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetForms();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrors() {
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
        successBanner.classList.add('hidden');
    }

    function resetForms() {
        clearErrors();
        loginForm.reset();
        registerForm.reset();
    }

    function showSuccess(message) {
        successBanner.textContent = message;
        successBanner.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();
        
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        let isValid = true;

        if (!email) {
            showError('login-email-error', 'Email is required.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('login-email-error', 'Please enter a valid email format.');
            isValid = false;
        }

        if (!password) {
            showError('login-password-error', 'Password is required.');
            isValid = false;
        } else if (!numericRegex.test(password)) {
            showError('login-password-error', 'Password must contain only numeric digits (0-9).');
            isValid = false;
        }

        if (isValid) {
            showSuccess('Login successful! Welcome back.');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        const name = document.getElementById('reg-name').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const phone = document.getElementById('reg-phone').value.trim();
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;
        let isValid = true;

        if (!name) {
            showError('reg-name-error', 'Full name is required.');
            isValid = false;
        } else if (!nameRegex.test(name)) {
            showError('reg-name-error', 'Name should contain only alphabets and spaces.');
            isValid = false;
        }

        if (!email) {
            showError('reg-email-error', 'Email is required.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('reg-email-error', 'Please enter a valid email format.');
            isValid = false;
        }

        if (!phone) {
            showError('reg-phone-error', 'Phone number is required.');
            isValid = false;
        } else if (!numericRegex.test(phone) || phone.length !== 10) {
            showError('reg-phone-error', 'Phone number must contain exactly 10 digits.');
            isValid = false;
        }

        if (!password) {
            showError('reg-password-error', 'Password is required.');
            isValid = false;
        } else if (!numericRegex.test(password)) {
            showError('reg-password-error', 'Password must contain only numbers.');
            isValid = false;
        }

        if (!confirmPassword) {
            showError('reg-confirm-password-error', 'Please confirm your password.');
            isValid = false;
        } else if (password !== confirmPassword) {
            showError('reg-confirm-password-error', 'Confirm password must match the original password.');
            isValid = false;
        }

        if (isValid) {
            showSuccess('Registration successful! You can now log in.');
            registerForm.reset();
        }
    });
});