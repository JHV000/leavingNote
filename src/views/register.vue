<template>
  <div class="container">
    <div class="nav">
      <router-link to="/">Login</router-link>
      <span> / </span>
      <router-link to="/register">Register</router-link>
    </div>
    <div class="form-part-r">
      <Form ref="formCustom" :model="formCustom"  inline>
        <FormItem prop="uid">
          <Input type="text" v-model="formCustom.uid" placeholder="UserID">
            
            <Icon type="ios-ribbon-outline" slot="prepend" />
          </Input>
        </FormItem>

        <FormItem prop="username">
          <Input type="text" v-model="formCustom.username" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>

        <FormItem prop="password">
          <Input
            type="password"
            v-model="formCustom.password"
            placeholder="Password"
          >
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>

     
        <FormItem prop="phone">
          <Input type="text" v-model="formCustom.phone" placeholder="Phone">
            
            <Icon type="ios-phone-portrait" slot="prepend" />
          </Input>
        </FormItem>

        <br />
        <FormItem prop="sex">
          <RadioGroup v-model="formCustom.sex">
            <Radio label="男">男</Radio>
            <Radio label="女">女</Radio>
          </RadioGroup>
        </FormItem>
        <br />
        <FormItem prop="department">
          <Select
            v-model="formCustom.department"
            placeholder="Select your department"
          >
            <Option value="程序部">程序部</Option>
            <Option value="综合部">综合部</Option>
            <Option value="闪客部">闪客部</Option>
            <Option value="媒体中心">媒体中心</Option>
            <Option value="摄影小组">摄影小组</Option>
          </Select>
        </FormItem>

        <br />
        <FormItem>
          <Button type="primary" @click="handleSubmit('formCustom')"
            >Submit</Button
          >
          <Button @click="handleReset('formCustom')" style="margin-left: 8px"
            >Reset</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {

    return {
      formCustom: {
        uid: "",
        username: "",
        password: "",
        sex: "",
        department: "",
        phone: "",
      },
     
    };
  },
  methods: {
    handleSubmit(name) {
      this.$axios.post("/user/addUser",this.formCustom)
      .then((res)=>{
        if(res==1){
          this.$Message.success("注册成功！")
        }else {
          this.$Message.error("注册失败！");
        }
      })

     
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
<style>
.form-part-r {
  height: 80%;
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
</style>