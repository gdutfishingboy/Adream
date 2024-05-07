function shoucang(){
    const tokenValue = localStorage.getItem('tokenValue');
var myHeaders = new Headers();
    myHeaders.append("token", tokenValue);
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
myHeaders.append("Accept", "*/*");
myHeaders.append("Host", "blog.zifeiyu.love");
myHeaders.append("Connection", "keep-alive");
myHeaders.append("Cookie", "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDg3NDA5NCwiZXhwIjoxNzE3NDY2MDk0fQ.DEuGRTDMCdQjlVbtpGCuAKee4RGudWBqjs73lTfT65dTDG3iFJXniMwxzxStHOsJAIq5-H97KHuMjvyrobZLbg");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://blog.zifeiyu.love/info/collect?id&page=1&pageSize=10", requestOptions)
    .then(response => response.json())
    .then(result => {
        const episodeIds = result.data.records.map(record => record.episodeId);
        console.log(episodeIds);
// 分开
        fetch("https://blog.zifeiyu.love/info/collect?id&page=1&pageSize=10", requestOptions)
            .then(response => response.json())
            .then(result => {
               
                const episodeIds = result.data.records.map(record => record.episodeId);

                // 创建一个空的对象，用于汇总结果
                var allResults = {};

                // 遍历episodeIds数组，为每个episodeId创fetch请求
                Promise.all(episodeIds.map(episodeId => {
                    // 使用当前 episodeId 构建请求 URL
                    const url = `https://blog.zifeiyu.love/video/query?id=${episodeId}`;

                    // 创建 Headers
                    var myHeaders = new Headers();
                    myHeaders.append("token", "");
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

                    // 发起请求，并将结果存储到 allResults 中
                    return fetch(url, requestOptions)
                        .then(response => response.json())
                        .then(result => {
                            allResults[episodeId] = result;
                        })
                        .catch(error => console.log('error', error));
                }))
                    .then(() => {
                        // 在所有请求完成后打印汇总结果
                        console.log(allResults);

                        // 获取 allResults 对象的键
                        const episodeIds = Object.keys(allResults);

                        // 使用键来访问 allResults 中的值，并生成 HTML 字符串
                        const schtmlStr = episodeIds.map(episodeId => {
                            const item = allResults[episodeId];
                            return `<div class="example">
                        <div class="shoucangimg"><img class="img0" src="${item.data.cover}" alt=""></div>
                        <div class="content">${item.data.name}</div>
                        <div class="process">观看至%36</div>
                    </div>`;
                        }).join('');
                        document.querySelector('.shoucang-box').innerHTML = schtmlStr
                        // console.log(schtmlStr);
                    });

            })
            .catch(error => console.log('error', error));




})
    .catch(error => console.log('error', error));
}


document.querySelector('.submitname').addEventListener('click', function () {
    var inputText = document.querySelector('.scinput').value.trim().toLowerCase();

    var examples = document.querySelectorAll('.example');

    // 遍历所有盒子，将匹配的显示，不匹配的隐藏
    examples.forEach(function (example) {
        var content = example.querySelector('.content').textContent.trim().toLowerCase();
        // 包含就做
        if (content.includes(inputText)) {
            example.style.display = 'block';
        } else {
            example.style.display = 'none';
        }
    });
});

