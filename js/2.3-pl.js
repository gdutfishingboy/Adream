
function plRandomVideos() {
    axios({
        url: 'https://blog.zifeiyu.love/talk',
        // 查询参数
        params: {
            episodeId: 11

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
plRandomVideos()





