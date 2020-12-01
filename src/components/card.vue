<template>
<div class="card-part">
<div class="card" v-for="(item,index) in list" v-bind:key="index">
  <img v-if="item.status==1" class="yinzhang" src="../assets/pass.png">
    <Card style="width:350px">
        <p slot="title">
            <Icon type="md-person" />
           <span>{{item.username}}</span>
        </p>
        <a href="#" slot="extra" @click.prevent="change(item.id)">
            <Icon type="ios-loop-strong"></Icon>
            批准
        </a>
        <ul>
            <li>
              <span>工号：</span> {{item.uid}}
            </li>
            <li>
              <span>姓名：</span> {{item.uid}}
            </li>
            <li>
              <span>起始时间：</span></span> {{item.starttime}}
            </li>
            <li>
              <span>结束时间：</span> {{item.endtime}}
            </li>
            <li>
              <span>请假原因：</span> {{item.reason}}
            </li>

        </ul>
    </Card>
    </div>
    </div>
</template>
<script>
export default {
  inject:["reload"],
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios.get("/leave/showAll").then((res) => {
      this.list = res;
    });
  },
  methods: {
    change(id){
      this.$axios.get("/leave/checkLeave",{
        params:{
          id:id
        }
      }).then((res)=>{
        if(res==1){
          this.reload()
          this.$Message.success("审核通过！")
        }else {
          this.$Message.success("审核失败！")
        }
      })
    }
  },
};
</script>
<style>
* {
  list-style: none;
}
.card-part {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card {
  padding: 10px;
  position: relative;
}
.yinzhang {
  position: absolute;
  width: 110px;
  height: 110px;
  bottom: -12px;
  transform: rotate(-36deg);
  right: -19px;
  z-index: 1;
}
</style>