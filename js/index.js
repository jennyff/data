/**
 * Created by Administrator on 2017/3/7.
 */
const NUMBER_OF_LEAVES = 50;
function init() {
    var container = document.getElementById('leafContainer');
    for (var i = 0; i < NUMBER_OF_LEAVES; i++) {

        container.appendChild(createALeaf());
    }
}
function randomInteger(low, high) {

    return low + Math.floor(Math.random() * (high - low));

}
function randomFloat(low, high) {

    return low + Math.random() * (high - low);

}
function pixelValue(value) {

    return value + 'px';

}
function durationValue(value) {

    return value + 's';

}
function createALeaf() {

    var leafDiv = document.createElement('div');

    var image = document.createElement('img');

    image.src = '../images/snow' + randomInteger(1, 5) + '.png';
    var footer=document.querySelector('.footer-nav');
    var footerUl=footer.querySelector("ul");
    var lis=footerUl.querySelectorAll("li");
    console.log(lis);
    lis[3].onclick=function () {
        alert(111);
        // image.src = '../images/flower' + randomInteger(1, 5) + '.png';
        // console.log(image.src);
    };
    lis[1].onclick=function () {
        alert(111);
        image.src = '../images/snow' + randomInteger(1, 5) + '.png';
    };

    leafDiv.style.top = "-10px";

    leafDiv.style.left = pixelValue(randomInteger(0, 1000));


    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';


    leafDiv.style.webkitAnimationName = 'fade, drop';

    image.style.webkitAnimationName = spinAnimationName;


    var fadeAndDropDuration = durationValue(randomFloat(5, 11));


    var spinDuration = durationValue(randomFloat(4, 8));


    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
    var leafDelay = durationValue(randomFloat(0, 5));

    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;


    image.style.webkitAnimationDuration = spinDuration;


    leafDiv.appendChild(image);


    return leafDiv;
}
window.addEventListener('load', init);

// $(function () {
//     $()
// })