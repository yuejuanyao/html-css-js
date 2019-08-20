var index_now = 0;
//所有的图片
var pictures = document.getElementsByClassName("faces");
//最下方所有的点
var dots = document.getElementsByClassName("dot");

// 展现照片
show(index_now);

//按左右选择键
function getprev_next(n) {
    hide(index_now);
    index_now += n;
    show(index_now);
}

//选择下面的点，展示图片
function chosebydot(n) {
    hide(index_now);
    show(index_now = n);
}

//隐藏之前选中的照片
function hide(index) {
    pictures[index].style.display = "none";
    dots[index].className = dots[index].className.replace(" active", "");
}

function show(index) {
    index_now = index;
    if (pictures.length > 0) {
        if (index > pictures.length - 1) {
            index_now = 0;
        } else if (index < 0) {
            index_now = pictures.length - 1;
        }
    }

    // for (i = 0; i < pictures.length; i++) {
    //     pictures[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    pictures[index_now].style.display = "block";
    dots[index_now].className += " active";
}