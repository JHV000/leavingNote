<template>
  <div class="process">
    <div class="title">
      <span v-for="(item, index) in columns1">{{ item.title }}</span>
    </div>
    <div class="detail" v-for="(item, index) in result">
      <div>{{ item.id }}</div>
      <div>{{ item.uid }}</div>
      <div>{{ username }}</div>
      <div>{{ item.starttime }}</div>
      <div>{{ item.endtime }}</div>
      <div>{{ item.reason }}</div>
      <div  v-if="item.status==1"><span class="green">通过</span></div>
      <div  v-if="item.status==0"><span class="red">待审</span></div>
      
    </div>
    <!-- <Steps :current="2" size="small">
      <Step title="待审批"></Step>
      <Step title="审批中"></Step>
      <Step title="已通过"></Step>
    </Steps>
    </div> -->
  </div>
</template>
<script>
import global from "@/comm/global";
export default {
  data() {
    return {
      uid: global.uid,
      username: global.username,
      result: [],
      columns1: [
        {
          title: "id",
          key: "id",
        },
        {
          title: "工号",
          key: "uid",
        },
        {
          title: "姓名",
        },
        {
          title: "起始时间",
          key: "starttime",
        },
        {
          title: "终止时间",
          key: "endtime",
        },
        {
          title: "请假原因",
          key: "reason",
        },
        {
          title: "审核状态",
          key: "status",
        },
      ],
    };
  },
  created() {
    this.$axios
      .get("/leave/queryAll", {
        params: { uid: this.uid },
      })
      .then((res) => {
        console.log(res);
        this.result = res;
      });
  },
};
</script>
<style>
.title span {
  /* width: 80px; */
  display: inline-block;
  padding: 10px 53px;
  font-weight: 700;
  /* margin: 0 50px; */
}
.title {
  background-color: #f8f8f9;
    width: 94%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}
.detail {
  display: flex;
  width: 85%;
  justify-content: space-between;
  margin: 20px auto;
  position: relative;
}
.detail::after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #e1e1e1;
  position: absolute;
  bottom: -8px;
}
.detail div {
  width:90px;
  padding: 0 20px;
}

.green {
  display: inline-block;
  background-color: #19be6b;
  vertical-align: 4px;
  padding: 10px;
  color: #ffffff;
  border-radius: 10px;
}
.red {
  
  display: inline-block;
  background-color: #ff9900;
  vertical-align: 4px;
  padding: 10px;
  color: #ffffff;
  border-radius: 10px;

}
</style>