const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const muteBtn = document.getElementById('muteBtn');
const volumeBar = document.getElementById('volumeBar');
const fullScreenBtn = document.getElementById('fullScreenBtn');

// پخش/توقف ویدیو
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '⏸';
    } else {
        video.pause();
        playPauseBtn.textContent = '⏯';
    }
});

// بروز رسانی اسلایدر پیشرفت و زمان ویدیو
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
    updateTimeDisplay();
});

// تغییر زمان ویدیو از طریق اسلایدر
progressBar.addEventListener('input', () => {
    const time = (progressBar.value / 100) * video.duration;
    video.currentTime = time;
});

// بروز رسانی نمایش زمان
function updateTimeDisplay() {
    currentTimeSpan.textContent = formatTime(video.currentTime);
    durationSpan.textContent = formatTime(video.duration);
}

// فرمت زمان به دقیقه و ثانیه
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// کنترل صدا و قطع صدا
muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? '🔇' : '🔊';
});

// کنترل حجم صدا
volumeBar.addEventListener('input', () => {
    video.volume = volumeBar.value;
});

// کنترل تمام صفحه
fullScreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // برای مرورگر فایرفاکس
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // برای مرورگر کروم و سافاری
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // برای مرورگر اج
        video.msRequestFullscreen();
    }
});

// بروز رسانی زمانی که ویدیو آماده است
video.addEventListener('loadedmetadata', updateTimeDisplay);
