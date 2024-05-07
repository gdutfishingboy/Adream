function tabRandomVideos() {
    Refresh = 1;
    const videoId = localStorage.getItem('videoId');
    axios({
        url: 'https://blog.zifeiyu.love/video/query',
        // 查询参数
        params: {
            id: videoId
        },
        headers: {
            token: '',
            // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
        },
    })
        .then((result) => {
            console.log(result.data.data);
            const tabrandomVideo = result.data.data;
            console.log('111');
            console.log(tabrandomVideo);
            console.log(tabrandomVideo.name);
            const newArray = [tabrandomVideo];
            console.log(newArray);
            // id="asideboxbutton"
            const highhtmlStr = newArray.map((item) => {
                return `
                         <div style="display: flex;flex-direction: column;">
                        <div class="high-name" style="color: white;font-size: 20px;">&lt &nbsp${item.name}</div>
                        <div class="high-tag" style="margin-top: 10px;font-size: 14px;color: cadetblue;">${item.releasePlace}.${item.releaseTime}</div>
                        <div class="high-image" style="height: 200px;width: 135px;object-fit: cover;"><img src="${item.cover}" alt=""></div>
                        <div class="high-intro" style="color: white;">
                            <h2>简介:</h2>
                            <p style="word-wrap: break-word;">${item.introduction}</p>
                        </div>
                        </div>
                `
            }).join('')
            console.log(highhtmlStr);

            Highest2.innerHTML = highhtmlStr;
            // addClickEventToJiazhuiElements()
            console.log('5201314');

        })
        .catch((error) => {
            console.error(error);
        });
}
tabRandomVideos()