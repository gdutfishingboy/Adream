// 定义函数来获取随机视频
function fetchRandomVideos() {
    axios({
        url: 'https://blog.zifeiyu.love/video/search',
        // 查询参数
        params: {
            page:1,
            size:5,
            
        },
        headers: {
            'token': '',
            // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
        }
    }).then(result => {
        console.log(result);

        //    渲染数据
        // const randomVideo = result.data.data;
        // console.log(randomVideo);
        //               

        // console.log(htmlStr);
    }).catch(error => {
        console.error(error);
    });
}
fetchRandomVideos()