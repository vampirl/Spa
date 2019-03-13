<template>
  <shell>
    <template slot="header" class="header">
      <div class="butGroup">
        <el-button
          type="info"
          size="small"
          icon="el-icon-d-arrow-left"
          circle
          @click="close"
          style="background-color:#404040"
        ></el-button>
        <el-button
          type="info"
          size="small"
          icon="el-icon-d-arrow-right"
          circle
          @click="open"
          style="background-color:#404040"
        ></el-button>
      </div>
      <div class="person">
      <div>
        <img src="../assets/iconfont/quanping.png" alt="全屏" style="cursor:pointer; margin-right:10px;" @click="fullScreen()">
        <el-popover width="50" trigger="hover">
          <el-button type="info" class="quit" @click="logout()">退出</el-button>
          <el-button
          slot="reference"
          type="text"
          size="medium"
          style="margin-top:15px;">
          <img src="../assets/iconfont/touxiang.png" alt="个人中心">
          &nbsp;&nbsp;
          <span style="color:#909399">yuze</span>
          </el-button>
        </el-popover>
      </div>
      </div>
    </template>
    <template slot="aside">
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        background-color="#404040"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
        @select="handleMenuSelected"
        :collapse="isCollapse"
        menu-trigger="click"
      >
        <div class="headPic">
          <img src="../assets/img/cat.jpg" class="pic">
          <span v-if="muzhi" class="text">牧之</span>
        </div>
        <el-menu-item :index="indexes[0]">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="music">
          <template slot="title">
            <i class="el-icon-service"></i>
            <span slot="title">音乐模块</span>
          </template>
          <el-menu-item :index="indexes[1]">音乐系列</el-menu-item>
        </el-submenu>
      </el-menu>
    </template>
    <template slot="main">
      <component :is="currentComponent"></component>
    </template>
  </shell>
</template>
<script type="text/ecmascript-6">
import Shell from "../component/shell";
import Home from "./home";
import Music from "./music";
var echarts = require("echarts");
export default {
  components: {
    Shell,
    Home,
    Music
  },
  data() {
    return {
      series:[],
      isCollapse: true,
      muzhi: false,
      indexes: ["/page/home", "/page/music"],
      components: ["Home", "Music"],
      defaultActive: "/page/home",
      currentComponent: "Home",
      full: false
    };
  },
  created() {
    document.onkeydown = (e) =>{
      let key = window.event.keyCode;
      if(key == 122) {
        e.preventDefault();
        this.fullScreen()
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    open() {
      this.muzhi = true;
      this.isCollapse = false;
      window.onresize = function() {
        this.$store.commit("resizeDiv");
      };
    },
    launchFullScreen(element) {  
        if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }

    },
    cancelFullScreen() {

        if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    },
    fullScreen() {
       let dom = document.getElementsByTagName('body');
       this.full = this.isFullScreen()
      if(!this.full) {
        console.log(1)
        this.launchFullScreen(dom[0])
        this.full = true;
      } else {
        console.log(2)
        this.cancelFullScreen()
        this.full = false;
      } 
      
    },
    isFullScreen(){
      let explorer = window.navigator.userAgent.toLowerCase();
      if(explorer.indexOf('chrome')>0){//chrome
         if (document.body.scrollHeight == window.screen.height) {
              console.log("全屏" + document.body.scrollHeight + ' ' + window.screen.height + ' ' + document.body.scrollWidth + ' ' + window.screen.width);
              return true
          } else {
              console.log("不全屏" + document.body.scrollHeight + ' ' + window.screen.height + ' ' + document.body.scrollWidth + ' ' + window.screen.width);
              return false
          }
      }else{//IE 9+  fireFox
          if (window.outerHeight == screen.height && window.outerWidth == screen.width) {
              console.log("全屏");
              return true
          } else {
              console.log("不全屏");
              return false
          }
      }
    },
    logout() {
      this.$store.dispatch('LOGOUT');
      window.location.reload('/#/')
    },
    close() {
      this.muzhi = false;
      this.isCollapse = true;
    },
    handleMenuSelected(index) {
      this.defaultActive = index;
      this.currentComponent = this.components[this.indexes.indexOf(index)];
    }
  },
  mounted() {
    this.$store.commit('resize');
  }
};
</script>
<style>
.headPic {
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-left: 10px;
  margin-top: 10px;
}
.fullscreen {
  display: flex;
  justify-content: flex-end;
}

.pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 3s;
}
img:hover {
  transform: rotate(360deg);
}
.headPic .text {
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 25px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  min-height: 400px;
}
.el-menu-vertical-demo {
  height: 100%;
}
.butGroup {
  display: block;
  margin: auto 0;
}

.person {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 50px;
}
.quit {
  display: block;
  margin: 0 auto;
}
</style>
