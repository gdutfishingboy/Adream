// 定义函数来获取随机视频
function dsjfetchRandomVideos() {
  Refresh =1;
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
      // console.log(result);
      const dsjrandomVideo = result.data.data.records;
      // console.log('111');
      // console.log(dsjrandomVideo);
      const dsjhtmlStr = dsjrandomVideo.map((item, index) => {
        return `<div class="item  super1" id="a${item.id}"  >
                        <div class="jiazhui  jiazhuis" id="${item.id}" ><span class="iconfont icon-shoucang"></span></div>
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
      document.getElementById("1.2-305").innerHTML = dsjhtmlStr;
      addClickEventToJiazhuiElements()
      addClickEventListenerToItems()
    })
    .catch((error) => {
      console.error(error);
    });
}
// dsjfetchRandomVideos();
// 获取按钮元素
const dianshiju = document.getElementById("dianshiju");

// 添加点击事件监听器
dianshiju.addEventListener('click', dsjfetchRandomVideos);

// records[0]
// id="jiazhui"
