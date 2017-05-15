/**
 * Created by 俊军 on 2017/3/2.
 */

window.onload  = function () {
    document.querySelector(" textarea").onkeyup=function ()
    {
        var maxChars = 60;//最多字符数
            this.value = this.value.substring(0, maxChars);
            document.querySelector("main .text-num span").innerHTML = this.value.length.toString();

    };

    document.querySelector(".Main-Checked a").onclick = function () {
        if (this.classList.contains("checkboxT")) {
            this.className = "checkboxF"
        } else if (this.classList.contains("checkboxF")) {
            this.className = "checkboxT"
        }

    }

};


// 文本域规定输入的字数
