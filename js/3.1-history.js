// 封装函数，用于为类名为 "item" 的盒子添加点击事件监听器
function addClickEventListenerToItems() {
    // 获取所有类名为 "item" 的盒子
    console.log('历史启动');
    const boxes = document.querySelectorAll('.item');

    // 为每个盒子添加点击事件监听器
    boxes.forEach(box => {
        // 获取当前盒子内的超链接
        const pic = box.querySelector('.pic');

        // 添加点击事件监听器
        pic.addEventListener('click', function (event) {
            // 阻止默认行为
            event.preventDefault();
            // 获取当前盒子的 id 属性
            const itemId = box.id;
            const modifiedId = itemId.slice(1);
            
            console.log("用户输入：" + modifiedId );

            axios({
                url: 'https://blog.zifeiyu.love/video/query',
                // 查询参数
                params: {
                    id: modifiedId
                },
                headers: {
                    token: '',
                    // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
                },
            })
                .then((result) => {
                    console.log(result.data.data);
                    const historyrandomVideo = result.data.data;
                    // console.log('111');
                    console.log(historyrandomVideo);
                    console.log(historyrandomVideo.name);
                    const historyArray = [historyrandomVideo];
                    console.log(historyArray);
                    // id="asideboxbutton"
                    var historyhtmlStr = historyArray.map((item) => {
                        return `
                         <div class="example">
                        <div class="historyimg"><img  class="img0" src="${item.cover}" alt=""></div>
                        <div class="content">${item.name}</div>
                        <div class="process">观看至%36</div>
                    </div>
                `
                    }).join('')
                    console.log(historyhtmlStr);
                    // 从 localStorage 中获取先前的内容
                    // 将当前内容存储到 localStorage 中
                    localStorage.setItem("historyhtmlStr", historyhtmlStr);

                    // 调用 history1 函数，将存储的内容显示在页面三中
                   
                    
                   
                    console.log(historyhtmlStr + '已经被存储');

                })
                .catch((error) => {
                    console.error(error);
                });







        });
    });
}

// 调用函数，为类名为 "item" 的盒子添加点击事件监听器
// 将 HTML 字符串添加到名为 "history-box" 的盒子中

// function history1() {
//     var historyhtmlStr = localStorage.getItem("historyhtmlStr");
//     // 现在，historyhtmlStr 变量中包含了在页面一中存储的数据
//     console.log(historyhtmlStr); // 输出存储的数据
//     const historyBox = document.querySelector('.history-box');
//     historyBox.innerHTML += historyhtmlStr;
//     // location.reload();

// }
// 在页面加载时调用 history1 函数，显示之前存储的内容


// history1 函数用于从 localStorage 中读取之前存储的内容，并将其显示在页面上
// history1 函数用于从 localStorage 中读取之前存储的内容，并将其显示在页面上
// function history1() {
//     var historyhtmlStr = localStorage.getItem("historyhtmlStr");
//     // 现在，historyhtmlStr 变量中包含了在页面一中存储的数据
//     console.log(historyhtmlStr); // 输出存储的数据
//     const historyBox = document.querySelector('.history-box');
//     // 如果之前没有存储过内容，则直接将当前内容设置到页面中
//     if (!historyBox.innerHTML) {
//         historyBox.innerHTML = historyhtmlStr;
//     } else {
//         // 否则，将新内容和旧内容结合起来
//         historyBox.innerHTML += historyhtmlStr;
//     }
// }
// history1 函数用于从 localStorage 中读取之前存储的内容，并将其显示在页面上
function history1() {
    // var historyhtmlStr1 = localStorage.getItem("historyhtmlStr");
    // // 现在，historyhtmlStr 变量中包含了在页面一中存储的数据
    // console.log(historyhtmlStr1); // 输出存储的数据
    // const historyBox = document.querySelector('.history-box');
    // // 如果之前没有存储过内容，则直接将当前内容设置到页面中
    // if (!historyBox.innerHTML) {
    //     historyBox.innerHTML = historyhtmlStr1;
    // } else {
    //     // 否则，将新内容和旧内容结合起来
    //     historyBox.innerHTML += historyhtmlStr1;
    // }
    var historyhtmlStr = localStorage.getItem("historyhtmlStr");
    console.log(historyhtmlStr);
    // 解析字符串为数组
    // const historyArray = JSON.parse(historyhtmlStr);

    // 现在 historyArray 包含了多个历史记录项，你可以遍历它们，进行相应的操作
    // historyArray.forEach(historyItem => {
    //     // 在这里处理每个历史记录项
    //     console.log(historyItem);
    // });
}

function handleStorageEvent(event) {
    // 判断是否是你关心的 localStorage 键名
    if (event.key === 'historyhtmlStr') {
        // 获取新值
        var newHistoryhtmlStr = event.newValue;
        if (newHistoryhtmlStr) {
            // 执行你的操作
            const historyBox6 = document.querySelector('.history-box');
            historyBox6.insertAdjacentHTML('afterbegin', newHistoryhtmlStr);
        }
    }
}

// 在页面加载时执行一次，开始监听 storage 事件
window.addEventListener('DOMContentLoaded', function () {
    // 监听 storage 事件
    window.addEventListener('storage', handleStorageEvent);

    
        const clearButton = document.getElementById('clearButton');
    const historyBox6 = document.querySelector('.history-box');
        // 添加点击事件监听器
        clearButton.addEventListener('click', function () {
            // 清空历史内容
            console.log('000');
            historyBox6.innerHTML = '';
        });
    
});