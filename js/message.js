// 导入函数
function getpl() {
    const videoId = localStorage.getItem('videoId');
    axios({
        url: 'https://blog.zifeiyu.love/talk',
        // 查询参数
        params: {
            episodeId: videoId,
        },
        headers: {
            token: '',
            // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
        },
    }).then(result => {
        // console.log(result.data.data)
// console.log('我要卷');
        const pinglunmessage = result.data.data;
        
        // console.log('2222');
        // console.log(randomVideo);
        pinglunmessage.sort((a, b) => {
            return new Date(a.createdTime) - new Date(b.createdTime);
        });
        const getpinglun = pinglunmessage.map((item) => {
            return `<div class="messagecomment">
                <div class="user-info">
                    <img src="image/picuser.webp" alt="">
                        <div class="username">你的用户名</div>
                        <div class="time">${item.createdTime}</div>
                </div>
                <div class="content">${item.content}</div>
                 <div class="actions">
                <button class="like-button"  id="${item.id}">好耶</button>
                <button class="alike-button"  id="a${item.id}">滚蛋</button>
                <span class="likes">${item.likeCount}</span>
                <button class="reply-button" onclick="replyToComment(this)">回复</button>
                <button class="reply-button" onclick="getreplyToComment(this)">追评</button>
    </div>
            </div>`
        }).join('')
        
        document.getElementById("commentsSection").innerHTML = getpinglun;
        
        const input = document.getElementById("commentInput");
        input.value = "";
        // 获取所有带有类名为 "like-button" 的按钮元素
        var likeButtons = document.querySelectorAll('.like-button');

        // 遍历所有按钮元素，并为每个按钮添加点击事件监听器
        likeButtons.forEach(function (button) {
            var clickCount = 0;  
            // 添加点击事件监听器
            button.addEventListener('click', function () {                  
                clickCount++;
                const isOdd = true;
                // console.log(isOdd);
                // 获取按钮的 id 属性值并输出
                const id = button.getAttribute('id');
                // console.log("点击了按钮，ID为：" + id);
                putlove(isOdd, id)
                // putlove(isOdd, id, function () {
                //     // 点赞成功后重新加载评论
                //     console.log('等等');
                //     setTimeout(getpl, 100); // 0.1 秒后调用 getpl() 函数
                    
                // });
                
            });
        });
        var alikeButtons = document.querySelectorAll('.alike-button');

        // 遍历所有按钮元素，并为每个按钮添加点击事件监听器
        alikeButtons.forEach(function (button) {
            var clickCount = 0;
            // 添加点击事件监听器
            button.addEventListener('click', function () {
                clickCount++;
                const isOdd = false;
                // console.log(isOdd);
                // 获取按钮的 id 属性值并输出
                const id = button.getAttribute('id').substring(1);
                // console.log("点击了按钮，ID为：" + id);
                putlove(isOdd, id)
                // putlove(isOdd, id, function () {
                //     // 点赞成功后重新加载评论
                //     console.log('等等');
                //     setTimeout(getpl, 100); // 0.1 秒后调用 getpl() 函数

                // });

            });
        });
    }).catch((error) => {
        console.error(error);
    });
}
getpl()

// 发表评论
function postpl(){
    const videoId = localStorage.getItem('videoId');
    const tokenValue = localStorage.getItem('tokenValue');
    const input = document.getElementById("commentInput");
    const commentText = input.value.trim();
    var myHeaders = new Headers();
    myHeaders.append("token", tokenValue);
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "blog.zifeiyu.love");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Cookie", "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDM3Njk3NSwiZXhwIjoxNzE2OTY4OTc1fQ.fmgDahlgqXdo3yvHDuTCaT264FF3VCp_9nxziC4OwLOVVT-iUokxKI_5ImRRzLc3HQxMIBNKkmoMs8eQNfg8Fg");

    var raw = JSON.stringify({
        "fatherId": null,
        "content": commentText,
        "episodeId": videoId
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://blog.zifeiyu.love/talk", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result); // 打印返回的结果
            return result; // 返回结果
            
        })
        .catch(error => console.log('error', error));
    getpl()
    
}

