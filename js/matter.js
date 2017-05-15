/**
 * Created by ���� on 2017/3/8.
 */
window.onload = function () {
    getShow();
};
function getShow() {
    var troubles = document.querySelectorAll('.yk_trouble');
    for(var i= 0,max = troubles.length; i < max;i++) {
        var trouble = troubles[i];
        trouble.index = true
        trouble.onclick = function () {
            var key_box = this.querySelector('.yk_key_box');
            this.index = !this.index;
            if(this.index) {
                key_box.style.display = "none";
            }else {

                key_box.style.display = "block";
            }
        };
    }
}