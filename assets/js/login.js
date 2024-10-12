const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

// مدیریت رویداد ارسال فرم
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        displayError('لطفاً همه فیلدها را پر کنید.');
    } else if (password.length < 6) {
        displayError('رمز عبور باید حداقل 6 کاراکتر باشد.');
    } else {
        // موفقیت در ورود
        errorMessage.style.display = 'none';
        alert('ورود موفقیت‌آمیز!');
        // اینجا می‌توانید منطق ورود به سیستم را اضافه کنید
    }
});

// نمایش پیام خطا
function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}
