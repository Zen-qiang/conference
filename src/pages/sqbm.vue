<template>
    <div class="sqbm_container">
        <!-- 1.详细信息跳转 -->
        <div class="first" @click="$router.push({'name': 'Details'})"> 
            <p>adidas春季魅&黑系列上海订货会</p>
            <span></span>
        </div>

        <ul>
            <li>
                <span class="hui">报名信息</span>
                <span><img src="../assets/images/jia.png" alt=""></span>
                <!-- 2.代报名跳转 -->
                <span @click="$router.push({'name': 'Dbm'})">添加代报名</span>
            </li>
            <li>
                <span>经销商</span>
                <span>南通鸿祥贸易有限公司</span>
            </li>
            <li>
                <span>姓名</span>
                <span>柳清风</span>
            </li>
            <li>
                <span>照片</span>
                <span class="hui">将用于证件打印</span>
                <span><img src="../assets/images/camera.png" alt=""></span>
            </li>
            <li>
                <span>手机</span>
                <span class="hui">15026818561</span>
            </li>
            <li>
                <span>身份证</span>
                <span>310115199119267415</span>
            </li>
            <li>
                <span>性别</span>
                <span>男 <img src="../assets/images/nan.png" alt=""></span>
                <span><img src="../assets/images/jiantou.png" alt=""></span>
            </li>
        </ul>
        <!-- 1.酒店信息跳转 -->
        <ul @click="$router.push({'name': 'Zsgl'})">
            <li>
                <span class="hui">酒店信息</span>
                <span>选择</span>
                <span><img src="../assets/images/jiantou.png" alt=""></span>
            </li>
            <li>
                <span>酒店名</span>
                <span>上海四季酒店陆家嘴店</span>
            </li>
            <li>
                <span>房间类型</span>
                <span>商务标间</span>
            </li>
            <li>
                <span>房间序号</span>
                <span>310</span>
            </li>
        </ul>

        <ul>
            <li>
                <span class="hui">代报名成员</span>
                <span class="hui">2</span>
            </li>
            <li>
                <div class="close"><img src="../assets/images/cha.png" alt=""></div>
                <div class="box">
                  <span><img src="../assets/images/headpic2.jpg" alt=""></span>
                  <span>柳清风</span>
                  <span>男 <img src="../assets/images/nan.png" alt=""></span>
                  <span>代</span>
                  <span><img src="../assets/images/write.png" alt=""></span> 

                  <div class="text">
                    <p>手机 ：15026818561</p>
                    <P>身份证 ：310115188119247615</P>
                    <p>酒店 ：上海四级酒店</p>
                    <P>房间类型 ：商务标房</P>
                    <p>房间序号 ： 314</p> 
                  </div>
                </div>
            </li>
            <li>
                <div class="close"><img src="../assets/images/cha.png" alt=""></div>
                <div class="box">
                  <span><img src="../assets/images/headpic3.jpg" alt=""></span>
                  <span>陶丹凤</span>
                  <span>女 <img src="../assets/images/nv.png" alt=""></span>
                  <span>代</span>
                  <span><img src="../assets/images/write.png" alt=""></span> 
                  
                  <div class="text">
                     <p>手机 ：15026818561</p>
                     <P>身份证 ：31011518726122715</P>
                     <p>酒店 ：上海四级酒店</p>
                     <P>房间类型 ：商务标房</P>
                     <p>房间序号 ： 315</p> 
                  </div>
                    
                </div>
            </li>
        </ul>
         <!-- 4.报名成功跳转 -->
        <p class="apply" @click="$router.push({'name': 'Bmcg'})">提交报名</p>
    </div>
</template>

<script>

</script>

<style lang="sass" scoped>
@import "../assets/css/sqbm.scss";
</style>

