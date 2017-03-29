/**
 * Created by 26518 on 2017/3/29.
 */

window.onload = function () {
    run();
    secondKill();
};
//轮播图
var run = function () {
    var banner = document.getElementsByClassName('jd-banner')[0];
    var box = banner.getElementsByTagName('ul')[0];
    var lis = box.children;
    //console.log(banner);
    //console.log(box);
    var width = banner.offsetWidth;
    var index = 1;
    var timer = null;
    var startX = 0, endX = 0, moveX =0;
    var box2 = banner.getElementsByTagName('ul')[1];
    var lis2 = box2.children;
    //轮播图定时器
    timer = setInterval(function lunbo() {
        index++;
        box.style.transform = "translateX(" + (-index * width) + "px)";
        box.style.transition = "all 0.9s ease 0s";
        //轮播图小点
        for(var i = 0;i<lis2.length;i++){
            lis2[i].className = "none"
        }
        lis2[index-1].className = "active";
    }, 3000);
    //轮播每次过渡一次就判断是否为最后一张
    box.addEventListener('webkitTransitionEnd', function () {
        //console.log("过渡完了");
        // console.log(index+"完成");
        if (index == 8) {
            index = 0;
            box.style.transform = "none";
            box.style.transition = "none";
            box.style.webkitTransition = "none";
            box.style.transform = "translateX(" + (-index * width) + "px)";
        }
    });
};

//秒杀倒计时
var secondKill = function(){
    var parentTime = document.getElementById('second_kill_time');
    /*span时间*/
    var seckillTime = parentTime.getElementsByClassName('seckill-time');
    var timeH = seckillTime[0].getElementsByTagName('span');
    var timeM = seckillTime[1].getElementsByTagName('span');
    var timeS = seckillTime[2].getElementsByTagName('span');

    var times = 7 * 60 * 60; // 小时*分钟*秒杀数
    var timer;
    //var date1=new Date().getTime();    //开始时间 获取时间戳
    //var date2=new Date(2017,2,30).getTime();    //结束时间 月份从0开始计算
    //var times=(date2 - date1)/1000; //之间的秒数
    // console.log(times);
    timer = setInterval(function(){
        times  -- ;

        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = times%60;
        //console.log(h+'-'+m+"-"+s);

        timeH[0].innerHTML = h > 10 ? Math.floor(h / 10):0;
        timeH[1].innerHTML = h % 10;

        timeM[0].innerHTML = m > 10 ? Math.floor(m / 10):0;
        timeM[1].innerHTML = m % 10;

        timeS[0].innerHTML = s > 10 ? Math.floor(s / 10):0;
        timeS[1].innerHTML = Math.floor(s % 10);
        if(times <= 0){
            clearInterval(timer);
        }
    },1000);

};



