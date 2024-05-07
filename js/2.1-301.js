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
            const tabhtmlStr = newArray.map((item) => {
                return `
                   
                   
                <div class="highest"></div>
                        <div class="selectionbox">
                            <img src="${item.cover}" alt="Image" class="selectionimage">
                            <div class="pink-box" style="position: relative;">
                                <div class="selectionword0" id="asideboxmask">
                                    <!-- style="background-color: aqua;" -->
                                    <span style="font-size: 16px;" class="wyjwyj">${item.name}</span>
                                    <!-- <span  ></span> -->
                                    <!-- <button id="asideboxbutton" style="color: white; position: absolute;right: 150px;top: 2px;font-size: 12px;"  >点击修改宽度</button> -->
                                   
                                </div>
                                <div class="selectionword1">
                                    <span style="font-size: 12px;overflow: hidden;
    text-overflow: ellipsis;">${item.releasePlace} &nbsp ${item.tag}</span>
                                </div>
                                <div class="selectionword2">
                                   
                                </div>
                            </div>
                        </div>
                        <div class="selectionbox yellow-box">
                            <span style="font-size: 12px;overflow: hidden;
    text-overflow: ellipsis;">${item.brief}</span>
                        </div>
                        <div class="selectionbox skyblue-box">
                            <!-- <img src="#" alt="" class="selectionimage2 iconfont icon-shenglvehao"> -->
                            <div class="selectionimage2 iconfont icon-shoucang sc "></div>
                            <div class="selectionimage2 iconfont icon-jingyin"></div>
                            <div class="selectionimage2 iconfont icon-duihua"></div>
                        </div>
                        <div class="box big-box" >
                            <!-- 20 个小盒子 -->
                            <div class="small-box">5
                                <img  class="smallboxpic" src="image/vip.webp" alt="">
                            </div>
                            <div class="small-box">5</div>
                            <div class="small-box">5</div>
                            <div class="small-box">5</div>
                            <div class="small-box">5</div>
                            <div class="small-box">5</div>
                            <div class="small-box">5</div>
                          
                        </div>
                    
                `
            }).join('')
            // console.log(tabhtmlStr);
            
            document.getElementById("rightasidebox").innerHTML = tabhtmlStr;
            // addClickEventToJiazhuiElements()
            console.log('54654464');
            var scIcon = document.querySelector('.sc');

            // 添加点击事件监听器
            scIcon.addEventListener('click', function () {
                // 修改元素内部的文字为 "王耀佳666"
                
                const currentColor = this.style.color;

                // 如果当前字体颜色是黄色，则恢复原来的颜色；否则将字体颜色改为黄色
                if (currentColor === 'yellow') {
                    // 恢复原来的颜色
                    this.style.color = 'white'; // 或者你可以设置成原来的颜色值，比如黑色
                } else {
                    // 将字体颜色改为黄色
                    this.style.color = 'yellow';
                    scRandomVideos()
                    // console.log('wdf');
                }
                // 将字体颜色改为黄色
                
                
            });
           
        })
        .catch((error) => {
            console.error(error);
        });
}
tabRandomVideos()



// // JavaScript 代码
// function initializeAsideBox() {
//     const asideBoxButton = document.getElementById("asideboxbutton");
//     const rightAsideBox = document.getElementById("rightasidebox");

    // 存储清空前的内容
    // let originalContent = rightAsideBox.innerHTML;

    // 点击超链接触发的操作
    // asideBoxButton.addEventListener("click", function () {
        // event.preventDefault();  event
        // console.log('1');
        // 阻止超链接的默认行为

        // 清空右侧盒子的内容
        // rightAsideBox.innerHTML = "";

        // // 创建一个名为 "简介" 的段落元素
        // const paragraph = document.createElement("p");
        // paragraph.textContent = "简介";

        // // 将段落元素添加到右侧盒子中
        // rightAsideBox.appendChild(paragraph);

        // // 创建 X 按钮
        // const restoreButton = document.createElement("button");
        // restoreButton.textContent = "X";
        // restoreButton.id = "superbutton"; // 添加 id
        // restoreButton.style.position = "absolute"; // 绝对定位
        // restoreButton.style.top = "0"; // 设置 top 为 0
        // restoreButton.style.right = "0"; // 设置 right 为 0
        // restoreButton.style.zIndex = "10001"; // 设置 z-index 为 10001

        // 点击 X 按钮触发的操作
        // restoreButton.addEventListener("click", function () {
        //     // 恢复右侧盒子的初始内容
        //     rightAsideBox.innerHTML = originalContent;
        // });

        // // 将 X 按钮添加到右侧盒子中
        // rightAsideBox.appendChild(restoreButton);
//     });
// }
// initializeAsideBox();