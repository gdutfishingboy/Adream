function jujifetchRandomVideos() {
    const videoId = localStorage.getItem('videoId');
    axios({
        url: 'https://blog.zifeiyu.love/video/queryEpisode',
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
            console.log(result);
           
            const jujirandomVideo = result.data.data.length;
            console.log(jujirandomVideo);
            // console.log(result.data.data[0].url);
            // 获取类名为 'big-box' 的盒子
            var bigBox = document.querySelector('.big-box');
            // 清空 big-box 的内容
            bigBox.innerHTML = '';
            // 循环添加 5 个类名为 'small-box' 的子盒子，并填充内容
            for (var i = 1; i <= jujirandomVideo; i++) {
                // 创建一个新的 div 元素
                var smallBox = document.createElement('div');

                // 添加类名 'small-box' 到新创建的 div 元素
                smallBox.className = 'small-box';
                // smallBox.className = 'result.data.data[i].url';
                const url = result.data.data[i-1].url;
                smallBox.id = url;
                // 添加内容为当前循环计数器的值
                smallBox.textContent = i;

                // 将新创建的小盒子添加到 big-box 中
                bigBox.appendChild(smallBox);
            }
            // console.log('111');
            // // console.log(dsjrandomVideo);
            // const dsjhtmlStr = dsjrandomVideo.map((item, index) => {
            //     return `<div class="item  super1"  >
            //             <div class="jiazhui  jiazhuis" id="${item.id}" ><span class="iconfont icon-shoucang"></span></div>
            //              <video class="video1" id="myVideo1" muted loop autoplay>
            //                     <source src="vedio/15c6e381445af86d5069e54997d14f6b.mp4" type="video/mp4">
                            
            //                 </video>
            //             <a href="#" class="pic " id="videocontainer" style="position: relative;">
            //                 <div class="tag" >
            //                     <img src="image/vip.webp" alt="">
                            
            //                 </div>
            //                 <img src="${item.cover}" alt="" class="videoPic">
                           
            //                 <div class="tip" style="position: absolute;z-index: 8;">更新至${item.allCount}集</div>
            //             </a>
            //             <a href="#" class="tit"> ${item.name} </a>
            //             <span class="sub" id="super3"> ${item.introduction} </span>
            //         </div>`
            // }).join('')
            // // console.log(dsjhtmlStr);
            // document.getElementById("1.2-305").innerHTML = dsjhtmlStr;
            // addClickEventToJiazhuiElements()
            addClickListenersToBoxes();
        })
        .catch((error) => {
            console.error(error);
        });
}
jujifetchRandomVideos()
function addClickListenersToBoxes() {
    // 获取所有具有类名 'small-box' 的盒子
    var smallBoxes = document.querySelectorAll('.small-box');

    // 定义一个变量来存储被点击的盒子的 id
    var clickedBoxId = null;

    // 循环遍历每个盒子，为其添加点击事件监听器
    smallBoxes.forEach(function (box) {
        box.addEventListener('click', function () {
            // 获取被点击盒子的 id
            clickedBoxId = this.id;
            console.log('888');
            // 在这里你可以进行任何你想要的操作，比如打印被点击盒子的 id
            console.log('Clicked box id:', clickedBoxId);
            var video = document.querySelector('video');
           
            video.setAttribute('src', clickedBoxId);
        });
    });
}

// 调用函数以添加点击事件监听器

