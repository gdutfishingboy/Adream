// happentime利用实时监测视频播放的时间给出
const addDanmakuBtn = document.getElementById('addDanmakuBtn');

addDanmakuBtn.addEventListener('click', () => {
    const danmakuInput = prompt('请输入弹幕内容：');
    if (danmakuInput !== null && danmakuInput.trim() !== '') {
        // 将弹幕内容保存到变量中，这里假设变量名为 danmakuText
        const danmakuText = danmakuInput.trim();
        console.log('输入的弹幕内容：', danmakuText);
        localStorage.setItem('danmakuText', danmakuText);
        danmupost(danmakuText)
    } else {
        console.log('未输入弹幕内容或内容为空');
    }
});


function danmupost(content){
    var myHeaders = new Headers();
    myHeaders.append("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDkyNDE1MywiZXhwIjoxNzE3NTE2MTUzfQ.sYaIfkW5GJI_BvN0pVAx6idv0gkkd145DRHlHHUMPKLTWIYOp-gAhKPQaT4-SCuMXWoGqXcIXxssm9WImvr1aQ");
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "blog.zifeiyu.love");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Cookie", "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDkyNDE1MywiZXhwIjoxNzE3NTE2MTUzfQ.sYaIfkW5GJI_BvN0pVAx6idv0gkkd145DRHlHHUMPKLTWIYOp-gAhKPQaT4-SCuMXWoGqXcIXxssm9WImvr1aQ");

    const raw = JSON.stringify({
        "episodeId": 11,
        "happenTime": 1000,
        "content": content
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://blog.zifeiyu.love/barrage", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
