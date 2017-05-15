/**
 * Created by john on 2017/3/8.
 */
window.onload = function () {
    date1();
    question();

};
function date1() {
    var lis = [
        {
            img: "../images/004.jpg",
            name: "音乐人",
            title: "旅行路上的风景",
            answer: "23个回答",
            listen: "30个收听"

        },
        {
            img: "../images/009.jpg",
            name: "DoLeMi",
            title: "徐志摩的诗歌",
            answer: "23个回答",
            listen: "32个收听"

        },
        {
            img: "../images/006.jpg",
            name: "夜间听雨",
            title: "寂寞夜阑雨声下",
            answer: "53个回答",
            listen: "68个收听"

        },
        {
            img: "../images/007.jpg",
            name: "三线牵",
            title: "故事心里人",
            answer: "63个回答",
            listen: "68个收听"

        },
        {
            img: "../images/008.jpg",
            name: "梧桐里",
            title: "雨巷",
            answer: "73个回答",
            listen: "108个收听"

        },
        {
            img: "../images/009.jpg",
            name: "京之静",
            title: "静落雨花路",
            answer: "72个回答",
            listen: "128个收听"

        },
        {
            img: "../images/010.jpg",
            name: "冥想",
            title: "我爱的人",
            answer: "71个回答",
            listen: "98个收听"

        }
    ];

    var any = document.querySelector(".any");
    liu.tap(any, function () {


        var word = "", str = "";
        for (var i = 0; i < lis.length; i++) {
            //word = document.createElement("li");
            //word.className = "clearfix";
            word =
                '<li class="clearfix">' +
                '<i><img src=' + lis[i].img + '></i>' +
                '<div class="wz">' +
                '<em>' + lis[i].name + '<p>&nbsp;&nbsp;|&nbsp;&nbsp;' + lis[i].title + '</p></em>' +
                '</div>' +
                '<div class="answer">' +
                '<s>' + lis[i].answer + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + lis[i].listen + '</s>' +
                '</div>' +
                '</li>';
            str = str + word;
            //var ul = document.querySelector(".bankuai ul");
            //ul.appendChild(word);
        }
        var ul = document.querySelector(".bankuai ul");
        //console.log(ul.innerHTML);
        ul.innerHTML = ul.innerHTML + str;

    });

}

function question() {
    var lis2 = [
        {
            problem: "应否废除高考英语？",
            answer: "回答:不加V",
            people: "作家"
        },
        {
            problem: "探讨到底有没有外星人？",
            answer: "回答:不加V",
            people: "科学家"
        },
        {
            problem: "中国烂剧泛滥原因何在？",
            answer: "回答:不加V",
            people: "作家/记者"
        },
        {
            problem: "为何好莱坞特效如此好,中国只能拍出《爵迹》？",
            answer: "回答:不加V",
            people: "作家/记者"
        },
        {
            problem: "中国文学的作品为何无人问津？",
            answer: "回答:不加V",
            people: "作家"
        },
        {
            problem: "国内电视剧为何抄袭泛滥？",
            answer: "回答:不加V",
            people: "作家/记者"
        },
        {
            problem: "国外大片的特效超前国内水平",
            answer: "回答:不加V",
            people: "作家/记者"
        },

    ];
    var any2 = document.querySelector(".any2");
    liu.tap(any2, function () {

        var question = "", str = "";
        for (var i = 0; i < lis2.length; i++) {
            //question = document.createElement("li");
            //question.innerHTML =
            question =
                '<li>'+
                '<span>' + lis2[i].problem + '</span><br/>' +
                '<em>' + lis2[i].answer + '<p>&nbsp;&nbsp;|&nbsp;&nbsp;' + lis2[i].people + '</p></em>'+
                '</li>'

            str = str + question;
            var ul = document.querySelector(".bankuai2 ul");
            ul.innerHTML = ul.innerHTML + str;
            //ul.appendChild(question);

        }
    });
}