// postpl()

// 点赞评论

function putlove(like, talkId){
    const tokenValue = localStorage.getItem('tokenValue');
    axios({
        method:'PUT',
        url: 'https://blog.zifeiyu.love/talk/like',
        // 查询参数
        params: {
            like: like,
            talkId: talkId,
        },
        headers: {
            token: tokenValue,
            // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
        },
    }).then(result => {
        // console.log(result.data.data.records[0])
        console.log('成功' + result);
        

    }).catch((error) => {
        console.error(error);
    });
    console.log('等等');
    setTimeout(getpl, 100);
}





function replyToComment(button) {
    var commentDiv = button.closest('.messagecomment'); // 获取被点击按钮所在的评论区域
    var replyText = prompt("请输入回复内容："); // 弹出输入框让用户输入回复内容
    if (replyText !== null) { // 如果用户点击了确认按钮
        var replyHTML = `
            <div class="reply" style="margin-left: 15px;margin-top: 15px;">
                <div class="user-info">
                    <img src="image/picuser.webp" alt="">
                    <div class="username">你的用户名</div>
                    <div class="time">${new Date().toLocaleString()}</div>
                </div>
                <div class="content">${replyText}</div>
            </div>
        `;
        commentDiv.insertAdjacentHTML("beforeend", replyHTML); // 将回复内容添加到评论区域的末尾
    }


    var myHeaders = new Headers();
    myHeaders.append("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDkyNDE1MywiZXhwIjoxNzE3NTE2MTUzfQ.sYaIfkW5GJI_BvN0pVAx6idv0gkkd145DRHlHHUMPKLTWIYOp-gAhKPQaT4-SCuMXWoGqXcIXxssm9WImvr1aQ");
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "blog.zifeiyu.love");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Cookie", "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDkyNDE1MywiZXhwIjoxNzE3NTE2MTUzfQ.sYaIfkW5GJI_BvN0pVAx6idv0gkkd145DRHlHHUMPKLTWIYOp-gAhKPQaT4-SCuMXWoGqXcIXxssm9WImvr1aQ");

    const raw = JSON.stringify({
        "fatherId": 216,
        "content": replyText,
        "episodeId": 11
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://blog.zifeiyu.love/talk", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}
function getreplyToComment(button) {
    let executed = false; // 添加标志位

    if (!executed) {
        var commentDiv = button.closest('.messagecomment'); // 获取被点击按钮所在的评论区域
        var myHeaders = new Headers();
        myHeaders.append("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDkyNDE1MywiZXhwIjoxNzE3NTE2MTUzfQ.sYaIfkW5GJI_BvN0pVAx6idv0gkkd145DRHlHHUMPKLTWIYOp-gAhKPQaT4-SCuMXWoGqXcIXxssm9WImvr1aQ");
        myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
        myHeaders.append("Accept", "*/*");
        myHeaders.append("Host", "blog.zifeiyu.love");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("Cookie", "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDkyNDE1MywiZXhwIjoxNzE3NTE2MTUzfQ.sYaIfkW5GJI_BvN0pVAx6idv0gkkd145DRHlHHUMPKLTWIYOp-gAhKPQaT4-SCuMXWoGqXcIXxssm9WImvr1aQ");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://blog.zifeiyu.love/talk/children?talkId=216", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.data.children);
                const children = result.data.children;
                const childrenStr = children.map((item) => {
                    return `<div class="reply" style="margin-left: 15px;margin-top: 15px;">
                        <div class="user-info">
                            <img src="image/picuser.webp" alt="">
                            <div class="username">你的用户名</div>
                            <div class="time">${new Date().toLocaleString()}</div>
                        </div>
                        <div class="content">${item.content}</div>
                    </div>`;
                }).join('');
                console.log(childrenStr);
                commentDiv.insertAdjacentHTML("beforeend", childrenStr);
                executed = true; // 将标志位设为 true，表示函数已经执行过一次
            })
            .catch(error => console.log('error', error));
    } else {
        console.log("函数已经执行过一次，无法再次执行。");
    }
}