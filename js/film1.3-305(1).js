// 定义函数来获取随机视频
function filmfetchRandomVideos() {
    Refresh = 2;
    axios({
        url: 'https://blog.zifeiyu.love/video/search',
        // 查询参数
        params: {
            page: 1,
            size: 10,
            type: '电影',
            name: '',
        },
        headers: {
            token: '',
            // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
        },
    })
        .then((result) => {
            // console.log(result);
            const filmrandomVideo = result.data.data.records;
            // console.log('111');
            // console.log(filmrandomVideo);
            const filmhtmlStr = filmrandomVideo.map((item, index) => {
                return `<div class="item super1" id="a${item.id}"  >
                        <div class="jiazhui jiazhuis" id="${item.id}" ><span class="iconfont icon-shoucang"></span></div>
                         <video class="video1" id="myVideo1" muted loop autoplay>
                                <source src="vedio/15c6e381445af86d5069e54997d14f6b.mp4" type="video/mp4">
                            
                            </video>
                        <a href="#" class="pic " id="videocontainer" style="position: relative;">
                            <div class="tag" >
                                <img src="image/vip.webp" alt="">
                            
                            </div>
                            <img src="${item.cover}" alt="" class="videoPic">
                           
                            <div class="tip" style="position: absolute;z-index: 8;">${item.mark}分</div>
                        </a>
                        <a href="#" class="tit"> ${item.name} </a>
                        <span class="sub" id="super3"> ${item.introduction} </span>
                    </div>`
            }).join('')
            // console.log(filmhtmlStr);
            document.getElementById("1.2-305").innerHTML = filmhtmlStr;
            addClickEventToJiazhuiElements()
            addClickEventListenerToItems()
        })
        .catch((error) => {
            console.error(error);
        });
}
// dsjfetchRandomVideos();
// 获取按钮元素
const FILM = document.getElementById("FILM");

// 添加点击事件监听器
FILM.addEventListener('click', filmfetchRandomVideos);

// records[0]
// id="jiazhui"
