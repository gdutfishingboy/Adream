function danmuget(episodeId) {
    var myHeaders = new Headers();
    myHeaders.append("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDkyNDE1MywiZXhwIjoxNzE3NTE2MTUzfQ.sYaIfkW5GJI_BvN0pVAx6idv0gkkd145DRHlHHUMPKLTWIYOp-gAhKPQaT4-SCuMXWoGqXcIXxssm9WImvr1aQ");
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "blog.zifeiyu.love");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Cookie", "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDkyNDE1MywiZXhwIjoxNzE3NTE2MTUzfQ.sYaIfkW5GJI_BvN0pVAx6idv0gkkd145DRHlHHUMPKLTWIYOp-gAhKPQaT4-SCuMXWoGqXcIXxssm9WImvr1aQ");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://blog.zifeiyu.love/barrage?episodeId=${episodeId}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            const danmakus = result.data.map(item => item.content).join('\n');
            console.log(danmakus);
            localStorage.setItem('danmakus', danmakus);
        })
        .catch(error => console.log('error', error));
}
danmuget(11)
