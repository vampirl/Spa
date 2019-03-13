<template>
  <div class="home">
    <div class="header">
      <div class="left">
        <div class="top">
          <div>
            <img src="../assets/iconfont/xin.png" alt="收藏" class="iconfont">
            <span class="txt">收藏</span>
            <span class="num">301</span>
          </div>
          <div>
            <img src="../assets/iconfont/camera.png" alt="照片" class="iconfont">
            <span class="txt">照片</span>
            <span class="num">802</span>
          </div>
        </div>
        <div class="down">
          <div>
            <img src="../assets/iconfont/cloud-download.png" alt="云数据" class="iconfont">
            <span class="txt">云数据</span>
            <span class="num">30122</span>
          </div>
          <div>
            <img src="../assets/iconfont/mail.png" alt="邮件" class="iconfont">
            <span class="txt">邮件</span>
            <span class="num">102</span>
          </div>
        </div>
      </div>
      <echart-one></echart-one>
    </div>
    <div class="footer1">
      <div class="footerLeft">
        <div class="fresh">
          <p class="p1">建站日志</p>
          <span class="el-icon-refresh"></span>
        </div>
        <p class="p2">2个待完成，一个正在进行中</p>
        <div class="steps">
          <el-steps direction="vertical" space="15%" :active="2">
            <el-step class="" title="更多模块开发中" status="finish"></el-step>
            <el-step title="使用ts重构" status="error"></el-step>
            <el-step title="模块化探索" status="success"></el-step>
            <el-step title="封装Ajax实现跨域请求" status="success"></el-step>
            <el-step title="引入Redux,Fetch" status="success"></el-step>
            <el-step title="引入Less,React-Router(4.x)" status="success"></el-step>
          </el-steps>
        </div>
      </div>
      <div class="footerMiddle">
        <div class="fresh">
          <p class="p1">消息栏</p>
          <span class="el-icon-refresh"></span>
        </div>
        <div class="message">
          <img src="../assets/img/img1.jpg">
          <span class="name">鸣人</span>
          <span class="msg">终于可以打球了</span>
        </div>
        <div class="message">
          <img src="../assets/img/img2.jpg">
          <span class="name">德鲁大叔</span>
          <span class="msg">篮球是我的一切</span>
        </div>
        <div class="message">
          <img src="../assets/img/img3.jpg">
          <span class="name">鸣人</span>
          <span class="msg">终于可以打球了</span>
        </div>
        <div class="message">
          <img src="../assets/img/img4.jpg">
          <span class="name">樱木花道</span>
          <span class="msg">终于可以打球了</span>
        </div>
      </div>
      <div class="footerRight">
        <echart-two></echart-two>
        <span class="el-icon-refresh"></span>
      </div>
    </div>
  </div>
</template>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script>
var echarts = require("echarts");
import echartOne from "../component/echartOne";
import echartTwo from "../component/echartTwo";
export default {
  components: {
    echartOne,
    echartTwo
  },
  mounted() {}
};
</script>
<style>
.home {
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.footer1 {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  margin-left: 10px;
}
.left {
  width: 30%;
  height: 200px;
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  flex-direction: row;
}
.top div {
  position: relative;
  width: 50%;
  height: 95px;
  border: 1px rgb(240, 242, 245) solid;
}
.down {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}
.down div {
  position: relative;
  width: 50%;
  height: 100px;
  border: 1px rgb(240, 242, 245) solid;
}
.iconfont {
  position: absolute;
  margin-top: 25px;
  margin-left: 30px;
}
.txt {
  position: absolute;
  color: #cccccc;
  font-size: 12px;
  margin-left: 70px;
  margin-top: 28px;
}
.num {
  position: absolute;
  font-weight: bold;
  margin-left: 70px;
  margin-top: 49px;
}

.footerLeft {
  width: 30%;
  border: 1px rgb(240, 242, 245) solid;
}
.fresh {
  position: relative;
  display: flex;
  flex-direction: column;
}
.fresh span {
  position: absolute;
  right: 30px;
  top: 20px;
}
.p1 {
  margin-left: 20px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: bold;
}
.p2 {
  margin-left: 20px;
  margin-top: 1px;
  font-size: 12px;
  font-weight: bold;
  color: #cccccc;
}
.steps {
  height: 400px;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 12px;
}
.lei {
  color: #404040;
  font-size: 10px;
}
.footerMiddle {
  width: 30%;
  border: 1px rgb(240, 242, 245) solid;
}
.message {
  position: relative;
  width: 80%;
  height: 60px;
  margin-left: 45px;
  margin-top: 25px;
  border-bottom: 1px rgb(240, 242, 240) solid;
}
.message img {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-top: 5px;
}

.message .msg {
  position: absolute;
  color: #cccccc;
  font-size: 12px;
  left: 60px;
  top: 35px;
}
.message .name {
  position: absolute;
  color: #00bfff;
  font-size: 12px;
  left: 60px;
  margin-top: 7px;
}
.footerRight {
  width: 40%;
  border: 1px rgb(240, 242, 240) solid;
  display: flex;
  flex-direction: row;
  position: relative;
}
.footerRight span{
  position: absolute;
  top:25px;
  right: 30px;
} 
</style>
