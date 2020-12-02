<template>
  <Card class="myinfo" style="width: 50%">
    <div style="text-align: center">
      <img class="person" src="../assets/person.jpg" />
      <Input
        class="input"
        prefix="ios-contact"
        :readonly="flag"
        v-model:value="uid"
      />
      <Input
        class="input"
        prefix="ios-contact"
        :readonly="flag"
        v-model:value="username"
      />
      <Input
        class="input"
        prefix="ios-contact"
        :readonly="flag"
        v-model:value="department"
      />
      <Input
        class="input"
        prefix="ios-contact"
        :readonly="flag"
        v-model:value="phone"
      />
    </div>
    <Button type="primary" @click="changFlag">修改</Button>
    <Button type="success" @click="save">保存</Button>
  </Card>
</template>
<script>
const cat_username = window.sessionStorage.getItem("cat_username");
const cat_uid = window.sessionStorage.getItem("cat_uid");
export default {
  name: "myinfo",
  data() {
    return {
      uid: cat_uid,
      username: cat_username,
      department: "",
      phone: "",
      flag: true,
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$axios
        .get("/user/query", {
          params: {
            uid:this.uid
          },
        })
        .then((res) => {
          (this.department = res.department), (this.phone = res.phone);
        });
    },
    changFlag() {
      this.flag = false;
      console.log("ccc");
    },
    save() {
      this.$axios
        .post("/user/update", {
          uid: this.uid,
          username: this.username,
          department: this.department,
          phone: this.phone,
        })
        .then((res) => {
          if (res == 1) {
            this.$Message.success("保存成功！");
          } else {
            this.$Message.success("保存失败！");
          }
        });
    },
  },
};
</script>
<style>
.myinfo {
  margin: 20px auto;
  text-align: center;
}
.person {
  width: 200px;
}
.input {
  display: block;

  width: 50%;
  margin: 10px auto;
}
Button {
  margin: 10px;
}
</style>