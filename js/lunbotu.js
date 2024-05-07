// 初始化轮播图函数
const initSlider = () => {
    const list = document.querySelector('.wrapper .list5');//图片列表
    const scrollbar = document.querySelector(".container .scrollbar5");//滚动条
    const thumb = scrollbar.querySelector(".thumb5");//滚动滑块
    const btns = document.querySelectorAll('.wrapper .btn');
    const item = document.querySelectorAll('.item5');
    //图片列表最大移动距离=图片列表滚动宽度-图片列表可视宽度
    const maxListMove = list.scrollWidth - list.clientWidth;
    //滚动滑块最大移动距离 = 滚动条宽度 - 滚动滑块宽度
    const maxThumbMove = scrollbar.clientWidth - thumb.offsetWidth;
    //处理滚动滑块按下移动
    thumb.addEventListener('mousedown', e => {
        const start = e.clientX; //滚动滑块起始位置（距浏览器左上角）
        const thumbOffset = thumb.offsetLeft;//滚动滑块与滚动条偏移量
        //处理鼠标移动
        const handleMouseMove = e => {
            const offset = e.clientX - start
            const newThumbOffset = thumbOffset + offset;

            // ?????
            const thumbMove = Math.max(0, Math.min(maxThumbMove, newThumbOffset));//滚动滑块
            //-移动距离与边界的确定
            //对应的图片列表因该移动的距离 = 
            // (滚动滑块当前位置/滚动滑块最大移动距离)*图片列表最大滚动距离   
            const listMove = (thumbMove / maxThumbMove) * maxListMove;
            thumb.style.left = `${thumbMove}px`;//滑块因该移动的距离
            list.scrollLeft = listMove;//图片列表因该移动的距离        
        }
        //监听鼠标移动事件
        document.addEventListener('mousemove', handleMouseMove)
        //监听鼠标抬起事件
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);//移除按下滑块事件
            document.removeEventListener('mouseup', handleMouseMove);//移除自身
        }
        document.addEventListener('mouseup', handleMouseUp);
    })

    //按钮控制轮播图移动
    btns.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === 'prev' ? -1 : 1;//判断是正向还是负向
            const listIsMoved = list.clientWidth * direction * (1 / 5);//图片列表需要移动的宽度


            list.scrollBy({ left: listIsMoved, behavior: 'smooth' })//平滑移动
        })
    })

    //控制按钮移动图片的时候，同步移动滑块位置
    const updateThumbOffset = () => {
        const listMove = list.scrollLeft;
        //滚动滑块因该移动距离= （图片列表已移动距离/图片列表最大滚动距离）*滚动滑块最大移动距离
        const thumbOffset = (listMove / maxListMove) * maxThumbMove;
        thumb.style.left = `${thumbOffset}px`;
    }

    //根据位置确定按钮是否展示
    // const handleBtns = () =>{
    //     btns[0].style.display = list.scrollLeft <=0?'none':'flex';
    //     btns[1].style.display = list.scrollLeft <= maxListMove ? 'none' : 'flex';
    // }

    //监听轮播图滚动
    list.addEventListener('scroll', () => {
        updateThumbOffset();
        handleBtns();

    })

}
window.addEventListener('load', initSlider);