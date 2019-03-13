<template>
  <div style="height:100%">
    <div class="loginPage">
      <div class="box">
        <p>Welcome to VueSPA</p>
        <div class="loginBox">
          <el-form :model="formData" :rules="rules" ref="formData" lable-width="100px">
            <el-form-item label="用户名" prop='username'>
              <el-input @keyup.enter.native='submitForm("formData")' style="height:20px" v-model="formData.username" placeholder="username:123"></el-input>
            </el-form-item>
          <el-form-item label="密码" prop='password'>
            <el-input @keyup.enter.native='submitForm("formData")' type="password" v-model="formData.password" placeholder="password:123"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="loginButton" type="primary" @click="submitForm('formData')">Login</el-button>
          </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    let checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    let checkPw = (ruls, value, callback) => {
      if(!value) {
        return callback(new Error('密码不能为空'));
      }
      callback();
    }
    return {
      formData: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: checkName, trigger: "blur" }],
        password: [{ validator: checkPw, trigger: "blur"}]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
/*           axios.post('/login', {username: this.formData.username, password: this.formData.password}).then(res => {
            if(res.data.status){
              this.$router.push('/home')
            } else {
              this.$message(res.data.data.data)
            }
          }) */
          this.$store.dispatch('LOGIN',{username: this.formData.username, password: this.formData.password}).then(data => {
            console.log(data)
            this.$router.push('/home')
          })
          
        }
      })
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.box {
  position: relative;
  top: 40%;
  margin-top: -170px;
}
.loginBox {
  width: 18%;
  margin: 0 auto;
  padding: 2%;
  border-radius: 5px;
  background-color: #fff;
  border: 1px #ccc solid;
}
.loginPage {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  text-align: center;
  font-family: "cursive";
}
.loginPage .box p {
  text-align: center;
  font-size: 26px;
  font-family: "cursive";
  margin-bottom: 1.4%;
  font-weight: bold;
  color: #888;
}
.loginButton {
  width: 100%;
}
</style>
