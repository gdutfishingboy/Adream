function fetchRandomVideos() {
    Refresh = 0;
    axios({
        url: 'https://blog.zifeiyu.love/video/random',
        // 查询参数
        params: {
            size: 10
        },
        headers: {
            'token': '',
            'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
        }
    }).then(result => {
        // console.log(result);

        //    渲染数据
        const randomVideo = result.data.data;
        // console.log('2222');
        // console.log(randomVideo);
        const htmlStr = randomVideo.map((item, index) => {
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
        // console.log(htmlStr);
        document.getElementById("1.2-305").innerHTML = htmlStr;
        addClickEventToJiazhuiElements()
        addClickEventListenerToItems();
    }).catch(error => {
        console.error(error);
    });
}

// 获取按钮元素
const huanyihuan = document.getElementById("huanyihuan");
const quanbu = document.getElementById("quanbu");
// 添加点击事件监听器
huanyihuan.addEventListener('click', fetchRandomVideos);
quanbu.addEventListener('click', fetchRandomVideos);