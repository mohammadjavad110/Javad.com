const signupForm = document.getElementById('signupForm');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorMessage = document.getElementById('errorMessage');

// مدیریت رویداد ارسال فرم
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (fullname === '' || email === '' || password === '' || confirmPassword === '') {
        displayError('لطفاً همه فیلدها را پر کنید.');
    } else if (!validateEmail(email)) {
        displayError('لطفاً یک ایمیل معتبر وارد کنید.');
    } else if (password.length < 6) {
        displayError('رمز عبور باید حداقل 6 کاراکتر باشد.');
    } else if (password !== confirmPassword) {
        displayError('رمز عبور و تایید رمز عبور یکسان نیستند.');
    } else {
        // موفقیت در ثبت‌نام
        errorMessage.style.display = 'none';
        alert('ثبت‌نام موفقیت‌آمیز!');
        // اینجا می‌توانید منطق ثبت‌نام را اضافه کنید
    }
});

// نمایش پیام خطا
function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// اعتبارسنجی ایمیل
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
