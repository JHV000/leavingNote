<template>
  <div class="container">
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
          <Button @click="handleReset('formValidate')" style="margin-left: 8px"
            >Reset</Button
          >
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      formInline: {
        username: "",
        password: "",
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
          console.log(res);
          if(res==1){
             this.$Message.success("登录成功！");
          }else {
            this.$Message.error("登录失败！");
          }
        });
      // this.$refs[name].validate((valid) => {
      //   if (valid) {
      //     this.$Message.success("Success!");
      //   } else {
      //     this.$Message.error("Fail!");
      //   }
      // });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>
<style>
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
</style>

    

