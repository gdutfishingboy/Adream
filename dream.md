<style>
    /* 进度条样式 */
    input[type="range"] {
        -webkit-appearance: none; /* 清除默认样式 */
        appearance: none;
        width: 100%; /* 设置进度条宽度 */
        height: 10px; /* 设置进度条高度 */
        background-color: black; /* 设置进度条颜色 */
        border-radius: 5px; /* 设置进度条圆角 */
    }

    /* 滑块样式 */
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* 清除默认样式 */
        appearance: none;
        width: 15px; /* 设置滑块宽度 */
        height: 15px; /* 设置滑块高度 */
        background-color: white; /* 设置滑块颜色 */
        border-radius: 50%; /* 设置滑块为圆形 */
        cursor: pointer; /* 设置鼠标样式为手型 */
    }

    /* 滑动轨道样式 */
    input[type="range"]::-webkit-slider-runnable-track {
        background-color: white; /* 设置滑动轨道颜色 */
        border-radius: 5px; /* 设置滑动轨道圆角 */
        height: 10px; /* 设置滑动轨道高度 */
    }
</style>
