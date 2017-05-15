/**
 * Created by 俊军 on 2017/2/21.
 */
// 封装共用的方法
// 定义一个共用的对象 存放封装事件
window.liu = {};
liu.transitionEnd = function (dom, fn) {
    // 判断 传入的是否是一个对象
    if (dom && typeof dom == "object") {
        // 给需要绑定的事件 transitionEnd 是 过度实现结束后触发的   上面这个上兼容写法
        dom.addEventListener("webkitTransitionEnd", function () {
            fn && fn();
        });
        dom.addEventListener("transitionEnd", function () {
            fn && fn();
        });
    }
};

// 轻触     如果点击后滑动了就不算
liu.tap = function (dom, fn) {

    if (dom && typeof dom == "object") {
        // console.log(Date.now());
        var isMove = false;
        var seartTime = 0;
        dom.addEventListener("touchstart", function (e) {
            seartTime = Date.now();
            // console.log(1);
        });
        dom.addEventListener("touchmove", function (e) {
            isMove = true;
        });

        dom.addEventListener("touchend", function (e) {
            // console.log((Date.now() - seartTime));
            if (!isMove && (Date.now() - seartTime) < 200) {
                // console.log(isMove);
                fn && fn(e);
            }
            isMove = false;
            seartTime = 0;
        });

    }
};


// 封装 开启过度属性
function addTransition(ul) {
    ul.style.transition = "all .6s";
    ul.style.webkutTransition = "all .6s";
}

// 封装 移除过度属性
function rmoverTransition(ul) {
    ul.style.transition = "none";
    ul.style.webkutTransition = "none";
}

// 封装 移动x轴的属性
function setTransform(ul, xy, num) {
    ul.style.transform = "translate" + xy + "(" + num + "px)";
    ul.style.webkutTransform = "translate" + xy + "(" + num + "px)";
}


