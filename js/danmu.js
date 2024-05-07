const videoPlayer = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const speedRange = document.getElementById('speedRange');
const volumeRange = document.getElementById('volumeRange');
const seekRange = document.getElementById('seekRange');
const pictureInPictureBtn = document.getElementById('pictureInPictureBtn');

// 播放/暂停部分
playPauseBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.textContent = '暂停';
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = '播放';
    }
});

// 倍速调节部分
speedRange.addEventListener('input', () => {
    videoPlayer.playbackRate = parseFloat(speedRange.value);
});

// 音量调节部分
volumeRange.addEventListener('input', () => {
    videoPlayer.volume = parseFloat(volumeRange.value);
});

// 进度条调节部分
seekRange.addEventListener('input', () => {
    const seekTo = videoPlayer.duration * (seekRange.value / 100);
    videoPlayer.currentTime = seekTo;
});

// 小窗播放部分
// 引入函数画中画
pictureInPictureBtn.addEventListener('click', () => {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else {
        videoPlayer.requestPictureInPicture();
    }
});

// 更新进度条
videoPlayer.addEventListener('timeupdate', () => {
    const value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    seekRange.value = value;
});

// 视频结束时，将播放按钮设置为“播放”
videoPlayer.addEventListener('ended', () => {
    playPauseBtn.textContent = '播放';
});

// Your existing JavaScript code

// Function to create a new danmaku
function createDanmaku(text) {
    const danmakuWrapper = document.createElement('div');
    danmakuWrapper.classList.add('danmaku-wrapper');
    danmakuWrapper.style.top = `${Math.random() * 100}%`; // Random Y position
    danmakuWrapper.style.left = '100%'; // Start from right side

    const danmakuElement = document.createElement('div');
    danmakuElement.classList.add('danmaku');
    danmakuElement.textContent = text;
    danmakuWrapper.appendChild(danmakuElement);

    // Append danmaku to container
    const danmakuContainer = document.querySelector('.danmaku-container');
    danmakuContainer.appendChild(danmakuWrapper);

    // Animate danmaku
    const animationDuration = 10000; // Adjust speed here
    danmakuWrapper.animate([
        { transform: 'translateX(100%)' },
        { transform: 'translateX(calc(100% - 780px))' }
    ], {
        duration: animationDuration,
        easing: 'linear',
        iterations: Infinity, // Loop infinitely
        delay: Math.random() * 2000 // Random delay up to 2 seconds
    });


    // Pause animation on mouse over
    danmakuWrapper.addEventListener('mouseover', () => {
        danmakuWrapper.style.animationPlayState = 'paused';
        console.log('Animation paused');
    });

    // Resume animation on mouse out
    danmakuWrapper.addEventListener('mouseout', () => {
        danmakuWrapper.style.animationPlayState = 'running';
        console.log('Animation resumed');
    });
}






// Toggle danmaku on/off
const danmakuToggle = document.getElementById('danmakuToggle');
let danmakuEnabled = false; // Track danmaku state








// Function to handle danmaku creation
function handleDanmakus(danmakus) {
    // Split danmakus by line breaks
    const danmakuLines = danmakus.split('\n');

    // Iterate over each line and create a danmaku for it
    danmakuLines.forEach((line) => {
        createDanmaku(line.trim()); // Trim whitespace from each line
    });
}


const danmakus1 = localStorage.getItem('danmakus');
// console.log(danmakus1);
const danmakus = `${danmakus1}`;



handleDanmakus(danmakus);





danmakuToggle.addEventListener('click', () => {
    danmakuEnabled = !danmakuEnabled; // 每次点击取反
    if (danmakuEnabled) {
        danmakuToggle.value = '1';

        const danmakuContainer = document.querySelector('.danmaku-container');
        danmakuContainer.style.visibility = 'visible'; // Show the danmaku container
    } else {
        danmakuToggle.value = '0';
        const danmakuContainer = document.querySelector('.danmaku-container');
        danmakuContainer.style.visibility = 'hidden'; // Hide the danmaku container
    }
});