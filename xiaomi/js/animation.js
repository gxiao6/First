/**
 * Created by 26518 on 2017/2/16.
 */



    // var $ = $.noConflict();

$(function () {

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
         $('#content_two_right_ul_one > li > .review-wrapper').eq($(this).index()).stop().show(200);
         //  下面这 用于隐藏不需要显示的小信息框
         $('#one_datum_two,#one_datum_five').stop().css({'display': 'none'});
     });
     $('#content_two_right_ul_one > li').on('mouseout',function () {
        $('#content_two_right_ul_one > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });

    //   耳机音响
    $('#content_two_right_ul_two > li').on('mouseover',function () {
        $('#content_two_right_ul_two > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#two,#three,#four,#five,#six').css('display','none');
    });
    $('#content_two_right_ul_two > li').on('mouseout',function () {
        $('#content_two_right_ul_two > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });

    //  电源
    $('#content_two_right_ul_three > li').on('mouseover',function () {
        $('#content_two_right_ul_three > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#three_datum_seven').stop().animate({'display': 'none'});
    });
    $('#content_two_right_ul_three > li').on('mouseout',function () {
        $('#content_two_right_ul_three > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });

    //  电池存储卡
    $('#content_two_right_ul_four > li').on('mouseover',function () {
        $('#content_two_right_ul_four > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#four_datum_six').stop().animate({'display': 'none'});
    });
    $('#content_two_right_ul_four > li').on('mouseout',function () {
        $('#content_two_right_ul_four > li > .review-wrapper').eq($(this).index()).stop().hide(200);
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
        $('#content_three_right_ul_one > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#one_parts_one,#two_parts_one,#four_parts_one,#five_parts_one,#seven_parts_one').stop().css({'display': 'none'});
    });
    $('#content_three_right_ul_one > li').on('mouseout',function () {
        $('#content_three_right_ul_one > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });

    //   保护膜
    $('#content_three_right_two > li').on('mouseover',function () {
        $('#content_three_right_two > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#one_parts_two,#two_parts_two,#three_parts_two,#four_parts_two,#five_parts_two,#six_parts_two,#seven_parts_two').css('display','none');
    });
    $('#content_three_right_two > li').on('mouseout',function () {
        $('#content_three_right_two > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });

    //  贴膜
    $('#content_three_right_three > li').on('mouseover',function () {
        $('#content_three_right_three > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#two_parts_three,#four_parts_three,#five_parts_three').css('display','none');
    });
    $('#content_three_right_three > li').on('mouseout',function () {
        $('#content_three_right_three > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });

    //  其他配件
    $('#content_three_right_four > li').on('mouseover',function () {
        $('#content_three_right_four > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#one_parts_two,#two_parts_two,#three_parts_two,#four_parts_two,#five_parts_two,#six_parts_two,#seven_parts_two').css('display','none');
    });
    $('#content_three_right_four > li').on('mouseout',function () {
        $('#content_three_right_four > li > .review-wrapper').eq($(this).index()).stop().hide(200);
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
        $('#content_ambitus_ul_one > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#one_parts_one,#two_parts_one,#four_parts_one,#five_parts_one,#seven_parts_one').stop().css({'display': 'none'});
    });
    $('#content_ambitus_ul_one > li').on('mouseout',function () {
        $('#content_ambitus_ul_one > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });

    //   服装
    $('#content_ambitus_ul_two > li').on('mouseover',function () {
        $('#content_ambitus_ul_two > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#one_parts_two,#two_parts_two,#three_parts_two,#four_parts_two,#five_parts_two,#six_parts_two,#seven_parts_two').css('display','none');
    });
    $('#content_ambitus_ul_two > li').on('mouseout',function () {
        $('#content_ambitus_ul_two > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });

    //  米兔
    $('#content_ambitus_ul_three > li').on('mouseover',function () {
        $('#content_ambitus_ul_three > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        $('#four_ambitus_three,#seven_ambitus_three').css('display','none');
    });
    $('#content_ambitus_ul_three > li').on('mouseout',function () {
        $('#content_ambitus_ul_three > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });

    //  生活周边
    $('#content_ambitus_ul_four > li').on('mouseover',function () {
        $('#content_ambitus_ul_four > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#one_parts_two,#two_parts_two,#three_parts_two,#four_parts_two,#five_parts_two,#six_parts_two,#seven_parts_two').css('display','none');
    });
    $('#content_ambitus_ul_four > li').on('mouseout',function () {
        $('#content_ambitus_ul_four > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });


    //  箱包
    $('#content_ambitus_ul_five > li').on('mouseover',function () {
        $('#content_ambitus_ul_five > li > .review-wrapper').eq($(this).index()).stop().show(200);
        //  下面这 用于隐藏不需要显示的小信息框
        // $('#one_parts_two,#two_parts_two,#three_parts_two,#four_parts_two,#five_parts_two,#six_parts_two,#seven_parts_two').css('display','none');
    });
    $('#content_ambitus_ul_five > li').on('mouseout',function () {
        $('#content_ambitus_ul_five > li > .review-wrapper').eq($(this).index()).stop().hide(200);
    });




//    ----------           为你推荐                 ------------
    var index=0;
    $('#recommend_button_next').on('click',function () {
            index++;
        index>3? index=3 : index;
        $('.recommend_ul').animate({'left': index*-1240},'50');
    });
    $('#recommend_button_prev').on('click',function () {
        index--;
        index < 0 ? index = 0 : index;
        $('.recommend_ul').animate({'left': index*-1240},'50');
    });




//    ----------           内容                 ------------










});































































