

$(function () {

// 购物车下拉框
$('#shopp , #slide_shopp').on('mouseover', function () {
    $('#slide_shopp').stop(true).slideDown(200);
    $('.right > a').css({
        'background': 'white',
        'color': '#ff6700'
    });
});
$('#shopp , #slide_shopp').on('mouseout', function () {
    $('#slide_shopp').stop(true).slideUp(200);
    $('.right > a').css({
        'background': '#333',
        'color': '#b0b0b0'
    });
});


 // 小米手机搜索框
$('#search').on('focus',function () {
    $('#mix').hide();
});
$('#search').on('blur',function () {
    $('#mix').show();
});




//  隐藏的下拉框

$('#center_ul').children('li').each(function (index,ele) {
    $(ele).on('mouseover',function () {
        $(ele).children('div').stop().show();
    });
    $(ele).on('mouseout',function () {
        $(ele).children('div').stop().hide();
    });
});


//  轮播图旁 侧边栏
$('.list').children('li').each(function (index,ele) {
    $(ele).on('mouseenter',function () {
        $(ele).children('div').stop(true).show();
    });

    $(ele).on('mouseleave',function () {
        $(ele).children('div').stop(true).hide();
    })
});



// 轮播图按钮
var index = 0;
$('.rotate > ol >li').on('click',function () {
    // 更新索引值
    index = $(this).index();
    $(this).addClass('ol_li_show').siblings('li').removeClass('ol_li_show');
    $('.rotate > ul >li').eq(index).fadeIn('fast').siblings('li').fadeOut('normal');
}).triggerHandler('click');

//  上一张图片
$('.prev').on('click',function (e) {
    e = e || window.event;
    index --;
    index < 0 ? index = 4 : index;
    move(index);
});

// 下一张图片
$('.next').on('click',function (e) {
    e = e || window.event;
    index ++;
    index > 4 ? index = 0 : index;
    move(index);
});



//  自动轮播
var timer = null;
timer = setInterval(autoPlay,3000);
function autoPlay() {
    index ++;
    index > 4 ? index = 0 :index;
    move(index);
}

function move(index) {
    $('.rotate > ol > li').eq(index).addClass('ol_li_show').siblings('li').removeClass('ol_li_show');
    $('.rotate > ul > li').eq(index).fadeIn('fast').siblings('li').fadeOut('normal');
}

// 当鼠标移入时暂停轮播
$('.rotate > ul').on('mouseover',function () {
    clearInterval(timer);
});
$('.rotate > ul').on('mouseout',function () {
    timer = setInterval(autoPlay,3000);
});




//  ----------- 小米明星单品 ----------

//  鼠标移入暂停轮播
$('.container_button , .container_ul').on('mouseover',function () {
    clearInterval(container_timer);
});
$('.container_button , .container_ul').on('mouseout',function () {
    container_timer = setInterval(auto,5000);
});



//   向右切换
$('#button_next').on('click',function () {
    $('.container_ul').stop(true,true).animate({'left': '-1240px'},'50');
});
//   向左切换
$('#button_prev').on('click',function () {
    $('.container_ul').stop(true,true).animate({'left': '0'},'50');
});


//  自动轮播
var container_timer = null;
container_timer = setInterval(auto,5000);
function auto() {
    var container_ul = document.querySelector('.container_ul');
    var container_ul_left = parseInt($('.container_ul').css('left'));
    if(container_ul_left == 0){
        $('.container_ul').stop().animate({'left': '-1240px'},'100');
        $('#button_next').addClass('colour');
        $('#button_prev').removeClass('colour');
    }else{
        $('.container_ul').stop().animate({'left': '0'},'100');
        $('#button_prev').addClass('colour');
        $('#button_next').removeClass('colour');
    }
}





    //     智能硬件 右边的查看更多的样式
    $('.content_hd_more').mouseenter(function () {
        $('.content_hd_more > a > .content_hd_circle').removeClass('content_hd_circle').addClass('content_hd_circle_xg');
        $('.content_hd_more > a > .content_span').addClass('span_color');
    });
    $('.content_hd_more').mouseleave(function () {
        $('.content_hd_more > a > .content_hd_circle_xg').removeClass('content_hd_circle_xg').addClass('content_hd_circle');
        $('.content_hd_more > a > .content_span').removeClass('span_color');
    });


    //   --------------------- 搭配 ---------------------
    //     鼠标移入 标签 下面ul 内的内容发生改变
    $('#content_tab_ul > li').on('mouseenter',function () {
        //    按钮下的下划线跟随样式
        $('#content_tab_ul > li').eq($(this).index()).addClass('content_active').siblings('li').removeClass('content_active');
        // 下面ul跟随
        $('#content_two_right > ul').eq($(this).index()).css('display','block').siblings('#content_two_right > ul').css('display','none');

    });

    //    用于鼠标移除目标后样式默认跳转至第一个
    // $('.content_tab > ul, .content_two_right > ul').on('mouseenter',function () {
    //     $('.content_tab > ul >li').eq($(this).index()).removeClass('content_active').addClass('content_active');
    // });
    // $('.content_tab > ul, .content_two_right > ul').on('mouseleave',function () {
    //     $('.content_tab > ul >li').eq($(this).index()).removeClass('content_active');
    // });


    // ************* 显示与隐藏 li 里面的小信息框  *********
    //   热门
    $('#content_two_right_ul_one > li').on('mouseover',function () {
        $('#content_two_right_ul_one > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#one_datum_two,#one_datum_five').stop().css({'display': 'none'});
    });
    $('#content_two_right_ul_one > li').on('mouseout',function () {
        $('#content_two_right_ul_one > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });

    //   耳机音响
    $('#content_two_right_ul_two > li').on('mouseover',function () {
        $('#content_two_right_ul_two > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#two,#three,#four,#five,#six').css('display','none');
    });
    $('#content_two_right_ul_two > li').on('mouseout',function () {
        $('#content_two_right_ul_two > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });

    //  电源
    $('#content_two_right_ul_three > li').on('mouseover',function () {
        $('#content_two_right_ul_three > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#three_datum_seven').stop().animate({'display': 'none'});
    });
    $('#content_two_right_ul_three > li').on('mouseout',function () {
        $('#content_two_right_ul_three > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });

    //  电池存储卡
    $('#content_two_right_ul_four > li').on('mouseover',function () {
        $('#content_two_right_ul_four > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#four_datum_six').stop().animate({'display': 'none'});
    });
    $('#content_two_right_ul_four > li').on('mouseout',function () {
        $('#content_two_right_ul_four > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });






    //   --------------------- 配件 ---------------------

    //     鼠标移入 标签 下面ul 内的内容发生改变
    $('#content_hd_tab_ul > li').on('mouseenter',function () {
        //    按钮下的下划线跟随样式
        $('#content_hd_tab_ul > li').eq($(this).index()).addClass('content_active').siblings('li').removeClass('content_active');
        // 下面ul跟随
        $('#content_three_right > ul').eq($(this).index()).css('display','block').siblings('#content_three_right > ul').css('display','none');

    });


    // ************* 显示与隐藏 li 里面的小信息框  *********
    //   热门
    $('#content_three_right_ul_one > li').on('mouseover',function () {
        $('#content_three_right_ul_one > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#one_parts_one,#two_parts_one,#four_parts_one,#five_parts_one,#seven_parts_one').stop().css({'display': 'none'});
    });
    $('#content_three_right_ul_one > li').on('mouseout',function () {
        $('#content_three_right_ul_one > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });

    //   保护膜
    $('#content_three_right_two > li').on('mouseover',function () {
        $('#content_three_right_two > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#one_parts_two,#two_parts_two,#three_parts_two,#four_parts_two,#five_parts_two,#six_parts_two,#seven_parts_two').css('display','none');
    });
    $('#content_three_right_two > li').on('mouseout',function () {
        $('#content_three_right_two > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });

    //  贴膜
    $('#content_three_right_three > li').on('mouseover',function () {
        $('#content_three_right_three > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#two_parts_three,#four_parts_three,#five_parts_three').css('display','none');
    });
    $('#content_three_right_three > li').on('mouseout',function () {
        $('#content_three_right_three > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });

    //  其他配件
    $('#content_three_right_four > li').on('mouseover',function () {
        $('#content_three_right_four > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#one_parts_two,#two_parts_two,#three_parts_two,#four_parts_two,#five_parts_two,#six_parts_two,#seven_parts_two').css('display','none');
    });
    $('#content_three_right_four > li').on('mouseout',function () {
        $('#content_three_right_four > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });





    //   --------------------- 周边 ---------------------

    //     鼠标移入 标签 下面ul 内的内容发生改变
    $('#content_ambitus_hd_ul > li').on('mouseenter',function () {
        //    按钮下的下划线跟随样式
        $('#content_ambitus_hd_ul > li').eq($(this).index()).addClass('content_active').siblings('li').removeClass('content_active');
        // 下面ul跟随
        $('#content_ambitus_right > ul').eq($(this).index()).css('display','block').siblings('#content_ambitus_right > ul').css('display','none');

    });


    // ************* 显示与隐藏 li 里面的小信息框  *********
    //   热门
    $('#content_ambitus_ul_one > li').on('mouseover',function () {
        $('#content_ambitus_ul_one > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#one_parts_one,#two_parts_one,#four_parts_one,#five_parts_one,#seven_parts_one').stop().css({'display': 'none'});
    });
    $('#content_ambitus_ul_one > li').on('mouseout',function () {
        $('#content_ambitus_ul_one > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });

    //   服装
    $('#content_ambitus_ul_two > li').on('mouseover',function () {
        $('#content_ambitus_ul_two > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#one_parts_two,#two_parts_two,#three_parts_two,#four_parts_two,#five_parts_two,#six_parts_two,#seven_parts_two').css('display','none');
    });
    $('#content_ambitus_ul_two > li').on('mouseout',function () {
        $('#content_ambitus_ul_two > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });

    //  米兔
    $('#content_ambitus_ul_three > li').on('mouseover',function () {
        $('#content_ambitus_ul_three > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#four_ambitus_three,#seven_ambitus_three').css('display','none');
    });
    $('#content_ambitus_ul_three > li').on('mouseout',function () {
        $('#content_ambitus_ul_three > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });

    //  生活周边
    $('#content_ambitus_ul_four > li').on('mouseover',function () {
        $('#content_ambitus_ul_four > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#one_parts_two,#two_parts_two,#three_parts_two,#four_parts_two,#five_parts_two,#six_parts_two,#seven_parts_two').css('display','none');
    });
    $('#content_ambitus_ul_four > li').on('mouseout',function () {
        $('#content_ambitus_ul_four > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });


    //  箱包
    $('#content_ambitus_ul_five > li').on('mouseover',function () {
        $('#content_ambitus_ul_five > li > .review-wrapper').eq($(this).index()).stop(true).show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#one_parts_two,#two_parts_two,#three_parts_two,#four_parts_two,#five_parts_two,#six_parts_two,#seven_parts_two').css('display','none');
    });
    $('#content_ambitus_ul_five > li').on('mouseout',function () {
        $('#content_ambitus_ul_five > li > .review-wrapper').eq($(this).index()).stop(true).hide(200);
    });




//    ----------           为你推荐                 ------------
    var index=0;
    $('#recommend_button_next').on('click',function () {
        index++;
        index > 3 ? index = 3 : index;
        $('.recommend_ul').animate({'left': index*-1240},'50');
    });
    $('#recommend_button_prev').on('click',function () {
        index--;
        index < 0 ? index = 0 : index;
        $('.recommend_ul').animate({'left': index*-1240},'50');
    });




//    ----------           内容                 ------------

    // // 第一个
    // $('.content_picture_bd_hover_one').on('mouseover',function () {
    //     $('#one_side_button_prev , #one_side_button_next').css({'display':'block'});
    // });
    //
    // $('.content_picture_bd_hover_one').on('mouseout',function () {
    //      $('#one_side_button_prev , #one_side_button_next').css({'display':'none'});
    // });

    // var index = 0;
    //
    // $('#one_side_button_next').on('click',function () {
    //     index ++;
    //     index >= 2 ? index = 2 : index;
    //     $('#one_picture_carousel_ul').animate({'left': index * 296});
    //     console.log('右：'+$('#one_picture_carousel_ul').css('left'));
    // });
    //
    // $('#one_side_button_prev').on('click',function () {
    //     index --;
    //     index < 0 ? index = 0 : index;
    //     $('#one_picture_carousel_ul').animate({'left': index*-296});
    //     console.log('左：'+$('#one_picture_carousel_ul').css('left'));
    // });





















    // // 第二个
    // $('.content_picture_bd_hover_two').on('mouseover',function () {
    //     $('.two_side_button_prev , .two_side_button_next').css({'display':'block'});
    // });
    //
    // $('.content_picture_bd_hover_two').on('mouseout',function () {
    //     $('.two_side_button_prev , .two_side_button_next').css({'display':'none'});
    // });
    //
    // $('.content_picture_bd_hover_two').on('mouseover',function () {
    //     $('.two_side_button_prev , .two_side_button_next').css({'display':'block'});
    // });
    //
    //
    //
    // // 第三个
    // $('.content_picture_bd_hover_three').on('mouseover',function () {
    //     $('.three_side_button_prev , .three_side_button_next').css({'display':'block'});
    // });
    //
    // $('.content_picture_bd_hover_three').on('mouseout',function () {
    //     $('.three_side_button_prev , .three_side_button_next').css({'display':'none'});
    // });
    //
    // // 第四个
    // $('.content_picture_bd_hover_four').on('mouseover',function () {
    //     $('.four_side_button_prev , .four_side_button_next').css({'display':'block'});
    // });
    //
    // $('.content_picture_bd_hover_four').on('mouseout',function () {
    //     $('.four_side_button_prev , .four_side_button_next').css({'display':'none'});
    // });


























});







