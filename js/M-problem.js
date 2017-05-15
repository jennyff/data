/**
 * Created by Administrator on 2017/3/2.
 */
window.onload=function () {
    rightSwipe();
};
function rightSwipe() {
    /*通过封装的swipe插件来实现*/
    itcast.iScroll({
        swipeDom: document.querySelector('.p-main'), /*父容器对象*/
        swipeType: 'y', /*滑动的方向*/
        swipeDistance: 100/*缓冲的距离*/
    });
}