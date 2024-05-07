function qqlogist() {
    // 获取用户名和密码输入框的元素
    const usernameInput = document.getElementById('qqname');
    const passwordInput = document.getElementById('qqword');

    // 获取输入框的值
    const username = usernameInput.value;
    const password = passwordInput.value;
    axios({
        url: 'https://blog.zifeiyu.love/user/login',
        // 查询参数
        params: {
            username: username,
            password: password,
        },
        headers: {
            'token': '',
            // 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
        }
    }).then(result => {
        console.log(result);
        
        if (!result.data.errorMsg) {
            // 登录成功
            console.log('qq登录成功');
            // 渲染数据

            // 显示登录成功弹出框
            alert('登录成功');
            popupBox.style.display = 'none';
        } else {
            // 登录失败
            console.log(result.data.errorMsg);
            // 显示上传失败弹出框
            alert('上传失败：' + result.data.errorMsg);
        }       
        
        //    渲染数据
        console.log(result.data.data);
        const tokenValue = result.data.data.tokenValue;
        // 将 tokenValue 存储到本地存储中
        localStorage.setItem('tokenValue', tokenValue);
        xuanranpic()
    }).catch(error => {
        console.error(error);
        alert('上传失败');
    });
}



function xuanranpic(){
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

    fetch("https://blog.zifeiyu.love/info/query?id=126", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.data.avatar)
            var imgElement = document.querySelector('.logister img');

            // 将图片地址更改为 result.data.avatar
            imgElement.src = result.data.avatar;
        })
        .catch(error => console.log('error', error));
}

function p2xuanranpic() {
    // 获取tokenValue
    const tokenValue = localStorage.getItem('tokenValue');

    // 检查tokenValue是否存在且不为空
    if (tokenValue) {
        // 调用xuanranpic函数
        xuanranpic();
    }

    
   

}


