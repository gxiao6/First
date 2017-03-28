/**
 * Created by 26518 on 2017/2/15.
 */

(function (window,angular) {
    'use strict';


    angular.module('MyApp',[])
        .controller('DemoController',['$scope',function ($scope) {

            //     智能硬件
            $scope.data = [
                {url : 'http://i1.mifile.cn/a1/pms_1468806372.46368911!220x220.jpg',h2 : '米家小白智能摄像机',word : '360° 全景拍摄，1080P 高清摄像',price : '399元'},
                {url : 'http://i1.mifile.cn/a1/pms_1478656331.65637548!220x220.jpg',h2 : '米兔儿童手表Q',word : '11 重安全设计，五重精准定位',price : '299元'},
                {url : 'http://i1.mifile.cn/a1/pms_1464615180.86261317!220x220.jpg',h2 : '米兔智能故事机',word : '微信远程互动，智能语音交互',price : '199元'},
                {url : 'http://i1.mifile.cn/a1/T1OVC_ByY_1RXrhCrK!220x220.jpg',h2 : '米家压力IH电饭煲',word : '智能烹饪，灰铸铁粉体涂层内胆',price : '999元'},
                {url : 'http://i1.mifile.cn/a1/pms_1481507050.2285518!220x220.jpg',h2 : '小米米家电动滑板车',word : '极简几何设计，1 分钟轻松上手',price : '1999元'},
                {url : 'http://i8.mifile.cn/v1/a1/f3bbe2aa-4b7c-a3dd-2ecc-b12f9418632b.jpg',h2 : '智米除菌加湿器',word : 'UVGI 紫外线除菌，便捷上注水设计',price : '799元'},
                {url : 'http://i1.mifile.cn/a1/pms_1479182984.26159750!220x220.jpg',h2 : '防雾霾口罩',word : '过滤 99.97% PM2.5 颗粒物',price : '69元'},
                {url : 'http://i3.mifile.cn/a4/cbabf443-1ff1-4014-a1bf-06c45476f1e6',h2 : '米兔定位电话',word : '高清双向通话，五重精准定位',price : '169元'}
            ];

            //   --------  搭配  -------
            //   热门
            $scope.datum_one = [
                {id : 'one_datum_one', url : 'http://i2.mifile.cn/a1/T1pZbvBTET1RXrhCrK.jpg?width=150&height=150',title : '小米移动电源5000mAh', price : '49', amount : '9.8万人评价', review : '之前都不知道，还以为是18650电芯的。拿到手一看这...', special : ' 来自于 ywtdzh 的评价 '},
                {id : 'one_datum_two', url : 'http://i2.mifile.cn/a1/pms_1482816047.72829695.jpg?width=150&height=150',title : '20000mAh小米移动电源2', price : '149', amount : '8740人评价',review : '', special : ''},
                {id : 'one_datum_three', url : 'http://i2.mifile.cn/a1/pms_1478510064.36397738.jpg?width=150&height=150',title : '小米圈铁耳机Pro', price : '149', amount : '6183人评价',review : '耳机真心不错。上午下单下午送到。快递速度真是快的想不...', special : ' 来自于 858404180 的评价 '},
                {id : 'one_datum_four', url : 'http://i2.mifile.cn/a1/pms_1481269289.59498154.jpg?width=150&height=150',title : '小米移动电源10000mAh高配版', price : '149', amount : '1320人评价',review : '比我想象的要薄要轻', special : ' 来自于 642860758 的评价 '},
                {id : 'one_datum_five', url : 'http://i2.mifile.cn/a1/pms_1482321199.12589253.jpg?width=150&height=150',title : '小米活塞耳机 清新版', price : '29', amount : '1万人评价',review : '', special : ''},
                {id : 'one_datum_six', url : 'http://i2.mifile.cn/a1/pms_1478248721.42297795.jpg?width=150&height=150',title : '小米移动电源5000mAh', price : '59', amount : '1.1万人评价',review : '拆开包装看到的一句祝福！颇受感动，也希望自己可以走向...', special : ' 来自于 吴磊 的评价 '},
                {id : 'one_datum_seven', url : 'http://i2.mifile.cn/a1/T1F5K_BjVv1RXrhCrK.jpg?width=150&height=150',title : '小米移动电源5000mAh', price : '129', amount : '1.8万人评价', review : '小米节礼券立减50，千值万值啊！物流很快，第二天就到...', special : '  来自于 潇逸云 的评价  '}
            ];
            //    耳机音响
            $scope.datum_two =  [
                {id : 'two_datum_one', url : 'http://i1.mifile.cn/a1/pms_1482301662.61336109!220x220.jpg',title : '小米头戴式耳机 轻松版', price : '199', amount : '405人评价', review : '好看漂亮，充电器充电快', special : ' 来自于 见习小爱神 的评价  '},
                {id : 'two_datum_two', url : 'http:////i1.mifile.cn/a1/T1SkV_BCd_1RXrhCrK!220x220.jpg',title : '小米胶囊耳机', price : '69', amount : '',review : '山有木兮木有枝，心悦君兮君不知。米妹妹，哥哥思念你思...', special : ' 来自于 张意 的评价 '},
                {id : 'two_datum_three', url : 'http://i2.mifile.cn/a1/pms_1478510064.36397738.jpg?width=150&height=150',title : '小米圈铁耳机Pro', price : '149', amount : '8749人评价',review : '一直默默的在支持着小米，可是却总是只有机器人客服，客...', special : ' 来自于 江群生 的评价 '},
                {id : 'two_datum_four', url : 'http://i1.mifile.cn/a1/T1LqYgBCWv1RXrhCrK!220x220.jpg',title : '小米随身蓝牙音箱', price : '69', amount : '',review : '送姐姐哒！她说音效超好，外表炫酷，很喜欢，而且 方便...', special : ' 来自于 MR.GUO MARK 的评价 '},
                {id : 'two_datum_five', url : 'http://i1.mifile.cn/a1/T1Tfd_BjAv1RXrhCrK!220x220.jpg',title : '小米小钢炮蓝牙音箱2', price : '129', amount : '',review : '很喜欢，一岁半的女儿拿着它玩的不亦乐乎！', special : ' 来自于 66222902 的评价 '},
                {id : 'two_datum_six', url : 'http://i1.mifile.cn/a1/T1A.A_BKYT1RXrhCrK!220x220.jpg',title : '小米方盒子蓝牙音箱', price : '99', amount : '',review : '平时不怎么留评论的，为小米客服妹纸(汉子？)的神回复...', special : ' 来自于 月落日晓 的评价 '},
                {id : 'two_datum_seven', url : 'http://i1.mifile.cn/a1/pms_1481098202.44798045!220x220.jpg',title : 'ROIDMI音乐蓝牙车充', price : '99', amount : '285人评价', review : '今天刚拿到，马上试用了感觉很好更喜欢。', special : ' 来自于 徐永亮 的评价 '}
            ];
            //  电源
            $scope.datum_three = [
                {id : 'three_datum_one', url : 'http://i3.mifile.cn/a4/T1AcE_Bghv1RXrhCrK.jpg', title : '移动电源5000mAh', price : '49', amount : '', review : '没这么爱过一个品牌，但EMS却是我的噩梦。。', special : ' 来自于 宝宝大。。 的评价 '},
                {id : 'three_datum_two', url : 'http://i1.mifile.cn/a1/T1atV_BQLT1RXrhCrK!220x220.jpg', title : 'ZMI移动电源10000mAh', price : '99', amount : '4062人评价', review : '好看，挑了我喜欢的金色，赞，昨天上午下的单，今天一大...', special : ' 来自于 萍 的评价 '},
                {id : 'three_datum_three', url : 'http://i1.mifile.cn/a1/pms_1481273468.72564539!220x220.jpg', title : '小米移动电源10000mAh高配版', price : '149', amount : '1941人评价', review : '非常喜欢，颜值很高，支持小米', special : ' 来自于 1050675052 的评价 '},
                {id : 'three_datum_four', url : 'http://i1.mifile.cn/a1/pms_1482110626.95581660!220x220.jpg', title : '20000mAh小米移动电源2', price : '149', amount : '5041人评价', review : '刚签收，还没到家被女朋友抢去了，客服你说咋弄？不过了...', special : ' 来自于 生活有激情 的评价 '},
                {id : 'three_datum_five', url : 'http://i1.mifile.cn/a1/pms_1476688190.21955893!220x220.jpg', title : '10000mAh小米移动电源2', price : '79', amount : '', review : '妹子出来调戏一下我呗，单身太久了，看来是病啊？', special : ' 来自于 955379343 的评价 '},
                {id : 'three_datum_six', url : 'http://i3.mifile.cn/a4/T1Ihd_BTCv1RXrhCrK.jpg', title : '小米插线板 5孔位', price : '39', amount : '', review : '外形不错窟窿多可以满足我，不知客服妹子能满足你吗？', special : ' 来自于 多多佳 的评价 '},
                {id : 'three_datum_seven', url : 'http://i1.mifile.cn/a1/pms_1469410847.29693876!220x220.jpg', title : 'USB Type-C充电套装', price : '15', amount : '', review : '', special : ''}
            ];
            //   电池存储卡
            $scope.datum_four = [
                {id : 'four_datum_one', url : 'http://i1.mifile.cn/a1/pms_1476680251.65738257!220x220.jpg', title : '金士顿8GB存储卡（Class4）', price : '24.9', amount : '274人评价', review : '刚入手，还没使用，给老爸买来放到手机里扩充铃声的，耐...', special : ' 来自于 能换糖的男人 的评价 '},
                {id : 'four_datum_two', url : 'http://i1.mifile.cn/a1/T1PQWvBvAv1RXrhCrK!220x220.jpg', title : 'SanDisk 32GB高速存储卡', price : '69.9', amount : '', review : '很好，物流也很快。不过系统的容量与应用的容量显示不一...', special : ' 来自于 血雨断肠红 的评价 '},
                {id : 'four_datum_three', url : 'http://i1.mifile.cn/a1/T1xxVTBghv1RXrhCrK!220x220.jpg', title : '彩虹5号电池（10粒装）', price : '9.9', amount : '', review : '漂亮 逼格高 送姑娘的最佳礼物', special : ' 来自于 戴耀锋 的评价 '},
                {id : 'four_datum_four', url : 'http://i1.mifile.cn/a1/T178EjBjVT1RXrhCrK!220x220.jpg', title : '彩虹7号电池（10粒装）', price : '9.9', amount : '', review : '一直在用彩虹电池，首先因为是小米，因为小米的产品目前...', special : ' 来自于 中国米 的评价 '},
                {id : 'four_datum_five', url : 'http://i1.mifile.cn/a1/T1vFEjBbWT1RXrhCrK!220x220.jpg', title : '小米USB充电器（4口）', price : '69', amount : '', review : '我喜欢的白色，四个插口很方便，超爱，小米我的最爱', special : ' 来自于 涵兮 的评价 '},
                {id : 'four_datum_six', url : 'http://i1.mifile.cn/a1/pms_1463731356.45818748!220x220.jpg', title : '镍氢充电电池套装', price : '88', amount : '', review : '', special : ''},
                {id : 'four_datum_seven', url : 'http://i1.mifile.cn/a1/T142A_BXEv1RXrhCrK!220x220.jpg', title : '小米车载充电器', price : '49', amount : '', review : '国货当自强，小米真的棒！做工，包装，视觉效果，使用效...', special : ' 来自于 小李老师 的评价 '}
            ];


            //   --------  配件  -------
            //   热门
            $scope.parts_one = [
                {id : 'one_parts_one', url : 'http://i2.mifile.cn/a1/T1XybgBjhT1RXrhCrK.jpg?width=150&height=150',title : '  小米手机4c 小米4c 智能唤醒翻盖保护套  ', price : '29', amount : '2.4万人评价', review : '', special : ''},
                {id : 'two_parts_one', url : 'http://i2.mifile.cn/a1/pms_1474430362.70018703.jpg?width=150&height=150',title : '小米自拍杆（线控版）', price : '49', amount : '5270人评价', review : '', special : ''},
                {id : 'three_parts_one', url : 'http://i2.mifile.cn/a1/T1t2K_B4L_1RXrhCrK.jpg?width=150&height=150',title : '  小米手机5 小米5 钢化玻璃贴膜(0.22mm)  ', price : '29', amount : '4.6万人评价', review : '完美贴合，不错不错，官方正品', special : ' 来自于 Mfey2015 的评价 '},
                {id : 'four_parts_one', url : 'http://i2.mifile.cn/a1/pms_1482136277.01722149.jpg?width=150&height=150',title : '  红米4高配版 标准高透贴膜  ', price : '19', amount : '1615人评价', review : '', special : ''},
                {id : 'five_parts_one', url : 'http://i2.mifile.cn/a1/pms_1482136306.7944683.jpg?width=150&height=150',title : '  小米5s 标准高透贴膜  ', price : '19', amount : '3997人评价', review : '', special : ''},
                {id : 'six_parts_one', url : 'http://i2.mifile.cn/a1/T1zL_vByCT1RXrhCrK.jpg?width=150&height=150',title : '  小米随身WIFI  ', price : '19.9', amount : '30.3万人评价', review : '插在我的台式电脑上当网卡使用，网络很稳定，玩CF延迟...', special : ' 来自于 谁抢了我的小侨 的评价 '},
                {id : 'seven_parts_one', url : 'http://i2.mifile.cn/a1/pms_1482136335.88325212.jpg?width=150&height=150',title : '  小米5s Plus 标准高透贴膜  ', price : '19', amount : '2627人评价', review : '', special : ''}
            ];
            //   保护套
            $scope.parts_two = [
                {id : 'one_parts_two', url : 'http://i1.mifile.cn/a1/pms_1478247753.15734216!220x220.jpg',title : '小米Note2 智能翻盖保护套', price : '49', amount : '625人评价', review : '', special : ''},
                {id : 'two_parts_two', url : 'http://i1.mifile.cn/a1/pms_1474888072.78155129!220x220.jpg',title : '小米5s 智能立显点阵式保护套', price : '79', amount : '2353人评价', review : '', special : ''},
                {id : 'three_parts_two', url : 'http://i1.mifile.cn/a1/pms_1478790273.61645973!220x220.jpg',title : '红米Note4 超薄肤感软胶保护套', price : '19', amount : '235人评价', review : '', special : ''},
                {id : 'four_parts_two', url : 'http://i1.mifile.cn/a1/pms_1478582939.22254590!220x220.jpg',title : '红米4标准版 翻盖保护套', price : '49', amount : '468人评价', review : '', special : ''},
                {id : 'five_parts_two', url : 'http://i1.mifile.cn/a1/pms_1478174026.59045943!220x220.jpg',title : '红米4高配版 翻盖保护套', price : '49', amount : '1488人评价', review : '', special : ''},
                {id : 'six_parts_two', url : 'http://i1.mifile.cn/a1/pms_1480580129.24255998!220x220.jpg',title : '小米Note  2 高透软胶保护套', price : '19', amount : '217人评价', review : '', special : ''},
                {id : 'seven_parts_two', url : 'http://i1.mifile.cn/a1/pms_1486980875.1641234!220x220.jpg',title : '红米Note 4X 高透软胶保护套', price : '19', amount : '69人评价', review : '', special : ''}
            ];
            //    贴膜
            $scope.parts_three = [
                {id : 'one_parts_three', url : 'http://i1.mifile.cn/a1/pms_1482136232.14896578!220x220.jpg',title : '红米4标准版 标准高透贴膜', price : '19', amount : '562人评价', review : '自己贴的，完美，希望回家爸妈喜欢', special : ' 来自于 黄清伟 的评价 '},
                {id : 'two_parts_three', url : 'http://i1.mifile.cn/a1/pms_1482136277.01722149!220x220.jpg',title : '红米4高配版 标准高透贴膜', price : '19', amount : '1638人评价', review : '', special : ''},
                {id : 'three_parts_three', url : 'http://i3.mifile.cn/a4/T1cVLjBX_v1RXrhCrK.jpg',title : '小米手机5 极薄防蓝光贴膜', price : '49', amount : '8592人评价', review : '专业贴膜，祖传手艺。天桥上独领风骚', special : ' 来自于 豆芽菜 的评价 '},
                {id : 'four_parts_three', url : 'http://i1.mifile.cn/a1/pms_1482136306.7944683!220x220.jpg',title : '小米5s 标准高透贴膜', price : '19', amount : '3997人评价', review : '', special : ''},
                {id : 'five_parts_three', url : 'http://i1.mifile.cn/a1/pms_1486980756.28482911!220x220.jpg',title : '红米Note 4X 标准高透贴膜', price : '19', amount : '68人评价', review : '', special : ''},
                {id : 'six_parts_three', url : 'http://i1.mifile.cn/a1/T1y7JQBbCT1RXrhCrK!220x220.jpg',title : '小米Max 标准高透贴膜', price : '19', amount : '', review : '说是高透就是高透，贴上贴膜，带领领略高透滴全世界～～', special : '  来自于 148800310 的评价 '},
                {id : 'seven_parts_three', url : 'http://i1.mifile.cn/a1/pms_1469787992.44385373!220x220.jpg',title : '红米Pro 标准高透贴膜', price : '9.9', amount : '2830人评价', review : '小米产品，一如既往的好，信赖小米，支持小米！', special : ' 来自于 康康 的评价'}
            ];
            //     其他配件
            $scope.parts_four = [
                {id : 'one_parts_four', url : 'http://i1.mifile.cn/a1/T1_WhgBb_T1RXrhCrK!220x220.jpg',title : '青米USB快速充电数据线', price : '9.9', amount : '', review : '用起来很方便，摸起来手感很舒服。不知客服妹子可否与我...', special : ' 来自于 折-琴 的评价 '},
                {id : 'two_parts_four', url : 'http://i1.mifile.cn/a1/pms_1482221011.26064844!220x220.jpg',title : '小米指环支架 金色', price : '19', amount : '5620人评价', review : '下单到配货两天（差点申请退款），终于第三天发货了，速...', special : ' 来自于 거짓말 的评价 '},
                {id : 'three_parts_four', url : 'http://i1.mifile.cn/a1/T1WTEvBmKT1RXrhCrK!220x220.jpg',title : '小米蓝牙手柄', price : '99', amount : '', review : '手柄无论内在外在都好看，就像客服mm一样，大爱。', special : ' 来自于 浪子 的评价 '},
                {id : 'four_parts_four', url : 'http://i1.mifile.cn/a1/T11oW_B4dv1RXrhCrK!220x220.jpg',title : '蓝牙语音体感遥控器', price : '99', amount : '3163人评价', review : '到了就体验了一下，玩体感游戏很给力，赞一下', special : ' 来自于 304558709 的评价 '},
                {id : 'five_parts_four', url : 'http://i1.mifile.cn/a1/pms_1478248566.62624407!220x220.jpg',title : '小米便携鼠标', price : '99', amount : '3705人评价', review : '用上以后商务本立刻有了灵气，不再死板了。', special : ' 来自于 小炜 的评价 '},
                {id : 'six_parts_four', url : 'http://i1.mifile.cn/a1/T13y_vBgJT1RXrhCrK!220x220.jpg',title : '小米千兆网线', price : '14.9', amount : '', review : '没有发票是什么意思，以前买东西都有票的', special : ' 来自于 吴晓峰 的评价 '},
                {id : 'seven_parts_four', url : 'http://i1.mifile.cn/a1/T1xLxQBgVT1RXrhCrK!220x220.jpg',title : 'USB Type-C 转接头', price : '5', amount : '', review : '看到客服美女给那么多人评价，我也有点按耐不住购买更多...', special : ' 来自于 海纳百川 的评价 '}
            ];



            //   --------  周边  -------

            //   热门
            $scope.ambitus_one = [
                {id : 'one_ambitus_one', url : 'http://i1.mifile.cn/a1/pms_1479972881.39395516!220x220.jpg',title : '最生活毛巾·青春系列', price : '19.9', amount : '', review : '顺丰快递就是快，12月17号晚上发货，十八号中午十二...', special : ' 来自于 木蓝 的评价 '},
                {id : 'two_ambitus_one', url : 'http://i1.mifile.cn/a1/pms_1486535960.91272690!220x220.jpg',title : '小米简约头层小牛皮钱包', price : '129', amount : '', review : '手感舒适，用50元优惠券买的，实惠！', special : ' 来自于 自強 的评价 '},
                {id : 'three_ambitus_one', url : 'http://i3.mifile.cn/a4/d0fef67b-8f3c-4b5a-af8d-0f588b946f6a',title : '经典连帽休闲卫衣', price : '109', amount : '', review : '很不错的衣服，现在的我衣服也买小米了，这下肿么办。客...', special : ' 来自于 一块钢板的艺术 的评价 '},
                {id : 'four_ambitus_one', url : 'http://i3.mifile.cn/a4/2e1475fd-6afc-4f3c-bca3-ce50c342642c',title : '小米空气层连帽运动卫衣 女款', price : '149', amount : '', review : '质量挺不错！摸起来舒服。看图', special : ' 来自于 593440840 的评价 '},
                {id : 'five_ambitus_one', url : 'http://i1.mifile.cn/a1/pms_1469410489.30412121!220x220.jpg',title : '米家签字笔', price : '14.9', amount : '', review : '大爱，不解释！希望它助我过期末！！！客服妹子你觉得我...', special : ' 来自于 赵峰 的评价 '},
                {id : 'six_ambitus_one', url : 'http://i1.mifile.cn/a1/pms_1479182984.26159750!220x220.jpg',title : '防雾霾口罩', price : '69', amount : '', review : '口罩很棒，密封性还不错（吸气时能完全密封，呼气时左侧...', special : ' 来自于 信念 的评价 '},
                {id : 'seven_ambitus_one', url : 'http://i1.mifile.cn/a1/pms_1481178479.88974286!220x220.jpg',title : '8H多功能护颈枕U1', price : '79', amount : '', review : '很棒，我把膜撕了，客服是我的了', special : ' 来自于 我恒永大 的评价 '}
            ];
            //   服装
            $scope.ambitus_two = [
                {id : 'one_ambitus_two', url : 'http://i3.mifile.cn/a4/bc5ef4c1-69e8-48c3-8eda-eadddc6914c4',title : '小米摇粒绒加厚保暖外套', price : '99', amount : '', review : '这是女款的，喜欢她', special : ' 来自于 1152725108 的评价 '},
                {id : 'two_ambitus_two', url : 'http://i3.mifile.cn/a4/eea5c9e7-ba21-4131-9945-89a296413b6e',title : '小米空气层连帽运动卫衣 男款', price : '149', amount : '', review : '原来一直穿耐克好几百一件都是洗衣机洗。自从有了小米我...', special : ' 来自于 杰克 的评价 '},
                {id : 'three_ambitus_two', url : 'http://i3.mifile.cn/a4/329a5d3f-ad6f-47fc-981e-85e0bd634055',title : '小米摇粒绒加厚保暖外套 女款', price : '99', amount : '', review : '别想象中还要好，一直信赖小米', special : ' 来自于 期待 的评价 '},
                {id : 'four_ambitus_two', url : 'http://i3.mifile.cn/a4/2e1475fd-6afc-4f3c-bca3-ce50c342642c',title : '小米空气层连帽运动卫衣 女款', price : '149', amount : '', review : '质量挺不错！摸起来舒服。看图', special : ' 来自于 593440840 的评价 '},
                {id : 'five_ambitus_two', url : 'http://i1.mifile.cn/a1/pms_1478762755.55733411!220x220.jpg',title : '小米纪念款围巾（去探索）', price : '89', amount : '', review : '珍藏了，因为是纪念版。', special : ' 来自于 we go 的评价 '},
                {id : 'six_ambitus_two', url : 'http://i3.mifile.cn/a4/357bebdd-6e77-4c43-a33c-b8287caace2e',title : '小米短袖T恤 水管工米兔', price : '39', amount : '', review : '客服妹妹，可以撩一下吗？就一下下', special : ' 来自于 JOE 的评价 '},
                {id : 'seven_ambitus_two', url : 'http://i3.mifile.cn/a4/23c8122a-3bf4-4675-abb2-aca349aa1923',title : '小米V领短袖T恤 女款', price : '39', amount : '', review : '很喜欢，穿着很舒服，还想要兰色和白色(*^_^*)', special : ' 来自于 周沫 的评价 '}
            ];
            //    米兔
            $scope.ambitus_three = [
                {id : 'one_ambitus_three', url : 'http://i1.mifile.cn/a1/pms_1470896116.76978423!220x220.jpg',title : '60cm柔软米兔抱枕', price : '129', amount : '678人评价', review : '太带劲了，晚上我要把他衣服都给脱下来', special : ' 来自于 小温123 的评价 '},
                {id : 'two_ambitus_three', url : 'http://i1.mifile.cn/a1/pms_1464943812.60215816!220x220.jpg',title : '超脑米兔钥匙扣', price : '29', amount : '', review : '老大，我买钥匙扣是挂钥匙上的！看照片那么小，买家里发...', special : ' 来自于 周元成 的评价 '},
                {id : 'three_ambitus_three', url : 'http://i1.mifile.cn/a1/pms_1468221391.115311!220x220.jpg',title : '米兔多功能护颈枕', price : '49', amount : '2144人评价', review : '刚拆开是个方形的，顿时感觉被骗了，赶紧看了说明才知道...', special : ' 来自于 一路向前 的评价 '},
                {id : 'four_ambitus_three', url : 'http://i1.mifile.cn/a1/pms_1470619266.15986000!220x220.jpg',title : '小米米兔音箱', price : '99', amount : '1061人评价', review : '', special : ''},
                {id : 'five_ambitus_three', url : 'http://i3.mifile.cn/a4/T1i.YjBbWT1RXrhCrK.jpg',title : '小米短袖T恤 情侣米兔 女款', price : '39', amount : '1840人评价', review : '百分百纯棉，好合身，今年夏天穿它了', special : ' 来自于 厶静厶 的评价 '},
                {id : 'six_ambitus_three', url : 'http://i3.mifile.cn/a4/e8f5a80c-7f57-4f7b-97fc-c446059d2381',title : '小米短袖T恤 水管工米兔', price : '39', amount : '', review : '感觉非常不错，特别是这上边的图案，萌萌哒！', special : ' 来自于 478670150 的评价 '},
                {id : 'seven_ambitus_three', url : 'http://i3.mifile.cn/a4/T1XMD_Bgdv1RXrhCrK.jpg',title : '小米短袖T恤 西游记', price : '39', amount : '8740人评价', review : '', special : ''}
            ];
            //    生活周边
            $scope.ambitus_four = [
                {id : 'one_ambitus_four', url : 'http://i1.mifile.cn/a1/pms_1480477598.47892154!220x220.jpg',title : '米家中性笔专用笔芯', price : '6.9', amount : '2302人评价', review : '非常好', special : ' 来自于 819871558 的评价 '},
                {id : 'two_ambitus_four', url : 'http://i1.mifile.cn/a1/pms_1465724476.99494960!220x220.jpg',title : '花花草草监测仪', price : '49', amount : '', review : '非常喜欢，以后养花有数据支持，在配合经验花会养的更好。', special : ' 来自于 文良 的评价 '},
                {id : 'three_ambitus_four', url : 'http://i3.mifile.cn/a4/5a28d943-ef5d-4920-a89a-7f1bce6c5b35',title : '米家LED随身灯 增强版', price : '19.9', amount : '', review : '等很漂亮，比1带要好看！光也亮！可以和客服妹子约会的...', special : ' 来自于 焦信龙 的评价 '},
                {id : 'four_ambitus_four', url : 'http://i1.mifile.cn/a1/pms_1482737297.53343760!220x220.jpg',title : '防雾霾滤芯（5片装）', price : '39', amount : '', review : '每个独立包装，品质有保障，快递给力，赞！', special : ' 来自于 GC嘿～嘿～嘿 的评价 '},
                {id : 'five_ambitus_four', url : 'http://i1.mifile.cn/a1/pms_1463971828.3961404!220x220.jpg',title : '变形金刚特别版声波', price : '169', amount : '', review : '非常棒的变形金刚，变形设计巧妙，做工精良', special : ' 来自于 比屋 的评价 '},
                {id : 'six_ambitus_four', url : 'http://i3.mifile.cn/a4/T1kFK_BsKv1RXrhCrK.jpg',title : '手机自拍补光灯', price : '49', amount : '2563人评价', review : '差评，不能正常充电！一颗星也不能给啊！客服怎么办？', special : ' 来自于 @似水流☆年♥ 的评价 '},
                {id : 'seven_ambitus_four', url : 'http://i1.mifile.cn/a1/T1eKdgB4xv1RXrhCrK!220x220.jpg',title : '小米电源线收纳盒', price : '49', amount : '', review : '看图就知道', special : ' 来自于 余波 的评价 '}
            ];
            //    箱包
            $scope.ambitus_five = [
                {id : 'one_ambitus_five', url : 'http://i3.mifile.cn/a4/T1RRCjBKJv1RXrhCrK.jpg',title : '90分旅行箱 20寸', price : '299', amount : '', review : '漂亮没得说，very  good   !就是不知道能...', special : ' 来自于 (>^ω^<)喵咪咪 的评价 '},
                {id : 'two_ambitus_five', url : 'http://i3.mifile.cn/a4/T1TvJ_B_Kv1RXrhCrK.jpg',title : '90分旅行箱 24寸', price : '349', amount : '', review : '比我想想的要好看，客服妹子你说呢？', special : ' 来自于 郭俊叶 的评价 '},
                {id : 'three_ambitus_five', url : 'http://i1.mifile.cn/a1/pms_1466665347.53966019!220x220.jpg',title : '小米轻动系百搭多用背包', price : '39', amount : '', review : '大口袋啊！...外形很简约，做工也很细致没有线头 没...', special : ' 来自于 唐志伟 的评价 '},
                {id : 'four_ambitus_five', url : 'http://i3.mifile.cn/a4/T1G9Y_BmCv1RXrhCrK.jpg',title : '90分便携收纳袋', price : '29', amount : '', review : '看似那么小，没想到展开这么大！', special : ' 来自于 神仙下凡Eric 的评价 '},
                {id : 'five_ambitus_five', url : 'http://i3.mifile.cn/a4/6ddc1df6-ce8e-4cb5-a26a-b5ef80f1adf7',title : '小米经典商务双肩包', price : '99', amount : '', review : '加油小米，为国争光！妹子你不要撩我，我是不会被你的美...', special : ' 来自于 1135383328 的评价 '},
                {id : 'six_ambitus_five', url : 'http://i1.mifile.cn/a1/T1a3DvB7hv1RXrhCrK!220x220.jpg',title : '小米极简都市双肩包', price : '149', amount : '', review : '包包不错！感觉有点大！里面好多夹层给力d=(´▽｀)...', special : ' 来自于 倪敏 的评价 '},
                {id : 'seven_ambitus_five', url : 'http://i1.mifile.cn/a1/T1FtKgBvZv1RXrhCrK!220x220.jpg',title : '小米多功能都市休闲胸包', price : '69', amount : '', review : '第二天到货，物流杠杠的。没有缺陷，小米品质杠杠的。杠...', special : ' 来自于 水出一片海 的评价 '}
            ];











        }]);
})(window,angular);































































