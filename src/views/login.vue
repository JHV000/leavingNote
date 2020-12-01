<template>
  <div class="container">
    <div class="nav">
      <router-link to="/">Login</router-link>
      <span> / </span>
      <router-link to="/register">Register</router-link>
    </div>
    <div class="form-part">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
          <Input
            type="text"
            v-model="formInline.username"
            placeholder="Username"
          >
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="Password"
          >
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <br />
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')"
            >Signin</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import global from '@/comm/global'
export default {
  name: "login",
  data() {
    return {
      formInline: {
        username: "",
        password: "",
        path:''
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$axios
        .post("/user/queryUser", {
          username: this.formInline.username,
          password: this.formInline.password,
        })
        .then((res) => {
          // console.log(res);
          if (res != null) {
            this.$Message.success("登录成功！");
            if(this.formInline.username=="admin"){
              this.formInline.path = "/manage"
            }else {
              this.formInline.path = "/leave"
            }
            this.$router.push({
              path:this.formInline.path,
             
            });
            global.username = this.formInline.username,
            global.uid = res
          } else {
            this.$Message.error("登录失败！");
          }
        });
    },
  },
};
</script>
<style>
.container {
  background-color: #515a6e;
  /* color: #2c3e50; */
  height: 300px;
  text-align: center;
}
.form-part {
  height: 300px;
  border: 1px solid gray;
  width: 30%;
  border-radius: 10px;
  background-color: #fff;
  margin: 20px auto;
  position: absolute;
  left: 0px;
  right: 0px;
  padding: 75px 5px 0px 5px;
}
.nav {
  text-align: center;
  color: #000; 
  padding-top: 50px;
}
.nav a {
  color: #000;
  font-size: 20px;
}
.nav a:hover {
  text-decoration: underline;
  color: #000;
}
.nav a.router-link-exact-active {
    color: white;
  }
</style>

    

