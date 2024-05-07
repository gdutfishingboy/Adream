
function scRandomVideos() {
    const videoId = localStorage.getItem('videoId');
    axios({
        url: 'https://blog.zifeiyu.love/video/star',
        // 查询参数
        params: {
            id: videoId

        },
        headers: {
            'token': '',
            // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
        }
    }).then(result => {
        console.log(result);
        console.log('888');

        //    渲染数据
        // const randomVideo = result.data.data;
        // console.log(randomVideo);
        //               

        // console.log(htmlStr);
    }).catch(error => {
        console.error(error);
    });
}




