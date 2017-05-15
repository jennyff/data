/**
 * Created by ���� on 2017/3/6.
 */
window.onload = function () {
    roll();
    listen();
    assist();
};
/*问题部分页面滑动*/
function roll (){
    /*获取内容部分盒子*/
    var contentBox = document.querySelector('.yk_content_box');
    console.log(contentBox);
    /*获取其父元素*/
    var content = document.querySelector('.content');
    /*获取父元素的高度*/
    var contentH = content.offsetHeight;
    /*获取内容盒子的高度*/
    var contentBoxH = contentBox.offsetHeight;
    /*初始定位*/
    var maxY = 0;
    /*最小定位*/
    var minY = contentH - contentBoxH;
    var minSwipe = minY - 80;
    var startY = 0;
    var moveY = 0;
    var distanceY = 0;
    var isMove  = false;

    var currY = 0;
    //定义公共的方法
    var addTransition = function(){
        contentBox.style.webkitTransition = "all .2s";
        contentBox.style.transition = "all .2s";
    };
    var removeTransition = function(){
        contentBox.style.webkitTransition = "none";
        contentBox.style.transition = "none";
    };
    var setTranslateY = function(y){
        contentBox.style.webkitTransform = "translateY("+y+"px)";
        contentBox.style.transform = "translateY("+y+"px)";
    };
    contentBox.addEventListener('touchstart', function (e) {
        startY = e.touches[0].clientY;
    });
    contentBox.addEventListener('touchmove', function (e) {
        moveY = e.touches[0].clientY;
        distanceY = moveY - startY;
        removeTransition();
        /*设置定位*/
        /*第二步 2.当滑动到一定的距离的时候不能滑动  滑动区间*/
        /*当前要做定位的位子需要在滑动区间内*/
        if((currY + distanceY) < maxY &&　(currY + distanceY) > minSwipe){
            setTranslateY(currY + distanceY);
        }

    });
    contentBox.addEventListener('touchend', function (e) {
        if(( currY + distanceY)>maxY){
            currY = maxY;
            addTransition();
            setTranslateY(currY);
        }
        /*当往上滑的时候 小于 最小定位*/
        else if(( currY + distanceY)<minSwipe){
            currY = minSwipe;
            addTransition();
            setTranslateY(currY);
        }
        else{
            /*记录当前的定位   上一次当前的定位 + 这一次改变的定位*/
            currY = currY + distanceY;
        }

        /*重置所有的参数  不重置currY */
        startY = 0;
        moveY =0;
        distanceY = 0;
        isMove = 0;
    })
}
function listen() {
    var listens = document.querySelectorAll('.listen');
    for(var i= 0,max = listens.length; i < max; i++) {
        var lis = listens[i];
        lis.innerHTML = 0;
        lis.index = 0;
        lis.onclick = function () {
            this.index++;
            this.innerHTML = this.index;
        }
    }
}
function assist() {
    var assist = document.querySelectorAll('.assist');
    for(var i= 0,max = assist.length; i < max; i++) {
        var ass = assist[i];
        ass.innerHTML = 0;
        ass.index = 0;
        ass.onclick = function () {
            this.index++;
            this.innerHTML = this.index;
        }
    }
}