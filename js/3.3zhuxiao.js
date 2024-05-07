document.getElementById("logoutButton5").addEventListener("click", function (event) {
    event.preventDefault(); // 阻止按钮默认行为

    zhuxiao();
});
function zhuxiao() {
    // const tokenValue = localStorage.getItem('tokenValue');
    const tokenValue = '1111'
    var myHeaders = new Headers();
    myHeaders.append("token", tokenValue);
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "blog.zifeiyu.love");
    myHeaders.append("Connection", "keep-alive");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://blog.zifeiyu.love/user/logoff", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch( alert('注销失败啦，格式不正确'));
}