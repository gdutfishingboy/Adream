document.getElementById("12").addEventListener("click", function (event) {
    event.preventDefault(); // 阻止默认链接行为

    dengchu();
});

function dengchu() {
    const tokenValue = localStorage.getItem('tokenValue');
    var myHeaders = new Headers();
    myHeaders.append("token", tokenValue);
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "blog.zifeiyu.love");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("Cookie", "token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7aWQ9MTI2fSIsImlhdCI6MTcxNDM3Njk3NSwiZXhwIjoxNzE2OTY4OTc1fQ.fmgDahlgqXdo3yvHDuTCaT264FF3VCp_9nxziC4OwLOVVT-iUokxKI_5ImRRzLc3HQxMIBNKkmoMs8eQNfg8Fg");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://blog.zifeiyu.love/user/logout", requestOptions)
        .then(response => response.text())
        .then(result =>{
             console.log(result + '787')
             alert('登出成功')
            })
        .catch(error => console.log('error', error));
}

