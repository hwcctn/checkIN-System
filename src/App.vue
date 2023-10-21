<template>
  <div class="app">
    <div class="common-layout">
    <el-container>

      <el-aside  >
        <nav>
    <el-row  class="tac" style="width: 100%;">
  <el-col >

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      >
      
        <el-menu-item index="1">
          <router-link to="/sginIn" style="width: 100%;  text-decoration: none; ">
          <el-icon><Right /></el-icon>
          <span>签到</span>
        </router-link> 
        </el-menu-item>
    
        <el-menu-item index="2" >
          <router-link to="/sginOut" style="width: 100%; text-decoration: none;">
            
          <el-icon><Back /></el-icon>
        <span slot="title">
         签退
        </span>
      
      </router-link>
      </el-menu-item>
   
    </el-menu>
  </el-col>
</el-row>
  </nav>
      </el-aside>
      <el-container>
        <el-header style="border-bottom: solid 1px #e3dce6;"></el-header>
        <div style="width: 300px; overflow: hidden;">
        <img class="turn" src="../public/img/icon.4349aadb52d6b36308ae.png" style="width: 400px; position:relative ;left: -200px; top: -200px;"  alt="">
        </div>
        <el-main class="contain">
          <router-view/>
        </el-main>
        <img src="" alt="">
      </el-container>
    </el-container>
  </div>
</div>

</template>

<style lang='less'>
.app{
  height: 100vh;
 
}

.el-aside{
  height: 100vh;
  border-right: solid 1px #dcdfe6;

}
/* .el-menu-item{
  width: 180px;
} */
.el-col{
  height: 100%;
}
.el-menu {
  width: 100%;
}
.el-menu-item {
 text-align: center;
 font-size: 30px;
 margin-top: 20px;
}
.el-menu-item span{
  font-size: 24px;

}
.el-row{
  width: 100%;
}

.clearfix::after{
content:'';
display:block;
clear:both;
/*为了兼容性可增加一下代码*/
height: 0;
visibility:hidden;
}
.turn{
  animation: turn 5s linear infinite;
}
@keyframes turn {
    0% {
        transform: rotate(0deg);
    }

    20% {
        transform: rotate(72deg);
    }

    40% {
        transform: rotate(144deg);
    }

    60% {
        transform: rotate(216deg);
    }

    80% {
        transform: rotate(288deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

</style>
