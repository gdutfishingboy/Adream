// search为前缀
// 定义函数来获取随机视频
document.getElementById('boxB').addEventListener('input', (e) => {
    // console.log(e.target.value)
    
    axios({
        url: 'https://blog.zifeiyu.love/video/search',
        // 查询参数
        params: {
            page: 1,
            size: 1,
            type: '',
            name: e.target.value,
        },
        headers: {
            token: '',
            // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
        },
    }).then(result => {
        // console.log(result.data.data.records[0])
        
        // result.data.data.records

        const liStr = result.data.data.records.map(item => {
            return `<li class="vedio-item" data-code="${item.id}">${item.name}&nbsp&nbsp${item.introduction}</li>`
        }).join('')
        // console.log(liStr)
        // console.log('111');
        
            document.getElementById('boxC').innerHTML = liStr
        const videoItems = document.querySelectorAll('.vedio-item');
        videoItems.forEach(item => {
            item.addEventListener('click', () => {
                const videoId = item.dataset.code; // 获取 data-code 属性值
                console.log(videoId); // 输出 videoId
                localStorage.setItem('videoId', videoId);
                // 在这里可以进行其他操作，使用获取到的 videoId
                window.location.href = "task2.html";
                // 保存到那个local里，全局用 把id改为参数
            });
        });
        
       
    }).catch((error) => {
                     console.error(error);
                 });
})

// 页面加载时检查本地存储中是否有选定视频信息，并在搜索框获得焦点时进行显示
// document.getElementById('boxB').addEventListener('input', (e) => {
//     axios({
//         url: 'https://blog.zifeiyu.love/video/search',
//         // 查询参数
//         params: {
//             page: 1,
//             size: 1,
//             type: '',
//             name: e.target.value,
//         },
//         headers: {
//             token: '',
//         },
//     }).then(result => {
//         const liStr = result.data.data.records.map(item => {
//             return `<li class="vedio-item" data-code="${item.id}">${item.name}&nbsp&nbsp${item.introduction}</li>`;
//         }).join('');
//         document.getElementById('boxC').innerHTML = liStr;

//         const videoItems = document.querySelectorAll('.vedio-item');
//         videoItems.forEach(item => {
//             item.addEventListener('click', () => {
//                 const videoName = item.textContent.trim(); // 获取列表项的文本内容
//                 const videoId = item.dataset.code; // 获取 data-code 属性值
//                 const selectedVideo = { name: videoName, id: videoId };
//                 localStorage.setItem('selectedVideo', JSON.stringify(selectedVideo));
//                 // 保存选定的视频信息到本地存储

//                 // 在这里可以进行其他操作，使用获取到的 videoId
//                 window.location.href = "task2.html";
//             });
//         });
//     }).catch((error) => {
//         console.error(error);
//     });
// });

// document.getElementById('boxB').addEventListener('focus', () => {
//     // 当搜索框获得焦点时检查本地存储中是否有保存的选定视频信息
//     const selectedVideo = JSON.parse(localStorage.getItem('selectedVideo'));
//     if (selectedVideo) {
//         showSelectedVideo(selectedVideo);
//     }
// });

// // 显示选定的视频信息
// function showSelectedVideo(selectedVideo) {
//     const boxC = document.getElementById('boxC');
//     const liElement = document.createElement('li');
//     liElement.setAttribute('class', 'vedio-item');
//     liElement.setAttribute('data-code', selectedVideo.id);
//     liElement.innerHTML = `${selectedVideo.name}&nbsp&nbsp${selectedVideo.introduction}`;
//     // 创建一个列表项，并设置其内容为选定视频的名称和介绍
//     liElement.addEventListener('click', () => {
//         localStorage.setItem('selectedVideo', JSON.stringify(selectedVideo));
//         // 保存选定的视频信息到本地存储
//         window.location.href = "task2.html";
//     });
//     boxC.appendChild(liElement);
// }








