<template class="centain">
  <div>
<!--   <div class="tu1">
  <img  class="img1" src="../../public/img/icon.4349aadb52d6b36308ae.png" alt="">
</div > -->
<div class="area1">
  <div class="tu1" v-show="ewm1" >
    <img src="https://img.zcool.cn/community/01f55159f13f7da801216a4b4736bf.gif" style="height: 100%;width: 100%; margin-top: 30%;" alt="">
  </div>
<div class="tu2" v-show="ewm2" >
<img :src=" codeImg" style="width: 100% ;height: 100%;"  >
</div>
<div class="info" v-show="infom" style=" box-shadow: 12px 12px 2px 1px rgba(215, 215, 227, 0.2);" >
 <div class="infos">姓名 ： {{ this.name }}</div>
<div class="infos"> QQ   ： {{ this.qq }}</div>
<div class="infos">学号  ： {{ this.nunbera }}</div>
</div>
</div>

<div class="forma">
  <el-form
    ref="ruleFormRef"
    
    status-icon
    label-width="120px"
    class="demo-ruleForm"
  >
 
  <fieldset   style=" border: solid 1px #e3dce6;">  
    <el-form-item class="tt" label="学号"  prop="number">
      <el-input  style="font-size: 25px;" v-model="number" autocomplete="off"  @keyup.enter="check"/>
    </el-form-item>

    <el-form-item class="tt" label="比赛" prop="id">
      <el-input
      style="font-size: 25px;"
      v-model="cid" 
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item class="tt" label="时间" prop="time">
      <el-input   style=" font-size: 25px;" v-model="time" />
      
    </el-form-item>
    <el-form-item class="bu">
      <el-row :gutter="20">
    <el-col :span="3"><div class="grid-content ep-bg-purple" />
      </el-col>
    <el-col :span="7">
      <el-button  style="height: 45px;" type="primary" @click="signIn"
        >签到</el-button
      ><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="3"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="7"><div class="grid-content ep-bg-purple" />
    <el-button style="height: 45px;"  @click="check" >校验</el-button></el-col>
    
      
  </el-row>
      
    
    </el-form-item>
  </fieldset> 
  </el-form>
</div>

</div>

<el-dialog v-model="sure"  width="30%">

<div style="margin-left:  30% ; margin-bottom: 40px;font-size: 25px; ">用户信息错误,不存在</div>

<el-button @click="closes" style=" margin-left:  40% ; width: 100px ; height: 60px; ">确定</el-button>
</el-dialog>

</template>
<script>
import axios from "axios"
export default {
  
  name: 'SignIn',
  data(){
    return{
      number:"",
      cid:"",
      time:"",
      codeImg:"",
      infom:false,
      ewm1:true,
      ewm2:false,
      nunbera:"",
      name:"",
      qq:"",
      sure:false
    }
  },
  
  
  methods:{
    closes(){
      this.sure=false;
    },
    assign(){
     

    if(localStorage.getItem("cid")!=null)
      this.cid= localStorage.getItem("cid");
   
    if(localStorage.getItem("time")!=null)
      this.time= localStorage.getItem("time");
    },
    signIn(){
      
      localStorage.setItem("cid",this.cid);
      localStorage.setItem("time",this.time);
      if(this.number!=""&&this.time!=""&&this.cid!=""){
      axios.post("http://101.35.238.12:5000/register",
     {
    student_id: parseInt (this.number),
    exam: parseInt (this.cid),
    time:this.time
    },
    {
    headers: {
      'Content-Type':'application/json'
    },
    responseType:'blob',
    }
  
      )
      .then(res => {
        console.log(res.data);
        if(res.data.size==2){
          this.ewm2=false;
          this.infom=false;
          this.sure=true;
          this.ewm1=true;
            
        }
        else{
         this.codeImg=window.URL.createObjectURL(res.data);
         this.ewm2=true;
        this.infom=false;
        this.ewm1=false;
        }
      })
      
   
    }
    else{
      this.ewm1=true;
      alert("数据不能为空")
    }
  },
  check(){
    axios.get("http://101.35.238.12:5000/student-info",
    
   { params:{
      stu_id:parseInt (this.number)
   }
   }
    
  )
    .then(res =>{
      console.log(res.data)
      if(res.data=="不存在此用户"){
        this.ewm2=false;
        this.infom=false;
        this.sure=true;
        this.ewm1=true;
      }
      else{
      this.nunbera=res.data.studentId,
      
      this.name=res.data.name,
      this.qq=res.data.qq,
      this.infom=true,
      this.ewm2=false
      this.ewm1=false
      console.log(res.data);
     
    }
  })
    
  }
  },
  mounted(){
   
    this.assign();
  },
}

</script>
<style lang="less">

.demo-ruleForm{
position: absolute;
 height: 32%;
  width: 30%;
  float: right;
 top:25%;
 left: 60%;

  
}
.el-input{
  height: 50px;
 
}
.el-form .el-form-item{
 
  padding-top: 5%;
  text-align: center;

 
}
.el-row{
  width: 120%;
  height: 120%;
 
}
.el-button{
 width: 120%;
  height: 150%;
}
.img1{
  height: 50%;
  width: 25%;
  float: right;
}
.clearfix::after{
content:'';
display:block;
clear:both;
/*为了兼容性可增加一下代码*/
height: 0;
visibility:hidden;
}

.el-form-item {

  margin-right: 10%;
}
.centain{
  width: 1200px;
  margin: 0 auto;
}
.area1{
  position: absolute;
  height: 400px;
  width: 400px;
 /*  background-color: red; */
  top:21%;
  left: 28%;
}
.tu{
 
  height: 100%;
  width: 100%;

  
}

.tt .el-form-item__label {
  font-size: 20px;
  line-height: 50px;
  
}
.infos{
  font-size: 24px;
  height: 50px;
  margin-top: 66px;
  margin-left: 20px;
  border-bottom: solid 1px #dcdfe6;
}

</style>



