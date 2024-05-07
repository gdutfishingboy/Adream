var Refresh = 0;
const links = document.querySelectorAll('.myLink');

links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        links.forEach(l => l.classList.remove('selected'));
        this.classList.add('selected'); // 添加选中时的样式类
    });
});
window.addEventListener('scroll', function () {
    // 页面滚动

    // 页面高度
    const documentHeight = document.documentElement.scrollHeight;

    // 窗口高度
    const windowHeight = window.innerHeight;

    // 滚动位置
    const scrollPosition = window.scrollY 
        // || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

    // 判断是否接近页面底部
    // console.log(documentHeight, scrollPosition, windowHeight);
    if (documentHeight - windowHeight - scrollPosition <= -17) {
       
       
        console.log('页面触底了！');
        switch (Refresh) {
            case 0:
                // 执行操作A
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
                    console.log(result);

                    //    渲染数据
                    const randomVideo = result.data.data;
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
                    document.getElementById("1.2-305").innerHTML += htmlStr;
                    addClickEventToJiazhuiElements()
                    addClickEventListenerToItems()

                }).catch(error => {
                    console.error(error);
                });
                // console.log('执行操作A');
                break;
            case 1:
                // 执行操作B
                axios({
                    url: 'https://blog.zifeiyu.love/video/search',
                    // 查询参数
                    params: {
                        page: 1,
                        size: 10,
                        type: '电视剧',
                        name: '',
                    },
                    headers: {
                        token: '',
                        // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
                    },
                })
                    .then((result) => {
                        console.log(result);
                        const dsjrandomVideo = result.data.data.records;
                        // console.log('111');
                        // console.log(dsjrandomVideo);
                        const dsjhtmlStr = dsjrandomVideo.map((item, index) => {
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
                           
                            <div class="tip" style="position: absolute;z-index: 8;">更新至${item.allCount}集</div>
                        </a>
                        <a href="#" class="tit"> ${item.name} </a>
                        <span class="sub" id="super3"> ${item.introduction} </span>
                    </div>`
                        }).join('')
                        // console.log(dsjhtmlStr);
                        document.getElementById("1.2-305").innerHTML += dsjhtmlStr;
                        addClickEventToJiazhuiElements()
                        addClickEventListenerToItems()
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                console.log('执行操作B');
                break;
            case 2:
                // 执行操作C
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
                        console.log(result);
                        const filmrandomVideo = result.data.data.records;
                        // console.log('111');
                        // console.log(filmrandomVideo);
                        const filmhtmlStr = filmrandomVideo.map((item, index) => {
                            return `<div class="item super1" id="a${item.id}"  >
                        <div class="jiazhui jiazhuis" id="${item.id}"><span class="iconfont icon-shoucang"></span></div>
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
                        document.getElementById("1.2-305").innerHTML += filmhtmlStr;
                        addClickEventToJiazhuiElements()
                        addClickEventListenerToItems()
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                console.log('执行操作C');
                break;
            default:
                // 如果wyj的值不是0、1或2，执行默认操作或者报错处理
                console.log('未知的Refresh值');
        }

    }
});
