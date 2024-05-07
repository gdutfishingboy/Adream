// 修改图片
function modifyUserAvatar(avatarURL) {
    // 创建请求头
    const tokenValue = localStorage.getItem('tokenValue');
    var myHeaders = new Headers();
    myHeaders.append("token", tokenValue);
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "blog.zifeiyu.love");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Cookie", "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDM3Njk3NSwiZXhwIjoxNzE2OTY4OTc1fQ.fmgDahlgqXdo3yvHDuTCaT264FF3VCp_9nxziC4OwLOVVT-iUokxKI_5ImRRzLc3HQxMIBNKkmoMs8eQNfg8Fg");

    // 将参数转换为 JSON 字符串
    var raw = JSON.stringify({
        "isSeen": "1",
        "avatar": avatarURL
    });

    // 设置请求选项
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // 发起请求
    fetch("https://blog.zifeiyu.love/user/modify", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}



document.getElementById('fileInput').addEventListener('change', function () {
    uploadImage();
});
// 5.4终于搞定你个死formdata
function uploadImage() {
    const tokenValue = localStorage.getItem('tokenValue');
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    if (file) {
        var myHeaders = new Headers();
        myHeaders.append("token", tokenValue); 

        var formdata = new FormData();
        formdata.append("file", file, file.name); 

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://blog.zifeiyu.love/info/pic", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.data)
                const superpic = result.data
                localStorage.setItem('superpic', superpic);
                // const superpic = localStorage.getItem('superpic');
                var left1avatarimg = document.querySelector('.left1-avatar-img')
                left1avatarimg.src = "" + superpic + "";
            })
            .catch(error => console.log('error', error));
    } else {
        alert('请选择图片文件');
    }
    
    
}





