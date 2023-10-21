<template>

  <div class="home">
   <div class="area1">
  <div class="tu1" v-show="ewm1" >
    <img src="https://img.zcool.cn/community/01f55159f13f7da801216a4b4736bf.gif" style="height: 100%;width: 100%; margin-top: 20%;" alt="">
  
  </div>
<div class="info" v-show="infom" style=" box-shadow: 12px 12px 2px 1px rgba(215, 215, 227, 0.2);">
 <div class="infos">姓名 ： {{ this.name }}</div>
<div class="infos"> QQ   ： {{ this.qq }}</div>
<div class="infos">学号  ： {{ this.id }}</div>
<div class="infos">成绩  ： {{ this.ex }}</div>

</div>
</div>
<div class="forma">
  <el-form
    ref="ruleFormRef"
    
    status-icon
    label-width="120px"
    class="demo-ruleForm"
  >
 
  <fieldset   style=" border: solid 1px #dcdfe6;">  
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
    
    <el-form-item class="bu">
      <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple" />
      </el-col>
    <el-col :span="7">
      <el-button  style="height: 45px;" type="primary" @click="check"
        >签退</el-button
      ><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    
   
    
      
  </el-row>
      
    
    </el-form-item>
  </fieldset> 
  </el-form>
  </div>
  
<el-dialog v-model="sure"  width="30%">

<div style="margin-left:  40% ; margin-bottom: 40px;font-size: 25px; ">信息错误</div>

<el-button @click="closes" style=" margin-left:  40% ; width: 100px ; height: 60px; ">确定</el-button>
</el-dialog>
  </div>
</template>

<script>
import axios from "axios"

// @ is an alias to /src


export default {
  name: 'SignOut',
data(){
  return{
   nunbera:"",
     name:"",
      qq:"",
      cid:"",
     
      ex:"",
      number:"",
      id:"",
      infom:false,
      sure:false,
      ewm1:true,
  }
},
mounted(){
  this.cid= localStorage.getItem("cid");
},
  methods:{
    closes(){
      this.sure=false;
    },
    check(){
      axios.get("http://101.35.238.12:5000/student-info",
    
    { params:{
       stu_id:parseInt (this.number)
    }
    }
     
   )
    .then(res =>{
      if(res.data=="不存在此用户"){
        this.infom=false;
        this.sure=true;
        this.ewm1=true;
      }
      else{
      this.id=res.data.studentId,
      this.name=res.data.name,
      this.qq=res.data.qq
      axios.get("http://101.35.238.12:5000/score",
      {
        params:{
      stu_id:parseInt (this.number),
      exam:this.cid
        }
    
  })
    .then(res =>{
      console.log(res.data);
      if(res.data==-1){
        this.infom=false;
        this.sure=true;
        this.ewm1=true;
      }
      else{
        this.ex=res.data
        this.infom=true;
        this.ewm1=false;
      }
    })
      
      }
    
     
    })

    
  }



  }
}
</script>
<style>
.infos{
  font-size: 24px;
  height: 50px;
  margin-top: 66px;
  margin-left: 20px;
  border-bottom: solid 1px #dcdfe6;
}
.area1{
  position: absolute;
  height: 400px;
  width: 400px;
 /*  background-color: red; */
  top:21%;
  left: 28%;
}
.area1{
  position: absolute;
  height: 400px;
  width: 400px;
 /*  background-color: red; */
  top:21%;
  left: 28%;
}
</style>
