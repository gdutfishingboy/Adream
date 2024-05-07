function changepage() {
    // 获取data-code属性的值
    const dataCodeValue = this.dataset.code;
    console.log('666');
    // 输出获取成功的提示
    console.log("成功获取到值: ", dataCodeValue);

    // 将获取到的值保存到本地存储
    localStorage.setItem("videoItemId", dataCodeValue);
}