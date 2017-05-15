/**
 * Created by 俊军 on 2017/3/2.
 */

window.onload = function () {
    addRCB();
    Handover();
};

function addRCB() {
    var liSTR = [
        {
            img:"../images/Luser-img.png",
            name: "刘德华",
            profession:"高级英语老师",
            chitchat:350000,
            listenInIcon:4772
        },
        {
            img:"../images/Luser-img2.jpg",
            name: "弱弱认",
            profession:"呵呵老师",
            chitchat:35,
            listenInIcon:477
        },
        {
            img:"../images/ball.png",
            name: "烦烦烦",
            profession:"化学老师",
            chitchat:3321325,
            listenInIcon:472
        },
        {
            img:"../images/Lportrait1.png",
            name: "rrr",
            profession:"高级英语老师",
            chitchat:35455,
            listenInIcon:42
        },
        {
            img:"../images/Luser-img3.jpg",
            name: "是是是",
            profession:"物理老师",
            chitchat:35555,
            listenInIcon:47
        },
        {
            img:"../images/Luser-img4.jpg",
            name: "逗比",
            profession:"高级英语老师",
            chitchat:15,
            listenInIcon:4772
        },
        {
            img:"../images/Luser-img5.jpg",
            name: "课堂",
            profession:"高级英语老师",
            chitchat:35345,
            listenInIcon:477254654
        }
    ];
    var liSTRAdd="",str;

    liSTR.forEach(function (ele,i) {
        str =
        '<li>'+
        '<a href="#" class="user-img pull-left" style="background-image:url('+ele.img+')"></a>'+
            '<a href="javascript:;" class="pull-right listenInButton"><i class="icon-LB"></i>收听</a>'+
            '<div class="cont">'+
            '<a href="#" class="color333"><p class="name">'+ele.name+'</p></a>'+
            '<a href="#" class="color999"><p class="profession">'+ele.profession+'</p></a>'+
            '<a href="javascript:;" class="color999"><span><i class="icon-LT"></i>'+
            '<span class="chitchat">'+ele.chitchat+'</span>个回答</span></a>'+
            '<a href="#" class="color999"><span><i class="icon-RT"></i><span class="listenInIcon">'+ele.listenInIcon+'</span>人收听</span></a>'+
            '</div>'+
            '</li>';
        liSTRAdd +=str;
    });
    document.querySelector("main ul").innerHTML = liSTRAdd;

}

function Handover() {
    var button = document.querySelectorAll("main .listenInButton");
    button.forEach(function (ele) {
        liu.tap(ele, function () {
            if ((/icon-LB/.test(ele.innerHTML))){
                ele.innerHTML = "已收听";
            }else {
                ele.innerHTML = '<i class="icon-LB"></i>收听';
            }
        })
    })
}

