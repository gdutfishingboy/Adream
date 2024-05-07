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