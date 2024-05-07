// 获取所有类名为 'nav-link' 的超链接
const navLinks = document.querySelectorAll('.nav-link');


function handleClick(event) {
    
        navLinks.forEach(link => link.classList.remove('active-link'));
  
    const clickedLink = event.target;
    
    clickedLink.classList.add('active-link');
   
        console.log(`被点击的链接ID：${clickedLink.id}`);
}

// 为每个超链接添加点击事件监听器
navLinks.forEach(link => {
    link.addEventListener('click', handleClick);
});


var historyLink = document.getElementById('3');
var shoucangLink = document.getElementById('5');
var historyBox = document.querySelector('.history');
var shoucangBox = document.querySelector('.shoucang');

historyLink.addEventListener('click', function (event) {
    event.preventDefault();
    historyBox.style.zIndex = '3';
    shoucangBox.style.zIndex = '1';
    
});

shoucangLink.addEventListener('click', function (event) {
    event.preventDefault();
    shoucangBox.style.zIndex = '3';
    historyBox.style.zIndex = '1';
    shoucang()
});

