// 获取所有 jiazhui 元素
// 
function addClickEventToJiazhuiElements() {
    // 获取所有 jiazhui 元素
    var jiazhuiElements = document.querySelectorAll('.jiazhui');

    // 为每个 jiazhui 元素添加点击事件监听器
    jiazhuiElements.forEach(function (element) {
        element.addEventListener('click', function () {
            // 获取当前元素的颜色
            var currentColor = this.style.color;
            // 判断当前颜色是否为白色
            if (currentColor === 'white' || currentColor === '') {
                // 如果是白色或者未设置颜色，则将颜色设置为黄色
                this.style.color = 'yellow';
            } else if (currentColor === 'yellow') {
                // 如果是黄色，则将颜色设置为白色
                this.style.color = 'white';
            }
          
            var elementId = this.getAttribute('id');
            var variableToUse = elementId;
            console.log('点击的元素的 id 是：', variableToUse);
        
            // 构建请求 URL，将 id 插入到 URL 中
            var url = `https://blog.zifeiyu.love/video/star?id=${variableToUse}`;

            // 创建 Headers
            var myHeaders = new Headers();
            myHeaders.append("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDg3NDA5NCwiZXhwIjoxNzE3NDY2MDk0fQ.DEuGRTDMCdQjlVbtpGCuAKee4RGudWBqjs73lTfT65dTDG3iFJXniMwxzxStHOsJAIq5-H97KHuMjvyrobZLbg");
            myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
            myHeaders.append("Accept", "*/*");
            myHeaders.append("Host", "blog.zifeiyu.love");
            myHeaders.append("Connection", "keep-alive");
            myHeaders.append("Cookie", "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDg3NDA5NCwiZXhwIjoxNzE3NDY2MDk0fQ.DEuGRTDMCdQjlVbtpGCuAKee4RGudWBqjs73lTfT65dTDG3iFJXniMwxzxStHOsJAIq5-H97KHuMjvyrobZLbg");

            // 构建请求选项
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            // 发起请求
            fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    
                })
                .catch(error => console.log('error', error));

        });
    });
}
// document.addEventListener('DOMContentLoaded', function () {
//     // 获取所有 jiazhui 元素
//     var jiazhuiElements = document.querySelectorAll('.jiazhui');

//     // 为每个 jiazhui 元素添加点击事件监听器
//     jiazhuiElements.forEach(function (element) {
//         element.addEventListener('click', function () {
//             // 获取当前元素的 id
//             console.log('wo666');
//             var elementId = this.getAttribute('id');
//             // 将 id 存储到一个变量中，供其他函数使用
//             var variableToUse = elementId;
//             // 执行其他函数，使用 variableToUse 变量
//             console.log('点击的元素的 id 是：', variableToUse);
//         });
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     // 获取所有 icon-shoucang 元素
//     var iconElements = document.querySelectorAll('.icon-shoucang');

//     // 为每个 icon-shoucang 元素添加点击事件监听器
//     iconElements.forEach(function (element) {
//         element.addEventListener('click', function () {
//             // 切换字体颜色类
//             this.classList.toggle('yellow');
//         });
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     // 获取所有 jiazhuis 元素
//     var jiazhuiElements = document.querySelectorAll('.jiazhui');

//     // 为每个 jiazhuis 元素添加点击事件监听器
//     jiazhuiElements.forEach(function (element) {
//         element.addEventListener('click', function () {
//             // 切换字体颜色类
//             this.classList.toggle('yellow');
//         });
//     });
// });