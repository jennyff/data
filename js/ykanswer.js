/**
 * Created by john on 2017/3/6.
 */


window.onload  = function () {
    document.querySelector("#textareaOne").onkeyup=function ()
    {
        var num =document.querySelector(".text_numA s");
        var maxChars = 18;

        this.value = this.value.substring(0, maxChars);
        num.innerHTML = this.value.length.toString();
        if(this.value.length>=12){
            num.style.color="red";
        }

    }
    num(document.querySelector("#textareaOne"),18,document.querySelector(".text_numA s"),12);
    num(document.querySelector("#textareaTwo"),100,document.querySelector(".text_num s"),70);
};

function num (dom,num1,dom3,dom4){
    dom.onkeyup=function ()
    {
        var maxChars = num1;
        this.value = this.value.substring(0, maxChars);
        dom3.innerHTML = this.value.length.toString();
        console.log(this.value.length.toString());
        if(this.value.length>=dom4){
            dom3.style.color="red";
        }else if(this.value.length<dom4){
            dom3.style.color="";
        }

    }
}